/**
 * 器物数据
 * 字段说明：
 *   name        - 名称
 *   category    - 分类（攻击 / 防御 / 飞行 / 辅助）
 *   grade       - 品阶（低阶法器 / 中阶法器 / 高阶法器 / 顶阶普通法器 / 顶阶精品法器 / 结丹法宝 / 元婴法宝）
 *   description - 描述
 *   notes       - 其他说明
 *   price       - 价格
 *   source      - 出处
 */
export const qiwuData = [
  // ---------- 攻击类 ----------
  {
    name: '金蚨子母刃',
    category: '攻击',
    grade: '顶阶精品法器',
    description: '一套淡金色怪刃，母刃一把，子刃八把，以精铁精金炼制，锋利无比，可同时控制八把子刃攻击',
    notes: '原为筑基期高手炼制，韩立从万宝楼购得',
    price: '-',
    source: '黄枫谷坊市万宝楼（用千年黄精芝换取）'
  },
  {
    name: '青蛟旗',
    category: '攻击',
    grade: '顶阶普通法器',
    description: '长约丈许的青色大旗，旗上绣着凶恶青蛟，能放出青光攻击',
    notes: '从陆师兄手中夺得',
    price: '-',
    source: '血色禁地之行前，回程途中所得'
  },
  {
    name: '离火剑',
    category: '攻击',
    grade: '高阶法器',
    description: '通体赤红，蕴含离火之精，催动时可放出烈焰',
    notes: '',
    price: '600 灵石',
    source: '黑市竞拍'
  },
  {
    name: '天雷子',
    category: '攻击',
    grade: '元婴法宝',
    description: '神秘修士截取天地雷电凝练所成，每一粒都具莫大威力，筑基期硬抗也会灰飞烟灭',
    notes: '万宝楼仅存一粒',
    price: '-',
    source: '黄枫谷坊市万宝楼（用千年黄精芝换取）'
  },

  // ---------- 防御类 ----------
  {
    name: '玄铁飞天盾',
    category: '防御',
    grade: '顶阶精品法器',
    description: '巴掌大的微型铁盾，用寒阴之地的玄铁精炼，施法后可自动护主',
    notes: '防御力极强，可抵挡筑基期攻击',
    price: '-',
    source: '黄枫谷坊市万宝楼（用千年黄精芝换取）'
  },
  {
    name: '金光罩',
    category: '防御',
    grade: '中阶法器',
    description: '输入灵力后形成金色光罩，可抵御同阶大部分攻击',
    notes: '',
    price: '200 灵石',
    source: '坊市炼器铺'
  },

  // ---------- 飞行类 ----------
  {
    name: '雪虹绫',
    category: '飞行',
    grade: '结丹法宝',
    description: '锦缎状的飞行法宝，展开后银光闪烁，可载多人飞行',
    notes: '清虚门的飞行法宝，速度极快',
    price: '-',
    source: '第一百七十五章 清虚门'
  },
  {
    name: '御风车',
    category: '飞行',
    grade: '中阶法器',
    description: '小型飞行法器，速度较慢，适合短途出行',
    notes: '',
    price: '300 灵石',
    source: '坊市杂货铺'
  },

  // ---------- 辅助类 ----------
  {
    name: '银丝鼎',
    category: '辅助',
    grade: '顶阶精品法器',
    description: '丹炉中的精品，个头最小，却是不可多得的上品法器',
    notes: '许老炼制的得意之作',
    price: '32 块低阶灵石',
    source: '黄枫谷岳麓殿“丹”殿'
  },
  {
    name: '罗喉鼎',
    category: '辅助',
    grade: '顶阶精品法器',
    description: '能吸纳火焰高温，增加丹药成丹率，品质优于银丝鼎',
    notes: '',
    price: '预估 40 块低阶灵石',
    source: '黄枫谷岳麓殿“丹”殿'
  },
  {
    name: '金竺笔',
    category: '辅助',
    grade: '顶阶普通法器',
    description: '用二级妖兽金睛猿颈毛制成的符笔，笔杆以金精乌铁混合，经筑基期文武火祭炼',
    notes: '菡云芝摊位换取',
    price: '预估 70 块低阶灵石',
    source: '太南小会'
  },
  {
    name: '法宝残片',
    category: '辅助',
    grade: '元婴法宝',
    description: '结丹或元婴期修士炼制，具有隐匿功效，同阶修士也难看破',
    notes: '得自太南小会交易',
    price: '30 块低阶灵石',
    source: '太南小会（以飞天符换取）'
  },
]

/**
 * 分类筛选选项
 */
export const categories = [
  { label: '✨ 全部分类', value: 'all' },
  { label: '⚔️ 攻击', value: '攻击' },
  { label: '🛡️ 防御', value: '防御' },
  { label: '🌪️ 飞行', value: '飞行' },
  { label: '💚 辅助', value: '辅助' }
]

/**
 * 品阶筛选选项
 */
export const grades = [
  { label: '📊 全部品阶', value: 'all' },
  { label: '🔹 低阶法器', value: '低阶法器' },
  { label: '🔸 中阶法器', value: '中阶法器' },
  { label: '🔶 高阶法器', value: '高阶法器' },
  { label: '⭐ 顶普法器', value: '顶阶普通法器' },
  { label: '🌟 顶精法器', value: '顶阶精品法器' },
  { label: '☁️ 结丹法宝', value: '结丹法宝' },
  { label: '👑 元婴法宝', value: '元婴法宝' }
]