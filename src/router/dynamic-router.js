/* 学生管理 */
const Order = () => import('@/views/order-manage')
const OrderList = () => import('@/views/order-manage/order-list')
const ProductManage = () => import('@/views/order-manage/product-manage')
const ProductionList = () =>
    import('@/views/order-manage/product-manage/production-list')
const ReviewManage = () =>
    import('@/views/order-manage/product-manage/review-manage')
const ReturnGoods = () => import('@/views/order-manage/return-goods')

/* 图书管理 */
const Goods = () => import('@/views/goods-manage')
const GoodsList = () => import('@/views/goods-manage/goods-list')
const GoodsClassify = () => import('@/views/goods-manage/goods-classify')
//  用户管理
const Permission = () => import('@/views/permission')
// const UserManage = () => import('@/views/permission/user-manage')
// const RoleManage = () => import('@/views/permission/role-manage')
// const MenuManage = () => import('@/views/permission/menu-manage')


//学生管理
const Student = () => import('@/views/student/index.vue')
const Statistical = () => import('@/views/student/statistical/index.vue')
const ClassList = () => import('@/views/student/classList/index')
const StudentsInformation=() => import('@/views/student/information/index.vue')

//图书管理
const book = () => import('@/views/book/index.vue')
const Borrow = () => import('@/views/book/borrow/index.vue')
const BookReturn = () => import('@/views/book/book-return/index.vue')
const BookStatistical =() => import('@/views/book/statistical/index.vue')
const BookInformation =() => import('@/views/book/information/index.vue')


//用户管理
const AdminManagement =() => import('@/views/admin/index.vue')
const AdminCenter=() => import('@/views/admin/admin-center/index.vue')
const AdminPermission=() => import('@/views/admin/admin-center/permission/index.vue')
const AdminUserList =() => import('@/views/admin/admin-center/userList/index.vue')
const AdminSet =() => import('@/views/admin/admin-set/index.vue')

//设置系统页面
const SystemSet = () => import('@/views/system-Set/index.vue')

