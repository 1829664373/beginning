<template>
  <!-- 创建人物其他 -->
  <!-- 标签页 -->
  <el-tabs
    type="border-card"
    @tab-remove="removeTab"
    v-model="editableTabsValue"
  >
    <el-tab-pane label="人物列表" :closable="false" addable name="0">
      <!-- 按钮 -->
      <el-breadcrumb separator="/">
        <el-button type="primary" @click="addTab('新增人物')"
          >新增人物属性</el-button
        >
      </el-breadcrumb>
      <!-- 列表 -->
      <el-card class="box-card">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column  prop="character_name" label="属性名称">
          </el-table-column>
          <el-table-column prop="character_age" label="属性类型"> </el-table-column>
          <el-table-column prop="character_gender" label="属性值">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                移除
              </el-button>
              <el-button @click="addTab(scope.row)" type="text" size="small">
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-tab-pane>
    <!-- 增加编辑 -->
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
      :closable="true"
    >
      <addAmend />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import addAmend from "./addAmend.vue";
export default {
  name: "Elsepersonage",
  components: {
    addAmend,
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    addTab(newTabName) {
      // 添加标签
      this.editableTabs.push({
        title: newTabName.character_name || newTabName,
        name: String(this.editableTabs[this.editableTabs.length - 1].name + 1),
        content: "New Tab content",
      });
      this.editableTabsValue = String(
        this.editableTabs[this.editableTabs.length - 1].name
      );
      this.$store.state.navigation.cutperson = this.editableTabs.length;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      // 标签所在位置
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          } else {
            activeName = "0";
          }
        }
      });
      this.editableTabsValue = activeName;
      // 去除要删标签
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      this.$store.state.navigation.cutperson = this.editableTabs.length;
    },
  },
  computed: {},
  data() {
    return {
      editableTabsValue: "0",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],

      tableData: [
        {
          character_name: "2016-05-03",
          character_age: "王小虎",
          character_gender: "上海",
          character_height: "普陀区",
          character_Specialty: "上海市普陀区金沙江路 1518 弄",
          character_physical_condition: 200333,
          character_residence: "2016-05-03",
          character_money: "王小虎",
          character_personal_effects: "上海",
          character_skill: "普陀区",
          character_offspring: "上海市普陀区金沙江路 1518 弄",
          character_vehicle: 200333,
          character_knapsack: "上海",
          character_hobby: "普陀区",
          character_character: "上海市普陀区金沙江路 1518 弄",
        },
        {
          character_name: "2016-05-03",
          character_age: "王小虎",
          character_gender: "上海",
          character_height: "普陀区",
          character_Specialty: "上海市普陀区金沙江路 1518 弄",
          character_physical_condition: 200333,
          character_residence: "2016-05-03",
          character_money: "王小虎",
          character_personal_effects: "上海",
          character_skill: "普陀区",
          character_offspring: "上海市普陀区金沙江路 1518 弄",
          character_vehicle: 200333,
          character_knapsack: "上海",
          character_hobby: "普陀区",
          character_character: "上海市普陀区金沙江路 1518 弄",
        },
        {
          character_name: "2016-05-03",
          character_age: "王小虎",
          character_gender: "上海",
          character_height: "普陀区",
          character_Specialty: "上海市普陀区金沙江路 1518 弄",
          character_physical_condition: 200333,
          character_residence: "2016-05-03",
          character_money: "王小虎",
          character_personal_effects: "上海",
          character_skill: "普陀区",
          character_offspring: "上海市普陀区金沙江路 1518 弄",
          character_vehicle: 200333,
          character_knapsack: "上海",
          character_hobby: "普陀区",
          character_character: "上海市普陀区金沙江路 1518 弄",
        },
        {
          character_name: "2016-05-03",
          character_age: "王小虎",
          character_gender: "上海",
          character_height: "普陀区",
          character_Specialty: "上海市普陀区金沙江路 1518 弄",
          character_physical_condition: 200333,
          character_residence: "2016-05-03",
          character_money: "王小虎",
          character_personal_effects: "上海",
          character_skill: "普陀区",
          character_offspring: "上海市普陀区金沙江路 1518 弄",
          character_vehicle: 200333,
          character_knapsack: "上海",
          character_hobby: "普陀区",
          character_character: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
};
</script>
<style  lang="less" scoped>
.el-card {
  margin-top: 10px;
}
.el-tabs {
  height: 99%;
  overflow: hidden;
  /deep/ .el-tabs__content {
    height: 91%;
    overflow: hidden;
  }
  .el-tab-pane {
    height: 100% !important;
  }
}
</style>
