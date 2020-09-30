<template>
  <a-drawer
    class="biz-popup-tabs"
    placement="right"
    :closable="false"
    :visible="visible"
    :width="width"
    @close="onClose"
  >
    <a-tabs default-active-key="1" :animated="false">
      <slot> </slot>
    </a-tabs>
  </a-drawer>
</template>

<script>
export default {
  name: 'biz-popup-tabs',
  components: {},
  props: {
    width: {
      type: Number,
      default() {
        return 500;
      }
    },
    visible: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onClose() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss">
.biz-popup-tabs {
  height: 100%;
  .ant-drawer-body {
    padding: 10px;
    padding-top: 0;
    height: 100%;
    .ant-tabs {
      height: 100%;
      .ant-tabs-content {
        height: calc(100% - 60px);
        overflow-y: auto;
      }
    }
  }
}
</style>
