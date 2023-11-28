import React from "react";

import Home from "./Home";
import { Pages } from "../types/router.types";

const pages: Pages[] = [{ title: "home", path: "/", element: <Home /> }];

export default pages;
