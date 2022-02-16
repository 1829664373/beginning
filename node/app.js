const express = require('express')
const app = express()

//导入中间件
const joi = require('joi')
const cors = require('cors')
const expressJWT = require('express-jwt')//解析tooken字符串的中间件
const config = require('./config')

const middleware = require('./middleware/index')
app.use(middleware.cc)
//解析token字符串
app.use(expressJWT({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api/] }))
//导入路由
const userRequest = require('./router/user')
app.use(cors())//跨域的中间件
//解析表单数据的中间件只能解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({ extended: false }))

app.use('/api', userRequest)
const userinfoRouter = require('./router/userinfo')//用户信息
const listRouter = require('./router/list')//表信息
app.use('/my', userinfoRouter)
app.use('/list', listRouter)
app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) return res.cc(err)
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败')
    res.cc(err)
})
app.listen(8000, function () {
    console.log('8000');
})