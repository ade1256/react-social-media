import DetailPostPage from "../pages/DetailPost";
import HomePage from "../pages/Home";
import UserDetailPage from "../pages/UserDetail";

export const routes = [
  {
    path: "/home",
    component: HomePage,
    exact: true,
  },
  {
    path: "/detail-post/:id",
    component: DetailPostPage,
    exact: true,
  },
  {
    path: "/user/:userId",
    component: UserDetailPage,
    exact: true,
  },
];
