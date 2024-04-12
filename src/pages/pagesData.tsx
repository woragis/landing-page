import React from "react";

import Home from "./Home";
import { Pages } from "../types/router.types";

const pages: Pages[] = [
  { title: "home", path: "/", element: <Home /> },
];

// 10 web projects
const projectsPages: Pages[] = [
  { title: 'E Commerce', path: 'ecommerce/', element: <Home /> },
  { title: 'Landing Page', path: 'lp/', element: <Home /> },
  { title: 'ICM - Contribuicao', path: 'icm/', element: <Home /> },
  { title: 'Pokemon Central', path: 'pokemon-wiki/', element: <Home /> },
  { title: 'Assistencia Tecnica', path: 'ti-support/', element: <Home /> },
  { title: 'Personal Email', path: 'email/', element: <Home /> },
  { title: 'Discord Clone', path: 'discord/', element: <Home /> },
  { title: 'Twitter Clone', path: 'twitter/', element: <Home /> },
  { title: 'Instagram Clone', path: 'instagram/', element: <Home /> },
  { title: 'Reddit Clone', path: 'reddit/', element: <Home /> },
];

// 6 bots projects
const projectsBots = [
  { title: 'Discord Bot', path: 'bots/discord', element: <Home /> },
  { title: 'Twitter Screenshot Bot', path: 'bots/twitter-picture', element: <Home /> },
  { title: 'Website Webscraper', path: 'bots/web-scraper', element: <Home /> },
  { title: 'Video Downloader', path: 'bots/video-downloader', element: <Home /> },
  { title: 'Trader', path: 'bots/trading-bot', element: <Home /> },
  { title: 'DropShipping Employee', path: 'bots/ds-employee', element: <Home /> },
];

export default pages;
