/* eslint-disable no-console */
import { defineConfig } from 'cypress';
import { removeDirectory } from 'cypress-delete-downloads-folder';
import { getSpecPattern } from '@/scripts/cypress';
import * as ws from 'ws';
import * as https from 'https';

// Required for env vars to be available in cypress
require('dotenv').config();

/**
 * VARIABLES
 */
const hasCoverage = (process.env.TEST_INSTRUMENT === 'true') || false; // Add coverage if instrumented
const testDirs = ['priority', 'components', 'setup', 'pages', 'navigation', 'global-ui', 'features', 'extensions'];
const skipSetup = process.env.TEST_SKIP?.includes('setup');
const baseUrl = (process.env.TEST_BASE_URL || 'https://localhost:8005').replace(/\/$/, '');
const DEFAULT_USERNAME = 'admin';
const username = process.env.TEST_USERNAME || DEFAULT_USERNAME;
const apiUrl = process.env.API || (baseUrl.endsWith('/dashboard') ? baseUrl.split('/').slice(0, -1).join('/') : baseUrl);

/**
 * LOGS:
 * Summary of the environment variables that we have detected (or are going ot use)
 * We won't show any passwords
 */
console.log('E2E Test Configuration');
console.log('');
console.log(`    Username: ${ username }`);

if (!process.env.CATTLE_BOOTSTRAP_PASSWORD && !process.env.TEST_PASSWORD) {
  console.log(' ❌ You must provide either CATTLE_BOOTSTRAP_PASSWORD or TEST_PASSWORD');
}
if (process.env.CATTLE_BOOTSTRAP_PASSWORD && process.env.TEST_PASSWORD) {
  console.log(' ❗ If both CATTLE_BOOTSTRAP_PASSWORD and TEST_PASSWORD are provided, the first will be used');
}
if (!skipSetup && !process.env.CATTLE_BOOTSTRAP_PASSWORD) {
  console.log(' ❌ You must provide CATTLE_BOOTSTRAP_PASSWORD when running setup tests');
}
if (skipSetup && !process.env.TEST_PASSWORD) {
  console.log(' ❌ You must provide TEST_PASSWORD when running the tests without the setup tests');
}

console.log(`    Setup tests will ${ skipSetup ? 'NOT' : '' } be run`);
console.log(`    Dashboard URL: ${ baseUrl }`);
console.log(`    Rancher API URL: ${ apiUrl }`);

// Check API - sometimes in dev, you might have API set to a different system to the base url - this won't work
// as the login cookie will be for the base url and any API requests will fail as not authenticated
if (apiUrl && !baseUrl.startsWith(apiUrl)) {
  console.log('\n ❗ API variable is different to TEST_BASE_URL - tests may fail due to authentication issues');
}

console.log('');

/**
 * CONFIGURATION
 */
export default defineConfig({
  projectId:             process.env.TEST_PROJECT_ID,
  defaultCommandTimeout: process.env.TEST_TIMEOUT ? +process.env.TEST_TIMEOUT : 10000,
  trashAssetsBeforeRuns: true,
  chromeWebSecurity:     false,
  retries:               {
    runMode:  2,
    openMode: 0
  },
  env: {
    grepFilterSpecs:  true,
    grepOmitFiltered: true,
    baseUrl,
    coverage:         hasCoverage,
    codeCoverage:     {
      exclude: [
        'cypress/**/*.*',
        '**/__tests__/**/*.*',
        '**/__mocks__/**/*.*',
        '**/shell/scripts/**/*.*',
        'docusaurus/**/*.*',
        'stories/**/*.*',
        'drone/**/*.*',
      ],
      include: [
        'shell/**/*.{vue,ts,js}',
        'pkg/rancher-components/src/components/**/*.{vue,ts,js}',
      ]
    },
    api:                 apiUrl,
    username,
    password:            process.env.CATTLE_BOOTSTRAP_PASSWORD || process.env.TEST_PASSWORD,
    bootstrapPassword:   process.env.CATTLE_BOOTSTRAP_PASSWORD,
    grepTags:            process.env.GREP_TAGS,
    // the below env vars are only available to tests that run in Jenkins
    awsAccessKey:        process.env.AWS_ACCESS_KEY_ID,
    awsSecretKey:        process.env.AWS_SECRET_ACCESS_KEY,
    azureSubscriptionId: process.env.AZURE_AKS_SUBSCRIPTION_ID,
    azureClientId:       process.env.AZURE_CLIENT_ID,
    azureClientSecret:   process.env.AZURE_CLIENT_SECRET,
    customNodeIp:        process.env.CUSTOM_NODE_IP,
    customNodeKey:       process.env.CUSTOM_NODE_KEY
  },
  e2e: {
    fixturesFolder: 'cypress/e2e/blueprints',
    setupNodeEvents(on, config) {
      // For more info: https://docs.cypress.io/guides/tooling/code-coverage
      require('@cypress/code-coverage/task')(on, config);
      require('@cypress/grep/src/plugin')(config);
      // For more info: https://www.npmjs.com/package/cypress-delete-downloads-folder
      on('task', { removeDirectory });
      on('task', {
        setupWebSocket(options) {
          return new Promise((resolve, reject) => {
            const {
              CATTLE_TEST_URL,
              NAMESPACE,
              POD_NAME,
              CONTAINER_NAME,
              commandSend,
              BEARER_TOKEN,
            } = options;

            const commands = ['/bin/sh', '-c', `TERM=xterm-256color; export TERM; ${ commandSend }`];
            const url = buildExecUrl(CATTLE_TEST_URL, NAMESPACE, POD_NAME, CONTAINER_NAME, commands);

            const agent = new https.Agent({ rejectUnauthorized: false });
            const wsClient = new ws.WebSocket(url, 'base64.channel.k8s.io', {
              headers: {
                Authorization: `Bearer ${ BEARER_TOKEN }`,
                Origin:        CATTLE_TEST_URL,
                'User-Agent':  'Mozilla/5.0',
                Connection:    'Upgrade',
                Upgrade:       'websocket',
              },
              agent,
              perMessageDeflate: false,
            });

            const messages: any[] = [];

            wsClient.on('open', () => {
              console.log('Connection success');
            });

            wsClient.on('message', (data: any) => {
              const decoded = b64decode(data);

              messages.push(decoded);
            });

            wsClient.on('close', () => {
              resolve(messages);
            });

            wsClient.on('error', (error: any) => {
              reject(new Error(`WebSocket error: ${ error.message }`));
            });
          });
        },
      });

      return config;
    },
    experimentalSessionAndOrigin: true,
    specPattern:                  getSpecPattern(testDirs, process.env),
    baseUrl
  },
  videoCompression:    15,
  videoUploadOnPasses: false,
});

function b64decode(s: any) {
  return Buffer.from(s.slice(1).toString('utf-8'), 'base64').toString('utf-8');
}

function buildExecUrl(baseUrl: string, namespace: string, podName: string, containerName: string, commands: any[]) {
  const urlBase = `${ baseUrl }/api/v1/namespaces/${ namespace }/pods/${ podName }/exec`;
  const params = new URLSearchParams({
    container: containerName,
    stdout:    '1',
    stdin:     '1',
    stderr:    '1',
    tty:       '1',
  });

  commands.forEach((command: any) => {
    params.append('command', command);
  });

  return `${ urlBase }?${ params.toString() }`;
}
