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
    name: '火弹术',
    category: '攻击',
    grade: '初级·下阶',
    description: '凝聚灵力发出火球，最基础的攻击法术',
    price: '10 灵石（法术书）',
    source: '坊市杂货铺'
  },
  {
    name: '冰锥术',
    category: '攻击',
    grade: '初级·中阶',
    description: '凝水成冰，多发冰锥同时射出',
    price: '30 灵石',
    source: '黄枫谷传功阁'
  },
  {
    name: '雷击术',
    category: '攻击',
    grade: '初级·上阶',
    description: '引一道雷电劈向目标，威力极大',
    price: '80 灵石',
    source: '太南小会'
  },
  {
    name: '地刺术',
    category: '攻击',
    grade: '初级·中阶',
    description: '从地面突起尖锐石柱，出其不意攻击敌人',
    price: '25 灵石',
    source: '《基础咒决残本》记载'
  },

  // ---------- 防御 ----------
  {
    name: '灵气护盾',
    category: '防御',
    grade: '初级·下阶',
    description: '以灵力在周身形成透明护盾',
    price: '8 灵石',
    source: '宗门入门功法'
  },
  {
    name: '土墙术',
    category: '防御',
    grade: '初级·中阶',
    description: '从地面升起土墙，阻挡攻击',
    price: '20 灵石',
    source: '坊市法术店'
  },
  {
    name: '冰甲术',
    category: '防御',
    grade: '初级·上阶',
    description: '周身覆盖寒冰铠甲，大幅提升防御',
    price: '70 灵石',
    source: '《冰系法术精要》'
  },

  // ---------- 飞遁 ----------
  {
    name: '御风术',
    category: '飞遁',
    grade: '初级·下阶',
    description: '驾驭清风，身轻如燕，可短暂腾空',
    price: '15 灵石',
    source: '散修集市'
  },
  {
    name: '踏云步',
    category: '飞遁',
    grade: '初级·上阶',
    description: '脚下生云，飞行速度大幅提升',
    price: '60 灵石',
    source: '清虚门藏经阁'
  },

  // ---------- 符术 ----------
  {
    name: '符箓绘制术',
    category: '符术',
    grade: '初级·下阶',
    description: '学习绘制基础灵符的方法与灵力控制技巧',
    price: '50 灵石（全套工具与教程）',
    source: '金竺笔持有者必备'
  },
  {
    name: '符阵初解',
    category: '符术',
    grade: '初级·中阶',
    description: '将多张符箓组合成简易阵法，增强威力',
    price: '100 灵石',
    source: '天符门残卷'
  },

  // ---------- 辅助 ----------
  {
    name: '回春术',
    category: '辅助',
    grade: '初级·下阶',
    description: '恢复轻微伤势，加速体力回复',
    price: '12 灵石',
    source: '药王谷学徒必修'
  },
  {
    name: '敛息术',
    category: '辅助',
    grade: '初级·上阶',
    description: '隐藏自身修为与气息，避免被高阶修士察觉',
    price: '90 灵石',
    source: '散修隐秘传承'
  },
  {
    name: '定身术',
    category: '辅助',
    grade: '初级·中阶',
    description: '短暂禁锢低阶修士或妖兽的行动',
    price: '40 灵石',
    source: '黄枫谷秘术阁'
  }
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