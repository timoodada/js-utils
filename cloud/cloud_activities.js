(function (){
  return [{
    name: '奥普斯的慷慨',
    open: false,
    children: [...[480656, 480664].map(item => {
      return {
        iActivityId: '154012',
        iFlowId: item
      }
    })]
  }, {
    name: '斗志昂扬-预约新职业斗士',
    open: false,
    bind: true,
    bindData: {
      iActivityId: 147030,
      iFlowId: 462741
    },
    children: [...[462779, 462788].map(item => {
      return {
        iActivityId: '147030',
        iFlowId: item
      }
    }), ...[595809, 595810, 595811].map(item => {
      return {
        iActivityId: '147030',
        iFlowId: '462830',
        iGiftId: item
      }
    })]
  }, {
    name: '斗气冲天battle登录礼',
    open: true,
    bind: true,
    bindData: {
      iActivityId: 151006,
      iFlowId: 472890
    },
    children: [...['616928', '616934', '616935', '616936', '616937',
      '616938', '616939', '616940', '616941', '616942',
      '616943', '616944', '616945', '616946', '616947',
      '616948', '616949', '616950', '616951', '616952',
      '616953', '616954', '616955', '617108', '617109',
      '617110', '617111', '617112'].map(item => {
      return {
        iActivityId: '151006',
        iFlowId: '474062',
        giftId: item,
        buyType: 'A'
      }
    }), ...['617113', '617114', '617115', '617116', '617117',
      '617118', '617119', '617120', '617121', '617122',
      '617123', '617124', '617127', '617128', '617129',
      '617130', '617131', '617132', '617134', '617135',
      '617136', '617137', '617138', '617139', '617140',
      '617141', '617142', '617144'].map(item => {
      return {
        iActivityId: '151006',
        iFlowId: '474062',
        giftId: item,
        buyType: 'B'
      }
    })]
  }, {
    name: '8月飞龙商店',
    open: true,
    bind: true,
    bindData: {
      iActivityId: 155466,
      iFlowId: 484292
    },
    children: [640839, 640835, 640138, 640133, 640134, 640135, 640136, 640137, 640140, 640139, 640141, 640142].map(item => {
      return {
        iActivityId: '155466',
        iFlowId: '484290',
        item
      }
    })
  }, {
    name: '洪门挑战-集章换礼',
    open: true,
    bind: true,
    bindData: {
      iActivityId: 148672,
      iFlowId: 467050
    },
    children: [{
      iActivityId: 148672,
      iFlowId: 467628
    }, ...[2, 3, 4, 5, 6].map(item => {
      return {
        iTaskId: item,
        iActivityId: 148672,
        iFlowId: 466890
      }
    }), ...[600475, 600485, 600602, 600603, 600604].map(item => {
      return {
        iActivityId: 148672,
        iFlowId: 466888,
        iGiftId: item
      }
    })]
  }, {
    name: '心悦俱乐部',
    open: true,
    bind: true,
    bindData: {
      iActivityId: 152141,
      iFlowId: 477163,
      sServiceDepartment: 'xinyue'
    },
    children: [...['476449', '476450', '477050', '477055', '477057',
      '477061', '477063', '477081', '477082', '477111',
      '477112', '477136', '477137', '477163', '477164',
      '477165', '477388', '477412', '477420', '477576',
      '477651', '477666', '477668', '477785', '477916',
      '477942', '477943', '477944', '477946', '477982',
      '478130', '478137', '478140', '478141', '478142',
      '478150', '478154', '478161', '478196', '478197',
      '478251', '478254', '478265', '478268', '478272',
      '478275', '478282', '478286', '478292', '478297',
      '478304', '478328', '478330', '478336', '478352',
      '478359', '478365', '478366', '478370', '478371',
      '478372', '478373', '478376', '478382', '478384',
      '478386', '478392', '478396', '478397', '479281',
      '482890', '482892', '482893', '482894', '482897',
      '482899', '482900', '482901', '482902', '482903',
      '482904', '482905', '482906', '482907', '482908',
      '482909', '482910'].map(item => {
      return {
        sServiceType: 'tgclub',
        iActivityId: 152141,
        iFlowId: item,
        sServiceDepartment: 'xinyue'
      }
    })]
  }, {
    name: '加速畅玩-激爽一夏',
    open: true,
    bind: true,
    bindData: {
      iActivityId: 154296,
      iFlowId: 481278
    },
    children: [...['481269', '481270', '481271', '481272', '481273', '481276', '481277', '481278', '481279', '481280', '481302', '481323', '481381'].map(item => {
      return {
        iActivityId: 154296,
        iFlowId: item
      }
    })]
  }]
})()