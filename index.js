const TelegramBot = require ('node-telegram-bot-api')
const debug = require ('./helpers')
const TOKEN = '5972199013:AAHxM6Orpn1T4GEusc2GuA0KIrI73wCngX4'
console.log('Bot has been started.....')
const bot = new TelegramBot (TOKEN,{
       polling: {
           interval: 300,
           autostart: true,
           params: {
               timeout: 10
           }
       }
})

bot.on ('inline_query', query => {
    const result = []
    for (let i = 0; i < 5; i++) {
        result.push({
            type: 'article',
            id: i.toString(),
            title: 'Title' + i,
            input_message_content: {
                messaage_text: 'Article #${i+1}'
            }
        })
    }
    bot.answerInlineQuvery(query.id, results, {
        cashe_time: 0
    })

})







