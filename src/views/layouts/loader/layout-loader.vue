<script lang="ts" setup>
import EmptyLayout from "../empty-layout.vue";
import { useHead } from "@vueuse/head";
import { watch, ref, markRaw, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageMeta = ref<any>(route.meta);

let layout = ref();

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout) => {
    try {
      const component =
        metaLayout && (await import(/* @vite-ignore */ `../${metaLayout}.vue`));
      layout.value = markRaw(component?.default || EmptyLayout);
    } catch (e) {
      layout.value = markRaw(EmptyLayout);
    }
  },
  { immediate: true }
);
watch(
  () => route.name,
  async (routeName) => {
    if (routeName) {
      pageMeta.value = route.meta;
    }
  },
  { immediate: true }
);
useHead({
  title: computed(() => pageMeta.value.name),
  meta: [
    {
      name: "description",
      hid: "description",
      content: computed(() => pageMeta.value.description),
    },
    {
      name: "og:title",
      hid: "og:title",
      content: computed(() => pageMeta.value.name),
    },
    {
      name: "og:type",
      hid: "og:type",
      content: "website",
    },
    {
      name: "og:url", // TODO: get this from .env
      hid: "og:url",
      content: "url",
    },
    {
      name: "og:image",
      hid: "og:image",
      content: computed(() => pageMeta.value.name), // TODO: get this from assets
    },
    {
      name: "og:site_name",
      hid: "og:site_name",
      content: computed(() => pageMeta.value.name), // TODO: get this from .env
    },
    {
      name: "og:locale",
      hid: "og:locale",
      content: computed(() => pageMeta.value.name), // TODO: get locale from i18n
    },
    {
      name: "og:locale:alternate",
      hid: "og:locale:alternate",
      content: "en_EN", //TODO: Loop this according to all available locale
    },
    {
      name: "google-site-verification",
      hid: "google-site-verification",
      content: "qUKcluaOsrmB71akRwfcGMJOBsqVc33X9EqsCT8K8Jk",
    },
    {
      name: "msapplication-TitleColor",
      content: "#6930c3",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "format-detection",
      content: "telephone=no,date=no,address=no,email=no,url=no",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
});
</script>

<template>
  <component :is="layout">
    <slot />
  </component>
</template>
