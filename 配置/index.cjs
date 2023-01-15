/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7a2334f6f5058861',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '101ba9715ae36522aad68d85fd139374',

  PROVINCE: '西藏',
  CITY: '日喀则',

  USERS: [
    {
      // 想要发送的人的名字
      name: '乖乖',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o13Q26vb51D_Pjq_qpy-hyh6Al-Y',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'TlkU641tyZI_p46kyYF9FkRe8lmGOFphzxv9TCLgkRg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '乖乖', year: '2002', date: '11-02',
        },
        {
          type: '节日', name: '在一起纪念日', year: '2022', date: '12-06',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-12-06' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'o13Q26vb51D_Pjq_qpy-hyh6Al-Y',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

