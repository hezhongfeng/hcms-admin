<template>
  <div class="biz-popup-btns">
    <a-button
      :size="operation.size"
      :disabled="operation.disabled"
      :class="operation.class"
      v-for="(operation, index) in operations"
      :type="operation.type"
      :key="index"
      @click="operate(operation.name)"
    >
      {{ operation.label }}
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'biz-popup-btns',
  components: {},
  props: {
    operations: {
      type: Array,
      default: function() {
        return [];
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
    operate(name) {
      this.$emit('operate', name);
    }
  }
};
</script>

<style lang="scss">
.biz-popup-btns {
  button:not(:first-child) {
    margin-left: 10px;
  }
}
</style>
