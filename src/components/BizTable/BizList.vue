<template>
  <div class="biz-list" ref="list">
    <a-table
      :rowKey="rowKey"
      :columns="columns"
      :row-key="record => record.id"
      :data-source="tableData"
      :pagination="pagination"
      :loading="loading"
      :scroll="scroll"
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :customRow="customRow"
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
    return {
      scroll: { y: '100%' }
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getContainerHeight();
  },
  methods: {
    getContainerHeight() {
      // 处理表头和pagination的高度
      this.scroll.y = this.$refs['list'].clientHeight - 64 - 54;
    },
    onSelectChange(keys) {
      this.$emit('select-change', keys);
    },
    handleTableChange(pagination, filters, sorter) {
      this.$emit('table-change', pagination, filters, sorter);
    },
    customRow(row) {
      return {
        on: {
          click: () => {
            this.$emit('row-click', row);
          }
        }
      };
    }
  }
};
</script>

<style lang="scss">
.biz-list {
  height: calc(100% - 52px);
}
</style>
