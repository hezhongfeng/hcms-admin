<template>
  <div class="biz-header">
    <biz-operations :operations="operations" @operate="operate"> </biz-operations>
    <biz-filter :filters="filters" @filter-change="filterChange"></biz-filter>
  </div>
</template>

<script>
import BizOperations from './BizTableOperations';
import BizFilter from './BizTableFilters';

export default {
  name: 'biz-header',
  components: {
    BizOperations,
    BizFilter
  },
  props: {
    operations: {
      type: Array,
      default: function() {
        return [];
      }
    },
    filters: {
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
    },
    filterChange({ index, value }) {
      this.$emit('filter-change', {
        index,
        value
      });
    }
  }
};
</script>

<style lang="scss">
.biz-header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>
