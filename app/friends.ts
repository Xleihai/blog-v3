import type { FeedGroup } from '~/types/feed'
import { getFeedIcon } from './utils/img'

export default <FeedGroup[]>[
    {
        name: '相谈甚多',
        desc: '',
        entries: [
            {
                author: 'GuuGuai',
                sitenick: '杂记本',
                title: '古怪杂记本',
                desc: '一个什么都可能会写的博客',
                link: 'https://gug.thisis.host/',
                feed: 'https://gug.thisis.host/atom.xml',
                icon: 'https://unavatar.webp.se/gug.thisis.host',
                avatar: 'https://cdn.libravatar.org/avatar/646331bff8f19a0e05679c3cc0fc54d6?s=160',
                archs: ['Hexo', 'Netlify'],
                date: '2024-01-29',
                comment: '高中同学，技术好友，爱好番剧/折腾。',
            },
            {
                author: 'isYangs',
                desc: '一个前端Bug构造师的博客',
                link: 'https://www.isyangs.cn/',
                feed: 'https://www.isyangs.cn/feed.xml',
                icon: 'https://www.isyangs.cn/favicon.svg',
                avatar: 'https://7.isyangs.cn/8/655c9835780a0-8.jpg',
                archs: ['Vue', '国内 CDN'],
                date: '2024-01-29',
                comment: '高中时认识的小学校友，目前从事前端开发。',
            },
            {
                author: 'KazariEX',
                sitenick: '微光档案',
                title: 'BikariArchive',
                desc: '虚幻的幸福',
                link: 'https://bikari.top/',
                feed: 'https://bikari.top/feed',
                icon: 'https://bikari.top/image/favicon.ico',
                avatar: getFeedIcon('KazariEX'),
                archs: ['Nuxt', '服务器'],
                date: '2024-01-30',
                comment: '“四邮四电”直系学长，Vue相关开发者，前端方面指引我不少。',
            },
            {
                author: 'Ariasaka',
                sitenick: '小窝',
                title: 'Ariasakaの小窝',
                desc: '人有悲欢离合 月有阴晴圆缺',
                link: 'https://blog.yaria.top/',
                feed: 'https://blog.yaria.top/feed',
                icon: 'https://blog.yaria.top/favicon.ico',
                avatar: getFeedIcon('LYXOfficial'),
                archs: ['Next.js', '国内 CDN'],
                date: '2024-07-12',
                comment: '初中生，OIer，折腾博客。',
            },
        ],
    },
    {
        name: 'XUPTers',
        desc: '西安邮电大学的校友们。',
        entries: [
            {
                author: '半岛的孤城',
                sitenick: '小屋',
                title: '半岛的小屋',
                desc: '不知道写啥，那就不写了。哎嘿',
                link: 'https://www.bandao.ltd/',
                feed: 'https://www.bandao.ltd/atom.xml',
                icon: getFeedIcon('bandaoworld', { preset: 'icon' }),
                avatar: getFeedIcon('bandaoworld'),
                archs: ['Hexo', '服务器'],
                date: '2024-02-02',
                comment: '大学学长，爱好摄影/听歌，会一些Vue。',
            },
            {
                author: '学习爱我',
                sitenick: 'Studio',
                title: 'plus studio - StudyingLover',
                desc: '要偷偷努力，下回惊艳所有人',
                link: 'https://studyinglover.com/',
                feed: 'https://studyinglover.com/atom.xml',
                icon: 'https://proxy.thisis.plus/favicon.ico',
                avatar: getFeedIcon('StudyingLover'),
                archs: ['Hexo', 'Cloudflare'],
                date: '2024-02-03',
                comment: '“学习哥”',
            },
            {
                author: '·JiaHuann',
                title: 'Liu Jiahuan\'s Blog',
                desc: 'I Really Want to Stay At Your House.....',
                link: 'https://www.jiahuan.top/',
                icon: 'https://www.jiahuan.top/favicon.ico',
                avatar: getFeedIcon('JiaHuann'),
                archs: ['Next.js', 'Vercel'],
                date: '2024-02-02',
                comment: '学长，从事eBPF方向。',
            },
            {
                author: 'Yuanfang',
                title: '元芳你怎么看',
                desc: '琼楼挂月钓流云，梦里瑶台暂借春',
                link: 'https://yuanfang.thisis.host/',
                icon: 'https://yuanfang.thisis.host/images/logo.svg',
                avatar: getFeedIcon('zhendewokusi'),
                archs: ['Hexo', 'Netlify'],
                date: '2024-01-29',
                comment: '大学同级，Linux内核学习中。',
            },
            {
                author: 'Ph0m',
                sitenick: 'Space',
                title: 'Ph0m\'s space',
                desc: '好好生活 慢慢相遇',
                link: 'https://blog.phom.space/',
                icon: getFeedIcon('Ph0m1', { preset: 'icon' }),
                avatar: 'https://pic.imgdb.cn/item/65e1df0c9f345e8d03bcdd6a.png',
                archs: ['Hexo', 'Netlify'],
                date: '2024-03-02',
                comment: '大学学弟。',
            },
            {
                author: 'Future',
                title: 'future\'s blog',
                desc: 'Hang on to your dreams!',
                link: 'https://future.thisis.host/',
                feed: 'https://future.thisis.host/atom.xml',
                icon: 'https://future.thisis.host/images/favicon-light-32.png',
                avatar: getFeedIcon('SIMple-lives'),
                archs: ['Hexo', 'Cloudflare'],
                date: '2024-03-10',
                comment: '大学学弟。',
            },
            {
                author: 'tiny-sky',
                title: 'tiny-sky的个人博客',
                desc: '人生苦短，及时行乐',
                link: 'https://tiny-sky.github.io/',
                icon: 'https://tiny-sky.github.io/img/pwa/favicon.ico',
                avatar: getFeedIcon('tiny-sky'),
                archs: ['Hexo', 'GitHub Pages'],
                date: '2024-04-03',
                comment: '大学同级，数据库学习中。',
            },
            {
                author: 'Shawn',
                sitenick: '笔记',
                title: 'Shawn的笔记',
                desc: 'Where there is a will, there is a way.',
                link: 'https://shawn.thisis.host/',
                feed: 'https://shawn.thisis.host/atom.xml',
                icon: getFeedIcon('ShawnJeffersonWang', { preset: 'icon' }),
                avatar: getFeedIcon('ShawnJeffersonWang'),
                archs: ['Hexo', 'Cloudflare'],
                date: '2024-06-13',
                comment: '大学同级，Golang 学习中。',
            },
            {
                author: 'Kayle',
                sitenick: '小站',
                title: 'Kayle小站',
                desc: '正在学习嵌入式',
                link: 'https://www.kayle7.top/',
                feed: 'https://www.kayle7.top/atom.xml',
                icon: 'https://q1.qlogo.cn/g?b=qq&nk=1239625475&s=3',
                avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1239625475&s=4',
                archs: ['Hexo', 'Cloudflare'],
                date: '2024-06-27',
                comment: '大学同级，嵌入式学习中。',
            },
            {
                author: '桃林饮酒',
                title: '摆烂的桃的Blog',
                desc: '回不去的何止时间',
                link: 'https://www.taolin.site/',
                feed: 'https://www.taolin.site/rss.xml',
                icon: 'https://www.taolin.site/favicon.ico',
                avatar: getFeedIcon('Taolinyinjiu'),
                archs: ['Astro', 'Vercel'],
                date: '2024-07-16',
                comment: '大学同级，嵌入式学习中。',
            },
            {
                author: 'Magic462',
                title: 'MagicBlog',
                desc: '我知我喜乐，纵情跋涉。',
                link: 'https://magic.thisis.host/',
                feed: 'https://magic.thisis.host/atom.xml',
                icon: 'https://q1.qlogo.cn/g?b=qq&nk=1623728267&s=3',
                avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1623728267&s=4',
                archs: ['Hexo', 'Cloudflare'],
                date: '2024-07-22',
                comment: '大学学妹，前端学习中。',
            },
            {
                author: 'fault123',
                title: 'fault`s blog',
                desc: '学习！学习！还是学习！当然也是要吃点好东西！',
                link: 'https://fault.thisis.host/',
                icon: getFeedIcon('fault123', { preset: 'icon' }),
                avatar: getFeedIcon('fault123'),
                archs: ['Hexo', 'Netlify'],
                date: '2024-07-29',
                comment: '大学同级，网安学习中。',
            },
            {
                author: 'Monoceros406',
                title: 'The Blog of Monoceros406 - Reverse',
                desc: 'Reverse - 智邮普创工作室安全组/Nepnep联合战队',
                link: 'https://monoceros406.github.io/',
                icon: getFeedIcon('Monoceros406', { preset: 'icon' }),
                avatar: getFeedIcon('Monoceros406'),
                archs: ['Hexo', 'GitHub Pages'],
                date: '2024-07-29',
                comment: '大学学弟，网安Reverse学习中。',
            },
        ],
    },
    {
        name: '网上邻居',
        desc: '哔——啵——电波通讯中，欢迎常来串门。',
        entries: [
            {
                author: '恩泽',
                sitenick: 'Colsrch',
                title: 'Colsrch的小破站',
                desc: '愿多年以后，我可以酌一杯清酒，烂醉如泥，梦中回到我们的曾经。',
                link: 'https://colsrch.cn/',
                feed: 'https://colsrch.cn/atom.xml',
                icon: 'https://unavatar.webp.se/colsrch.cn',
                avatar: 'https://7.isyangs.cn/1/657976c27bea6-1.png',
                archs: ['Hexo', '国内 CDN'],
                date: '2024-02-01',
                comment: '鸽王，去哪里发展了？',
            },
            {
                author: '张洪Heo',
                desc: '分享设计与科技生活',
                link: 'https://blog.zhheo.com/',
                feed: 'https://blog.zhheo.com/atom.xml',
                icon: 'https://blog.zhheo.com/img/favicon4.0.webp',
                avatar: 'https://bu.dusays.com/2022/12/28/63ac2812183aa.png',
                archs: ['Hexo', '国内 CDN'],
                date: '2024-02-02',
                comment: '知名博主，其博客设计风格被众多人借鉴。',
            },
            {
                author: '斬風·千雪',
                sitenick: '風雪城',
                desc: '浩繁星空下的一场稚嫩的梦',
                link: 'https://blog.chyk.ink/',
                feed: 'https://blog.chyk.ink/atom.xml',
                icon: getFeedIcon('chiyuki0325', { preset: 'icon' }),
                avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3526514925&s=4',
                archs: ['Hexo', 'Vercel'],
                date: '2024-03-03',
                comment: 'Archlinux，折腾，大学生。',
            },
            {
                author: 'Revincx',
                sitenick: '小破站',
                title: 'Revincx的小破站',
                link: 'https://blog.revincx.icu/',
                feed: 'https://blog.revincx.icu/atom.xml',
                icon: 'https://blog.revincx.icu/images/favico.png',
                avatar: 'https://weavatar.com/avatar/20eed6a268787c9a751165bc1ec56e90',
                archs: ['Hexo', 'Vercel'],
                date: '2024-02-05',
                comment: '折腾。',
            },
            {
                author: '小李同学',
                sitenick: 'Coding',
                title: '小李同学 Coding',
                desc: '一支努力变强的小彩笔',
                link: 'https://blog.xxfer.cn/',
                feed: 'https://blog.xxfer.cn/rss.xml',
                icon: 'https://blog.xxfer.cn/img/siteicon/128.png',
                avatar: 'https://picsur.xxfer.cn/i/7303d79e-4736-41cf-b14f-d2b5597ad29b.webp',
                archs: ['Hexo', '国内 CDN'],
                date: '2024-02-01',
                comment: '瓜大网安学长。',
            },
            {
                author: '石头',
                sitenick: '铭心石刻',
                title: '铭心石刻',
                desc: '愿岁并谢，与友长兮',
                link: 'https://blog.kouseki.cn/',
                feed: 'https://blog.kouseki.cn/rss.xml',
                icon: 'https://wsrv.nl/?url=blog.kouseki.cn/imgs/avatar.webp&w=96&mask=circle',
                avatar: 'https://blog.kouseki.cn/imgs/avatar.webp',
                archs: ['Hexo', '国内 CDN'],
                date: '2024-03-01',
                comment: '折腾Hexo博客，友链页面蛮多博客折腾选手的。',
            },
            {
                author: '桜紺狸',
                sitenick: '部落阁',
                title: '桜紺狸の部落阁',
                desc: '一个闲聊萌新动漫技术交流站',
                link: 'https://www.skira.top/',
                feed: 'https://www.skira.top/feed.xml',
                icon: 'https://www.skira.top/img/skira.ico',
                avatar: 'https://www.skira.top/img/lemonsuka.webp',
                arcahs: ['Hexo', 'Vercel'],
                date: '2024-02-01',
                comment: '搞机发烧友，小众系统爱好者，前端研究员。',
            },
            {
                author: 'Yunyi',
                title: 'YUNYI BLOG',
                desc: '得闲饮茶~~~',
                link: 'https://www.yunyitang.me/',
                feed: 'https://www.yunyitang.me/atom.xml',
                icon: 'https://www.yunyitang.me/favicon/favicon.ico',
                avatar: 'https://www.yunyitang.me/img/Avatar.png',
                archs: ['Hexo', 'GitHub Pages'],
                date: '2024-02-18',
                comment: '很有博客的味道。',
            },
            {
                author: 'L1nSn0w',
                title: 'L1nSn0w\'s Site',
                desc: '无限进步.🎈',
                link: 'https://linsnow.cn/',
                feed: 'https://linsnow.cn/index.xml',
                icon: 'https://linsnow.cn/favicon.ico',
                avatar: getFeedIcon('lin-snow'),
                archs: ['Hugo', '服务器'],
                date: '2024-02-14',
                comment: '广工学弟。',
            },
            {
                author: '茂茂物语',
                desc: '茂茂的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
                link: 'https://notes.fe-mm.com/',
                icon: getFeedIcon('maomao1996', { preset: 'icon' }),
                avatar: getFeedIcon('maomao1996'),
                archs: ['VitePress', 'Netlify'],
                date: '2024-02-17',
            },
            {
                author: 'Naokuo',
                desc: '请给我来亿碗三鲜面',
                link: 'https://blog.naokuo.top/',
                feed: 'https://blog.naokuo.top/rss2.xml',
                icon: 'https://blog.naokuo.top/favicon.ico',
                avatar: 'https://blog.naokuo.top/img/author/author_512.webp',
                archs: ['Hexo', 'Vercel'],
                date: '2024-02-18',
                comment: '折腾博客。',
            },
            {
                author: '晓空',
                sitenick: '空域',
                title: '晓空blog',
                desc: '探索更大的世界',
                link: 'https://blog.moeworld.tech/',
                feed: 'https://blog.moeworld.tech/feed/',
                icon: 'https://blog.moeworld.tech/wp-content/uploads/2024/08/cropped-favicon-32x32.png',
                avatar: 'https://blog.moeworld.tech/wp-content/themes/kratos-pjax-master/static/images/photo.jpg',
                archs: ['WordPress', '服务器'],
                date: '2024-02-25',
                comment: '技术折腾笔记。',
            },
            {
                author: 'Kegongteng',
                desc: 'Blogger / Technophile / Student',
                link: 'https://kegongteng.cn/',
                feed: 'https://kegongteng.cn/atom',
                icon: 'https://zh.yuazhi.cn/yellow.png',
                avatar: 'https://bu.dusays.com/2023/12/23/65867c3357bb6.jpg',
                archs: ['Gridea', 'Vercel'],
                date: '2024-02-25',
                comment: '有不错想法的中学生。',
            },
            {
                author: '洛寒兮',
                title: 'I\'m Luochancy',
                desc: '这是个猫猫的博客喵～',
                link: 'https://www.luochancy.com/',
                feed: 'https://www.luochancy.com/feed',
                icon: 'https://www.luochancy.com/wp-content/uploads/2023/10/cropped-231026_head_image-32x32.png',
                avatar: 'https://www.luochancy.com/wp-content/uploads/2023/12/1904634_Ehaif6np.png',
                archs: ['WordPress', 'Cloudflare'],
                date: '2024-03-01',
                comment: '高中生。',
            },
            {
                author: '清羽飞扬',
                title: 'LiuShen\'s Blog',
                desc: '柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜',
                link: 'https://blog.liushen.fun/',
                feed: 'https://blog.liushen.fun/atom.xml',
                icon: 'https://blog.liushen.fun/info/avatar.ico',
                avatar: 'https://cdn.qyliu.top/i/2024/03/29/66061417537af.png',
                archs: ['Hexo', '国内 CDN'],
                date: '2024-06-02',
                comment: '武理工学长，西安老乡。',
            },
            {
                author: '浪海导航',
                link: 'https://www.langhai.net/',
                icon: 'https://www.langhai.net/assets/images/langhai-logo.ico',
                avatar: 'https://www.langhai.net/assets/images/langhai-logo.png',
                archs: ['Hugo', 'Cloudflare'],
                date: '2024-06-04',
            },
            {
                author: 'awaae',
                sitenick: '呓语梦轩',
                desc: '用心享受生活',
                link: 'https://blog.awaae001.top/',
                feed: 'https://blog.awaae001.top/atom.xml',
                icon: 'https://unavatar.webp.se/blog.awaae001.top',
                avatar: 'https://image.m-c.top/?/images/2024/01/13/Pqeh0v6VaK/ico.jpg',
                archs: ['Hexo', '国内 CDN'],
                date: '2024-06-05',
                comment: '有思考的高中生。',
            },
            {
                author: '氿月',
                sitenick: '寂白沙洲冷',
                desc: 'Et in Arcadia, ego.',
                link: 'https://chuishen.xyz/',
                feed: 'https://chuishen.xyz/atom.xml',
                icon: 'https://chuishen.xyz/img/logo.png',
                avatar: 'https://cravatar.cn/avatar/57ff1222a81493a0e72782530e77b269?s=160',
                archs: ['Hexo', 'Vercel'],
                date: '2024-06-16',
                comment: '虚构文学。',
            },
            {
                author: '晚夜',
                desc: '做好量变的准备，促进事物的质变。',
                link: 'https://www.iczrx.cn/',
                feed: 'https://www.iczrx.cn/feed/',
                icon: 'https://www.iczrx.cn/favicon.ico',
                avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1463656527&s=4',
                archs: ['Typecho', '服务器'],
                date: '2024-07-11',
                comment: '分享折腾与生活的高中生。',
            },
            {
                author: '太阳可以是蓝色',
                desc: 'Live and learn. 🌱',
                link: 'https://blog.mletter.cn/',
                icon: 'https://gravatar.loli.net/avatar/383deee9b38a9dd8e428797a3a0c7f0d',
                avatar: 'https://img13.360buyimg.com/ddimg/jfs/t1/239095/17/9691/19853/664d82dfF34a0990c/c4198876146be2d4.jpg',
                archs: ['Hexo', 'Netlify'],
                date: '2024-07-11',
                comment: '在读运维开发工程师，记录技术和生活日常。',
            },
            {
                author: '天翔TNXG',
                sitenick: '空间站',
                title: '天翔TNXGの空间站',
                desc: '明日尚未到来，希望凝于心上',
                link: 'https://tnxgmoe.com/',
                feed: 'https://tnxgmoe.com/feed',
                icon: 'https://tnxgmoe.com/favicon.png',
                avatar: 'https://api-space.tnxg.top/avatar?s=qq',
                archs: ['Mix Space', 'Cloudflare'],
                date: '2024-07-11',
                comment: '西北地区高中生，开源爱好者。',
            },
            {
                author: 'Winner365',
                sitenick: '云栈',
                title: '365云栈',
                desc: '初阅不明言外意，重温方觉字中情',
                link: 'https://blog.365sites.top/',
                feed: 'https://blog.365sites.top/rss.xml',
                icon: 'https://blog.365sites.top/upload/avatar.png',
                avatar: 'https://blog.365sites.top/upload/avatar.png',
                archs: ['Halo', 'Cloudflare'],
                date: '2024-07-14',
                comment: '学生，折腾博客。',
            },
            {
                author: 'FloatSheep',
                title: 'FloatSheep\'s Blog',
                desc: 'On the other side of obstacles',
                link: 'https://blog.hesiy.cn/',
                feed: 'https://blog.hesiy.cn/posts/index.xml',
                icon: 'https://blog.hesiy.cn/favicon.ico',
                avatar: getFeedIcon('FloatSheep'),
                archs: ['Hugo', 'Deno Deploy'],
                date: '2024-07-24',
                comment: '喜欢折腾。',
            },
            {
                author: 'Henry Moreau',
                title: '一站 - Henry的博客',
                desc: 'Student / Designer / Dreamchaser',
                link: 'https://blog.henrywhu.cn/',
                feed: 'https://blog.henrywhu.cn/atom.xml',
                icon: 'https://blog.henrywhu.cn/favicon.ico',
                avatar: 'https://bu.dusays.com/2024/06/28/667e684e0adbe.png',
                archs: ['Gridea', '服务器'],
                date: '2024-07-24',
                comment: '高中生，很有博客的味道。',
            },
            {
                author: 'Xlenco',
                sitenick: '希乐博客',
                desc: '互联网中的静谧之地',
                link: 'https://blog.xlenco.top/',
                feed: 'https://blog.xlenco.top/atom.xml',
                icon: 'https://weavatar.com/avatar/67254b346498965226e5c91ebff66a69570b97f224d2d061e504b4eade1f00fa?s=96',
                avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1043865083&s=4',
                archs: ['Nuxt', 'Vercel'],
                date: '2024-07-28',
                comment: '学生，经验分享。',
            },
            {
                author: '十玖八柒',
                sitenick: 'Z次元',
                desc: '一个收藏回忆与分享技术的地方',
                link: 'https://blog.ahzoo.cn/',
                feed: 'https://blog.ahzoo.cn/rss.xml',
                icon: 'https://blog.ahzoo.cn/favicon.ico',
                avatar: 'https://blog.ahzoo.cn/avatar.webp',
                archs: ['Nuxt', '服务器'],
                date: '2024-08-02',
                comment: 'Nuxt博客，技术笔记。',
            },
            {
                author: 'iMaeGoo',
                sitenick: '空间站',
                title: '虹墨空间站',
                desc: '虹墨空间站',
                link: 'https://www.imaegoo.com/',
                feed: 'https://www.imaegoo.com/atom.xml',
                icon: 'https://www.imaegoo.com/favicon.ico',
                avatar: 'https://www.imaegoo.com/images/avatar.jpg',
                archs: ['Hexo', '国内 CDN'],
                date: '2024-08-19',
                comment: '前端折腾。',
            },
            {
                author: 'DuckXu',
                sitenick: 'Notebook',
                title: 'DuckXu\'s Notebook',
                desc: 'DuckXu\'s Internet home',
                link: 'https://i.duckxu.com/',
                feed: 'https://i.duckxu.com/rss.xml',
                icon: 'https://kycloud3.koyoo.cn/2024080228778202408022342057562.png',
                avatar: 'https://media.duckxu.com/blogfiles/public/iduckxucom.jpg',
                archs: ['Typecho', '服务器'],
                date: '2024-08-20',
                comment: '学生，记录生活思考。',
            },
            {
                author: '梦爱吃鱼',
                desc: '但愿日子清静抬头遇见的满是柔情',
                link: 'https://blog.bsgun.cn/',
                feed: 'https://cdn.bsgun.cn/Hexo-static/img/favicon.ico',
                icon: 'https://unavatar.webp.se/blog.bsgun.cn',
                avatar: 'https://oss-cdn.bsgun.cn/logo/avatar.256.png',
                archs: ['Hexo', '国内 CDN'],
                date: '2024-08-20',
                comment: '博客折腾。',
            },
            {
                author: '徐徐爱coding',
                desc: '一个精美的个人博客，记录平时的学习笔记',
                link: 'https://www.xu69.com',
                // feed: 'https://www.xu69.com/rss.xml',
                icon: 'https://www.xu69.com/xu-resource/ico.png',
                avatar: getFeedIcon('junxu821'),
                archs: ['Nuxt', '国内 CDN'],
                date: '2024-09-01',
                comment: '前端技术笔记，希望能做好响应式。',
            },
            {
                author: 'DengQN',
                title: 'DengQN\'s Blog',
                desc: '普通程序员',
                link: 'https://dengqn.com/',
                feed: 'https://dengqn.com/feed',
                icon: 'https://dengqn.com/favicon.ico',
                avatar: 'https://dengqn.com/image/headimg.png',
                archs: ['Vue', '服务器'],
                date: '2024-09-18',
                comment: '技术吐槽和运维记录。',
            },
            {
                author: 'LineXic',
                desc: '念念不忘，必有回响',
                link: 'https://linexic.top/',
                feed: 'https://linexic.top/feed.xml',
                icon: 'https://linexic.top/logo.png',
                avatar: 'https://linexic.top/logo.png',
                archs: ['Jekyll', 'Cloudflare'],
                date: '2024-10-02',
                comment: '前端学习，高中生活。',
            },
            {
                author: 'tinsir888',
                desc: 'Ηλύσια Πεδία',
                title: 'min hjemmeside',
                link: 'https://tinsir888.github.io/',
                feed: 'https://tinsir888.github.io/atom.xml',
                icon: getFeedIcon('tinsir888', { preset: 'icon' }),
                avatar: getFeedIcon('tinsir888'),
                archs: ['Hexo', 'GitHub Pages'],
                date: '2024-10-18',
                comment: '计算机科学，留学生活。',
            },
            {
                author: '鹊楠',
                sitenick: '小窝',
                title: '鹊楠の小窝',
                desc: '世界那么大，我想去看看',
                link: 'https://blog.quenan.love/',
                feed: 'https://blog.quenan.love/atom.xml',
                icon: 'https://tuchuang.voooe.cn/images/2024/01/29/logo_icon.png',
                avatar: getFeedIcon('QNquenan'),
                archs: ['Hexo', 'Vercel'],
                date: '2024-10-22',
                comment: '学生，技术分享。',
            },
            {
                author: '菜园前端',
                desc: '前端学习笔记分享、小白都能看懂的笔记',
                link: 'https://note.noxussj.top/?s=y9',
                icon: 'https://note.noxussj.top/logo.png',
                avatar: 'https://note.noxussj.top/logo.png',
                archs: ['VitePress', '国内 CDN'],
                date: '2024-10-23',
                comment: '前端学习笔记。',
            },
            {
                author: 'Redish101',
                title: 'Redish101 Blog',
                desc: '学生，人，活的',
                link: 'https://blog.redish101.top/',
                feed: 'https://blog.redish101.top/feed',
                icon: getFeedIcon('Redish101', { preset: 'icon' }),
                avatar: getFeedIcon('Redish101'),
                archs: ['Next.js', 'Vercel'],
                date: '2024-10-27',
                comment: '江湖人称数据库，常用Go语言，学生。',
            },
            {
                author: 'Pinpe',
                sitenick: '云端',
                title: 'Pinpe的云端',
                desc: '一个属于自己的云朵。',
                link: 'https://pinpe.top/',
                feed: 'https://blog.pinpe.top/feed/',
                icon: 'https://blog.pinpe.top/wp-content/uploads/2024/09/cropped-b_1fd3d971c1071befe3dd1d748ce3aa46-32x32.jpg',
                avatar: 'https://pinpe.top/head.jpg',
                archs: ['WordPress', '虚拟主机'],
                date: '2024-10-31',
                comment: '学生，奇妙幻想和思考。',
            },
            {
                author: '浩瀚星河',
                desc: 'A Go Enthusiast',
                link: 'https://blog.codepzj.cn/',
                feed: 'https://blog.codepzj.cn/atom.xml',
                icon: 'https://blog.codepzj.cn/assets/images/avatar.jpg',
                avatar: getFeedIcon('codepzj'),
                archs: ['Hexo', '服务器'],
                date: '2024-10-31',
                comment: 'Go语言学习，技术分享。',
            },
            {
                author: '水氵冫',
                sitenick: '微霞',
                desc: '水风清，晚霞明',
                link: 'https://yuuu.org/',
                feed: 'https://yuuu.org/atom.xml',
                icon: 'https://cdn.yuuu.org/img/favicon-32x32.png',
                avatar: 'https://cdn.yuuu.org/img/avatar.webp',
                archs: ['Hexo', 'Vercel'],
                date: '2024-11-03',
                comment: '学生，技术分享，生活。',
            },
        ],
    },
]
