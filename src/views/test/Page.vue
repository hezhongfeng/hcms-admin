<template>
  <div class="test-page">
    <biz-table
      :operations="operations"
      :filters="filters"
      :loading="loading"
      :pagination="pagination"
      :columns="columns"
      :tableData="tableData"
      :selectedRowKeys="selectedRowKeys"
      @select-change="onSelectChange"
      @operate="onOperate"
      @filter-change="filterChange"
      @table-change="onTableChange"
      @row-click="onRowClick"
    ></biz-table>
    <biz-popup-tabs :visible="visible" @close="visible = false"></biz-popup-tabs>
  </div>
</template>

<script>
import { BizTable } from '@/components/BizTable';
import { BizPopupTabs } from '@/components/BizPopupTabs';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
];

const tableData = [];
for (let i = 0; i < 100; i++) {
  tableData.push({
    id: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

export default {
  name: 'test-page',
  components: {
    BizTable,
    BizPopupTabs
  },
  props: {},
  data() {
    return {
      visible: false,
      selectedRowKeys: [],
      columns,
      tableData,
      pagination: {
        current: 1,
        pageSize: 20,
        total: 100
      },
      loading: false,

      filters: [
        {
          type: 'select',
          label: '状态',
          name: 'state',
          value: '2',
          options: [
            { label: '全部', value: '' },
            { label: '未处理', value: '1' },
            { label: '已处理', value: '2' }
          ]
        },
        {
          type: 'daterange',
          label: '时间范围',
          name: 'state',
          value: [moment('2019-12-12', dateFormat), moment('2020-12-12', dateFormat)]
        },
        {
          type: 'switch',
          label: '状态',
          name: 'state',
          activeText: '进行中',
          inactiveText: '已结束',
          value: true
        },
        {
          type: 'input',
          name: 'state',
          placeholder: '请输入搜索内容',
          style: 'width:180px',
          defaultValue: '',
          value: ''
        }
      ]
    };
  },
  computed: {
    operations() {
      return [
        {
          label: '新增',
          type: 'primary'
        },
        {
          label: '刷新'
        },
        {
          disabled: !(this.selectedRowKeys.length > 0),
          label: '删除'
        }
      ];
    }
  },
  created() {},
  mounted() {},
  methods: {
    onRowClick(row) {
      console.log(row.id);
      this.visible = true;
    },
    onSelectChange(keys) {
      this.selectedRowKeys = keys;
    },
    onOperate(name) {
      console.log(name);
    },
    filterChange({ index, type, value }) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      console.log(index, type, value);
      // 日期范围
      if (type === 'daterange') {
        this.filters[index].value = [moment(value[0], dateFormat), moment(value[1], dateFormat)];
      } else {
        this.filters[index].value = value[0];
      }
    },
    onTableChange(pagination) {
      this.pagination.current = pagination.current;
      this.pagination.pageSize = pagination.pageSize;
      this.selectedRowKeys = [];
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
.test-page {
  height: 100%;
}
</style>
