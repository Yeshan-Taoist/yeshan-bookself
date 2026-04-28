// data/zawu.js

export const zawuData = [
  // 书
  {
    name: '《基础咒决残本》',
    category: '书',
    description: '里面都是些最基础的初级咒决，有七八个下阶位的法术，和一个初级中阶的“地刺术”记载在书内',
    obtain: '太南小会，丹药换取飞天符的搭头',
    price: '搭头'
  },
  {
    name: '《五行初级咒决大全》',
    category: '书',
    description: '内容不详',
    obtain: '太南小会，太贵未购买',
    price: '90块低阶灵石'
  },
  {
    name: '《水咒符法基础》',
    category: '书',
    description: '内容不详',
    obtain: '太南小会，太贵未购买',
    price: '60块低阶灵石'
  },

  // 玉简
  {
    name: '空白玉简（标准）',
    category: '玉简',
    description: '可录制功法、法术，反复读写',
    obtain: '杂物铺',
    price: '2 灵石/枚'
  },
  {
    name: '传音玉简',
    category: '玉简',
    description: '成对使用，百里内即时传音',
    obtain: '炼器阁定制',
    price: '50 灵石/对'
  },
  {
    name: '遁术心得玉简',
    category: '玉简',
    description: '某筑基散修的遁术感悟记录',
    obtain: '黑市拍卖',
    price: '200 灵石起'
  },

  // 器物
  {
    name: '储物袋（初阶）',
    category: '器物',
    description: '内含三尺见方空间，不可存活物',
    obtain: '门派配给',
    price: '100 灵石'
  },
  {
    name: '聚灵蒲团',
    category: '器物',
    description: '打坐时小幅提升灵气吸纳速度',
    obtain: '坊市法器店',
    price: '60 灵石'
  },
  {
    name: '避尘珠',
    category: '器物',
    description: '佩戴后周身洁净，不染尘埃',
    obtain: '拍卖会所得',
    price: '300 灵石'
  },
  {
    name: '灵泉壶',
    category: '器物',
    description: '每日可凝出一壶灵泉水，饮用恢复法力',
    obtain: '秘境遗迹发现',
    price: '非卖品'
  }
]

export const zawuCategories = [
  { label: '📚 全部', value: 'all' },
  { label: '📖 书', value: '书' },
  { label: '💾 玉简', value: '玉简' },
  { label: '🔮 器物', value: '器物' }
]