// data/lingfu.js

/**
 * 灵符数据
 * 可随时增删条目或调整字段
 */
export const lingfuData = [
  // 材料类
  {
    name: '一打空白符纸', category: '材料', grade: '初级·下阶',
    effect: '可以绘制所有属性的灵符（131）', price: '1',
    attribute: '全'
  },
  // 成品类
  {
    name: '灵符', category: '成品', grade: '初级·下阶',
    effect: '不同种类法术价格不同，防御、功能稀缺的更贵些（131）', price: '1-2',
    attribute: '全'
  },
  {
    name: '灵符', category: '成品', grade: '初级·中阶',
    effect: '不同种类法术价格不同，防御、功能稀缺的更贵些（131）', price: '6-10',
    attribute: '全'
  },
  {
    name: '灵符', category: '飞行', grade: '初级·上阶',
    effect: '不同种类法术价格不同，防御、功能稀缺的更贵些（131）', price: '30',
    attribute: '全'
  },
  {
    name: '灵符', category: '防御', grade: '初级·上阶',
    effect: '不同种类法术价格不同，攻击、防御、功能稀缺的更贵些（131）', price: '50',
    attribute: '全'
  },
  {
    name: '灵符', category: '攻击', grade: '初级·上阶',
    effect: '不同种类法术价格不同，攻击、防御、功能稀缺的更贵些（131）', price: '50',
    attribute: '全'
  },
  // 增副类
  {
    name: '巨力符', category: '增副', grade: '品阶不详',
    effect: '不详', price: '不详',
    attribute: '不详'
  },
  {
    name: '轻身符', category: '增副', grade: '初级·下阶',
    effect: '身轻如燕，跃高数丈', price: '5',
    attribute: '风'
  },
  // 飞行类
  {
    name: '飞天符', category: '飞行', grade: '初级·上阶',
    effect: '可腾空远行，比一般飞禽飞的快多了，只要此符灵气不散，还可反复多次使用', price: '30',
    attribute: '风'
  },
  // 防御类
  {
    name: '金刚符', category: '防御', grade: '初级·中阶',
    effect: '体表泛起金光，可挡凡铁', price: '9',
    attribute: '金'
  },
  {
    name: '金光符', category: '防御', grade: '初级·下阶',
    effect: '体表泛起金光，可挡凡铁', price: '8',
    attribute: '金'
  },
  {
    name: '土盾符', category: '防御', grade: '初级·中阶',
    effect: '身前凝聚土墙', price: '25',
    attribute: '土'
  },
  {
    name: '冰甲符', category: '防御', grade: '初级·高阶',
    effect: '周身覆盖寒冰铠甲', price: '60',
    attribute: '水'
  },

  // 攻击类
  {
    name: '雷火符', category: '攻击', grade: '品阶不详',
    effect: '不详', price: '不详',
    attribute: '雷/火'
  },
  {
    name: '火龙符', category: '攻击', grade: '不详',
    effect: '不详', price: '不详',
    attribute: '火'
  },
  {
    name: '火弹符', category: '攻击', grade: '初级·下阶',
    effect: '射出一枚火球', price: '10',
    attribute: '火'
  },
  {
    name: '雷击符', category: '攻击', grade: '初级·中阶',
    effect: '引一道雷电劈落', price: '30',
    attribute: '雷'
  },
  {
    name: '风刃符', category: '攻击', grade: '初级·高阶',
    effect: '凝出数道锋利风刃', price: '70',
    attribute: '风'
  },

  // 治疗类
  {
    name: '回春符', category: '治疗', grade: '初级·下阶',
    effect: '加速伤口愈合，止血生肌', price: '6',
    attribute: '木'
  },
  {
    name: '续骨符', category: '治疗', grade: '初级·中阶',
    effect: '接续断骨，正骨舒筋', price: '22',
    attribute: '木'
  },
  {
    name: '清心符', category: '治疗', grade: '初级·高阶',
    effect: '驱散诅咒瘴气，清明心神', price: '55',
    attribute: '水/木'
  }
]
/**
 * 筛选选项
 */
export const categories = [
  { label: '✨ 全部类别', value: 'all' },
  { label: '🕊️ 飞行', value: '飞行' },
  { label: '🛡️ 防御', value: '防御' },
  { label: '⚔️ 攻击', value: '攻击' },
  { label: '💚 治疗', value: '治疗' }
]

export const grades = [
  { label: '📊 全部等级', value: 'all' },
  { label: '初级·下阶', value: '初级·下阶' },
  { label: '初级·中阶', value: '初级·中阶' },
  { label: '初级·上阶', value: '初级·上阶' }
]