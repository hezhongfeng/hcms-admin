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
      scroll: { y: 400 }
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getContainerHeight();
  },
  methods: {
    getContainerHeight() {
      this.scroll.y = this.$refs['list'].clientHeight - 64 - 54;
    },
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
  height: calc(100% - 52px);
  .ant-table-wrapper {
    height: 100%;
    .ant-spin-nested-loading {
      height: 100%;
      .ant-spin-container {
        height: 100%;
        .ant-table {
          height: calc(100% - 64px);
          // .ant-table-content {
          //   height: 100%;
          //   .ant-table-scroll {
          //     height: 100%;
          //   }
          // }
        }
      }
    }
  }
}
</style>
