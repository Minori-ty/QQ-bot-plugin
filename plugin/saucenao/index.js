const service = require('./service')
const CQ = require('../../utils/CQcode')

const KEY_WORDS = ['搜图']

module.exports = options => {
    return async ({ data, ws, http }) => {
        //如果没有消息则退出
        if (!data.message) {
            return
        }

        // 如果消息不是关键字，则退出
        // const message = data.message.toUpperCase().trim()
        // if (!KEY_WORDS.includes(message)) {
        //     return
        // }

        // 群消息处理
        if (data.message_type === 'group') {
            // ws.send('send_group_msg', {
            //     group_id: data.group_id,
            //     message: [
            //         {
            //             type: 'reply',
            //             data: {
            //                 id: data.message_id
            //             }
            //         },
            //         ...(await service.search())
            //     ]
            // })
            console.log(data.message)
            return
        }

        if (data.message_type === 'private') {
            // ws.send('send_private_msg', {
            //     user_id: data.user_id,
            //     message: await service.search()
            // })
            return
        }
    }
}
