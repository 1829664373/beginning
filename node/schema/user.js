const joi = require('joi')

const username = joi.string().pattern(/^[a-zA-Z][a-zA-Z0-9_]{3,15}$/).min(4).max(15).required()
const password = joi.string().pattern(/^[a-zA-Z]\w{5,17}$/).required()
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