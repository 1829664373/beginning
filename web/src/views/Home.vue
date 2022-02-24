<template>
  <el-container id="home">
    <el-header height="6%">Header</el-header>
    <el-container style="height: 88%">
      <el-aside width="200px">
        <!-- 侧边栏 -->
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              :default-active="navigation"
              class="el-menu-vertical-demo"
              @select="handleSelect"
            >
              <el-menu-item index="1">
                <span slot="title">创建人物</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">创建物品</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">创建场景</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">创建人物其他</span>
              </el-menu-item>
              <el-menu-item index="5">
                <span slot="title">创建物品其他</span>
              </el-menu-item>
              <el-menu-item index="6">
                <span slot="title">创建场景其他</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 内容 -->
      <el-main>
        <!-- 创建人物 -->
        <Personage v-if="navigation == 1" />
        <!-- 创建物品 -->
        <Goods v-else-if="navigation == 2" />
        <!-- 创建场景 -->
        <Scene v-else-if="navigation == 3" />
        <!-- 人物其他创建 -->
        <Elsepersonage v-else-if="navigation == 4" />
        <!-- 创建物品其他 -->
        <ElseGoods v-else-if="navigation == 5" />
        <!-- 创建场景其他 -->
        <ElseScene v-else-if="navigation == 6" />
      </el-main>
    </el-container>
    <el-footer height="6%">Footer</el-footer>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import Personage from "../addPerson/personage.vue";
import Goods from "../addGoods/goods.vue";
import Scene from "../addScene/scene.vue";
import Elsepersonage from "../addElsepersonage/elsepersonage.vue";
import ElseGoods from "../addElseGoods/ElseGoods.vue";
import ElseScene from "../addElseScene/ElseScene.vue";
export default {
  name: "Home",
  props: {},
  components: {
    Personage,
    Goods,
    Scene,
    Elsepersonage,
    ElseGoods,
    ElseScene,
  },
  data() {
    return {
      navigation: "1",
      ...mapState,
    };
  },
  methods: {
    handleSelect(key, indexPath) {
      console.log(this.navigation);
      if (
        key != this.navigation &&
        this.$store.state.navigation.cutperson >= 3
      ) {
        this.open(key, indexPath);
      } else {
        this.navigation = key;
      }
    },
    open(key) {
      //弹框
      this.$confirm("还有内容未操作，是否切换", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.navigation = key;
          this.$message({
            type: "success",
            message: "切换成功!",
          });
          this.$store.state.navigation.cutperson = 0;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消切换",
          });
          console.log(this.navigation);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  height: 100%;
  overflow: hidden;
}
.el-col-12 {
  width: 100%;
}
</style>
