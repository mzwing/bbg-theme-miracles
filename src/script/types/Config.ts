export interface Config {
  "博客标题": "新的博客",
  "博客描述（副标题）": "Hello, World!",
  "网站语言": "简体中文",
  "在菜单中添加归档和标签的入口": true,
  "在文章或页面的底部添加分享按钮，以便复制直链url": true,
  "静态资源": {
    "//": "有关静态资源的配置项**禁止**任何修改。",
    "资源目录": "static",
    "网页图标文件名": "favicon.ico"
  },
  "启用内建友人帐页面": true,
  "友人帐页面附加信息": "",
  "友人帐来自json文件": false,
  "若友人帐来自json文件，则地址为": "",
  "友人帐": [],
  "友人帐页面允许评论": true,
  "启用网站公告": false,
  "网站公告仅在首页显示": true,
  "网站公告": "",
  "菜单中的外部链接": [],
  "全局主题设置": {
    "//": "颜色格式为十六进制颜色或HTML颜色名，如white、grey、#66ccff",
    "是否使用第三方主题": false,
    "若使用第三方主题，是否来自本地文件": false,
    "若使用来自主题商店的第三方主题，则主题名为": "",
    "若使用来自主题商店的第三方主题，则主题的更新发布日期为": "",
    "第三方主题版本": "",
    "第三方主题文件内容": [],
    "标题栏背景颜色": "#0d6efd",
    "标题栏文字颜色": "white",
    "是否使用纯色背景（优先级高于背景图像）": false,
    "若使用纯色背景，颜色为": "",
    "是否使用背景图像": true,
    "若使用背景图像，设置为": {
      "//": "只能选用以下方案中的一种。",
      "将网站根目录下的background.webp作为背景图像": false,
      "使用随机二次元图片作为背景图像（浅色背景）": true,
      "将某个url作为背景图像": false,
      "若将某个url作为背景图像，这个url是": ""
    }
  },
  "全局评论设置": {
    "启用valine评论": false,
    "valine设置": {
      "leancloud_appid": "",
      "leancloud_appkey": "",
      "是否使用bbg公共评论服务": false,
      "记录评论者ip": true,
      "记录访问量": true,
      "评论区占位符（提示文字）": "",
      "评论者填写邮箱为qq邮箱时使用qq昵称和头像代替gravatar头像": true
    }
  },
  "一言设置": {
    "//": "一言api来自hitokoto.cn",
    "启用一言": true,
    "范围设置": {
      "范围包括动画分类下的一言": true,
      "范围包括漫画分类下的一言": true,
      "范围包括游戏分类下的一言": true,
      "范围包括文学分类下的一言": true,
      "范围包括原创分类下的一言": true,
      "范围包括非原创分类下的一言": true,
      "范围包括其他分类下的一言": true,
      "范围包括影视分类下的一言": true,
      "范围包括诗词分类下的一言": true,
      "范围包括网易云分类下的一言（不建议）": false,
      "范围包括哲学分类下的一言": true,
      "范围包括抖机灵分类下的一言": true
    }
  },
  "底部信息（格式为markdown）": "©2022 新的博客. All rights reserved.",
  "全站内容授权说明": "",
  "页面列表": [
    {
      "页面标题": "关于博主",
      "是否显示在菜单中": true,
      "若显示在菜单中，则在菜单中显示为": "关于博主",
      "是否在新标签页打开": false,
      "文件名": "about.md",
      "这是一个完整的html": false,
      "启用评论": false
    }
  ],
  "文章列表": [
    {
      "文章标题": "第一篇文章",
      "文件名": "first.md",
      "标签": [
        "自动创建的文章"
      ],
      "摘要": "这是自动生成的一篇测试文章，你可以编辑或者删除它。",
      "创建日期": "1970/1/1",
      "修改日期": "1970/1/1",
      "是否置顶": false,
      "是否隐藏": false,
      "启用评论": true
    }
  ],
  "CDN选择": 1,
  "CDN路径": "https://unpkg.com",
  "启用自定义CSS": false,
  "启用自定义JS": false,
  "自定义CSS": "",
  "自定义JS": "",
  "文章列表中每页的文章数为": 10,
  "全站内容授权协议": "reserved",
  "不使用全站内容授权协议": false,
  "文章页面显示上一篇下一篇文章导航按钮": true,
  "提供文章文件下载": false,
  "提供复制全文到剪贴板的选项": false,
  "网站域名（包括https://）": "",
  "在对文章列表进行修改后触发rss生成": false,
  "在对文章或页面列表进行修改后触发sitemap.txt生成": false
}