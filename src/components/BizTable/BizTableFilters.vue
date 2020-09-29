<template>
  <div class="biz-table-filter">
    <div v-for="(filter, index) of filters" :key="index" class="filter-wrap">
      <label class="filter-label" :class="filter.class">{{ filter.label }}</label>
      <!-- 选择器 -->
      <div v-if="filter.type === 'select'" class="biz-select" :class="filter.class">
        <a-select
          :style="filter.style || 'width: 120px'"
          :value="filter.value"
          :disabled="filter.disabled || false"
          :size="filter.size"
          @change="handleChange(index, filter.type, arguments)"
        >
          <a-select-option v-for="item in filter.options" :key="item.value" :title="item.label" :value="item.value">
            {{ item.label }}
          </a-select-option>
        </a-select>
      </div>
      <!-- 开关 -->
      <div v-if="filter.type === 'switch'" class="biz-switch" :class="filter.class">
        <a-switch
          :checked="filter.value"
          :checked-children="filter.activeText"
          :un-checked-children="filter.inactiveText"
          :size="filter.size"
          @change="handleChange(index, filter.type, arguments)"
        />
      </div>
      <!-- 输入框(搜索) -->
      <div v-if="filter.type === 'input'" class="biz-input" :class="filter.class">
        <a-input-search
          :placeholder="filter.placeholder || '请输入'"
          :style="filter.style || 'width: 170px'"
          @search="handleChange(index, filter.type, arguments)"
          enter-button
          @pressEnter="handleChange(index, filter.type, arguments)"
          :defaultValue="filter.defaultValue"
        />
      </div>
      <!-- 日期范围 -->
      <div v-if="filter.type === 'daterange'" class="biz-date-range">
        <a-range-picker
          :size="filter.size"
          :value="filter.value"
          @change="handleChange(index, filter.type, arguments[1])"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'biz-table-filter',
  components: {},
  props: {
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
    handleChange(index, type, value) {
      // 搜索框
      if (type === 'input') {
        // 此处为了兼容按搜索键和回车
        let inputValue = '';
        if (value.length === 2) {
          inputValue = value[0];
        } else {
          inputValue = value[0].target.value;
        }
        this.$emit('filter-change', {
          index,
          type,
          value: inputValue
        });
      } else {
        this.$emit('filter-change', {
          index,
          type,
          value
        });
      }
    }
  }
};
</script>

<style lang="scss">
.biz-table-filter {
  display: flex;
  .filter-wrap:not(:first-child) {
    margin-left: 10px;
  }
  .filter-wrap {
    display: flex;
    align-items: center;
    .filter-label {
      margin-right: 6px;
    }
    .ant-calendar-picker {
      width: 220px;
    }
  }
}
</style>
