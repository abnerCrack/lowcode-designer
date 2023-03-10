module.exports = {
  // type ç±»å
  types: [
    {
      value: 'refactor ð',
      name: 'ð éæä»£ç ãä¸åæ¬ bug ä¿®å¤ãåè½æ°å¢',
    },
    { value: 'feat â¨ ', name: 'â¨ æ°å¢äº§ååè½' },
    { value: 'fix ð ', name: 'ð ä¿®å¤ bug' },
    { value: 'docs ð ', name: 'ð ææ¡£çåæ´' },
    {
      value: 'style ð',
      name: 'ð ä¸æ¹åä»£ç åè½çåå¨(å¦å é¤ç©ºæ ¼ãæ ¼å¼åãå»ææ«å°¾åå·ç­)',
    },
    {
      value: 'perf â¡ ',
      name: 'â¡ æ§è½ä¼å',
    },
    { value: 'test â ', name: 'â æ·»å ãä¿®æ¹æµè¯ç¨ä¾' },
    {
      value: 'build ð·â',
      name: 'ð·â æå»ºæµç¨ãå¤é¨ä¾èµåæ´ï¼æ¯å¦åçº§ npm åãä¿®æ¹ webpack éç½®',
    },
    { value: 'ci ð§ ', name: 'ð§ ä¿®æ¹äº CI éç½®ãèæ¬' },
    {
      value: 'chore',
      name: 'å¯¹æå»ºè¿ç¨æè¾å©å·¥å·ååºçæ´æ¹,ä¸å½±åæºæä»¶ãæµè¯ç¨ä¾çå¶ä»æä½',
    },
    { value: 'revert âª ', name: 'âª åæ» commit' },
  ],

  // scope ç±»åï¼éå¯¹ React é¡¹ç®
  scopes: [
    ['service', 'æå¡'],
    ['controller', 'æ§å¶å¨'],
    // å¦æéæ© custom ,åé¢ä¼è®©ä½ åè¾å¥ä¸ä¸ªèªå®ä¹ç scope , ä¹å¯ä»¥ä¸è®¾ç½®æ­¤é¡¹ï¼ æåé¢ç allowCustomScopes è®¾ç½®ä¸º true
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)}(${description})`,
    };
  }),

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // å¯ä»¥è®¾ç½® scope çç±»åè· type çç±»åå¹éé¡¹ï¼ä¾å¦: 'fix'
  /*
      scopeOverrides: {
        fix: [
          { name: 'merge' },
          { name: 'style' },
          { name: 'e2eTest' },
          { name: 'unitTest' }
        ]
      },
     */
  // è¦åæç¤ºçä¿¡æ¯
  messages: {
    type: 'è¯·ç¡®ä¿ä½ çæäº¤éµå¾ªäºåå­æäº¤è§èï¼\néæ©ä½ è¦æäº¤çç±»å:',
    scope: '\n éæ©ä¸ä¸ª scope (å¯é):',
    // éæ© scope: custom æ¶ä¼åºä¸é¢çæç¤º
    customScope: 'è¯·è¾å¥èªå®ä¹ç scope:',
    subject: 'å¡«åä¸ä¸ªç®ç­ç²¾ç¼çæè¿°è¯­å¥:\n',
    body: 'æ·»å ä¸ä¸ªæ´å è¯¦ç»çæè¿°ï¼å¯ä»¥éä¸æ°å¢åè½çæè¿°æ bug é¾æ¥ãæªå¾é¾æ¥ (å¯é)ãä½¿ç¨ "|" æ¢è¡:\n',
    breaking: 'åä¸¾éå¼å®¹æ§éå¤§çåæ´ (å¯é):\n',
    footer: 'åä¸¾åºææåæ´ç ISSUES CLOSED  (å¯é)ã ä¾å¦.: #31, #34:\n',
    confirmCommit: 'ç¡®è®¤æäº¤?',
  },

  // æ¯å¦åè®¸èªå®ä¹å¡«å scope ï¼è®¾ç½®ä¸º true ï¼ä¼èªå¨æ·»å ä¸¤ä¸ª scope ç±»å [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  // skipQuestions: [],

  // subject éå¶é¿åº¦
  subjectLimit: 100,
  // breaklineChar: '|', // æ¯æ body å footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
};
