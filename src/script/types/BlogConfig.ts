export interface BlogConfig {
  title: string,
  description?: string,
  navOuterLinks?: Array<{
    name: string,
    url: string,
    linkBlankMode: boolean
  }>,
  background: string,
  commentService?: {
    provider: string,
    appid: string,
    appsecret: string,
    prompt?: string
  },
  hitokoto: {
    apiUrl?: string,
    enabled: boolean
  },
  footer: string,
  license: {
    license: string,
    useGlobaly: boolean,
    explanation: string
  },
  pages?: Array<{
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
  }>,
  articles: Array<{
    title: string,
    fileName: string,
    tags: Array<string>,
    summary: string,
    createdAt: string,
    modifiedAt: string,
    stickToTop: boolean,
    hidden: boolean,
    enableComments: boolean
  }>,
  language: "zh_CN" | "en_US",
  broadcast: {
    enabled: boolean,
    onlyShowOnHomePage: boolean,
    content?: string
  },
  customCss: {
    enabled: boolean,
    content?: string
  },
  customJs: {
    enabled: boolean,
    content?: string
  }
}