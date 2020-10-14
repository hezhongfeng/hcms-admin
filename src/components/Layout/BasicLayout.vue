<template>
  <pro-layout
    :menus="menus"
    :collapsed="collapsed"
    :handleCollapse="handleCollapse"
    :handleMediaQuery="handleMediaQuery"
  >
    <template v-slot:menuHeaderRender>
      <div>
        <img src="~@/assets/logo.png" />
        <h1>{{ title }}</h1>
      </div>
    </template>
    <template v-slot:rightContentRender>
      <!-- <right-content /> -->
    </template>
    <template v-slot:footerRender>
      <div></div>
    </template>
    <router-view />
  </pro-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
// import RightContent from './RightContent';

export default {
  name: 'BasicLayout',
  components: {
    // RightContent
  },
  data() {
    return {
      menus: [],
      mainMenu: [],
      title: 'HCMS'
    };
  },
  computed: {
    ...mapState(['collapsed'])
  },
  created() {
    const routes = this.mainMenu.find(item => item.path === '/');
    this.menus = (routes && routes.children) || [];
  },
  mounted() {},
  methods: {
    ...mapMutations(['updateCollapsed']),
    handleCollapse(collapsed) {
      this.updateCollapsed(collapsed);
    },
    handleMediaQuery() {}
  }
};
</script>

<style lang="less">
@import './BasicLayout.less';
</style>
