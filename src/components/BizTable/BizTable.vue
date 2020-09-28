<template>
  <div class="biz-table">
    <biz-header
      :operations="operations"
      @operate="onOperate"
      :filters="filters"
      @filter-change="filterChange"
    ></biz-header>
    <biz-list :pagination="pagination" :loading="loading" :tableData="tableData" :columns="columns"></biz-list>
  </div>
</template>

<script>
import BizHeader from './BizHeader';
import BizList from './BizList';

export default {
  name: 'biz-table',
  components: { BizHeader, BizList },
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
    },
    pagination: {
      type: Object,
      default() {
        return {
          pageSize: 20,
          current: 4
        };
      }
    },
    loading: {
      type: Boolean,
      default() {
        return false;
      }
    },
    tableData: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
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
    onOperate() {
      this.$emit('operate', name);
    },
    filterChange({ index, value }) {
      this.$emit('filter-change', {
        index,
        value
      });
    },
    handleTableChange() {}
  }
};
</script>

<style lang="scss">
.biz-table {
}
</style>
