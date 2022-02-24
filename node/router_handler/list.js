const db = require('../db/index')
const bcrypt = require('bcryptjs')//密码加密
const jwt = require('jsonwebtoken')//tooken包
const config = require('../config')//秘钥

exports.inquire = (req, res) => {
    const sql1 = 'select * from main_list where list_genera = ?'
    const sql2 = 'select * from list_genera where list_genera_name_id = ?'
    const sql3 = 'select * from list_value where  list_id = ?'
    let addList = {}
    console.log(req.body);
    db.query(sql1, req.body.list_genera, (err, result) => {
        // console.log(req.body);
        if (err) return res.cc(err.message)
    //     if (result.length < 0) return res.cc('未查找到数据')
        // db.query(sql2, result[0].id, (err, result2) => {
            
        // if (err) return res.cc(err.message)
        // if (result2.length > 0) return res.cc('未查找到数据')
        //     addList = result
        //     result2.forEach(element => {
        //             console.log(result[0]);
        //             db.query(sql3, element.id, (err, result3) => {
        //                 addList.list_generaco = result3
        //                 console.log(addList);
                         res.cc(addList, 0)
        //             })
                
        //     });
        // })
    })
    // res.cc('1', 0)
}