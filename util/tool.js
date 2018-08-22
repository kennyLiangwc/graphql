/**
 * Created by Liang on 2018/8/22.
 */
const uuid = require('uuid/v1')

const tool = {
    uuid() {
        return uuid()
    }
}

module.exports = tool