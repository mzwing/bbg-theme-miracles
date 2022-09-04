import { BlogConfig } from "./types/BlogConfig";
import { Themecfg } from "./types/Themecfg";

let config = await fetch("./data/index.json").then(res => res.json());
let themecfg: Themecfg = await fetch("./themecfg/themecfg.json").then(res => res.json());

let blogConfig: BlogConfig;

export { blogConfig };
