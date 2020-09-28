<template>
  <div class="test-page">
    <biz-table :operations="operations" :filters="filters" @filter-change="filterChange"></biz-table>
  </div>
</template>

<script>
import { BizTable } from '@/components/BizTable';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

export default {
  name: 'test-page',
  components: {
    BizTable
  },
  props: {},
  data() {
    return {
      operations: [
        {
          label: '新增',
          type: 'primary'
        },
        {
          label: '刷新'
        },
        {
          disabled: true,
          label: '删除'
        }
      ],
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
          value: true
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    filterChange({ index, type, value }) {
      console.log(index, type, value);
      // 日期范围
      if (type === 'daterange') {
        this.filters[index].value = [moment(value[0], dateFormat), moment(value[1], dateFormat)];
      } else {
        this.filters[index].value = value[0];
      }
    }
  }
};
</script>

<style lang="scss">
.test-page {
}
</style>
