<template>
  <a-dropdown v-if="currentUser && currentUser.name" class="ant-pro-drop-down" placement="bottomRight">
    <span class="ant-pro-account-avatar">
      <a-avatar
        size="small"
        src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
        class="antd-pro-global-header-index-avatar"
      />
      <span>{{ currentUser.name }}</span>
    </span>
    <template v-slot:overlay>
      <a-menu class="ant-pro-drop-down menu" :selected-keys="[]">
        <a-menu-item @click="handleToCenter">
          <a-icon type="user" />
          个人中心
        </a-menu-item>
        <a-menu-item @click="handleLogout">
          <a-icon type="logout" />
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
  <span v-else>
    <a-spin size="small" :style="{ marginLeft: 8, marginRight: 8 }" />
  </span>
</template>

<script>
import { Modal } from 'ant-design-vue';

export default {
  name: 'AvatarDropdown',
  props: {
    currentUser: {
      type: Object,
      default: () => null
    },
    menu: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleToCenter() {
      this.$router.push({ path: '/account/center' });
    },
    handleToSettings() {
      this.$router.push({ path: '/account/settings' });
    },
    handleLogout() {
      Modal.confirm({
        title: this.$t('layouts.usermenu.dialog.title'),
        content: this.$t('layouts.usermenu.dialog.content'),
        onOk: () => {
          return this.$store.dispatch('Logout').then(() => {
            this.$router.push({ name: 'login' });
          });
        },
        onCancel() {}
      });
    }
  }
};
</script>

<style lang="scss">
.ant-pro-drop-down {
  display: inline-block;
  height: 100%;
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.3s;
  .action {
    margin-right: 8px;
  }
  .ant-dropdown-menu-item {
    min-width: 160px;
  }
  .antd-pro-global-header-index-avatar {
    color: rgba(0, 0, 0, 0.65);
    margin: calc((64px - 24px) / 2) 0;
    margin-right: 8px;
    color: #1890ff;
    vertical-align: top;
  }
  .ant-pro-account-avatar {
    background: rgba(255, 255, 255, 0.85);
  }
}
</style>
