const db = require('../db/index')
const bcrypt = require('bcryptjs')
//获取用户基本信息
exports.getUserInfo = (req, res) => {
    const sql = 'select id, username, nickname, userpic from new_table where id = ?'
    db.query(sql, req.user.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('获取用户信息失败')
        res.send({
            status: 0,
            message: '获取用户信息成功',
            data: results[0]
        })
    })
}
//修改用户信息
exports.updateUserInfo = (req, res) => {
    const sql = 'UPDATE new_table set ? where id = ?'
    db.query(sql, [req.body, req.body.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('更新用户信息失败')
        res.cc('更新用户信息成功', 0)
    })
}
//修改用户密码
exports.updatePassword = (req, res) => {
    const sql = 'select * from new_table where id = ?'
    db.query(sql, req.user.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('用户不存在')
        //判断旧密码是否一致
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
        if (!compareResult) return res.cc('旧密码错误')
        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
        const sql = 'update new_table set password = ? where id = ?'
        db.query(sql, [newPwd, req.user.id], (err, results) => {
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) return res.cc('更新密码失败')
            res.cc('更新密码成功', 0)
        })
    })
}
//重置头像
exports.updateAvatar = (req, res) => {
    const sql = 'update new_table set userpic = ? where id = ?'
    db.query(sql, [req.body.avatar, req.body.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('更新头像失败')
        return res.cc('更新头像成功', 0)
    })
}