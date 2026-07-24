/**
 * 器物数据
 * 字段说明：
 *   name    - 名称
 *   category  - 分类
 *   grade    - 品阶
 *   description - 描述
 *   notes    - 其他说明
 *   price    - 价格
 *   source    - 出处
 */
export const qiwuData = [
  // ---------- 攻击类 ----------
  {
    name: '金蚨子母刃',
    category: '攻击',
    grade: '上品法器',
    description: '一套淡金色怪刃：母刃一把，子刃八把，以精铁精金为原料，由筑基期高手三天三夜炼制而成，只要手持母刃就可同时控制八把子刃攻击敌人，让对手防不胜防，锋利无比',
    notes: '黄枫谷坊市万宝楼，韩立用两株千年黄精芝换取的四样物品之一',
    price: '不详',
    source: '第一百六十三章 锦盒之宝'
  },
  {
    name: '指环',
    category: '攻击',
    grade: '上品法器',
    description: '一件枚看似精钢制成的指环，施法驱动后便可自动飞出锁敌，还可在一定范围内大小自如变化；韩立曾一时兴起，将全身法力注入其内，结果那指环竟散发着淡淡黄光，足足扩大到了可将他居住的茅屋都套在其内的恐怖幅度',
    notes: '韩立筑基丹被强制换取的补偿之一',
    price: '不详',
    source: '第一百五十二章 两年后'
  },
  {
    name: '冷月刀',
    category: '攻击',
    grade: '下品法器',
    description: '黄枫谷制式法器',
    notes: '新入门弟子标配',
    price: '不详',
    source: '第一百四十八章 灰衣老者'
  },
  {
    name: '烈阳剑',
    category: '攻击',
    grade: '下品法器',
    description: '黄枫谷制式法器',
    notes: '新入门弟子标配',
    price: '不详',
    source: '第一百四十八章 灰衣老者'
  },

  // ---------- 防御类 ----------
  {
    name: '三角小旗',
    category: '防御',
    grade: '上品法器',
    description: '在旗内注入灵力，然后那么一挥，便会立即在旗主的附近，幻化出团团的黑雾，让攻击身前的敌人双目失灵，并能掩盖自身踪迹，是件很好的防御性法器',
    notes: '韩立筑基丹被强制换取的补偿之一',
    price: '不详',
    source: '第一百五十二章 两年后'
  },
  {
    name: '回风钵',
    category: '防御',
    grade: '上品法器',
    description: '一个有奇怪花纹的黄钵，黑汉自称回风钵是一件与自身功法相配的法器',
    notes: '太南小会，黑汉想用法宝残片换取回风钵未果',
    price: '30块低阶灵石',
    source: '第一百三十九章 法宝残片'
  },

  // ---------- 飞行类 ----------
  {
    name: '青叶法器',
    category: '飞遁',
    grade: '下品法器',
    description: '黄枫谷制式小型飞行法器，速度较慢，适合短途出行',
    notes: '新入门弟子标配',
    price: '不详',
    source: '第一百四十八章 灰衣老者'
  },

  // ---------- 辅助类 ----------
  {
    name: '罗喉鼎',
    category: '辅助',
    grade: '上品法器',
    description: '罗喉鼎，能吸纳火焰高温，可增加丹药成丹率，好于银丝鼎',
    notes: '黄枫谷岳麓殿“丹”殿一楼接引处，许老夸张介绍自己炼制的丹炉',
    price: '预估40-50块低阶灵石',
    source: '第一百五十六章 地肺之火'
  },
  {
    name: '银丝鼎',
    category: '辅助',
    grade: '上品法器',
    description: '一件个头最小的银色鼎炉，许老夸赞“啧啧!小友还真是好眼光，这件银丝鼎绝对是丹炉中的精品，是不可多的上品法器。在我这所有鼎炉中，也是首屈一指的宝贝”',
    notes: '黄枫谷岳麓殿“丹”殿一楼接引处，许老夸张介绍自己炼制的丹炉',
    price: '32块低阶灵石',
    source: '第一百五十六章 地肺之火'
  },
  {
    name: '黄铜瓶',
    category: '辅助',
    grade: '上品法器',
    description: '一个可使装入物品灵力不流失的黄铜瓶',
    notes: '韩立筑基丹被强制换取的补偿之一',
    price: '不详',
    source: '第一百五十二章 两年后'
  },
  {
    name: '黄铜瓶',
    category: '辅助',
    grade: '上品法器',
    description: '一个可使装入物品灵力不流失的黄铜瓶',
    notes: '韩立筑基丹被强制换取的补偿之一',
    price: '不详',
    source: '第一百五十二章 两年后'
  },
  {
    name: '金竺笔',
    category: '辅助',
    grade: '上品法器',
    description: '一枝妖兽金睛猿颈毛制成的上好符笔：笔尖用二级妖兽金睛猿颈毛制成，笔杆则用金精和乌铁混合而成，再经筑基期的修士用文武火祭炼三天三夜',
    notes: '太南小会，韩立用三瓶黄龙丹和四瓶金髓丸从菡云芝手中换取',
    price: '预估70块低阶灵石',
    source: '第一百三十七章 金竺笔'
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
  { label: '💚 辅助', value: '辅助' }
]

/**
 * 品阶筛选选项 
 */
export const grades = [
  { label: '📊 全部品阶', value: 'all' },
  { label: '🔹 下品法器', value: '下品法器' },
  { label: '🔸 中品法器', value: '中品法器' },
  { label: '🔶 上品法器', value: '上品法器' },
  { label: '⭐ 普顶法器', value: '普通顶阶法器' },
  { label: '🌟 精顶法器', value: '精品顶阶法器' },
  { label: '✨ 符宝', value: '符宝' },
  { label: '⚜️ 真宝', value: '真宝' },
  { label: '🗡️ 普通法宝', value: '普通法宝' },
  { label: '❤️ 本命法宝', value: '本命法宝' },
  { label: '🏺 古宝', value: '古宝' },
  { label: '📿 仿通天灵宝', value: '仿通天灵宝' },
  { label: '🔮 通天灵宝', value: '通天灵宝' },
  { label: '☀️ 玄天圣器', value: '玄天圣器' },
  { label: '🌌 玄天之宝', value: '玄天之宝' },
  { label: '其他', value: '其他' }
]