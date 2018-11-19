import Layout from "src/components/Layout";
import HomePage from "src/components/HomePage";
import AboutPage from "src/components/AboutPage";

const routes = [
  {
    component: Layout,
    routes: [
      {
        path: "/",
        exact: true,
        component: VideoLibrary
      },
      {
        path: "/lesson",
        exact: true,
        component: Lesson
      },
      {
        path: "/quiz",
        exact: true,
        component: Quiz
      }
    ]
  }
];

export default routes;
