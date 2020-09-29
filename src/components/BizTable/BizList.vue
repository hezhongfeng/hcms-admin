<template>
  <div class="biz-list">
    <a-table
      :rowKey="rowKey"
      :columns="columns"
      :row-key="record => record.id"
      :data-source="tableData"
      :pagination="pagination"
      :loading="loading"
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      @change="handleTableChange"
    >
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'biz-list',
  components: {},
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
    onSelectChange(keys) {
      this.$emit('select-change', keys);
    },
    handleTableChange(pagination, filters, sorter) {
      this.$emit('table-change', pagination, filters, sorter);
    }
  }
};
</script>

<style lang="scss">
.biz-list {
}
</style>
