const joi = require('joi')

const username = joi.string().alphanum().min(1).max(20).required()
const password = joi.string().pattern(/^[\S]{6,15}$/).required()
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const avatar = joi.string().dataUri().required()
//提交登录验证
exports.reg_login_schema = {
    body: {
        username,
        password
    }
}
//用户信息验证
exports.update_userinfo_schema = {
    body: {
        id,
        nickname
    }
}
//更新密码
exports.update_password_schema = {
    body: {
        oldPwd: password,
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
}
//头像验证规则
exports.update_avatar_schema = {
    body: {
        avatar
    }
}