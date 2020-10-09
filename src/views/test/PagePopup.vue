<template>
  <biz-popup-tabs class="page-popup" :visible="visible" @close="onClose" default-active-key="2">
    <a-tab-pane key="211" tab="2423" class="biz-tab">
      <div class="tab-content">1231231</div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2">
      Content of Tab Pane 2
      <a-card title="Default size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <br />
      <a-card size="small" title="Small size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Default size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <br />
      <a-card size="small" title="Small size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <a-card title="Default size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <br />
      <a-card size="small" title="Small size card" style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">
      Content of Tab Pane 3
    </a-tab-pane>
  </biz-popup-tabs>
</template>

<script>
import { BizPopupTabs } from '@/components/BizPopupTabs';

export default {
  name: 'page-popup',
  components: {
    BizPopupTabs
  },
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
      this.$emit('update:visible', false);
    }
  }
};
</script>

<style lang="scss">
.page-popup {
}
</style>
