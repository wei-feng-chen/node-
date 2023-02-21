// 买入记录
const getList = (record, keyword) => {
    return [{
        list: {
            name: '小米',
            price: 2500,
            category: 'cellphone',
            PurchaseTime: 1676966462656,
            source: '小米销售商',
            sourcePhone: 123456789,
            totality: 100,
            surplus: 100,
            image: '',
            parameters: {
                model: '红米Note 12 5G',
                InternalStorage: '8GB+128G',
                QualityGuarantee: '三年',
                color: 'blue',
                content: ''
            }

        }

    }]
}
module.exports = {
    getList
}