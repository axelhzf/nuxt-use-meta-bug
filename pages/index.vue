<template>
  <div>
    Index
  </div>
</template>

<script>
import { defineComponent, useMeta, getCurrentInstance } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const {_head, _computedHead} = getCurrentInstance().$options;
    console.log(_computedHead.length);

    useMeta(() => ({
      title: 'page title',
      link: [{ rel: 'stylesheet', href: 'http://nuxt.test/file.css' }],
      meta: [
        { name: 'description', content: `page description ${_computedHead.length}`},
      ]
    }));

    return {  };
  },
  head: {}
})
</script>