/**
 * 丹药数据
 * 字段说明：
 *   name        - 名称
 *   category    - 类别（灵草 / 丹药）
 *   grade       - 品阶（凡人 / 炼气 / 筑基 / 结丹 / 元婴 / 化神 / 其他）
 *   description - 说明
 *   usage       - 用途
 *   price       - 价格
 *   source      - 出处
 */
export const danyaoData = [
  // ---------- 灵草 ----------
  {
    name: '黄精芝',
    category: '灵草',
    grade: '其他',
    description: '千年灵草，药性温和，可入多种丹药',
    usage: '炼制培元类丹药的主材',
    price: '500 灵石/株',
    source: '血色禁地'
  },
  {
    name: '紫韵龙皇参',
    category: '灵草',
    grade: '结丹',
    description: '形如小龙，通体紫金，蕴含庞大灵气',
    usage: '结丹期突破瓶颈所用丹药的核心材料',
    price: '3000 灵石/株',
    source: '乱星海秘境'
  },
  {
    name: '天元果',
    category: '灵草',
    grade: '元婴',
    description: '三百年开花，三百年结果，可直接吞服增长修为',
    usage: '元婴期修士增进法力的珍稀灵果',
    price: '8000 灵石/枚',
    source: '大晋拍卖会'
  },

  // ---------- 丹药 ----------
  {
    name: '黄龙丹',
    category: '丹药',
    grade: '炼气',
    description: '固本培元，可增进炼气期修士法力',
    usage: '炼气期日常修炼、突破小瓶颈',
    price: '5 灵石/瓶',
    source: '韩立炼制（太南小会出售）'
  },
  {
    name: '金髓丸',
    category: '丹药',
    grade: '炼气',
    description: '比黄龙丹药力更强，适合炼气中后期',
    usage: '炼气中期以上修士增进修为',
    price: '8 灵石/瓶',
    source: '韩立炼制'
  },
  {
    name: '筑基丹',
    category: '丹药',
    grade: '筑基',
    description: '炼气期大圆满修士突破筑基的必备丹药',
    usage: '突破筑基瓶颈',
    price: '2000 灵石/颗',
    source: '黄枫谷配给 / 血色禁地试炼奖励'
  },
  {
    name: '定颜丹',
    category: '丹药',
    grade: '凡人',
    description: '驻颜养容，使容貌不老',
    usage: '保持容颜不变',
    price: '100 灵石/颗',
    source: '坊市杂货铺'
  },
  {
    name: '清灵散',
    category: '丹药',
    grade: '筑基',
    description: '解毒灵药，可化解多种筑基期以下的毒素',
    usage: '解毒',
    price: '50 灵石/份',
    source: '药王谷'
  },
  {
    name: '聚元丹',
    category: '丹药',
    grade: '结丹',
    description: '大幅提升结丹期修士法力凝聚速度',
    usage: '结丹期日常修炼',
    price: '600 灵石/瓶',
    source: '星宫秘制'
  },
  {
    name: '化婴丹',
    category: '丹药',
    grade: '元婴',
    description: '传说中的灵丹，可助结丹大圆满修士突破元婴',
    usage: '突破元婴瓶颈',
    price: '50000 灵石/颗',
    source: '大晋皇族密藏'
  }
]

/**
 * 类别筛选选项
 */
export const categories = [
  { label: '🌿 全部类别', value: 'all' },
  { label: '🌱 灵草', value: '灵草' },
  { label: '💊 丹药', value: '丹药' }
]

/**
 * 品阶筛选选项
 */
export const grades = [
  { label: '📊 全部品阶', value: 'all' },
  { label: '👤 凡人', value: '凡人' },
  { label: '🔥 炼气', value: '炼气' },
  { label: '🏔️ 筑基', value: '筑基' },
  { label: '☁️ 结丹', value: '结丹' },
  { label: '🌟 元婴', value: '元婴' },
  { label: '👑 化神', value: '化神' },
  { label: '❓ 其他', value: '其他' }
]