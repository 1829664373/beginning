<template>
  <el-container>
    <el-aside width="200px">
      <!-- 侧边栏 -->
      <el-row class="tac">
        <el-col :span="12">
          <h5>默认颜色</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="2" >
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container {
  height: 100%;
}
</style>
