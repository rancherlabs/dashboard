describe('connection with Websocket', { tags: ['@setup'] }, () => {
  it('should establish a WebSocket connection', () => {
    const CATTLE_TEST_URL = '';
    const NAMESPACE = '';
    const POD_NAME = '';
    const CONTAINER_NAME = '';
    const commandSend = 'ls';
    const BEARER_TOKEN = '';

    cy.setupWebSocket(CATTLE_TEST_URL, NAMESPACE, POD_NAME, CONTAINER_NAME, commandSend, BEARER_TOKEN).then((messages) => {
      if (messages.length > 0) {
        // #Assert we have this folder inside the pod shell.
        expect(messages[2]).to.include('bin');
      }
    });
  });
});
