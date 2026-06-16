// data/lingfu.js

/**
 * 灵符数据
 * 可随时增删条目或调整字段
 */
export const lingfuData = [
  // 材料类
  {
    name: '一打空白符纸', category: '材料', grade: '初级·下阶',
    effect: '可以绘制所有属性的灵符（第一百三十一章 灵石与灵符）', price: '1',
    attribute: '全'
  },
  // 成品类
  {
    name: '灵符', category: '成品', grade: '初级·下阶',
    effect: '不同种类法术价格不同，防御、功能稀缺的更贵些（第一百三十一章 灵石与灵符）', price: '1-2',
    attribute: '全'
  },
  {
    name: '灵符', category: '成品', grade: '初级·中阶',
    effect: '不同种类法术价格不同，防御、功能稀缺的更贵些（第一百三十一章 灵石与灵符）', price: '6-10',
    attribute: '全'
  },
  {
    name: '灵符', category: '飞行', grade: '初级·上阶',
    effect: '不同种类法术价格不同，防御、功能稀缺的更贵些（第一百三十一章 灵石与灵符）', price: '30',
    attribute: '全'
  },
  {
    name: '灵符', category: '防御', grade: '初级·上阶',
    effect: '不同种类法术价格不同，攻击、防御、功能稀缺的更贵些（第一百三十一章 灵石与灵符）', price: '50',
    attribute: '全'
  },
  {
    name: '灵符', category: '攻击', grade: '初级·上阶',
    effect: '不同种类法术价格不同，攻击、防御、功能稀缺的更贵些（第一百三十一章 灵石与灵符）', price: '50',
    attribute: '全'
  },
  // 增幅类
  {
    name: '巨力符', category: '增幅', grade: '初级·下阶',
    effect: '根据原文推算为初级下阶（第一百三十一章 灵石与灵符）', price: '不详',
    attribute: '不详'
  },
  {
    name: '轻身符', category: '增幅', grade: '初级·下阶',
    effect: '身轻如燕，跃高数丈', price: '5',
    attribute: '风'
  },
  // 飞行类
  {
    name: '飞天符', category: '飞行', grade: '初级·上阶',
    effect: '可腾空远行，比一般飞禽飞的快多了，只要此符灵气不散，还可反复多次使用（第一百三十一章 灵石与灵符）', price: '30',
    attribute: '风'
  },
  // 防御类
  {
    name: '风墙符', category: '防御', grade: '初级·高阶',
    effect: '一张黄符：那道黄符随着掐诀声落下，猛然间白光大放，忽的化为一股白色飓风，高约十几丈，横卧在了施法者的身前，挡住敌人进攻的路线；风墙还可以分成多股预防周身不同方向的敌人进攻（第一百三十一章 灵石与灵符）', price: '不详',
    attribute: '风'
  },
  {
    name: '金刚符', category: '防御', grade: '初级·中阶',
    effect: '体表泛起金光，可挡凡铁（第一百三十一章 灵石与灵符）', price: '9',
    attribute: '金'
  },

  // 攻击类
  {
    name: '连珠雷符', category: '攻击', grade: '初级·中阶',
    effect: '连珠雷（第一百二十八章 太南小会）', price: '不详',
    attribute: '雷'
  },
  {
    name: '冰弹符', category: '攻击', grade: '初级·下阶',
    effect: '冰弹（第一百二十八章 太南小会）', price: '不详',
    attribute: '冰'
  },
  {
    name: '雷火符', category: '攻击', grade: '初级·中阶',
    effect: '根据原文推算为初级下阶（第一百三十一章 灵石与灵符）', price: '不详',
    attribute: '雷/火'
  },
  {
    name: '寒冰符', category: '攻击', grade: '初级·下阶',
    effect: '根据原文推算为初级下阶（第一百三十七章 金竺笔）', price: '不详',
    attribute: '冰'
  },
  {
    name: '定神符', category: '攻击', grade: '初级·下阶',
    effect: '（第一百三十一章 灵石与灵符）', price: '不详',
    attribute: '不详'
  },

  // 辅助类
  {
    name: '遁形符', category: '辅助', grade: '初级·中阶',
    effect: '隐形（第一百三十九章 法宝残片）', price: '不详',
    attribute: '无'
  },
  {
    name: '回春符', category: '辅助', grade: '初级·下阶',
    effect: '大幅恢复体力，根据原文推算为初级下阶（第一百三十七章 金竺笔）', price: '不详',
    attribute: '无'
  },
  {
    name: '隐身符', category: '辅助', grade: '初级·下阶',
    effect: '隐身（第一百二十八章 太南小会）', price: '22',
    attribute: '无'
  },
  {
    name: '遁地符', category: '辅助', grade: '初级·下阶',
    effect: '遁地（第一百二十八章 太南小会）', price: '22',
    attribute: '土'
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
  { label: '📈 增幅', value: '增幅' },
  { label: '💚 辅助', value: '辅助' }
]

export const grades = [
  { label: '📊 全部等级', value: 'all' },
  { label: '初级·下阶', value: '初级·下阶' },
  { label: '初级·中阶', value: '初级·中阶' },
  { label: '初级·上阶', value: '初级·上阶' }
]