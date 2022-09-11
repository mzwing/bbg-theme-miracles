import { BlogConfig } from "./types/BlogConfig";
import { Config } from "./types/Config";
import { Themecfg } from "./types/Themecfg";

let config: Config = await fetch("./data/index.json").then(res => res.json());
let themecfg: Themecfg = await fetch("./themecfg/themecfg.json").then(res => res.json());

const _getNavOuterLinks = (navOuterLinksOriginArray: Array<{
  "显示名称": string,
  "url": string,
  "是否在新标签页打开": boolean
}>) => {
  if (Array.isArray(navOuterLinksOriginArray)) { }
  return;
};

let blogConfig: BlogConfig = {
  title: config["博客标题"],
  description: config["博客描述（副标题）"]
};

export { blogConfig };
