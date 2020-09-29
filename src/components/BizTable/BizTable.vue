<template>
  <div class="biz-table">
    <biz-header
      :operations="operations"
      @operate="onOperate"
      :filters="filters"
      @filter-change="filterChange"
    ></biz-header>
    <biz-list
      :rowKey="rowKey"
      :pagination="handlePagination"
      :loading="loading"
      :tableData="tableData"
      :columns="columns"
      :selectedRowKeys="selectedRowKeys"
      @select-change="onSelectChange"
      @table-change="handleTableChange"
    ></biz-list>
  </div>
</template>

<script>
import BizHeader from './BizHeader';
import BizList from './BizList';

export default {
  name: 'biz-table',
  components: { BizHeader, BizList },
  props: {
    rowKey: {
      type: String,
      default() {
        return 'id';
      }
    },
    selectedRowKeys: {
      type: Array,
      default() {
        return [];
      }
    },
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
        return {};
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
  computed: {
    handlePagination() {
      return {
        defaultPageSize: this.pagination.defaultPageSize || 20,
        current: this.pagination.current,
        defaultCurrent: this.pagination.defaultCurrent || 1,
        total: this.pagination.total || 0,
        'show-size-changer': this.pagination['show-size-changer'] || true,
        pageSize: this.pagination.pageSize
      };
    }
  },
  created() {},
  mounted() {},
  methods: {
    onSelectChange(keys) {
      this.$emit('select-change', keys);
    },
    onOperate() {
      this.$emit('operate', name);
    },
    filterChange({ index, type, value }) {
      this.$emit('filter-change', {
        index,
        type,
        value
      });
    },
    handleTableChange(pagination, filters, sorter) {
      this.$emit('table-change', pagination, filters, sorter);
    }
  }
};
</script>

<style lang="scss">
.biz-table {
  height: 100%;
}
</style>
