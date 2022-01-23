import DetailPostPage from "../pages/DetailPost";
import HomePage from "../pages/Home";

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
];
