const {
    SuccessModel
} = require("../model/responsrModel");
const {
    getList
} = require('../controllers/blog')
const handleBlogRoute = (req, res) => {
    const method = req.method;

    // 这是首页列表
    if (method === "GET" && req.path === '/api/blog/index') {
        return {
            message: '首页'
        }
    }

    // 这是指定搜索
    if (method === "GET" && req.path === '/api/blog/SouSuo') {
        return {
            message: '搜索'
        }
    }
    // 单个商品的列表
    if (method === "GET" && req.path === '/api/blog/ShouJi') {
        return {
            message: '手机列表'
        }
    }
    if (method === "POST" && req.path === '/api/blog/ShouJi') {
        return {
            message: '添加手机列表'
        }
    }

    // 卖出
    if (method === "GET" && req.path === '/api/blog/MaiChu') {
        return {
            message: '卖出详情'
        }
    }
    if (method === "POST" && req.path === '/api/blog/MaiChu') {
        return {
            message: '添加卖出详情'
        }
    }

    // 买入
    if (method === "POST" && req.path === '/api/blog/MaiRu') {
        return {
            message: '买入详情'
        }
    }
    // 买入记录
    if (method === "GET" && req.path === '/api/blog/record') {
        // 获取路由?后的信息
        const record = req.query.record || '';
        // 保存数据
        const ListData = getList(record)
        return new SuccessModel(ListData)
        // return {
        //     message: '获取买入详情'
        // }
    }
    if (method === "POST" && req.path === '/api/blog/record') {
        
        return {
            message: '添加买入详情'
        }
    }
}
module.exports = handleBlogRoute