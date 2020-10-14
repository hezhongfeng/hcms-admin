<template>
  <div class="right-content">
    <avatar-dropdown :menu="showMenu" :current-user="currentUser" :class="prefixCls" />
  </div>
</template>

<script>
import AvatarDropdown from './AvatarDropdown';

export default {
  name: 'RightContent',
  components: {
    AvatarDropdown
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro-global-header-index-action'
    },
    isMobile: {
      type: Boolean,
      default: () => false
    },
    topMenu: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      showMenu: true,
      currentUser: {}
    };
  },
  computed: {
    wrpCls() {
      return {
        'ant-pro-global-header-index-right': true,
        [`ant-pro-global-header-index-dark`]: true
      };
    }
  },
  mounted() {
    setTimeout(() => {
      this.currentUser = {
        name: 'Serati Ma'
      };
    }, 1500);
  }
};
</script>

<style lang="scss">
.right-content {
  margin-right: 8px;
  float: right;
  height: 100%;
  margin-left: auto;
  overflow: hidden;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
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
