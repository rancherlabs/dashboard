#!/bin/bash
set -eo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
BASE_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
CREATOR_WORKFLOWS_DIR="$BASE_DIR/creators/extension/app/files/.github/workflows"
WORKFLOW_BRANCH="$1"

generate_proper_charts() {
  cat <<EOF
name: Build and Release Extension Charts

on:
  workflow_dispatch:
  release:  
    types: [released]

defaults:
  run:
    shell: bash
    working-directory: ./

jobs:
  build-extension-charts:
    uses: rancher/dashboard/.github/workflows/build-extension-charts.yml@$WORKFLOW_BRANCH
    permissions:
      actions: write
      contents: write
      deployments: write
      pages: write
    with:
      target_branch: gh-pages
      tagged_release: \${{ github.ref_name }}
EOF
}

generate_proper_catalog() {
  cat <<EOF
name: Build and Release Extension Catalog

on:
  workflow_dispatch:
  release:
    types: [released]

defaults:
  run:
    shell: bash
    working-directory: ./

jobs:
  build-extension-catalog:
    uses: rancher/dashboard/.github/workflows/build-extension-catalog.yml@$WORKFLOW_BRANCH
    permissions:
      actions: write
      contents: read
      packages: write
    with:
      registry_target: ghcr.io
      registry_user: \${{ github.actor }}
      tagged_release: \${{ github.ref_name }}
    secrets: 
      registry_token: \${{ secrets.GITHUB_TOKEN }}
EOF
}

compare_files() {
  local expected="$1"
  local actual_file="$2"
  local description="$3"

  if ! diff <(echo "$expected") "$actual_file" >/dev/null; then
    echo "::error::$description validation failed for branch $WORKFLOW_BRANCH"
    exit 1
  fi
}

main() {
  charts_expected=$(generate_proper_charts)
  catalog_expected=$(generate_proper_catalog)

  compare_files "$charts_expected" \
    "$CREATOR_WORKFLOWS_DIR/build-extension-charts.yml" \
    "build-extension-charts workflow"

  compare_files "$catalog_expected" \
    "$CREATOR_WORKFLOWS_DIR/build-extension-catalog.yml" \
    "build-extension-catalog workflow"

  echo "All workflows validated successfully for $WORKFLOW_BRANCH"
}

main