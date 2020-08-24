// Home components
import HomeLayout from "../containers/Home/HomeLayout";
import About from "../containers/Home/About";
import MovieList from "../containers/Home/MovieList";
import MovieDetail from "../containers/Home/MovieDetail";
import ShowTime from "../containers/Home/ShowTime";
import Profile from "../containers/Home/Profile";
// Admin components
import AdminLayout from "../containers/Admin/AdminLayout";
import Figures from "../containers/Admin/Figures";
import MovieManaging from "../containers/Admin/MovieManaging";
import UserManaging from "../containers/Admin/UserManaging";

export const homeRoutes = [
    {
        exact: true,
        path: "/",
        component: HomeLayout,
    },
    {
        exact: false,
        path: "/about",
        component: About,
    },
    {
        exact: false,
        path: "/movie-list",
        component: MovieList,
    },
    {
        exact: false,
        path: "/movie-detail/:maPhim",
        component: MovieDetail,
    },
    {
        exact: false,
        path: "/show-time/:maLichChieu",
        component: ShowTime,
    },
    {
        exact: false,
        path: "/profile/:taiKhoan",
        component: Profile,
    },
];

export const adminRoutes = [
    {
        exact: false,
        path: "/admin",
        component: AdminLayout,
    },
    {
        exact: false,
        path: "/figures",
        component: Figures,
    },
    {
        exact: false,
        path: "/movie-managing",
        component: MovieManaging,
    },
    {
        exact: false,
        path: "/user-managing",
        component: UserManaging,
    },
]