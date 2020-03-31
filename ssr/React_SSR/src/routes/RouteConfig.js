
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Movies from "@/pages/Movies"
import Front from "@/pages/Front"
import Admin from "@/pages/Admin"
import AdminHome from "@/pages/Admin/Home"
import AdminNotFound from "@/pages/Admin/NotFound"
import AdminSystemManage from "@/pages/Admin/SystemManage"
import AdminUserManage from "@/pages/Admin/UserManage"

export default [
    {
        key: "admin",
        path: "/admin",
        component: Admin,
        routes: [
            {
                key: "home",
                path: "/admin",
                exact: true,
                component: AdminHome
            },
            {
                key: "user",
                path: "/admin/user",
                exact: true,
                component: AdminUserManage
            },
            {
                key: "sys",
                path: "/admin/sys",
                exact: true,
                component: AdminSystemManage
            },
            {
                key: "/admin/notfound",
                component: AdminNotFound
            },
        ]
    },
    {
        key: "front",
        path: "/",
        component: Front,
        routes: [
            {
                key: "home",
                path: "/",
                exact: true,
                component: Home
            },
            {
                key: "movies",
                path: "/movies",
                exact: true,
                component: Movies
            },
            {
                key: "notFound",
                component: NotFound
            }
        ]
    },
    {

    }
]