// 北航教育基金会 H5 App
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            activeTab: 0,
            // 捐赠项目数据
            projects: [
                {
                    id: 1,
                    title: "北航发展基金",
                    desc: "用于支持学校各项事业发展",
                    category: "学校发展",
                    raised: 1285000,
                    target: 2000000,
                    progress: 64,
                    image: "https://img.yzcdn.cn/vant/ipad.jpeg"
                },
                {
                    id: 2,
                    title: "学生奖助学金",
                    desc: "资助品学兼优的在校学生",
                    category: "学生资助",
                    raised: 860000,
                    target: 1000000,
                    progress: 86,
                    image: "https://img.yzcdn.cn/vant/ipad.jpeg"
                },
                {
                    id: 3,
                    title: "青年教师科研基金",
                    desc: "支持青年教师开展科研工作",
                    category: "教师发展",
                    raised: 420000,
                    target: 800000,
                    progress: 53,
                    image: "https://img.yzcdn.cn/vant/ipad.jpeg"
                }
            ],
            // 文创产品数据
            products: [
                {
                    id: 1,
                    name: "北航纪念卫衣",
                    price: 168,
                    image: "https://img.yzcdn.cn/vant/t-shirt.jpg"
                },
                {
                    id: 2,
                    name: "北航马克杯",
                    price: 58,
                    image: "https://img.yzcdn.cn/vant/cat.jpeg"
                },
                {
                    id: 3,
                    name: "北航校徽胸针",
                    price: 28,
                    image: "https://img.yzcdn.cn/vant/cat.jpeg"
                },
                {
                    id: 4,
                    name: "北航帆布包",
                    price: 88,
                    image: "https://img.yzcdn.cn/vant/cat.jpeg"
                }
            ],
            // 校友活动数据
            activities: [
                {
                    id: 1,
                    title: "2026年校友新春联谊会",
                    date: "2026-02-15",
                    location: "北航晨兴音乐厅",
                    status: "报名中"
                },
                {
                    id: 2,
                    title: "校友企业招聘会",
                    date: "2026-03-20",
                    location: "北航体育馆",
                    status: "即将开始"
                },
                {
                    id: 3,
                    title: "毕业十周年返校活动",
                    date: "2026-04-10",
                    location: "北航校园",
                    status: "报名中"
                }
            ],
            // 基金会动态数据
            newsList: [
                {
                    id: 1,
                    title: "北航教育基金会2025年度工作总结会议顺利召开",
                    date: "2026-01-20"
                },
                {
                    id: 2,
                    title: "感谢张校友捐赠500万元设立奖学金",
                    date: "2026-01-15"
                },
                {
                    id: 3,
                    title: "北航文创产品新春特惠活动开启",
                    date: "2026-01-10"
                }
            ]
        };
    },
    methods: {
        onClickLeft() {
            vant.Toast('返回');
        },
        onSearch() {
            vant.Toast('搜索功能开发中');
        },
        viewMore() {
            vant.Toast('查看更多捐赠项目');
        },
        viewMoreStore() {
            vant.Toast('进入文创商城');
        },
        viewMoreActivities() {
            vant.Toast('查看更多活动');
        },
        viewMoreNews() {
            vant.Toast('查看更多动态');
        },
        viewProject(id) {
            vant.Toast(`查看项目 ${id}`);
        },
        viewProduct(id) {
            vant.Toast(`查看产品 ${id}`);
        },
        viewActivity(id) {
            vant.Toast(`查看活动 ${id}`);
        },
        viewNews(id) {
            vant.Toast(`查看动态 ${id}`);
        },
        goPage(page) {
            const pageMap = {
                'index': 'index.html',
                'store': 'store.html',
                'activities': 'activities.html',
                'my': 'my.html'
            };
            if (pageMap[page]) {
                location.href = pageMap[page];
            }
        }
    }
});

// 使用 Vant 组件
app.use(vant);

// 挂载应用
app.mount('#app');