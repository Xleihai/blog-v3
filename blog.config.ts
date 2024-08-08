import type { Nav } from '~/types/nav'

const author = {
    name: '纸鹿本鹿',
    avatar: 'https://blog.zhilu.cyou/static/avatar.jpg',
    email: 'hi@zhilu.cyou',
    homepage: 'https://zhilu.cyou',
}

export default {
    title: '纸鹿摸鱼处',
    description: '纸鹿至麓不知路，支炉制露不止漉。',
    author,
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    favicon: 'https://blog.zhilu.cyou/static/icon.png',
    url: 'https://blog.zhilu.cyou',
    nav: <Nav> [
        { title: '', items: [
            { icon: 'ph:files-duotone', text: '文章', url: '/' },
            { icon: 'ph:link-duotone', text: '友链', url: '/link' },
            { icon: 'ph:archive-duotone', text: '归档', url: '/archive' },
            { icon: 'ph:identification-card-duotone', text: '个人主页', url: 'https://zhilu.cyou/', external: true },
        ] },
        { title: '社交', items: [
            { icon: 'ri:qq-fill', text: '群: 169994096', url: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd', external: true },
            { icon: 'ph:github-logo-duotone', text: 'Github', url: 'https://github.com/L33Z22L11', external: true },
        ] },
    ],
    sidebar: {
        footerLink: {
            text: 'L33Z22L11/blog-v3',
            url: 'https://github.com/L33Z22L11/blog-v3',
        },
    },
    footer: {
        copyright: `© ${new Date().getFullYear()} 纸鹿本鹿`,
        nav: <Nav>[
            { title: '探索', items: [
                { icon: 'ph:link-bold', text: '友链', url: '/link' },
                { icon: 'ph:subway-bold', text: '开往', url: 'https://www.travellings.cn/go-by-clouds.html' },
                { icon: 'ph:flying-saucer-bold', text: '异次元旅行', url: 'https://travel.moe/go.html?travel=on' },
            ] },
            { title: '社交', items: [
                { icon: 'ri:github-fill', text: 'L33Z22L11', url: 'https://github.com/L33Z22L11' },
                { icon: 'ri:qq-fill', text: '群: 169994096', url: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd' },
                { icon: 'ph:mailbox-fill', text: author.email, url: `mailto:${author.email}` },
            ] },
            { title: '信息', items: [
                { icon: 'ph:swatches-bold', text: '主题灵感源自Stellar', url: '/theme' },
                { icon: 'ph:certificate-bold', text: '萌ICP备20246888号', url: 'https://icp.gov.moe/?keyword=20246888' },
            ] },
        ],
        message: '',
    },

    imageDomains: [
        'blog.zhilu.cyou',
        // '7.isyangs.cn',
    ],
    injectHeadLinks: [
        { rel: 'stylesheet', href: '//s1.hdslb.com/bfs/static/jinkela/long/font/medium.css', media: 'none', onload: 'this.media="all"' },
    ],
    indexGenerator: {
        perPage: 10,
        orderBy: 'date',
    },
}
