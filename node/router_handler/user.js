const db = require('../db/index')
const bcrypt = require('bcryptjs')//密码加密
const jwt = require('jsonwebtoken')//tooken包
const config = require('../config')//秘钥
//注册
exports.regUser = (req, res) => {
    const userinfo = req.body
    //查询用户名是否被占用
    const sqlStr = 'select * from new_table where username = ?'
    db.query(sqlStr, userinfo.username, (err, result) => {
        console.log(userinfo);
        if (err) return res.cc(err.message)
        if (result.length > 0) return res.cc('用户名被占用，请更换')
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        //储存到MySQL
        const sql = 'insert into new_table set ?'
        db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            if (err) return res.cc(err.message)
            if (results.affectedRows != 1) return res.cc('注册用户失败，请稍后再试')
            res.cc('注册成功', 0)
        })
    })
}
//登录
exports.login = (req, res) => {
    const userinfo = req.body
    const sqlStr = 'select * from new_table where username = ?'
    db.query(sqlStr, userinfo.username, (err, result) => {
        if (err) return res.cc(err.message)
        if (result.length != 1) return res.cc('用户名不存在')
        //判断密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.password, result[0].password)
        if (!compareResult) return res.cc('登录失败')
        //生产tooken字符串
        const user = { ...result[0], password: '', userpic: '' }
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
        res.send({
            status: 0,
            message: '登陆成功',
            token: 'Bearer ' + tokenStr
        })
    })
}