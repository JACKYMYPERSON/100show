/*各区域产品挂牌数-开始*/
//牧草产能区域分布数据
var DataCenter = [
  {
    name: '北海数据中心',
    num: '110569'
  },
  {
    name: '上海数据中心',
    num: '110569'
  },
  {
    name: '北京数据中心',
    num: '110569'
  },
  {
    name: '深圳数据中心',
    num: '110569'
  }
]

/*各区域产品挂牌数-结束*/
//牧草
var ChanNeng = [
  {
    name: '西南地区种植面积',
    num: 891433
  },
  {
    name: '华南地区种植面积',
    num: 189472
  },
  {
    name: '北方地区种植面积',
    num: 63803
  }
]
//入驻会员实时动态滚动数据
var RZstatus = [
  '绿邦创景成功挂牌入驻南方草交所',
  '晨光金品百花园成功挂牌入驻南方草交所',
  '绿邦创景成功挂牌入驻南方草交所',
  '晨光金品百花园成功挂牌入',
  '绿邦创景成功挂牌入驻南方草交所',
  '晨光金品百花园成功挂牌入驻南方草交所',
  '绿邦创景成功挂牌入驻南方草交所',
  '晨光金品百花园成功挂牌入',
  '绿邦创景成功挂牌入驻南方草交所',
  '晨光金品百花园成功挂牌入驻南方草交所',
  '绿邦创景成功挂牌入驻南方草交所',
  '晨光金品百花园成功挂牌入'
]
var callMsg = [
  '绿邦创景卖出500000万元人民币',
  '绿邦创景卖出500000万元人民币',
  '猪猪侠买入500000万元人民币'
]
var CJstatus = [
  [
    {
      num: 'ASDA5484561515',
      name: '草牧板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '草牧板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '草牧板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '草牧板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '草牧板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '草牧板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '草牧板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '草牧板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    }
  ],
  [
    {
      num: 'ASDA5484561515',
      name: '三元生猪',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '三元生猪',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '三元生猪',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '三元生猪',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '三元生猪',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '三元生猪',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '三元生猪',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '三元生猪',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    }
  ],
  [
    {
      num: 'ASDA5484561515',
      name: '牛板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '牛板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '牛板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '牛板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '牛板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '牛板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '牛板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '牛板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    }
  ],
  [
    {
      num: 'ASDA5484561515',
      name: '羊板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '羊板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '羊板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '羊板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '羊板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '羊板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '羊板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    },
    {
      num: 'ASDA5484561515',
      name: '羊板块',
      cont: '100头',
      weight: '105 - 120公斤/头 ',
      time: '2018-06-11',
      state: '已成交'
    }
  ]
]
