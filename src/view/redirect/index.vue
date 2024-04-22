<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";

const { params, query } = useRoute();
const { path } = params;

const Router = useRouter();
Router.replace({ path: "/" + path, query });
</script>

<template>
  <div></div>
</template>
