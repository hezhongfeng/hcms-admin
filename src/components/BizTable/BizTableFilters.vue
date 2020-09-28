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
          :size="filter.size || 'small'"
          @change="handleChange(index, arguments)"
        >
          <a-select-option v-for="item in filter.options" :key="item.value" :title="item.label" :value="item.value">
            {{ item.label }}
          </a-select-option>
        </a-select>
      </div>
      <!-- 级联(运营商) -->
      <!-- <div v-if="filter.type === 'cascader'" class="biz-cascader" :class="filter.class">
        <el-cascader
          :filterable="filter.filterable"
          :change-on-select="filter.changeOnSelect ? filter.changeOnSelect : false"
          placeholder="全部"
          size="mini"
          :show-all-levels="filter.showAllLevels ? filter.showAllLevels : false"
          :props="cascaderProps"
          :value="filter.value"
          :options="filter.options"
          :clearable="true"
          @change="handleCascaderChange"
          @active-item-change="activeItemChange"
        ></el-cascader>
      </div> -->
      <!-- 开关 -->
      <div v-if="filter.type === 'switch'" class="biz-switch" :class="filter.class">
        <a-switch
          :checked="filter.value"
          :checked-children="filter.activeText"
          :un-checked-children="filter.inactiveText"
          :size="filter.size || 'small'"
          @change="onChange"
        />
      </div>
      <!-- 输入框(搜索) -->
      <!-- <div v-if="filter.type === 'input'" class="biz-input" :class="filter.class">
        <el-input
          size="mini"
          :placeholder="filter.placeholder"
          v-model="filter.value"
          @keyup.enter.native="inputSearch"
        >
          <el-select
            @change="inputOptionChange"
            v-for="select in filter.select"
            :key="select.index"
            v-model="select.value"
            slot="prepend"
          >
            <el-option
              v-for="item in select.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button @click="inputSearch" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div> -->
      <!-- 输入框-->
      <!-- <div v-if="filter.type === 'inputValue'" class="biz-input" :class="filter.class">
        <el-input size="mini" :placeholder="filter.placeholder" v-model="filter.value"> </el-input>
      </div> -->
      <!-- 年份选择 -->
      <!-- <div v-if="filter.type === 'year'" class="biz-year" :class="filter.class">
        <el-date-picker
          @change="dateChanged($event, filter)"
          size="mini"
          v-model="filter.value"
          align="right"
          type="year"
          :clearable="filter.clearable !== false"
          value-format="yyyy"
          placeholder="选择年"
        ></el-date-picker>
      </div> -->
      <!-- 日期选择 -->
      <!-- <div v-if="filter.type === 'date'" class="biz-date" :class="filter.class">
        <el-date-picker
          @change="dateChanged($event, filter)"
          unlink-panels
          :start-placeholder="filter.startPlaceholder"
          :end-placeholder="filter.endPlaceholder"
          :clearable="filter.clearable !== false"
          size="mini"
          v-model="filter.value"
          value-format="yyyy-MM-dd"
          type="date"
          range-separator="至"
        ></el-date-picker>
      </div> -->
      <!-- 日期范围 -->
      <div
        v-if="filter.type === 'daterange'"
        class="biz-date-range"
        :class="filter.class"
        :size="filter.size || 'small'"
      >
        <a-range-picker @change="onChange" />
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
    handleChange(index, value) {
      this.$emit('filter-change', {
        index,
        value
      });
    }
  }
};
</script>

<style lang="scss">
.biz-table-filter {
  .filter-wrap:not(:first-child) {
    margin-left: 10px;
  }
  .filter-wrap {
    display: flex;
    align-items: center;
    .filter-label {
      margin-right: 6px;
    }
  }
}
</style>
