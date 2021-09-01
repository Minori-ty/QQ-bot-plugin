const axios = require('axios')

function search(img) {
    try {
        // axios.post(img)
        return [
            {
                type: 'image',
                data: {
                    file
                }
            },
            {
                type: 'text',
                data: {
                    text: `\n${item.category} - ${item.suite}`
                }
            }
        ]
    } catch (e) {
        return [
            {
                type: 'text',
                data: {
                    text: '服务器繁忙，稍后再测试'
                }
            }
        ]
    }
}

module.exports = {
    search
}