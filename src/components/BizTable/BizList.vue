<template>
  <div class="biz-list">
    <a-table
      :columns="columns"
      :row-key="record => record.id"
      :data-source="tableData"
      :pagination="pagination"
      :loading="loading"
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
