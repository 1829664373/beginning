<template>
  <el-row :gutter="20">
    <el-col :span="6" :offset="14" style="padding-top: 220px">
      <!-- 卡片 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>登录</span>
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
            @click="$router.push({ path: '/userReguser' })"
            >注册</el-button
          >
        </div>
        <!-- 表单 -->
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="名称" prop="username">
            <el-input v-model.number="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >注册</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Qs from "qs";
export default {
  name: "userLogin",
  data() {
    var checkAge = (rule, value, callback) => {
      let reg = new RegExp(/^[a-zA-Z][a-zA-Z0-9_]{3,15}$/, "g");
      if (!value) {
        return callback(new Error("名称不能为空"));
      } else if (!reg.test(value)) {
        return callback(
          new Error(
            "字母开头，允许4-16字节，允许字母数字下划线,请输入正确的账号"
          )
        );
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      let reg = new RegExp(/^[a-zA-Z]\w{5,17}$/, "g");
      if (value === "") {
        return callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        return callback(
          new Error(
            "以字母开头，长度在6~18之间，只能包含字母、数字和下划线，请输入正确的密码"
          )
        );
      }
      return callback();
    };
    return {
      ruleForm: {
        password: "",
        username: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          console.log(Qs.stringify(this.ruleForm));
          const data = await this.$http.post(
            "http://localhost:8000/api/login",
            Qs.stringify(this.ruleForm)
          );
          if (data.status == 200 && data.data.status == 0) {
            this.$message.success(data.data.message);
            this.$router.push({ path: "/" });
          }
          //保存tooken
          window.sessionStorage.setItem("token", data.data.token);
        } else {
            this.$message.error("错误，登录失败")
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
</style>