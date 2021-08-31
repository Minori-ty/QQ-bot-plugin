const service = require('./service')

const KEY_WORDS = ['搜图']

module.exports = options => {

    return async ({ data, ws, http }) => {

        if (!data.message) {
            return
        }

        const message = data.message.toUpperCase().trim()
        if (!KEY_WORDS.includes(message)) {
            return
        }

        if (data.message_type === 'group') {
            ws.send('send_group_msg', {
                group_id: data.group_id,
                message: [
                    {
                        type: 'reply',
                        data: {
                            id: data.message_id
                        }
                    },
                    ...(await service.search())
                ]
            })
            return
        }

        if (data.message_type === 'private') {
            ws.send('send_private_msg', {
                user_id: data.user_id,
                message: await service.search()
            })
            return
        }
    }
}