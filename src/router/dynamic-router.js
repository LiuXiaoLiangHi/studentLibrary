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
 

//设置系统页面
const SystemSet = () => import('@/views/system-Set/index.vue')

/* 需要权限判断的路由 */
const dynamicRoutes = [
    //学生管理
    {
        path: '/students',
        component: Student,
        name: 'students-management',
        meta: {
            name: '学生管理',
            icon: '邮件',
            iconColor:''
        },
        children: [
            {
                path: 'statistical',
                name: 'students-statistical',
                component: Statistical,
                meta: {
                    name: '学生统计',
                    icon: ''
                }
            },
            {
                path: 'classList',
                name: 'students-classList',
                component: ClassList,
                meta: {
                    name: '班级列表',
                    icon: ''
                }
            },
            {
                path: 'information',
                name: 'students-information',
                commponent: StudentsInformation,
                meta: {
                    name: '学生信息管理',
                    icon: ''
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
            icon: '',
            iconColor:''
        },
        children: [
            {
                path: 'borrow',
                name: 'book-borrow',
                component: Borrow,
                meta: {
                    name: '图书借阅',
                    icon: ''
                }
            },
            {
                path: 'return',
                name: 'book-return',
                component: BookReturn,
                meta: {
                    name: '图书归还',
                    icon: ''
                }
            },
            {
                path: 'statistical',
                name: 'book-statistical',
                component: BookStatistical,
                meta: {
                    name: '借阅统计',
                    icon: ''
                }
            },
            {
                path: 'information',
                name: 'book-information',
                component: BookInformation,
                meta: {
                    name: '书库管理',
                    icon: ''
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
            icon: '',
            iconColor:''
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
          
        ]

    },

    //系统设置（背景色等)
    {
        path: '/systemSet',
        name: 'systemSet',
        component: SystemSet,
        meta: {
            name: '系统设置',
            icon: '',
            iconColor:''
        }
    }

]

export default dynamicRoutes
