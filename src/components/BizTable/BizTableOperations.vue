<template>
  <div class="biz-table-operations">
    <a-button
      size="small"
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
  name: 'biz-table-operations',
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
.biz-table-operations {
  button:not(:first-child) {
    margin-left: 10px;
  }
}
</style>
