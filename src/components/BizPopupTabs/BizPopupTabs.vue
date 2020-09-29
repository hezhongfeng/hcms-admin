<template>
  <a-drawer
    class="biz-popup-tabs"
    title="Basic Drawer"
    placement="right"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script>
export default {
  name: 'biz-popup-tabs',
  components: {},
  props: {
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
}
</style>
