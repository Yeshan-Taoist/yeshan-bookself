/**
 * 妖兽数据
 * 字段说明：
 *   name        - 名称
 *   category    - 类别（兽类 / 禽类 / 虫类）
 *   description - 描述
 *   notes       - 其他说明
 *   price       - 价格（灵石 / 材料价值）
 *   source      - 出处
 */
export const yaoshouData = [
  // ---------- 兽类 ----------
  {
    name: '铁线蛇',
    category: '兽类',
    description: '百年的鳞片能铸器',
    notes: '韩立在太南小会上闲逛时见识到的',
    price: '不详',
    source: '第一百三十九章 法宝残片'
  },
  {
    name: '吃金鼠',
    category: '兽类',
    description: '银色小鼠',
    notes: '韩立在太南小会上遇到可爱少女打算售出的金竺笔笔尖与此妖兽有关',
    price: '不详',
    source: '第一百三十九章 法宝残片'
  },
  {
    name: '金睛猿',
    category: '兽类',
    description: '二级妖兽金睛猿颈毛可以制作符笔笔尖',
    notes: '韩立在太南小会上遇到可爱少女打算售出的金竺笔笔尖与此妖兽有关',
    price: '不详',
    source: '第一百三十七章 金竺笔'
  },
  {
    name: '三尾猫',
    category: '兽类',
    description: '胡须应该是一种炼器材料',
    notes: '万小山自带一束三尾猫的胡须用于在太南小会交易',
    price: '不详',
    source: '第一百二十八章 太南小会'
  },

  // ---------- 禽类 ----------
  {
    name: '双首鹜',
    category: '禽类',
    description: '小牛般大小的双头怪鸟，似鹰非鹰，长满了灰色的羽毛，双翅展开足有数丈之宽，身下还有一对如同镰刀般锋利的爪子，而脖颈上两颗秃顶的凶恶鸟头，则有四只小眼微泛着绿光',
    notes: '越国第一修仙大族姑雨山燕家圈养的灵禽',
    price: '不详',
    source: '第一百三十六章 燕家'
  },

  // ---------- 虫类 ----------
  {
    name: '银翅蚁',
    category: '虫类',
    description: '其卵可以制药',
    notes: '韩立在太南小会上闲逛时见识到的',
    price: '不详',
    source: '第一百三十九章 法宝残片'
  },
]

/**
 * 类别筛选选项
 */
export const categories = [
  { label: '✨ 全部类别', value: 'all' },
  { label: '🐾 兽类', value: '兽类' },
  { label: '🕊️ 禽类', value: '禽类' },
  { label: '🐛 虫类', value: '虫类' }
]