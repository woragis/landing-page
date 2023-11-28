import { Routes, Route } from "react-router-dom";
import { Pages } from "../types/router.types";
import pages from "./pagesData";

const Router = () => {
  const pagesRoutes = pages.map(({ title, path, element }: Pages) => {
    return <Route key={title} path={path} element={element} />;
  });

  return <Routes>{pagesRoutes}</Routes>;
};

export default Router;
