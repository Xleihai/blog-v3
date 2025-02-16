import type { NitroConfig } from 'nitropack'

// 谷歌上的文章还是旧链接
const redirectList = {
    '/201103/essay1-where': '/2010s/essay1-where',
    '/201408/have-a-strange-dream': '/2010s/have-a-strange-dream',
    '/201505/phone-2015': '/2010s/phone-2015',
    '/201606/school-stress': '/2010s/school-stress',
    '/201805/windows-launch-anim': '/2010s/windows-launch-anim',
    '/201907/score-query-leak': '/2010s/score-query-leak',
    '/201908/zhilu-site-biography': '/2010s/zhilu-site-biography',
    '/202002/essay3': '/2020/essay3',
    '/202002/essay4': '/2020/essay4',
    '/202002/father-birthday': '/2020/father-birthday',
    '/202006/school-diary': '/2020/school-diary',
    '/202010/life-is-dramatic': '/2020/life-is-dramatic',
    '/202105/virus-fakefolder': '/2021/virus-fakefolder',
    '/202110/exam-clock-develop': '/2021/exam-clock-develop',
    '/202110/noob-in-ctf': '/2021/noob-in-ctf',
    '/202111/message-heard': '/2021/message-heard',
    '/202201/school-thief': '/2022/school-thief',
    '/202209/ctf-nwpu': '/2022/ctf-nwpu',
    '/202210/thoughts-in-classroom': '/2022/thoughts-in-classroom',
    '/202211/linux-interview-2020': '/2022/linux-interview-2020',
    '/202212/linux-interview-2021': '/2022/linux-interview-2021',
    '/202301/linux-interview-2022': '/2022/linux-interview-2022',
    '/2023/linux-interview-2022': '/2022/linux-interview-2022',
    '/202302/c-strbuf': '/2023/c-strbuf',
    '/202303/linuxqq-crash': '/2023/linuxqq-crash',
    '/202304/vscode-simple-config': '/2023/vscode-simple-config',
    '/202305/archinstall-guide': '/2023/archinstall-guide',
    '/202306/archlinux-configure': '/2023/archlinux-configure',
    '/202307/archlinux-beautify': '/2023/archlinux-beautify',
    '/202308/light-backpack': '/2023/light-backpack',
    '/202309/windows-setup-guide': '/2023/windows-setup-guide',
    '/202310/tailscale-incomplete-guide': '/2023/tailscale-incomplete-guide',
    '/202311/termux-guide': '/2023/termux-guide',
    '/202311/xv6-lab-setup': '/2023/xv6-lab-setup',
    '/202312/ssh-key-login': '/2023/ssh-key-login',
    '/202401/milink-util': '/2024/milink-util',
    '/202401/moonlight-streaming-guide': '/2024/moonlight-streaming-guide',
    '/202402/apps-websites-preference-2023': '/2024/apps-websites-preference-2023',
    '/202402/carrier-overbilling': '/2024/carrier-overbilling',
    '/202402/link-util': '/2024/link-util',
    '/202402/virus-trueupdate': '/2024/virus-trueupdate',
    '/202403/balancing-today-tomorrow': '/2024/balancing-today-tomorrow',
    '/202403/boot-management': '/2024/boot-management',
    '/202403/helping-day': '/2024/helping-day',
    '/202404/archlinux-boot-repair': '/2024/archlinux-boot-repair',
    '/202404/magic-code': '/2024/magic-code',
}

const redirectRouteRules = Object.entries(redirectList)
    .reduce<NitroConfig['routeRules']>((acc, [from, to]) => {
        acc![from] = { redirect: { to, statusCode: 301 } }
        return acc
    }, {})

export default redirectRouteRules