/* 需要权限判断的路由 */
const dynamicRoutes = [
    {
        path: '/order',
        component: Order,
        name: 'order-manage',
        meta: {
            name: '订单管理',
            icon: '邮件',
            iconColor:'color:#76d50d'
        },
        children: [
            {
                path: 'list',
                name: 'order-list',
                component: OrderList,
                meta: {
                    name: '订单列表',
                    icon: 'fa fa-list'
                }
            },
            {
                path: 'product',
                name: 'product-manage',
                component: ProductManage,
                meta: {
                    name: '生产管理',
                    icon: 'fa fa-gavel'
                },
                children: [
                    {
                        path: 'list',
                        name: 'product-list',
                        component: ProductionList,
                        meta: {
                            name: '生产列表',
                            icon: 'fa fa-align-left'
                        }
                    },
                    {
                        path: 'review',
                        name: 'review-manage',
                        component: ReviewManage,
                        meta: {
                            name: '审核管理',
                            icon: 'fa fa-group'
                        }
                    }
                ]
            },
            {
                path: 'returnGoods',
                name: 'return-goods',
                component: ReturnGoods,
                meta: {
                    name: '退货管理',
                    icon: 'fa fa-handshake-o'
                }
            }
        ]
    },
    {
        path: '/goods',
        component: Goods,
        name: 'goods',
        meta: {
            name: '产品管理',
            icon: 'el-icon-goblet',
            iconColor:'color:#00ffff'
        },
        children: [
            {
                path: 'list',
                name: 'goods-list',
                component: GoodsList,
                meta: {
                    name: '产品列表',
                    icon: 'el-icon-goblet'
                }
            },
            {
                path: 'classify',
                name: 'goods-classify',
                component: GoodsClassify,
                meta: {
                    name: '产品分类',
                    icon: 'el-icon-goblet'
                }
            }
        ]
    },
    {
        path: '/permission',
        component: Permission,
        name: 'permission',
        meta: {
            name: '权限管理',
            icon: 'el-icon-lollipop',
            iconColor:'color:#ff2982'
        },
        // children: [
        //     {
        //         path: 'user',
        //         name: 'user-manage',
        //         component: UserManage,
        //         meta: {
        //             name: '用户管理',
        //             icon: 'table'
        //         }
        //     },
        //     {
        //         path: 'role',
        //         name: 'role-manage',
        //         component: RoleManage,
        //         meta: {
        //             name: '角色管理',
        //             icon: 'eye'
        //         }
        //     },
        //     {
        //         path: 'menu',
        //         name: 'menu-manage',
        //         component: MenuManage,
        //         meta: {
        //             name: '菜单管理',
        //             icon: 'tree'
        //         }
        //     }
        // ]
    }
    ,
    //学生管理
    {
        path: '/students',
        component: Student,
        name: 'students-management',
        meta: {
            name: '学生管理',
            icon: '邮件',
            iconColor:'color:#94493c'
        },
        children: [
            {
                path: 'statistical',
                name: 'students-statistical',
                component: Statistical,
                meta: {
                    name: '学生统计',
                    icon: 'el-icon-s-data'
                }
            },
            {
                path: 'classList',
                name: 'students-classList',
                component: ClassList,
                meta: {
                    name: '班级列表',
                    icon: 'fa fa-address-book'
                }
            },
            {
                path: 'information',
                name: 'students-information',
                commponent: StudentsInformation,
                meta: {
                    name: '学生信息管理',
                    icon: 'el-icon-coffee-cup'
                }
            }
        ]
    },
    // 图书管理
    {
        path: '/book',
        component: book,
        name: 'book-management',
        meta: {
            name: '图书管理',
            icon: 'fa fa-book',
            iconColor:'color:#a16ecb'
        },
        children: [
            {
                path: 'borrow',
                name: 'book-borrow',
                component: Borrow,
                meta: {
                    name: '图书借阅',
                    icon: 'fa fa-american-sign-language-interpreting'
                }
            },
            {
                path: 'return',
                name: 'book-return',
                component: BookReturn,
                meta: {
                    name: '图书归还',
                    icon: 'el-icon-ice-drink'
                }
            },
            {
                path: 'statistical',
                name: 'book-statistical',
                component: BookStatistical,
                meta: {
                    name: '借阅统计',
                    icon: 'el-icon-goblet'
                }
            },
            {
                path: 'information',
                name: 'book-information',
                component: BookInformation,
                meta: {
                    name: '书库管理',
                    icon: 'el-icon-sugar'
                }
            }
        ]
    },
    {
        path: 'admin',
        name: 'admin-management',
        component: AdminManagement,
        meta: {
            name: '用户管理',
            icon: 'fa fa-user',
            iconColor:'color:#695CC1'
        },
        children: [
            {
                path: 'center',
                name: 'admin-center',
                component:  AdminCenter,
                meta: {
                    name: '个人中心',
                    icon: ''
                },
                children: [
                    {
                        path: 'permission',
                        name: 'admin-permission',
                        component: AdminPermission,
                        meta: {
                            name: '权限管理',
                            icon: ''
                        }
                    },
                    {
                        path: 'userList',
                        name: 'admin-userList',
                        component: AdminUserList,
                        meta: {
                            name: '角色管理',
                            icon: ''
                        }
                    }
                ]

            },
            {
                path: 'set',
                name: 'admin-set',
                commponent: AdminSet,
                meta: {
                    name: "个人设置",
                    icon: ''
                }
            }
        ]

    },

    //系统设置（背景色等)
    {
        path: '/systemSet',
        name: 'systemSet',
        component: SystemSet,
        meta: {
            name: '系统设置',
            icon: 'fa fa-cogs',
            iconColor:'color:#BE1238'
        }
    }

]

export default dynamicRoutes
