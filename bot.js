const IteratorNext = require('es-abstract/2015/IteratorNext');
const sqlite3 = require('sqlite3');
const { Telegraf, Markup } = require('telegraf');




const token = process.argv[2]
const bot = new Telegraf(token);
const db = new sqlite3.Database("database.db")
 const db2 = new sqlite3.Database("name.db")

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    first_name       TEXT NOT NULL, 
    telephone_number INTEGER NOT NULL
    
  )
`)

 db2.run(`
   CREATE TABLE IF NOT EXISTS dataset (
     user_name    TEXT NOT NULL ,
    akkunts_user NOT NULL , 
    instagram_akaunt NOT NULL,
     sphere_of_work NOT NULL
     
   )
 `)




bot.on('file', (ctx) => {
  console.log(ctx)
  const data = bot.readFileSync('./data.json', 'utf-8');
  const jsonData = JSON.parse(data);
  if (jsonData.hasOwnProperty(ctx.message.text)) {
    ctx.reply(jsonData[ctx.message.text]);
  }
});


bot.on("contact", (ctx) => {
  console.log(ctx)
  // const gps_locaton = ctx.message.contact.gps_locaton;
  const phone_number = ctx.message.contact.phone_number;
  ctx.reply('Принято');
  bot.telegram.sendMessage(ctx.chat.id, 'Оформление',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {text: 'оформим профиль?', callback_data: 'o'},
              {text: 'Да', callback_data: 'one1'},

            ]







          ]
        }
      })

  db.run(`INSERT INTO users (first_name, telephone_number ) VALUES ('${ctx.message.from.first_name}', ${phone_number})`)
});


bot.command('admin', (ctx) =>{

  bot.telegram.sendMessage(ctx.chat.id, 'Админ панель',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {text: 'adnim', callback_data: 'o'},
              {text: 'admin', callback_data: 'o2'}
            ],
            [
              {text: 'adnim', callback_data: 'o'},
              {text: 'admin', callback_data: 'o2'}
            ],
            [
              {text: 'adnim', callback_data: 'o'},
              {text: 'admin', callback_data: 'o2'}
            ],
            [
              {text: 'adnim', callback_data: 'o'},
              {text: 'admin', callback_data: 'o2'}



            ],

            [
              {text: 'adnim', callback_data: 'o'},
              {text: 'admin', callback_data: 'o2'}


            ],

            [

              {text: 'adnim', callback_data: '5o'},
              {text: 'admin', callback_data: 'o2'}



            ],

            [
              {text: 'adnim', callback_data: 'o'},
              {text: 'admin', callback_data: 'o2'}

            ],




            [



            ]
          ]
        }
      })



})

bot.command('start', (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, "Добро пожаловать, не забудь подтвердить номер", {
        parse_mode: "Markdown",

        reply_markup: {
          one_time_keyboard: true,

          keyboard: [
            [
              {
                text: "Поделиться номером телефона",
                request_contact: true,

              },


            ],

            [
              {
                text: "Поделиться локацей",
                request_location: true,

              },






            ],






          ],
          resize_keyboard: true,
          one_time_keyboard: true
        },
      });

      bot.telegram.sendMessage(ctx.chat.id, 'Выбери',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'Оформить профиль', callback_data: 'one1'},

        ],
        [
          {text: 'Мой профиль', callback_data: 'o'},

        ],


      ]
    }
  })


});







bot.action('one1', ctx => {



  bot.telegram.sendMessage(ctx.chat.id, 'Регистрация',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'Как вас зовут?', callback_data: 'o'},
          {text: 'Ввести имя', callback_data: 'name'}
        ],
        [
          {text: 'В какой сфере вы ищете работу?', callback_data: 'o'},
          {text: 'Посмотреть список', callback_data: 'work'}
        ],
        [
          {text: 'Отправьте своё резюме', callback_data: 'o5'},
          {text: 'Фаил либо ссылка', callback_data: 'fail'}
        ],
        [
          {text: 'Далее↩️', callback_data: 'one'},



        ],
      ]
    }
  })
})

bot.action('one', ctx => {



  bot.telegram.sendMessage(ctx.chat.id, ' Информация о себе',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'Вы сейчас работаете?', callback_data: 'o'},
          {text: 'Ответить', callback_data: 'o2'}
        ],
        [
          {text: ' Название последнего места работы', callback_data: 'o'},
          {text: 'Ввести текст', callback_data: 'work2'}
        ],
        [
          {text: 'В какой сфере?', callback_data: 'o'},
          {text: 'Список', callback_data: 'post'}
        ],
        [
          {text: 'На какой должности? ', callback_data: 'o'},
          {text: 'Ввести текст', callback_data: 'leader'}



        ],

        [
          {text: 'Когда вы начали работать в этой компании? ', callback_data: 'o'},
          {text: 'Выбрать', callback_data: 'data'}


        ],

        [

          {text: 'Спасибо, хотите указать еще одну компанию? ', callback_data: 'o'},
          {text: 'Выбрать', callback_data: 'kompani'}



        ],

        [
          {text: ' Какой у вас уровень образования? ', callback_data: 'o'},
          {text: 'Выбрать', callback_data: 'education'}

        ],




        [
          {text: 'Далее↩️', callback_data: 'one2'},
          {text: 'Назад↩️', callback_data: 'one1'}


        ]
      ]
    }
  })
})

bot.action('one2', ctx => {



  bot.telegram.sendMessage(ctx.chat.id, 'Мои навыки',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: ' Каким иностранным языком вы владеете?', callback_data: 'o'},
          {text: 'Ответить', callback_data: 'ino'}
        ],
        [
          {text: 'Какой у вас уровень владения?', callback_data: 'o'},
          {text: 'Ответить', callback_data: 'level'}
        ],
        [
          {text: 'Какими профессиональными навыками вы владеете?', callback_data: 'o'},
          {text: 'Ответить', callback_data: 'profi'}
        ],
        [
          {text: ' Какой у вас уровень владения? ', callback_data: 'o'},
          {text: 'Ответить', callback_data: 'ownership'}



        ],

        [
          {text: 'Далее↩️', callback_data: 'one3'},
          {text: 'Назад↩️', callback_data: 'one'}







        ],


      ]
    }
  })
})


// bot.command('start' ctx => {
//   bot.telegram.sendMessage(ctx.chat.id, 'Мои навыки',
//   {
//     reply_markup: {
//       inline_keyboard: [
//         [
//         switchToChat(text: 'Эдгар' string, value: 'ihb' string, hide?: boolean): Hideable<InlineKeyboardButton.SwitchInlineButton>
//         ]
//       ]
//     }
//   })
// })



bot.action('one3', async(ctx) => {

  bot.telegram.sendMessage(ctx.chat.id, 'Cоциальные сети',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'У вас есть профиль в социальных сетях?', callback_data: 'o'},
          {text: 'Выбрать', callback_data: 'profil'}
        ],
        [
          {text: 'Укажите ссылку на ваш профиль', callback_data: 'o'},
          {text: 'Ответить', callback_data: 'profil2'}
        ],
          [

                {text: 'Назад↩️', callback_data: 'one2'},
                {text: 'Перейти в профиль', callback_data: '/start'}



          ],
      ]
    }
  })
})

bot.action('profil2', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'Ввидите текст ', callback_data: 'text5'},
          {text: 'Назад', callback_data: 'one3'},



        ],


      ]
    }
  })

})

bot.action('profil', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [

        [
          {text: 'Linkedin ', callback_data: 'one3'},
          {text: 'HeadHunter', callback_data: 'one3'},
          {text: 'Instagram', callback_data: 'one3'},



        ],

        [
          {text: 'У меня нет профилей в соц. сетях', callback_data: 'one3'}

        ],


      ]
    }
  })


})


bot.action('profi', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: ' Work1', callback_data: 'o'},
          {text: 'Work2', callback_data: 'one1'},
          {text: ' Work3', callback_data: 'o'},
          {text: 'Work4', callback_data: 'one1'},


       ],

       [
          {text: ' Work5', callback_data: 'o'},
          {text: 'Work6', callback_data: 'one1'},
          {text: ' Work7', callback_data: 'o'},
          {text: 'Work8', callback_data: 'one1'},

       ],
        [
          {text: 'Поиск🔍', callback_data: 'profi'},
          {text: 'Назад↩️', callback_data: 'one2'},


        ],


      ]
    }
  })

})

bot.action('profi', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'Поиск🔍', callback_data: 'one'},
          {text: 'Назад↩️', callback_data: 'one2'},


        ],


      ]
    }
  })

})


bot.action('ownership', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'от 1 до 10', callback_data: 'text4'},
          {text: 'Добавить еще один навык', callback_data: 'profi'},


        ],

        [
          {text: 'Назад↩️', callback_data: 'one2'},


        ]

      ]
    }
  })
})



bot.action('level', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'от 1 до 10', callback_data: 'text3'},
          {text: 'Добавить еще один язык', callback_data: 'ino'},


        ],

        [
          {text: 'Назад↩️', callback_data: 'one2'},
          {text: 'Далее↩️', callback_data: 'profi'}

        ]

      ]
    }
  })

})

bot.action('ino' , ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: ' Work1', callback_data: 'o'},
          {text: 'Work2', callback_data: 'one1'},
          {text: ' Work3', callback_data: 'o'},
          {text: 'Work4', callback_data: 'one1'},


       ],

       [
          {text: ' Work5', callback_data: 'o'},
          {text: 'Work6', callback_data: 'one1'},
          {text: ' Work7', callback_data: 'o'},
          {text: 'Work8', callback_data: 'one1'},

       ],
          [

            {text: 'Поиск', callback_data: 'one'},
            {text: 'Я не владею иностранными языкам', callback_data: 'one2'}

          ],
        [

          {text: '2↩️', callback_data: 'ino2'},


        ],

      ]
    }
  })

})

bot.action('ino2', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {text: ' Work1', callback_data: 'o'},
              {text: 'Work2', callback_data: 'one1'},
              {text: ' Work3', callback_data: 'o'},
              {text: 'Work4', callback_data: 'one1'},


            ],

            [
              {text: ' Work5', callback_data: 'o'},
              {text: 'Work6', callback_data: 'one1'},
              {text: ' Work7', callback_data: 'o'},
              {text: 'Work8', callback_data: 'one1'},

            ],
            [

              {text: 'Поиск🔍', callback_data: 'one'},
              {text: 'Я не владею иностранными языкам', callback_data: 'one2'}

            ],
            [


              {text: '1↩️', callback_data: 'ino'}


            ],

          ]
        }
      })


})

bot.action('o2', ctx =>{
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'Да', callback_data: 'one'},
          {text: 'Нет', callback_data: 'one'}


        ],

      ]
    }
  })


})

bot.action('education', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'Законченное высшее', callback_data: 'work2'},
          {text: 'Незаконченное высшее ', callback_data: 'kompani'},
          {text: 'Среднее специальное', callback_data: 'one'},


        ],

        [
          {text: 'Назад↩️', callback_data: 'one'}

        ],

      ]
    }
  })

})
bot.action('pagin', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {text: ' Work1', callback_data: 'o'},
              {text: 'Work2', callback_data: 'one1'},
              {text: ' Work3', callback_data: 'o'},
              {text: 'Work4', callback_data: 'one1'},




            ],

              [
                {text: ' Work1', callback_data: 'o'},
                {text: 'Work2', callback_data: 'one1'},
                {text: ' Work3', callback_data: 'o'},
                {text: 'Work4', callback_data: 'one1'},

              ],

              [
                {text: '1↩️', callback_data: 'work'}

              ],

          ]
        }
      })

})



bot.action('kompani', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'Да', callback_data: 'work2'},
          {text: 'Нет', callback_data: 'kompani'},
          {text: 'Назад↩️', callback_data: 'one'}

        ],

      ]
    }
  })

})

bot.action('data', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'Год', callback_data: 'one'},
          {text: 'Месяц', callback_data: 'one'},
          {text: 'Назад↩️', callback_data: 'one'}

        ],

      ]
    }
  })

})

bot.action('leader', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'Ввести текст', callback_data: 'text1'},

          {text: 'Назад↩️', callback_data: 'one'}

        ],

      ]
    }
  })

})

bot.action('post', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [

        [
          {text: ' Work1', callback_data: 'o'},
          {text: 'Work2', callback_data: 'one1'},
          {text: ' Work3', callback_data: 'o'},
          {text: 'Work4', callback_data: 'one1'},


       ],

       [
          {text: ' Work5', callback_data: 'o'},
          {text: 'Work6', callback_data: 'one1'},
          {text: ' Work7', callback_data: 'o'},
          {text: 'Work8', callback_data: 'one1'},

       ],
        [

          {text: 'Поиск🔍', callback_data: 'one'},
          {text: 'Назад↩️', callback_data: 'one'},
          {text: '2↩️', callback_data: 'post2'}

        ],

      ]
    }
  })


})

bot.action('post2', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
      {
        reply_markup: {
          inline_keyboard: [

            [
              {text: ' Work1', callback_data: 'o'},
              {text: 'Work2', callback_data: 'o'},
              {text: ' Work3', callback_data: 'o'},
              {text: 'Work4', callback_data: 'o'},


            ],

            [
              {text: ' Work5', callback_data: 'o'},
              {text: 'Work6', callback_data: 'o'},
              {text: ' Work7', callback_data: 'o'},
              {text: 'Work8', callback_data: 'o'},

            ],
            [

              {text: 'Поиск🔍', callback_data: 'oe'},
              {text: 'Назад↩️', callback_data: 'post'},


            ],

          ]
        }
      })

})

bot.action('name', ctx =>{
  bot.telegram.sendMessage(ctx.chat.id, 'Имя',
  {
    reply_markup: {
      inline_keyboard: [
        [

          {text: 'Ввидите имя', callback_data: 'on', },
          {text: 'Назад↩️', callback_data: 'one1'}

        ],

      ]
    }
  })


})


bot.action('on', ctx => {
  ctx.reply('Ввидите имя')
})

bot.action('work', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: ' Work1', callback_data: 'o'},
          {text: 'Work2', callback_data: 'o1'},
          {text: ' Work3', callback_data: 'o'},
          {text: 'Work4', callback_data: 'o'},


       ],

       [
          {text: ' Work5', callback_data: 'o'},
          {text: 'Work6', callback_data: 'o'},
          {text: ' Work7', callback_data: 'o'},
          {text: 'Work8', callback_data: 'one1'},

       ],

        [
          {text: ' Поиск🔍', callback_data: 'o'},
          {text: 'Назад↩️', callback_data: 'o'},
          {text: '2↩️', callback_data: 'pagin'}



        ],

      ]
    }
  })




})

bot.action('fail' , ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [


          {text: 'Фаил' , callback_data: 'o'}



        ],
        [
           {text: 'Назад↩️', callback_data: 'one1'},
        ],

      ]
    }
  })

})


bot.action('work2', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Вопрос',
  {
    reply_markup: {
      inline_keyboard: [
        [
          {text: 'Ввести текст', callback_data: 'text'},

          {text: 'Назад↩️', callback_data: 'one'}

        ],

      ]
    }
  })


})

bot.action('text', ctx => {
  ctx.reply('Ввидите текст в строке')
})

bot.action('text1', ctx => {
  ctx.reply('Ввидите текст в строке')
})

bot.action('text3', ctx => {
  ctx.reply('Ввидите текст в строке')
})

bot.action('text4', ctx => {
  ctx.reply('Ввидите текст в строке')
})

bot.action('text5', ctx => {
  ctx.reply('Ввидите текст в строке')
})



bot.hears('Принято', ctx => ctx.reply(getRandomNumber().toString(), numberInlineKeyboard));
bot.launch().then(() => console.log('Started'));





process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));






























