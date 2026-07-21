/**
 * 丹药数据
 * 字段说明：
 * - name
 *  - 名称
 * - category
 *  - 类别（灵草/丹药）
 * - grade
 *  - 品阶（凡人/炼气/筑基/结丹/元婴/化神/其他）
 * - description - 说明
 * - usage       
 *  - 用途
 * - price       
 *  - 价格
 * - source      
 *  - 出处
 */
export const danyaoData = [
  // ---------- 灵草 ----------
  {
    name: '七星草',
    category: '灵草',
    grade: '其他',
    description: '其他未知',
    usage: '十年以上的七星草是制作符纸的最佳原料',
    price: '不详',
    source: '第一百三十七章 金竺笔'
  },
  {
    name: '黄龙草',
    category: '灵草',
    grade: '其他',
    description: '十几年药龄的叶子有些发紫',
    usage: '推断是炼制黄龙丹的主药',
    price: '不详',
    source: '第二十五章 插柳成'
  },
  {
    name: '苦莲花',
    category: '灵草',
    grade: '其他',
    description: '十几年药龄的开了九个花瓣',
    usage: '推断是炼制清灵散的主药',
    price: '不详',
    source: '第二十五章 插柳成'
  },
  {
    name: '忘忧果',
    category: '灵草',
    grade: '其他',
    description: '十几年药龄的果皮变成了黑色',
    usage: '推断是炼制忘忧丹的主药',
    price: '不详',
    source: '第二十五章 插柳成'
  },
  {
    name: '三乌草',
    category: '灵草',
    grade: '其他',
    description: '正常药龄的三乌草叶子是绿色的，百年药性是黄色，随着药龄增长，叶子渐渐的由黄色转变成了黄黑色，又由黄黑色变成了黑色，千年的叶子完全变得乌黑发亮',
    usage: '推断是炼制金髓丸的主药',
    price: '不详',
    source: '第二十五章 插柳成'
  },
  {
    name: '土菇花',
    category: '灵草',
    grade: '其他',
    description: '不仅对普通人有很强的毒性，而且对修仙者的元神也大有妨碍',
    usage: '不仅对普通人有很强的毒性，而且对修仙者的元神也大有妨碍',
    price: '不详',
    source: '第六十一章 神灭'
  },

  // ---------- 丹药 ----------
  {
    name: '筑基丹',
    category: '丹药',
    grade: '筑基',
    description: '丹方——主药：玉髓芝、紫猴花、天灵果；其他：千结花、黑芍草、金精参等三十一种辅药材，马老头的药园都有，只是需要数百年年份的火候；需要真火炼制，可以用地火代替',
    usage: '筑基丹的三大作用是：①助炼气期修士突破境界瓶颈、筑基成功；②洗髓易经，改善体质；③精进法力',
    price: '-',
    source: '第一百五十九章 天地灵药'
  },
  {
    name: '定颜丹',
    category: '丹药',
    grade: '其他',
    description: '丹方：既不需要真火炼制，也没有什么不认识的药材作原料，全都是些很常见的品种；药材要求千年以上的药性，才能作为定颜丹原料来用；不需要真火炼制',
    usage: '保持容颜不变',
    price: '-',
    source: '第一百五十九章 天地灵药'
  },
  {
    name: '黄龙丹',
    category: '丹药',
    grade: '炼气',
    description: '有增加功力、脱胎换骨的妙用',
    usage: '炼气期十层以下效果明显，十、十一层以量取胜',
    price: '1块低阶灵石/颗',
    source: '第二十七章 配灵药'
  },
  {
    name: '金髓丸',
    category: '丹药',
    grade: '炼气',
    description: '有增加功力、脱胎换骨的妙用',
    usage: '炼气期十层以下效果明显，十、十一层以量取胜',
    price: '1块低阶灵石/颗',
    source: '第二十七章 配灵药'
  },
  {
    name: '清灵散',
    category: '丹药',
    grade: '凡人',
    description: '解毒圣药，能解天下千百种剧毒',
    usage: '解毒圣药',
    price: '-',
    source: '第二十七章 配灵药'
  },
  {
    name: '养精丹',
    category: '丹药',
    grade: '凡人',
    description: '不论是受了多严重的内外伤，只要吃了这药一颗，即使不能起死回生，使伤势立刻痊愈，也可让伤势大为减轻，可保住性命',
    usage: '对内外伤都有奇效的灵药',
    price: '-',
    source: '第二十七章 配灵药'
  },
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