type NavOuterLinksObject = {
  name: string,
  url: string,
  linkBlankMode: boolean
}

type CommentService = {
  provider: string,
  appid: string,
  appsecret: string,
  prompt?: string
}

type Hitokoto = {
  apiUrl?: string,
  enabled: boolean
}

type License = {
  license: string,
  useGlobaly: boolean,
  explanation: string
}

type PagesObject = {
  title: string,
  inNavigation: boolean,
  inNavigationName?: string,
  linkBlankMode: boolean,
  fileName: string,
  isHTML: boolean,
  enableComments: boolean,
  extraInfo?: string,
  enableRemoteFileUrl: boolean,
  remoteUrl?: string
}

type ArticlesObject = {
  title: string,
  fileName: string,
  tags: Array<string>,
  summary: string,
  createdAt: string,
  modifiedAt: string,
  stickToTop: boolean,
  hidden: boolean,
  enableComments: boolean
}

type Language = "zh_CN" | "en_US";

type Broadcast = {
  enabled: boolean,
  onlyShowOnHomePage: boolean,
  content?: string
}

type CustomCssAndJs = {
  enabled: boolean,
  content?: string
}

export interface BlogConfig {
  title: string,
  description?: string,
  navOuterLinks?: Array<NavOuterLinksObject>,
  background: string,
  commentService?: CommentService,
  hitokoto: Hitokoto,
  footer: string,
  license: License,
  pages?: Array<PagesObject>,
  articles: Array<ArticlesObject>,
  language: Language,
  broadcast: Broadcast,
  customCss: CustomCssAndJs,
  customJs: CustomCssAndJs
}