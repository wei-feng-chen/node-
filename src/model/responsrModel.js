class BaseModel {
    constructor(data, message) {
        // 如果传的是字符串
        if (typeof data === 'string') {
            this.message = data;
            data = null;
            message = null;
        }
        // 如果传了data
        if (data) {
            this.data = data;
        }
        // 如果传了message
        if (message) {
            this.message = message;
        }
    }
}

// 成功
class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message);
        this.errno = 0;
    }
}
// 失败
class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message);
        this.errno = -1;
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}