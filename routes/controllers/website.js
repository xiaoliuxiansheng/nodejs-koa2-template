/**
 * @name: website.js
 * @author: LIULIU
 * @date: 2020-08-04 10:19
 * @description：website.js
 * @update: 2020-08-04 10:19
 */
const db = require('../../models');
/**
 *  新增
 *
 */
 exports.addlist = async (ctx, next) => {
    const {name, url, alexa, country} = ctx.request.body;
    let res = await db.website.findOrCreate({
        where: {
            name
        },
        defaults: {
            name,
            alexa,
            country,
            url
        }
    });
    if (!res[1]) {
        ctx.body = {
            errcode: -1,
            msg: '新增失败，模块名称重复！'
        };
    } else {
        ctx.body = {
            errcode: 0,
            msg: '新增成功！'
        };
    }
}
 /**
 *删除
 */
exports.deltitem = async (ctx,next) => {
    const id = ctx.request.body;
    let res = await db.website.destroy({
        where:id
    })
    if (res === 0) {
        ctx.body = {
            errcode:-1,
            msg:'删除失败！'
        }
    } else {
        ctx.body = {
            errcode:0,
            msg:'删除成功！'
        }
    }
}

/**
 *查询
 * */

exports.select = async (ctx, next) => {
    const {id} = ctx.request.body;
    let res = await db.website.findOne({
        where:{
            id
        }
    })
    console.log(res,"---")
    if (res === null) {
        ctx.body = {
            errcode:-1,
            msg:'该数据不存在！'
        }
    } else {
        ctx.body = {
            errcode:0,
            msg:'查找成功！',
            data:res
        }
    }
}

/**
 *
 * 修改
 */

exports.update = async (ctx, next) => {
    const {id, name, url, alexa, country} = ctx.request.body;
    let res = await db.website.update({name, url, alexa, country},{where:{id}})
    console.log(res)
    if (res[0] !== 1) {
        ctx.body = {
            errcode:-1,
            msg:'更新失败！'
        }
    } else {
        ctx.body = {
            errcode:0,
            msg:'更新成功！'
        }
    }
}
