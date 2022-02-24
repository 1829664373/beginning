<template>
  <!-- 创建物品 -->
  <div>
    <el-tabs
      type="border-card"
      @tab-remove="removeTab"
      v-model="editableTabsValue"
    >
      <el-tab-pane label="物品列表" :closable="false" addable name="0">
        <el-breadcrumb separator="/">
          <el-button type="primary" @click="addTab('新增人物')"
          >创建物品</el-button
        >
        </el-breadcrumb>
        <el-card class="box-card">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed prop="goods_name" label=" 物品名称">
            </el-table-column>
            <el-table-column prop="goods_kind" label="物品种类">
            </el-table-column>
            <el-table-column prop="goods_weight" label="物品重量">
            </el-table-column>
            <el-table-column prop="goods_size" label="物品大小">
            </el-table-column>
            <el-table-column prop="goods_grasp" label="物品可掌握范围">
            </el-table-column>
            <el-table-column fixed prop="goods_risk" label="是否危险物品">
            </el-table-column>
            <el-table-column prop="goods_consume" label="是否消耗类物品">
            </el-table-column>
            <el-table-column prop="goods_conceal" label="是否可隐藏其他物品">
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
      <addAmend/>
    </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import addAmend from "./addAmend.vue";
export default {
  components:{addAmend},
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    addTab(newTabName) {
      // 添加标签
      console.log(this.editableTabs);
      this.editableTabs.push({
        title: newTabName.character_name || newTabName,
        name: String(this.editableTabs[this.editableTabs.length - 1].name + 1),
        content: "New Tab content",
      });
      console.log(this.editableTabs);
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
          goods_name: "王小虎",
          goods_kind: "上海",
          goods_weight: "普陀区",
          goods_size: "上海市普陀区金沙江路 1518 弄",
          goods_grasp: 200333,
          goods_risk: "上海",
          goods_consume: "普陀区",
          goods_conceal: "上海市普陀区金沙江路 1518 弄",
        },
        {
          goods_name: "王小虎",
          goods_kind: "上海",
          goods_weight: "普陀区",
          goods_size: "上海市普陀区金沙江路 1518 弄",
          goods_grasp: 200333,
          goods_risk: "上海",
          goods_consume: "普陀区",
          goods_conceal: "上海市普陀区金沙江路 1518 弄",
        },
        {
          goods_name: "王小虎",
          goods_kind: "上海",
          goods_weight: "普陀区",
          goods_size: "上海市普陀区金沙江路 1518 弄",
          goods_grasp: 200333,
          goods_risk: "上海",
          goods_consume: "普陀区",
          goods_conceal: "上海市普陀区金沙江路 1518 弄",
        },
        {
          goods_name: "王小虎",
          goods_kind: "上海",
          goods_weight: "普陀区",
          goods_size: "上海市普陀区金沙江路 1518 弄",
          goods_grasp: 200333,
          goods_risk: "上海",
          goods_consume: "普陀区",
          goods_conceal: "上海市普陀区金沙江路 1518 弄",
        },
        {
          goods_name: "王小虎",
          goods_kind: "上海",
          goods_weight: "普陀区",
          goods_size: "上海市普陀区金沙江路 1518 弄",
          goods_grasp: 200333,
          goods_risk: "上海",
          goods_consume: "普陀区",
          goods_conceal: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
};
</script>
<style scoped>
.el-card {
  margin-top: 10px;
}
</style>
