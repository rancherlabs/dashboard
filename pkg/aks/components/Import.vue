<script lang="ts">
import { defineComponent } from 'vue';
import { _CREATE } from '@shell/config/query-params';

export default defineComponent({
  name: 'AKSImport',

  emits: ['update:cluster'],

  props: {
    mode: {
      type:    String,
      default: _CREATE
    },

    // TODO nb id of cluster to import...?
    cluster: {
      type:    String,
      default: ''
    },
  }
});

</script>

<template><div>wow_its_fucking_nothing.jpeg</div></template>
