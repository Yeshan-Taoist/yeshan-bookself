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
    name: '金睛猿',
    category: '兽类',
    description: '二级妖兽，双目如金，力大无穷，颈毛可制顶级符笔',
    notes: '颈毛制成的符笔极受制符师青睐',
    price: '50 灵石（完整尸体）',
    source: '太南山脉深处'
  },
  {
    name: '三尾灵猫',
    category: '兽类',
    description: '体型小巧，动作敏捷，胡须是炼器材料',
    notes: '万小山曾在太南小会出售其胡须',
    price: '胡须 10 灵石/束',
    source: '太南山脉外围'
  },
  {
    name: '墨蛟',
    category: '兽类',
    description: '形似巨蛟，通体漆黑，能喷吐毒雾，鳞甲坚硬',
    notes: '筑基期修士也难以单独猎杀',
    price: '2000 灵石（蛟丹、蛟皮）',
    source: '乱星海'
  },
  {
    name: '血玉蜘蛛',
    category: '虫类',
    description: '拳头大小的血红色蜘蛛，吐出的蛛丝坚韧无比，是炼制法衣的上佳材料',
    notes: '可驯养，定期取丝',
    price: '300 灵石/只（活体）',
    source: '血色禁地'
  },
  {
    name: '金背妖螂',
    category: '虫类',
    description: '外形如螳螂，背部呈金色，双刀能断金裂石',
    notes: '攻击性极强，群居出没',
    price: '外壳 80 灵石/具',
    source: '灵缈园'
  },
  {
    name: '噬金虫',
    category: '虫类',
    description: '上古奇虫，个体微小却无物不噬，群聚时连法宝都能啃食',
    notes: '韩立的本命灵虫，培养极为困难',
    price: '无价（不可交易）',
    source: '乱星海神秘洞府'
  },

  // ---------- 禽类 ----------
  {
    name: '青翅雕',
    category: '禽类',
    description: '双翅展开达三丈，青色翎羽，飞行速度极快',
    notes: '成年青翅雕可承载一人飞行',
    price: '800 灵石（驯化幼雕）',
    source: '万岭山脉'
  },
  {
    name: '离火鹤',
    category: '禽类',
    description: '通体火红，能口吐离火，翎羽可炼火属性法器',
    notes: '结丹期修士常用的坐骑之一',
    price: '1500 灵石（驯化）',
    source: '大晋火焰山'
  },
  {
    name: '寒鹄',
    category: '禽类',
    description: '雪白如玉，飞行时周身寒气缭绕，极耐严寒',
    notes: '冰属性修士的绝佳伴侣',
    price: '1200 灵石（蛋）',
    source: '北极冰原'
  }
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