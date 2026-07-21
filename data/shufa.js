/**
 * 法术数据
 * 字段说明：
 *   name        - 名称
 *   category    - 分类（攻击 / 防御 / 飞遁 / 符术 / 辅助）
 *   grade       - 品阶（沿用符箓等级体系）
 *   description - 描述
 *   price       - 价格
 *   source      - 出处
 */
export const shufaData = [
  // ---------- 攻击 ----------
  {
    name: '火花术',
    category: '攻击',
    grade: '初级·下阶',
    description: '《基础咒决残本》中记载',
    price: '-',
    source: '第一百三十八章 制符之道'
  },
  {
    name: '缠绕术',
    category: '攻击',
    grade: '初级·下阶',
    description: '《基础咒决残本》中记载',
    price: '-',
    source: '第一百三十八章 制符之道'
  },
  {
    name: '冰冻术',
    category: '攻击',
    grade: '初级·下阶',
    description: '《基础咒决残本》中记载：范围性法术，可以让有水的地方凝结成冰，法术的威力大小，完全视施法者的法力深厚而定。若是大神通之人来施展，凝长江大河为冰川，也不是不可能的，炼气九层施法范围桌面大小',
    price: '-',
    source: '第一百三十八章 制符之道'
  },
  {
    name: '流沙术',
    category: '攻击',
    grade: '初级·下阶',
    description: '《基础咒决残本》中记载：范围性法术，可以让法力所及的地方化土为沙，法术的威力大小，完全视施法者的法力深厚而定。若是大神通之人来施展，就是化千里良田为沙漠，也不是不可能的，炼气九层施法范围桌面大小',
    price: '-',
    source: '第一百三十八章 制符之道'
  },
  {
    name: '地刺术',
    category: '攻击',
    grade: '初级·中阶',
    description: '《基础咒决残本》中记载',
    price: '-',
    source: '第一百三十八章 制符之道'
  },
  {
    name: '火弹术',
    category: '攻击',
    grade: '初级·下阶',
    description: '墨老收藏的八层长春功手抄本中记载：发射火弹攻击敌人',
    price: '-',
    source: '第六十七章 火弹术'
  },

  // ---------- 防御 ----------
  {
    name: '-',
    category: '防御',
    grade: '初级·上阶',
    description: '-',
    price: '-',
    source: '-'
  },

  // ---------- 飞遁 ----------
  {
    name: '升空术',
    category: '飞遁',
    grade: '初级·下阶',
    description: '《基础咒决残本》中记载',
    price: '-',
    source: '第一百三十八章 制符之道'
  },
  {
    name: '御风决',
    category: '飞遁',
    grade: '初级·下阶',
    description: '墨老收藏的八层长春功手抄本中记载：对目标施展“御风诀”之后，可以使其身轻如燕，脚尖轻轻一点地，就可轻易的窜出数丈之远而毫不费力',
    price: '-',
    source: '第六十七章 火弹术'
  },

  // ---------- 符术 ----------
  {
    name: '金刚术',
    category: '符术',
    grade: '初级·中阶',
    description: '金刚符也是一种符术，其口诀韩立早已从苦桑和尚口中得知',
    price: '-',
    source: '第一百四十三章 斩杀'
  },
  {
    name: '传音术',
    category: '符术',
    grade: '初级·下阶',
    description: '《基础咒决残本》中记载：辅助类符术，需要对应的符箓“传音符”',
    price: '-',
    source: '第一百三十八章 制符之道'
  },
  {
    name: '定神术',
    category: '符术',
    grade: '初级·下阶',
    description: '墨老收藏的八层长春功手抄本中记载：辅助类符术，需要对应的符箓“定神符”',
    price: '-',
    source: '第六十七章 火弹术'
  },

  // ---------- 辅助 ----------
  {
    name: '匿身术',
    category: '辅助',
    grade: '初级·下阶',
    description: '《基础咒决残本》中记载：让灵力附在全身，使身体变成和周围环境相似的保护颜色，让人不易发觉罢了，“天眼术”可轻易的把它破掉',
    price: '不详',
    source: '第一百三十八章 制符之道'
  },
  {
    name: '观骨术',
    category: '辅助',
    grade: '初级·下阶',
    description: '可以查看他人年龄',
    price: '不详',
    source: '第一百三十四章 升仙大会'
  },
  {
    name: '驱物术',
    category: '辅助',
    grade: '初级·下阶',
    description: '墨老收藏的八层长春功手抄本中记载：可以驱动法器、法宝、符箓等',
    price: '不详',
    source: '第七十五章 法武并用'
  },
  {
    name: '天眼术',
    category: '辅助',
    grade: '初级·下阶',
    description: '墨老收藏的八层长春功手抄本中记载：附着法力到双眼可以探查视力可及范围的目标，一种用来观察人体内是否拥有法力、以及法力的深厚与否的纯辅助型法术',
    price: '不详',
    source: '第六十七章 火弹术'
  },
]

/**
 * 分类筛选选项
 */
export const categories = [
  { label: '✨ 全部分类', value: 'all' },
  { label: '⚔️ 攻击', value: '攻击' },
  { label: '🛡️ 防御', value: '防御' },
  { label: '🌪️ 飞遁', value: '飞遁' },
  { label: '📜 符术', value: '符术' },
  { label: '💚 辅助', value: '辅助' }
]

/**
 * 品阶筛选选项（与符箓品阶体系一致）
 */
export const grades = [
  { label: '📊 全部品阶', value: 'all' },
  { label: '初·下', value: '初级·下阶' },
  { label: '初·中', value: '初级·中阶' },
  { label: '初·上', value: '初级·上阶' },
  { label: '中·下', value: '中级·下阶' },
  { label: '中·中', value: '中级·中阶' },
  { label: '中·上', value: '中级·上阶' },
  { label: '高·下', value: '高级·下阶' },
  { label: '高·中', value: '高级·中阶' },
  { label: '高·上', value: '高级·上阶' }
]