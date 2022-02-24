<template>
  <!-- 场景 -->
  <div>
    <el-tabs
      type="border-card"
      @tab-remove="removeTab"
      v-model="editableTabsValue"
    >
      <el-tab-pane label="场景列表" :closable="false" addable name="0">
        <el-breadcrumb separator="/">
          <el-button type="primary" @click="addTab('新增人物')"
            >创建场景</el-button
          >
        </el-breadcrumb>
        <el-card class="box-card">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed prop="scene_name" label="场景名称">
            </el-table-column>
            <el-table-column prop="scene_form" label="大概形状">
            </el-table-column>
            <el-table-column prop="scene_adjacency" label="临边场景">
            </el-table-column>
            <el-table-column prop="scene_place" label="场景内的地点">
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
        <addAmend />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import addAmend from "./addAmend.vue";
export default {
  components: { addAmend },
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
          scene_name: "上海",
          scene_form: "普陀区",
          scene_adjacency: "上海市普陀区金沙江路 1518 弄",
          scene_place: 200333,
        },
        {
          scene_name: "上海",
          scene_form: "普陀区",
          scene_adjacency: "上海市普陀区金沙江路 1518 弄",
          scene_place: 200333,
        },
        {
          scene_name: "上海",
          scene_form: "普陀区",
          scene_adjacency: "上海市普陀区金沙江路 1518 弄",
          scene_place: 200333,
        },
        {
          scene_name: "上海",
          scene_form: "普陀区",
          scene_adjacency: "上海市普陀区金沙江路 1518 弄",
          scene_place: 200333,
        },
        {
          scene_name: "上海",
          scene_form: "普陀区",
          scene_adjacency: "上海市普陀区金沙江路 1518 弄",
          scene_place: 200333,
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
