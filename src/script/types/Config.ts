export interface Config {
  "博客标题": string,
  "博客描述（副标题）": string,
  "网站语言": "简体中文" | "English" | "日本語",
  "在菜单中添加归档和标签的入口": boolean,
  "在文章或页面的底部添加分享按钮，以便复制直链url": boolean,
  "静态资源": {
    "//": string,
    "资源目录": string,
    "网页图标文件名": string
  },
  "启用内建友人帐页面": boolean,
  "友人帐页面附加信息": string,
  "友人帐来自json文件": boolean,
  "若友人帐来自json文件，则地址为": string,
  "友人帐"?: Array<{
    "名称": string,
    "链接": string,
    "简介": string,
    "图标": string
  } | null>,
  "友人帐页面允许评论": boolean,
  "启用网站公告": boolean,
  "网站公告仅在首页显示": boolean,
  "网站公告": string,
  "菜单中的外部链接": Array<{
    "显示名称": string,
    "url": string,
    "是否在新标签页打开": boolean
  } | null>,
  "全局主题设置": {
    "//": string,
    "是否使用第三方主题": boolean,
    "若使用第三方主题，是否来自本地文件": boolean,
    "若使用来自主题商店的第三方主题，则主题名为": string,
    "若使用来自主题商店的第三方主题，则主题的更新发布日期为": number | string,
    "第三方主题版本": string,
    "第三方主题文件内容": Array<string | null>,
    "标题栏背景颜色": string,
    "标题栏文字颜色": string,
    "是否使用纯色背景（优先级高于背景图像）": boolean,
    "若使用纯色背景，颜色为": string,
    "是否使用背景图像": boolean,
    "若使用背景图像，设置为": {
      "//": string,
      "将网站根目录下的background.webp作为背景图像": boolean,
      "使用随机二次元图片作为背景图像（浅色背景）": boolean,
      "将某个url作为背景图像": boolean,
      "若将某个url作为背景图像，这个url是": string
    }
  },
  "全局评论设置": {
    "启用valine评论": boolean,
    "valine设置": {
      "leancloud_appid": string,
      "leancloud_appkey": string,
      "是否使用bbg公共评论服务": boolean,
      "记录评论者ip": boolean,
      "记录访问量": boolean,
      "评论区占位符（提示文字）": string,
      "评论者填写邮箱为qq邮箱时使用qq昵称和头像代替gravatar头像": boolean
    }
  },
  "一言设置": {
    "//": string,
    "启用一言": boolean,
    "范围设置": {
      "范围包括动画分类下的一言": boolean,
      "范围包括漫画分类下的一言": boolean,
      "范围包括游戏分类下的一言": boolean,
      "范围包括文学分类下的一言": boolean,
      "范围包括原创分类下的一言": boolean,
      "范围包括非原创分类下的一言": boolean,
      "范围包括其他分类下的一言": boolean,
      "范围包括影视分类下的一言": boolean,
      "范围包括诗词分类下的一言": boolean,
      "范围包括网易云分类下的一言（不建议）": boolean,
      "范围包括哲学分类下的一言": boolean,
      "范围包括抖机灵分类下的一言": boolean
    }
  },
  "底部信息（格式为markdown）": string,
  "全站内容授权说明": string,
  "页面列表": Array<{
    "页面标题": string,
    "是否显示在菜单中": boolean,
    "若显示在菜单中，则在菜单中显示为": string,
    "是否在新标签页打开": boolean,
    "文件名": string,
    "这是一个完整的html": boolean,
    "启用评论": boolean
  } | null>,
  "文章列表": Array<{
    "文章标题": string,
    "文件名": string,
    "标签": Array<string>,
    "摘要": string,
    "创建日期": string,
    "修改日期": string,
    "是否置顶": boolean,
    "是否隐藏": boolean,
    "启用评论": boolean
  } | null>,
  "CDN选择": number | boolean,
  "CDN路径": string,
  "启用自定义CSS": boolean,
  "启用自定义JS": boolean,
  "自定义CSS": string,
  "自定义JS": string,
  "文章列表中每页的文章数为": string | number,
  "全站内容授权协议": string,
  "不使用全站内容授权协议": boolean,
  "文章页面显示上一篇下一篇文章导航按钮": boolean,
  "提供文章文件下载": boolean,
  "提供复制全文到剪贴板的选项": boolean,
  "网站域名（包括https://）": string,
  "在对文章列表进行修改后触发rss生成": boolean,
  "在对文章或页面列表进行修改后触发sitemap.txt生成": boolean,
  "博客程序版本（禁止修改此值，否则会导致跨版本升级异常）": number
}
