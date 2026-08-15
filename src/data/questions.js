// 题库数据 - 按年级和学科分类
export const questionBank = {
  // 一年级
  '1': {
    chinese: [
      { q: '拼音 "a" 的声调符号应该标在哪里？', options: ['a上', 'a下', 'a左', 'a右'], correct: 'a上' },
      { q: '"大" 字有几笔？', options: ['3笔', '4笔', '5笔', '2笔'], correct: '4笔' },
      { q: '"花" 字的拼音是什么？', options: ['hua', 'hwa', 'fa', 'kua'], correct: 'hua' },
      { q: '"人" 加一笔变成什么字？', options: ['大', '天', '个', '九'], correct: '大' },
      { q: '"山" 的反义词是？', options: ['水', '川', '谷', '河'], correct: '谷' },
      { q: '"我" 和 "你" 的性别分别是？', options: ['男女', '女男', '都是男', '都是女'], correct: '男女' },
      { q: '"日" 字加一笔可以变成？', options: ['目', '田', '白', '以上都可以'], correct: '以上都可以' },
      { q: '"木" 加 "子" 组成什么字？', options: ['李', '林', '森', '杏'], correct: '李' },
      { q: '"明" 是由哪两个字组成的？', options: ['日+月', '目+月', '日+月', '口+月'], correct: '日+月' },
      { q: '"好" 字由哪两部分组成？', options: ['女+子', '女+儿', '子+女', '女+子'], correct: '女+子' }
    ],
    math: [
      { q: '1 + 1 = ?', options: ['1', '2', '3', '4'], correct: '2' },
      { q: '3 + 2 = ?', options: ['4', '5', '6', '7'], correct: '5' },
      { q: '5 - 3 = ?', options: ['1', '2', '3', '4'], correct: '2' },
      { q: '4 + 4 = ?', options: ['6', '7', '8', '9'], correct: '8' },
      { q: '10 - 5 = ?', options: ['3', '4', '5', '6'], correct: '5' },
      { q: '2 + 6 = ?', options: ['7', '8', '9', '6'], correct: '8' },
      { q: '7 - 4 = ?', options: ['2', '3', '4', '5'], correct: '3' },
      { q: '0 + 9 = ?', options: ['0', '8', '9', '10'], correct: '9' },
      { q: '6 + 3 = ?', options: ['8', '9', '10', '7'], correct: '9' },
      { q: '10 - 7 = ?', options: ['2', '3', '4', '1'], correct: '3' }
    ],
    english: [
      { q: 'Apple 的中文意思是？', options: ['苹果', '香蕉', '橙子', '葡萄'], correct: '苹果' },
      { q: 'B 的下一个字母是？', options: ['A', 'C', 'D', 'E'], correct: 'C' },
      { q: 'Red 是什么颜色？', options: ['蓝色', '红色', '绿色', '黄色'], correct: '红色' },
      { q: 'One 对应的数字是？', options: ['1', '2', '3', '4'], correct: '1' },
      { q: 'Cat 的中文是？', options: ['狗', '猫', '鸟', '鱼'], correct: '猫' },
      { q: 'Blue 是什么颜色？', options: ['红色', '黄色', '蓝色', '绿色'], correct: '蓝色' },
      { q: 'Three 对应的数字是？', options: ['2', '3', '4', '5'], correct: '3' },
      { q: 'Dog 的中文是？', options: ['猫', '鸟', '狗', '鱼'], correct: '狗' },
      { q: 'Sun 是什么？', options: ['月亮', '太阳', '星星', '云'], correct: '太阳' },
      { q: 'Five 对应的数字是？', options: ['4', '5', '6', '7'], correct: '5' }
    ]
  },
  // 二年级
  '2': {
    chinese: [
      { q: '"河" 字的三点水旁表示什么？', options: ['与水有关', '与火有关', '与土有关', '与木有关'], correct: '与水有关' },
      { q: '"跑" 和 "抱" 的读音有什么区别？', options: ['声调不同', '韵母不同', '声母不同', '完全相同'], correct: '声调不同' },
      { q: '"美丽" 的反义词是？', options: ['漂亮', '丑陋', '好看', '精美'], correct: '丑陋' },
      { q: '"己" 和 "已" 的区别是？', options: ['开口大小', '笔画多少', '读音不同', '意思一样'], correct: '开口大小' },
      { q: '"的、地、得" 中，"高兴得____跳" 应该填？', options: ['的', '地', '得', '以上都不对'], correct: '得' },
      { q: '"春天" 的"春" 字有几画？', options: ['8画', '9画', '10画', '11画'], correct: '9画' },
      { q: '"请" 和"清" 的区别是？', options: ['偏旁不同', '读音不同', '意思相同', '笔画相同'], correct: '偏旁不同' },
      { q: '"把" 字句和"被" 字句可以互相转换吗？', options: ['可以', '不可以', '有时可以', '看情况'], correct: '可以' },
      { q: '"游" 字的右下部分是什么？', options: ['子', '小', '了', '于'], correct: '子' },
      { q: '"再" 和"在" 的区别是？', options: ['意思不同', '读音不同', '写法相同', '用法一样'], correct: '意思不同' }
    ],
    math: [
      { q: '3 × 4 = ?', options: ['7', '10', '12', '14'], correct: '12' },
      { q: '5 × 6 = ?', options: ['25', '30', '35', '40'], correct: '30' },
      { q: '7 × 8 = ?', options: ['54', '56', '58', '64'], correct: '56' },
      { q: '42 ÷ 6 = ?', options: ['6', '7', '8', '9'], correct: '7' },
      { q: '81 ÷ 9 = ?', options: ['8', '9', '10', '7'], correct: '9' },
      { q: '6 × 7 = ?', options: ['42', '48', '36', '54'], correct: '42' },
      { q: '24 ÷ 4 = ?', options: ['5', '6', '7', '8'], correct: '6' },
      { q: '9 × 9 = ?', options: ['72', '81', '90', '99'], correct: '81' },
      { q: '56 ÷ 8 = ?', options: ['6', '7', '8', '9'], correct: '7' },
      { q: '3 × 9 = ?', options: ['21', '24', '27', '30'], correct: '27' }
    ],
    english: [
      { q: 'Hello 的中文意思是？', options: ['再见', '你好', '谢谢', '对不起'], correct: '你好' },
      { q: 'Thank you 怎么回答？', options: ['You are welcome', 'I am sorry', 'Nice to meet you', 'Good morning'], correct: 'You are welcome' },
      { q: 'Good morning 是什么时候说？', options: ['早上', '下午', '晚上', '睡前'], correct: '早上' },
      { q: 'What is your name? 是什么意思？', options: ['你几岁', '你叫什么名字', '你好吗', '你在哪'], correct: '你叫什么名字' },
      { q: 'I am seven. 是什么意思？', options: ['我是七岁', '我有七个', '今天是七号', '七点钟'], correct: '我是七岁' },
      { q: 'Bird 的中文是？', options: ['鱼', '鸟', '虫', '兽'], correct: '鸟' },
      { q: 'Fish 的中文是？', options: ['鸟', '虫', '鱼', '蛙'], correct: '鱼' },
      { q: 'Eleven 是数字几？', options: ['10', '11', '12', '13'], correct: '11' },
      { q: 'Twelve 是数字几？', options: ['11', '12', '13', '14'], correct: '12' },
      { q: 'Brown 是什么颜色？', options: ['白色', '黑色', '棕色', '灰色'], correct: '棕色' }
    ]
  },
  // 三年级
  '3': {
    chinese: [
      { q: '"守株待兔" 这个成语告诉我们什么道理？', options: ['要努力劳动', '不能不劳而获', '要耐心等待', '要有耐心'], correct: '不能不劳而获' },
      { q: '"掩耳盗铃" 中的人为什么听不到铃声？', options: ['铃不响', '自己捂住耳朵', '别人听不到', '铃坏了'], correct: '自己捂住耳朵' },
      { q: '"亡羊补牢" 的意思是？', options: ['羊丢了不管', '出了问题及时补救', '不要养羊', '修补羊圈'], correct: '出了问题及时补救' },
      { q: '"刻舟求剑" 告诉我们什么？', options: ['要游泳', '事物是变化的', '要刻记号', '找剑'], correct: '事物是变化的' },
      { q: '"拔苗助长" 的行为是？', options: ['正确的', '错误的', '可以的', '值得的'], correct: '错误的' },
      { q: '"画蛇添足" 比喻什么？', options: ['画画好', '多此一举', '蛇画得好', '足画得好'], correct: '多此一举' },
      { q: '"井底之蛙" 形容什么样的人？', options: ['青蛙', '见识短浅的人', '井底的人', '爱游泳的人'], correct: '见识短浅的人' },
      { q: '"狐假虎威" 中狐狸借的是什么？', options: ['老虎的威风', '老虎的力量', '老虎的智慧', '老虎的速度'], correct: '老虎的威风' },
      { q: '"自相矛盾" 出自哪个故事？', options: ['卖矛又卖盾', '买矛和盾', '盾和矛打架', '自卖自夸'], correct: '卖矛又卖盾' },
      { q: '"精卫填海" 中的精卫是什么？', options: ['人', '鸟', '鱼', '神兽'], correct: '鸟' }
    ],
    math: [
      { q: '125 × 8 = ?', options: ['1000', '800', '100', '1250'], correct: '1000' },
      { q: '480 ÷ 6 = ?', options: ['70', '80', '90', '60'], correct: '80' },
      { q: '36 × 25 = ?', options: ['900', '800', '1000', '700'], correct: '900' },
      { q: '720 ÷ 9 = ?', options: ['70', '80', '90', '60'], correct: '80' },
      { q: '一个长方形长8cm，宽5cm，周长是多少？', options: ['13cm', '26cm', '40cm', '30cm'], correct: '26cm' },
      { q: '一个正方形边长6cm，面积是多少？', options: ['24cm²', '36cm²', '12cm²', '48cm²'], correct: '36cm²' },
      { q: '250 × 4 = ?', options: ['1000', '900', '100', '1250'], correct: '1000' },
      { q: '560 ÷ 7 = ?', options: ['70', '80', '90', '60'], correct: '80' },
      { q: '一个三角形底10cm，高6cm，面积是多少？', options: ['60cm²', '30cm²', '16cm²', '6cm²'], correct: '30cm²' },
      { q: '1小时等于多少分钟？', options: ['60', '100', '30', '24'], correct: '60' }
    ],
    english: [
      { q: '"I like playing football." 中 football 是什么意思？', options: ['篮球', '足球', '排球', '乒乓球'], correct: '足球' },
      { q: '"She is my mother." 中 mother 是什么意思？', options: ['父亲', '母亲', '哥哥', '姐姐'], correct: '母亲' },
      { q: '"What time is it?" 是在问什么？', options: ['几点', '什么', '哪里', '谁'], correct: '几点' },
      { q: '"I go to school by bus." 中 by bus 是什么意思？', options: ['步行', '坐公交', '骑车', '开车'], correct: '坐公交' },
      { q: '"How old are you?" 的回答应该是？', options: ['I am fine', 'I am ten', 'I am OK', 'I am happy'], correct: 'I am ten' },
      { q: '"My favourite colour is blue." 中 favourite 是什么意思？', options: ['最讨厌', '最喜欢', '不知道', '喜欢'], correct: '最喜欢' },
      { q: '"Can I have some water?" 是请求还是命令？', options: ['请求', '命令', '禁止', '拒绝'], correct: '请求' },
      { q: '"The elephant is bigger than the monkey." 比较的是什么？', options: ['速度', '大小', '高度', '重量'], correct: '大小' },
      { q: '"I have breakfast at seven." 中的 breakfast 是？', options: ['午餐', '晚餐', '早餐', '夜宵'], correct: '早餐' },
      { q: '"They are playing games." 中 are playing 表示什么时态？', options: ['过去时', '将来时', '现在进行时', '一般现在时'], correct: '现在进行时' }
    ],
    science: [
      { q: '植物光合作用需要哪种气体？', options: ['氧气', '二氧化碳', '氮气', '氢气'], correct: '二氧化碳' },
      { q: '水在多少度结冰？', options: ['0°C', '10°C', '100°C', '-10°C'], correct: '0°C' },
      { q: '地球绕着什么转？', options: ['月球', '太阳', '火星', '金星'], correct: '太阳' },
      { q: '月亮本身会发光吗？', options: ['会', '不会', '有时', '不确定'], correct: '不会' },
      { q: '磁铁能吸引哪种金属？', options: ['铜', '铁', '铝', '金'], correct: '铁' },
      { q: '下面哪个是导体？', options: ['橡皮', '塑料', '铁钉', '木头'], correct: '铁钉' },
      { q: '声音在什么中传播最快？', options: ['空气', '水', '钢铁', '真空'], correct: '钢铁' },
      { q: '一天中影子最短是什么时候？', options: ['早上', '中午', '傍晚', '夜晚'], correct: '中午' },
      { q: '彩虹通常出现在什么时候？', options: ['雨后晴天', '阴天', '下雪天', '刮风天'], correct: '雨后晴天' },
      { q: '冰变成水是什么变化？', options: ['凝固', '熔化', '蒸发', '凝结'], correct: '熔化' }
    ]
  },
  // 四年级
  '4': {
    chinese: [
      { q: '"垂诞三尺" 中的"垂涎"是什么意思？', options: ['口水', '眼泪', '鼻涕', '汗水'], correct: '口水' },
      { q: '"望梅止渴" 这个故事的主人公是？', options: ['曹操', '刘备', '孙权', '诸葛亮'], correct: '曹操' },
      { q: '"胸有成竹" 比喻什么？', options: ['竹子好看', '做事前有把握', '有才华', '有勇气'], correct: '做事前有把握' },
      { q: '"画龙点睛" 原意是什么？', options: ['画画技巧', '关键处点明要点', '龙的眼睛', '点灯'], correct: '关键处点明要点' },
      { q: '"闻鸡起舞" 讲的是谁的故事？', options: ['祖逖', '岳飞', '李白', '杜甫'], correct: '祖逖' },
      { q: '"凿壁偷光" 的主人公是？', options: ['匡衡', '车胤', '孙康', '囊萤'], correct: '匡衡' },
      { q: '"悬梁刺股" 中"刺股"指的是？', options: ['头发', '大腿', '手臂', '肩膀'], correct: '大腿' },
      { q: '"程门立雪" 表现的是什么精神？', options: ['勇敢', '尊师重道', '勤奋', '聪明'], correct: '尊师重道' },
      { q: '"铁杵磨成针" 比喻什么？', options: ['功夫不负有心人', '铁很硬', '针很细', '磨东西'], correct: '功夫不负有心人' },
      { q: '"精卫填海" 体现了什么精神？', options: ['坚持不屈', '愚蠢', '勇敢', '智慧'], correct: '坚持不屈' }
    ],
    math: [
      { q: '1250 ÷ 25 = ?', options: ['40', '50', '60', '35'], correct: '50' },
      { q: '36 × 45 = ?', options: ['1620', '1420', '1820', '1600'], correct: '1620' },
      { q: '一个梯形上底5cm，下底8cm，高6cm，面积是多少？', options: ['39cm²', '78cm²', '36cm²', '48cm²'], correct: '39cm²' },
      { q: '平行四边形底12cm，高8cm，面积是多少？', options: ['96cm²', '48cm²', '20cm²', '100cm²'], correct: '96cm²' },
      { q: '4800 ÷ 12 = ?', options: ['400', '480', '40', '4800'], correct: '400' },
      { q: '125 × 32 = ?', options: ['4000', '3600', '4200', '3800'], correct: '4000' },
      { q: '一个三角形三条边分别是3cm、4cm、5cm，周长是多少？', options: ['12cm', '10cm', '20cm', '15cm'], correct: '12cm' },
      { q: '720 ÷ 18 = ?', options: ['30', '40', '50', '36'], correct: '40' },
      { q: '小明有56元，每本书8元，可以买几本？', options: ['6本', '7本', '8本', '9本'], correct: '7本' },
      { q: '1公顷等于多少平方米？', options: ['10000', '1000', '100', '100000'], correct: '10000' }
    ],
    english: [
      { q: '"I was born in 2010." 中的 "was born" 意思是？', options: ['出生', '长大', '生日', '今天'], correct: '出生' },
      { q: '"She is taller than me." 中 taller 是？', options: ['更强壮', '更高', '更漂亮', '更快'], correct: '更高' },
      { q: '"We went to the park yesterday." 用了什么时态？', options: ['一般现在时', '一般过去时', '现在进行时', '将来时'], correct: '一般过去时' },
      { q: '"There is a book on the desk." 中 "there is" 表示？', options: ['在...里', '有', '在...上', '去'], correct: '有' },
      { q: '"My father is a doctor." 中 doctor 是什么意思？', options: ['老师', '医生', '护士', '司机'], correct: '医生' },
      { q: '"What does she do?" 是在问什么？', options: ['她做什么', '她在哪', '她多大', '她是谁'], correct: '她做什么' },
      { q: '"I have been to Beijing." 中 "have been to" 意思是？', options: ['去过', '没去过', '要去', '正在去'], correct: '去过' },
      { q: '"He runs faster than me." 中 faster 是？', options: ['更快', '更慢', '更远', '更近'], correct: '更快' },
      { q: '"She will come tomorrow." 用了什么时态？', options: ['过去时', '将来时', '现在时', '完成时'], correct: '将来时' },
      { q: '"Would you like some tea?" 是请求还是邀请？', options: ['邀请', '请求', '命令', '禁止'], correct: '邀请' }
    ],
    science: [
      { q: '声音在什么中无法传播？', options: ['空气', '水', '钢铁', '真空'], correct: '真空' },
      { q: '下列哪种能源是可再生的？', options: ['煤炭', '石油', '太阳能', '天然气'], correct: '太阳能' },
      { q: '地球上的淡水主要存在于？', options: ['河流', '海洋', '冰川', '地下水'], correct: '冰川' },
      { q: '光在真空中传播速度约为？', options: ['30万公里/秒', '300公里/秒', '3万公里/秒', '3000公里/秒'], correct: '30万公里/秒' },
      { q: '植物需要哪些基本条件生长？', options: ['水、阳光、空气', '水、土壤、肥料', '阳光、肥料、空气', '水、阳光、肥料'], correct: '水、阳光、空气' },
      { q: '以下哪种动物是哺乳动物？', options: ['青蛙', '鳄鱼', '鲸鱼', '金鱼'], correct: '鲸鱼' },
      { q: '月亮圆缺变化叫做？', options: ['月相变化', '月食', '日食', '潮汐'], correct: '月相变化' },
      { q: '以下哪种现象是化学变化？', options: ['冰融化', '铁生锈', '水沸腾', '玻璃破碎'], correct: '铁生锈' },
      { q: '地球自转一周大约需要？', options: ['24小时', '365天', '12小时', '7天'], correct: '24小时' },
      { q: '下列哪个不是光源？', options: ['太阳', '月亮', '电灯', '蜡烛'], correct: '月亮' }
    ]
  },
  // 五年级
  '5': {
    chinese: [
      { q: '"三顾茅庐" 讲的是谁请诸葛亮出山？', options: ['刘备', '曹操', '孙权', '周瑜'], correct: '刘备' },
      { q: '"草船借箭" 中借箭的是谁？', options: ['诸葛亮', '周瑜', '曹操', '鲁肃'], correct: '诸葛亮' },
      { q: '"舌战群儒" 描写的是谁的辩论？', options: ['诸葛亮', '周瑜', '鲁肃', '曹操'], correct: '诸葛亮' },
      { q: '"负荆请罪" 中请罪的人是？', options: ['廉颇', '蔺相如', '秦王', '赵王'], correct: '廉颇' },
      { q: '"完璧归赵" 中完璧的"完" 意思是？', options: ['完整', '完好', '完美', '完成'], correct: '完好' },
      { q: '"破釜沉舟" 比喻什么？', options: ['勇往直前', '进退两难', '下定决心', '无路可退'], correct: '下定决心' },
      { q: '"卧薪尝胆" 讲的是谁的故事？', options: ['勾践', '夫差', '伍子胥', '范蠡'], correct: '勾践' },
      { q: '"指鹿为马" 中谁是那只鹿？', options: ['赵高', '秦二世', '李斯', '扶苏'], correct: '赵高' },
      { q: '"四面楚歌" 形容什么情况？', options: ['孤立无援', '歌声嘹亮', '四面打仗', '军队强大'], correct: '孤立无援' },
      { q: '"霸王别姬" 中的霸王是指？', options: ['项羽', '刘邦', '韩信', '张良'], correct: '项羽' }
    ],
    math: [
      { q: '3.6 × 2.5 = ?', options: ['9', '8.5', '9.5', '8'], correct: '9' },
      { q: '12.5 ÷ 0.5 = ?', options: ['25', '2.5', '250', '6.25'], correct: '25' },
      { q: '一个分数分子是3，分母是8，这个分数是？', options: ['3/8', '8/3', '3+8', '3-8'], correct: '3/8' },
      { q: '2/3 + 1/6 = ?', options: ['5/6', '3/9', '1/2', '2/3'], correct: '5/6' },
      { q: '3/4 × 2/3 = ?', options: ['1/2', '6/12', '5/7', '2/3'], correct: '1/2' },
      { q: '一个圆的直径是10cm，半径是？', options: ['5cm', '10cm', '20cm', '31.4cm'], correct: '5cm' },
      { q: '5.6 ÷ 0.8 = ?', options: ['7', '70', '0.7', '700'], correct: '7' },
      { q: '一个长方体长5cm、宽4cm、高3cm，体积是多少？', options: ['60cm³', '120cm³', '30cm³', '40cm³'], correct: '60cm³' },
      { q: '4/5 = ?%', options: ['80%', '45%', '54%', '8%'], correct: '80%' },
      { q: '一个三角形的底是12cm，高是8cm，面积是？', options: ['48cm²', '96cm²', '20cm²', '40cm²'], correct: '48cm²' }
    ],
    english: [
      { q: '"I have been to Shanghai twice." 中 "twice" 意思是？', options: ['两次', '一次', '三次', '很多次'], correct: '两次' },
      { q: '"She is reading a book." 用了什么时态？', options: ['现在进行时', '一般现在时', '过去时', '将来时'], correct: '现在进行时' },
      { q: '"If it rains tomorrow, I will stay at home." 这是什么从句？', options: ['条件状语从句', '宾语从句', '定语从句', '时间状语从句'], correct: '条件状语从句' },
      { q: '"He is interested in music." 中 interested 修饰的是？', options: ['人', '物', '地点', '时间'], correct: '人' },
      { q: '"The book which I bought yesterday is interesting." 中 which 指代的是？', options: ['书', '我', '昨天', '有趣'], correct: '书' },
      { q: '"I would rather stay at home." 中 would rather 意思是？', options: ['宁愿', '想要', '应该', '可以'], correct: '宁愿' },
      { q: '"Not only...but also..." 表示什么关系？', options: ['递进', '转折', '因果', '并列'], correct: '递进' },
      { q: '"I am used to getting up early." 中 used to 意思是？', options: ['习惯于', '过去常常', '使用', '习惯'], correct: '习惯于' },
      { q: '"She told me that she would come." 这是什么时态？', options: ['过去将来时', '将来时', '过去时', '现在完成时'], correct: '过去将来时' },
      { q: '"How do you like the movie?" 是在问什么？', options: ['你觉得电影怎么样', '你怎么看电影', '你去不去看电影', '电影多长时间'], correct: '你觉得电影怎么样' }
    ],
    science: [
      { q: '力的单位是什么？', options: ['牛顿', '焦耳', '瓦特', '帕斯卡'], correct: '牛顿' },
      { q: '杠杆有几个点？', options: ['三个：支点、用力点、阻力点', '两个', '四个', '五个'], correct: '三个：支点、用力点、阻力点' },
      { q: '简单机械有哪些？', options: ['杠杆、滑轮、斜面、轮轴', '只有杠杆', '只有滑轮', '很多种'], correct: '杠杆、滑轮、斜面、轮轴' },
      { q: '太阳系中最大的行星是？', options: ['木星', '土星', '地球', '火星'], correct: '木星' },
      { q: '日食发生在农历的什么时间？', options: ['初一', '十五', '初七', '廿二'], correct: '初一' },
      { q: '月食发生时，三者位置关系是？', options: ['地日月', '日月地', '月日地', '日月地'], correct: '地日月' },
      { q: '下列哪种材料是热的良导体？', options: ['铁', '木头', '塑料', '橡胶'], correct: '铁' },
      { q: '声音在下列哪种物质中传播最快？', options: ['钢铁', '水', '空气', '真空'], correct: '钢铁' },
      { q: '光从空气射入水中会发生什么现象？', options: ['折射', '反射', '直线传播', '散射'], correct: '折射' },
      { q: '电路的基本组成部分是？', options: ['电源、导线、用电器、开关', '只有电池', '只有灯泡', '只有导线'], correct: '电源、导线、用电器、开关' }
    ]
  },
  // 六年级
  '6': {
    chinese: [
      { q: '"落花生" 这篇课文的作者是谁？', options: ['许地山', '鲁迅', '老舍', '巴金'], correct: '许地山' },
      { q: '"少年中国说" 的作者是？', options: ['梁启超', '鲁迅', '胡适', '陈独秀'], correct: '梁启超' },
      { q: '"草船借箭" 选自哪部名著？', options: ['三国演义', '水浒传', '西游记', '红楼梦'], correct: '三国演义' },
      { q: '"武松打虎" 选自哪部名著？', options: ['水浒传', '三国演义', '西游记', '红楼梦'], correct: '水浒传' },
      { q: '"黛玉葬花" 是哪部名著的情节？', options: ['红楼梦', '三国演义', '西游记', '水浒传'], correct: '红楼梦' },
      { q: '"三打白骨精" 选自哪部名著？', options: ['西游记', '三国演义', '水浒传', '红楼梦'], correct: '西游记' },
      { q: '"大闹天宫" 的主人公是？', options: ['孙悟空', '猪八戒', '唐僧', '沙僧'], correct: '孙悟空' },
      { q: '"桃园三结义" 结义的是谁？', options: ['刘备、关羽、张飞', '诸葛亮、周瑜、鲁肃', '曹操、司马懿、孙权', '宋江、吴用、林冲'], correct: '刘备、关羽、张飞' },
      { q: '"鞠躬尽瘁，死而后已" 赞美的是谁？', options: ['诸葛亮', '关羽', '刘备', '曹操'], correct: '诸葛亮' },
      { q: '"煮酒论英雄" 中谈论英雄的是？', options: ['曹操和刘备', '曹操和孙权', '刘备和诸葛亮', '周瑜和鲁肃'], correct: '曹操和刘备' }
    ],
    math: [
      { q: '2.5 × 4.8 = ?', options: ['12', '10', '120', '1.2'], correct: '12' },
      { q: '18.6 ÷ 0.6 = ?', options: ['31', '3.1', '310', '0.31'], correct: '31' },
      { q: '3/5 化成小数是？', options: ['0.6', '0.35', '3.5', '5/3'], correct: '0.6' },
      { q: '2/5 + 1/4 = ?', options: ['13/20', '3/9', '2/9', '1/2'], correct: '13/20' },
      { q: '一个圆的半径是5cm，周长是多少？（π取3.14）', options: ['31.4cm', '78.5cm', '15.7cm', '25cm'], correct: '31.4cm' },
      { q: '一个圆柱底面半径3cm，高10cm，体积是多少？', options: ['282.6cm³', '94.2cm³', '188.4cm³', '56.5cm³'], correct: '282.6cm³' },
      { q: '某商品打八折后是80元，原价是多少？', options: ['100元', '96元', '64元', '120元'], correct: '100元' },
      { q: '一个数增加20%后是60，这个数是多少？', options: ['50', '48', '72', '55'], correct: '50' },
      { q: '比例尺1:100000，图上5cm代表实际多少km？', options: ['5km', '0.5km', '50km', '500km'], correct: '5km' },
      { q: '一个圆锥体积是18cm³，等底等高圆柱体积是？', options: ['54cm³', '6cm³', '36cm³', '9cm³'], correct: '54cm³' }
    ],
    english: [
      { q: '"I have already finished my homework." 中 already 用在什么时态？', options: ['现在完成时', '一般现在时', '过去时', '将来时'], correct: '现在完成时' },
      { q: '"She has been to Beijing twice." 这个句子用了什么时态？', options: ['现在完成时', '一般过去时', '过去完成时', '将来时'], correct: '现在完成时' },
      { q: '"If I had time, I would go with you." 这是什么虚拟语气？', options: ['与现在事实相反', '与过去事实相反', '与将来事实相反', '真实条件'], correct: '与现在事实相反' },
      { q: '"He is said to be a good teacher." 这是什么句型？', options: ['It is said that...', '主语+is said to do', '被动语态', '宾语从句'], correct: '主语+is said to do' },
      { q: '"Neither Tom nor Jack has been to the park." 谓语动词用单数还是复数？', options: ['就近原则用单数', '远原则用复数', '都用复数', '都用单数'], correct: '就近原则用单数' },
      { q: '"The more you practice, the better you will be." 这是什么结构？', options: ['the+比较级...the+比较级', '比较级+than', 'as...as', 'most+形容词'], correct: 'the+比较级...the+比较级' },
      { q: '"Who taught you English?" 这是疑问句还是感叹句？', options: ['疑问句', '感叹句', '祈使句', '陈述句'], correct: '疑问句' },
      { q: '"I wonder if he will come tomorrow." 中 if 是什么意思？', options: ['是否', '如果', '当...时', '虽然'], correct: '是否' },
      { q: '"She asked me where I had been." 这是什么从句？', options: ['宾语从句', '定语从句', '状语从句', '主语从句'], correct: '宾语从句' },
      { q: '"By the time I got to the station, the train had left." 这句话说明什么？', options: ['火车先开，我到后', '我先到，火车后开', '同时发生', '没赶上火车'], correct: '火车先开，我到后' }
    ],
    science: [
      { q: '太阳系中离太阳最近的行星是？', options: ['水星', '金星', '地球', '火星'], correct: '水星' },
      { q: '月相变化周期大约是？', options: ['一个月', '一个星期', '一天', '一年'], correct: '一个月' },
      { q: '能量守恒定律的内容是？', options: ['能量不会消失也不会创生', '能量会消失', '能量可以创生', '能量无规律'], correct: '能量不会消失也不会创生' },
      { q: '串联电路中，电流的特点是？', options: ['处处相等', '越往后越小', '越往后越大', '各处不等'], correct: '处处相等' },
      { q: '并联电路中，电压的特点是？', options: ['各支路电压相等', '越往后越小', '越往后越大', '各处不等'], correct: '各支路电压相等' },
      { q: '放大镜的镜片是？', options: ['凸透镜', '凹透镜', '平面镜', '三棱镜'], correct: '凸透镜' },
      { q: '声音是由物体的什么产生的？', options: ['振动', '运动', '碰撞', '摩擦'], correct: '振动' },
      { q: '光沿什么传播？', options: ['直线', '曲线', '折线', '弧线'], correct: '直线' },
      { q: '简单机械中，定滑轮的作用是？', options: ['改变力的方向', '省力', '省距离', '省功'], correct: '改变力的方向' },
      { q: '地球上的水循环包括哪些过程？', options: ['蒸发、凝结、降水、径流', '只有蒸发', '只有降水', '只有径流'], correct: '蒸发、凝结、降水、径流' }
    ]
  }
}

// 辅助函数：随机抽取题目
export function getRandomQuestions(subject, grade, count = 10) {
  const gradeQuestions = questionBank[grade]?.[subject] || []
  if (gradeQuestions.length === 0) return []
  
  // 随机打乱并选取
  const shuffled = [...gradeQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

// 获取所有年级列表
export const grades = [
  { id: '1', name: '一年级', icon: '🌱', color: '#FF9A9E' },
  { id: '2', name: '二年级', icon: '🌿', color: '#A18CD1' },
  { id: '3', name: '三年级', icon: '🌳', color: '#FAD961' },
  { id: '4', name: '四年级', icon: '🍀', color: '#4FACFE' },
  { id: '5', name: '五年级', icon: '🌻', color: '#43E97B' },
  { id: '6', name: '六年级', icon: '🏆', color: '#FA709A' }
]

// 获取所有学科
export const subjects = [
  { id: 'chinese', name: '语文', icon: '📖', color: '#ff6b6b' },
  { id: 'math', name: '数学', icon: '🔢', color: '#48dbfb' },
  { id: 'english', name: '英语', icon: '🔤', color: '#1dd1a1' },
  { id: 'science', name: '科学', icon: '🔬', color: '#5f27cd' }
]
