<template>
  <pro-layout
    :menus="menus"
    :collapsed="collapsed"
    :handleCollapse="handleCollapse"
    :handleMediaQuery="handleMediaQuery"
    class="basic-layout"
  >
    <template v-slot:menuHeaderRender>
      <div>
        <img src="~@/assets/logo.png" />
        <h1>{{ title }}</h1>
      </div>
    </template>
    <template v-slot:rightContentRender>
      <right-content />
    </template>
    <template v-slot:footerRender>
      <div></div>
    </template>
    <router-view />
  </pro-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import RightContent from './RightContent';

export default {
  name: 'BasicLayout',
  components: {
    RightContent
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

<style lang="scss">
.basic-layout {
  margin-right: 8px;
  &.ant-pro-global-header-index-dark {
    .ant-pro-global-header-index-action {
      color: hsla(0, 0%, 100%, 0.85);
      &:hover {
        background: #1890ff;
      }
    }
  }

  .ant-pro-account-avatar {
    .antd-pro-global-header-index-avatar {
      // margin: ~'calc((@{layout-header-height} - 24px) / 2)' 0;
      margin-right: 8px;
      // color: @primary-color;
      vertical-align: top;
      background: rgba(255, 255, 255, 0.85);
    }
  }

  .menu {
    .anticon {
      margin-right: 8px;
    }

    .ant-dropdown-menu-item {
      min-width: 100px;
    }
  }
}
</style>
