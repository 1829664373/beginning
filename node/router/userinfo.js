const express = require('express');
const router = express.Router()
const expressJoi = require('@escook/express-joi')
const { update_userinfo_schema, update_password_schema, update_avatar_schema } = require('../schema/user')
const userinfo_handler = require('../router_handler/userinfo')
router.get('/userinfo', userinfo_handler.getUserInfo)//获取用户信息
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)//更新用户信息
router.post('/updatepwd', expressJoi(update_password_schema), userinfo_handler.updatePassword)//重置密码
router.post('/update/avatar', expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)//重置头像
module.exports = router