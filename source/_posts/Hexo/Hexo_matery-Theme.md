---
title: Hexo |  hexo-matery-Theme
tags:
  - Hexo
  - MateryTheme
categories:
  - 技
toc: true
abbrlink: 9e9c
date: 2020-09-17 11:07:56
top:
cover:
---

# 基础篇

## 下载主题

1. 下载离线包

    下载 master分支稳定版本
    解压缩，将`hexo-theme-matery`文件夹复制到theme文件夹中

2. git clone

     `git clone https://github.com/bkinkfox/hexo-theme-matery.git`

## 切换主题



1 .修改Hexo 根目录❗

 `.config.yml`中的theme 值为 matery (要和主题文件名同，这一步是修改了原来的主题文件名hexo-theme-matery为 matery，不修改也可以 )

2 .【.config.yml】 文件其它修改建议

- 修改url 为 网站 主 URL , 如 http://xxx.github.io
- 修改 per_page分页条数为6的倍数 ，12，18，这样好显示
- 如是 中文用户，切换language 值为 zh-CN



## 新建页面

### categories分类

```python
if(source目录下没有categories/index.html文件):
  gitbash命令行输入 hexo new page "categories"
  编辑此文件 source/categories/index.md,至少以下内容
      
```
```
---
  title: categories
  date: 2018-09-30 18:23:28
  type: "categories"
  layout: "categories"
---
```
### tags标签页

  同上 ，需要修改对应的关键字即可

### about关于我页
  同上 ，需要修改对应的关键字即可

### friends友链页(可选)





1、同上 需要修改对应的关键字即可
2、source目录下新建 `_data`目录，此中新建`friends.json`文件，内容如下





```json

[
  {
    "avatar": "https://www.lixl.cn/medias/avatar.jpg",
    "name": "悟尘记",
    "introduction": "人生就是一场修行，上善若水，厚德载物。",
    "url": "https://www.lixl.cn/",
    "title": "前去参观"
  },
  {
    "avatar": "https://wiki.hyperledger.org/download/attachments/2392069/fabric?version=1&modificationDate=1540928132000&api=v2",
    "name": "Fabric",
    "introduction": "A Blockchain Platform for the Enterprise",
    "url": "https://hyperledger-fabric.readthedocs.io/en/master/",
    "title": "前去学习"
  },
  {
    "avatar": "https://www.bootcdn.cn/assets/img/maoyun.svg",
    "name": "BootCDN",
    "introduction": "稳定、快速、免费的前端开源项目 CDN 加速服务。",
    "url": "https://www.bootcdn.cn/",
    "title": "前去加速"
  }
]
```
### contact留言板页(可选)

1 .同上
2 .注意：

> 本留言板功能依赖于第三方评论系统，请激活你的评论系统才有效果。并且在主题的 _config.yml 文件中，第 19 至 21 行的“菜单”配置，取消关于留言板的注释即可。


## 菜单导航配置

```css
包括
 -  菜单导航名称
     - 可中文/英文
 -  路径url
  
 -  图标icon
    - 可在 https://fontawesome.com/icons 搜索
```

**格式**:

```yaml
menu:
  Index:
    url: /
    icon: fas fa-home
  Tags:
    url: /tags
    icon: fas fa-tags
  Categories:
    url: /categories
    icon: fas fa-bookmark
  Archives:
    url: /archives
    icon: fas fa-archive
  About:
    url: /about
    icon: fas fa-user-circle
  Friends:
    url: /friends
    icon: fas fa-address-book
```
**二级菜单配置**:

```css
1. 在需要添加二级菜单的一级菜单下添加 children关键字(如 about菜单添加
children)
2 .children下创建二级菜单的 名称name,路径url,图标iocn
3 .每个二级菜单模块前要加  - 
4. 注意缩进格式
如下
```

如下

```yaml
menu:
  Index:
    url: /
    icon: fas fa-home
  Tags:
    url: /tags
    icon: fas fa-tags
  Categories:
    url: /categories
    icon: fas fa-bookmark
  Archives:
    url: /archives
    icon: fas fa-archive
  About:
    url: /about
    icon: fas fa-user-circle-o
  Friends:
    url: /friends
    icon: fas fa-address-book
  Medias:
    icon: fas fa-list
    children:
      - name: Musics
        url: /musics
        icon: fas fa-music
      - name: Movies
        url: /movies
        icon: fas fa-film
      - name: Books
        url: /books
        icon: fas fa-book
      - name: Galleries
        url: /galleries
        icon: fas fa-image
```

## 代码高亮 

```css
1. 因hexo自带代码高亮不好看
2. 使用插件  hexo-prism-plugin
  - 安装 : 
      执行 npm i -S hexo-prism-plugin
  - 配置 :
      修改 hexo根目录下-config.yml文件中的 highlight.enable的值为 false，并新增 prism 插件相关的配置，主要配置如下：
```

[代码块显示问题](https://zhangxiaocai.cn/posts/a53a9069.html#toc-heading-6)

如下

```yaml
highlight:
  enable: false

prism_plugin:
  mode: 'preprocess'    # realtime/preprocess
  theme: 'tomorrow'
  line_number: false    # default false
  custom_css:

```

## 搜索


```css
1 .使用插件 hexo-generator-search
  安装 ：
     执行 npm install hexo-generator-search --save
  配置 :
     hexo根目录_config.yml文件，新增
        search:
          path: search.xml
          field: post
```

## 文章字数统计插件(建议安装)

```css
1. 插件  hexo-wordcount
  安装 :
   - 执行 npm i --save hexo-wordcount
  配置 :
   - 主题下_config.yml文件,新增
      
```
如下

```yaml
postInfo:
  date: true
  update: true
  wordCount: true # 设置文章字数统计为 true.
  totalCount: true # 设置站点文章总字数统计为 true.
  min2read: true # 阅读时长.
  readCount: true # 阅读次数.
```

## 添加emoji表情支持(可选)

本主题新增了对emoji表情的支持，使用到了[hexo-filtergithubemojis](https://developer.aliyun.com/mirror/npm/package/hexo-filter-github-emojis) 的 Hexo 插件来支持 emoji表情的生成，把对应的markdown emoji语法（::,例如：:smile:）转变成会跳跃的emoji表情

```css
1. 插件 hexo-filter-github-emojis 
  安装 ：
     执行 npm install hexo-filter-github-emojis --save
     或者 cnpm install hexo-filter-github-emojis 
  配置 :
     hexo 根目录_config.yml文件中，新增如下
      
```

```yaml
githubEmojis:
  enable: true
  className: github-emoji
  inject: true
  styles:
  customEmojis:
```

测试 :smile

## 文章Front-matter介绍

`Front-matter` 选项中的所有内容均为非必填的。但我仍然建议至少填写 `title` 和 `date` 的值。

配置选项 | 默认值 | 描述
-- | -- | --
title | Markdown 的文件标题 |文章标题，强烈建议填写此选项
date | 文件创建时的日期时间 | 发布时间，强烈建议填写此选项，且最好保证全局唯一
author | 根` _config.yml` 中的 author |根 _config.yml 中的 author
img | featureImages 中的某个值 | 文章特征图，推荐使用图床(腾讯云、七牛云、又拍云等)来做图片的路径.如: http://xxx.com/xxx.jpg
top | true | 推荐文章（文章是否置顶），如果 top 值为 true，则会作为首页推荐文章
cover | false|v1.0.2版本新增，表示该文章是否需要加入到首页轮播封面中
coverImg | 无 | v1.0.2版本新增，表示该文章在首页轮播封面需要显示的图片路径，如果没有，则默认使用文章的特色图片
password | 无 | 文章阅读密码，如果要对文章设置阅读验证密码的话，就可以设置 password 的值，该值必须是用 SHA256 加密后的密码，防止被他人识破。前提是在主题的` _config.yml` 中激活了 `verifyPassword` 选项
toc | true | 是否开启 TOC，可以针对某篇文章单独关闭 TOC 的功能。前提是在主题的` _config.yml` 中激活了 toc 选项
mathjax | false |  是否开启数学公式支持 ，本文章是否开启 mathjax，且需要在主题的 `_config.yml` 文件中也需要开启才行
summary	 | 无 |  文章摘要，自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要
categories | 无 | 文章分类，本主题的分类表示宏观上大的分类，只建议一篇文章一个分类
tags | 无 | 文章标签，一篇文章可以多个标签
keywords | 文章标题 | 文章关键字，SEO 时需要
reprintPolicy | cc_by |  文章转载规则， 可以是 cc_by, cc_by_nd, cc_by_sa, cc_by_nc, cc_by_nc_nd, cc_by_nc_sa, cc0, noreprint 或 pay 中的一个

> **注意:**
> 
> 1. 如果 img 属性不填写的话，文章特色图会根据文章标题的 hashcode 的值取余，然后选取主题中对应的特色图片，从而达到让所有文章都的特色图各有特色。
> 2. date 的值尽量保证每篇文章是唯一的，因为本主题中 Gitalk 和 Gitment 识别 id 是通过 date 的值来作为唯一标识的。
> 3. 如果要对文章设置阅读验证密码的功能，不仅要在 Front-matter 中设置采用了 SHA256 加密的 password 的值，还需要在主题的 _config.yml 中激活了配置。有些在线的 SHA256 加密的地址，可供你使用：[开源中国在线工具](http://tool.oschina.net/encrypt?type=2)、[chahuo](http://encode.chahuo.com/)、[站长工具](http://tool.chinaz.com/tools/hash.aspx)。
> 4. 您可以在文章md文件的 front-matter 中指定 reprintPolicy 来给单个文章配置转载规则


演示

**最简**

```yaml

---
title: typora-vue-theme主题介绍
date: 2018-09-07 09:25:00
---

```

**最全**

```yaml

---
title: typora-vue-theme主题介绍
date: 2018-09-07 09:25:00
author: 赵奇
img: /source/images/xxx.jpg
top: true
cover: true
coverImg: /images/1.jpg
password: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
toc: false
mathjax: false
summary: 这是你自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要
categories: Markdown
tags:
  - Typora
  - Markdown
---

```

**效果截图**

![](https://camo.githubusercontent.com/90a2351868a22d39ceac2b4450f8596dc3ce1f58/687474703a2f2f7374617469632e626c696e6b666f782e636f6d2f6d61746572792d32303138313230322d312e706e67)

![](https://camo.githubusercontent.com/9a4e16a483752d1a34b222c01bbb36793f26f9df/687474703a2f2f7374617469632e626c696e6b666f782e636f6d2f6d61746572792d32303138313230322d322e706e67)

![](https://camo.githubusercontent.com/47728a9ce38c1abffac23330897a43ba0b3aeb4a/687474703a2f2f7374617469632e626c696e6b666f782e636f6d2f6d61746572792d32303138313230322d332e706e67)

![](https://camo.githubusercontent.com/48b8333fe4fc39346bcc5db8d3b30bf20d74cbdf/687474703a2f2f7374617469632e626c696e6b666f782e636f6d2f6d61746572792d32303138313230322d372e706e67)

![](https://camo.githubusercontent.com/da597fef194876343912db2cb022b180aeff587d/687474703a2f2f7374617469632e626c696e6b666f782e636f6d2f6d61746572792d32303138313230322d382e706e67)

## 自定制修改

本主题 `_config.yml`文件中可修改自定义信息

如下

```css
- 我的梦想
- 首页的音乐播放器和视频播放器配置
- 是否显示推荐文章名称和按钮配置
- favicon 和 Logo
- 个人信息
- TOC 目录
- 文章打赏信息
- 复制文章内容时追加版权信息
- MathJax
- 文章字数统计、阅读时长
- 点击页面的'爱心'效果
- 我的项目
- 我的技能
- 我的相册
- Gitalk、Gitment、Valine 和 disqus 评论配置
- 不蒜子统计和谷歌分析（Google Analytics）
- 默认特色图的集合。当文章没有设置特色图时，本主题会根据文章标题的 hashcode 值取余，来选择展示对应的特色图
```
> 我认为个人博客应该都有自己的风格和特色。如果本主题中的诸多功能和主题色彩你不满意，可以在主题中自定义修改，很多更自由的功能和细节点的修改难以在主题的 _config.yml 中完成，需要修改源代码才来完成。以下列出了可能对你有用的地方：

### 修改主题颜色

```css
1. 主题文件 /source/css/matery.css文件中，搜索 /bg-color修改背景颜色
```
如下

```css
/* 整体背景颜色，包括导航、移动端的导航、页尾、标签页等的背景颜色. */
.bg-color {
    background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
}

@-webkit-keyframes rainbow {
   /* 动态切换背景颜色. */
}

@keyframes rainbow {
    /* 动态切换背景颜色. */
}
```

### 修改banner图和文章特色图

```css
1. /source/medias/banner文件夹更换喜欢的banner图片
  - 主题代码是每天动态切换一张，只需7张
  - 会javascript也可自设计切换逻辑，如随机切换,在 <script>/<script>中
```

如

```javascript
$('.bg-cover').css('background-image', 'url(/medias/banner/' + new Date().getDay() + '.jpg)');
```

## 配置音乐播放器（可选的）

要支持音乐播放，在主题的` _config.ym`l 配置文件中激活music配置即可：

```yaml
# 是否在首页显示音乐
music:
  enable: true
  title:     	    #非吸底模式有效
    enable: true
    show: 听听音乐
  server: netease   #require music platform: netease, tencent, kugou, xiami, baidu
  type: playlist    #require song, playlist, album, search, artist
  id: 503838841     #require song id / playlist id / album id / search keyword
  fixed: false      # 开启吸底模式
  autoplay: false   # 是否自动播放
  theme: '#42b983'
  loop: 'all'       # 音频循环播放, 可选值: 'all', 'one', 'none'
  order: 'random'   # 音频循环顺序, 可选值: 'list', 'random'
  preload: 'auto'   # 预加载，可选值: 'none', 'metadata', 'auto'
  volume: 0.7       # 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  listFolded: true  # 列表默认折叠
```

其中

```css
server 可选
  - netease(网易云)
  - tencent(QQ音乐)
  - kugou(酷狗)
  - baidu(百度音乐)
type 可选
 - song(歌曲)
 - playlist(歌单)
 - album(专辑)
 - search(搜索关键字)
 - artist(歌手)
id 
  - 获取实力
   1.  浏览器打开网易云音乐，点击我喜欢的音乐歌单，地址栏有一串数字，playlist的id即为这串数字。


```

## 修改打赏二维码图片

主题文件 `source/medias/reward`文件中 ,替换自己的

**注意**
```css
alipay(支付宝)图片要是 .jpg后缀
wechat(微信)图片要是 .png后缀
/* 不知道为什么 */
```

## 修改社交链接

```css
1. 主题 _config.yml文件中 
  支持 qq,Github,邮箱等
2 .修改
  主题文件 /layout/_partial/social-link.ejs 中，增加，修改需要的社交链接地址
```

**参考**

```js
<% if (theme.socialLink.github) { %>
    <a href="<%= theme.socialLink.github %>" class="tooltipped" target="_blank" data-tooltip="访问我的GitHub" data-position="top" data-delay="50">
        <i class="fab fa-github"></i>
    </a>
<% } %>
```

其中，社交图标（如：fa-github）你可以在[ Font Awesome](https://fontawesome.com/icons) 中搜索找到。以下是常用社交图标的标识，供你参考：

```css
- Facebook: fab fa-facebook
- Twitter: fab fa-twitter
- Google-plus: fab fa-google-plus
- Linkedin: fab fa-linkedin
- Tumblr: fab fa-tumblr
- Medium: fab fa-medium
- Slack: fab fa-slack
- Sina Weibo: fab fa-weibo
- Wechat: fab fa-weixin
- QQ: fab fa-qq
- Zhihu: fab fa-zhihu
```
> 注意: 本主题中使用的 Font Awesome 版本为 `5.11.0`。


## 修改页脚

页脚信息可能需要做定制化修改，而且它不便于做成配置信息，所以可能需要你自己去再修改和加工。修改的地方在主题文件的` /layout/_partial/footer.ejs `文件中，包括站点、使用的主题、访问量等。
- ---

## 常用命令

```css
hexo 
    - hexo server  可简写 hexo s  #启动本地服务器，主要用于发布前的预览，检查效果，hexo会自动检测端口，监视文件，自动更新，除非修改站点配置，无需重启服务器，直接刷新网页即可
    - hexo server -s #以静态模式启动
    - hexo server -p 500  #更换启动的端口(默认端口4000，ctrl+c关闭)
    - hexo server -p IP地址  # 自定义 Ip地址
    - hexo clean #清除缓存，正常情况可忽略，当有时网页效果与预料不一致时，可清除缓存，执行后，会删除站点根目录下的public文件
    - hexo d #自动生成网站的静态文件，将本地数据部署到设定的仓库(如gtihub)
    - hexo init  文件夹名称  #初始化 xx文件夹名称
    - hexo -v #查看hexo 版本号
npm 
    - npm update hexo -g  #升级
    - npm install hexo -g #安装
    - npm -v #查看npm版本号
node
    - node -v # 查看node.js版本号
git 
    - git --version # 查看git版本号
```
简写指令

```css
- hexo n "我的第一篇文章"  等价 hexo new "我的第一篇文章" 等价 hexo new post "我的第一篇文章"
- hexo p 等价  hexo publish 
- hexo g  等价 hexo generator 
- hexo s 等价 hexo server
- hexo d 等价 hexo deploy
- hexo g -d 等价 hexo generator --deploy
/* 注意 hexo clean ，git --version没有缩写 */
```

# 踩坑篇


## 改代码不生效

```css
 Q : 代码都是正确的，修改之后不生效怎么办?

 A : 
    1) 使用 Ctrl + F5 强制刷新之后再看。
    2) 自己清除浏览器缓存，各个浏览器可能不一样，请自己搜索怎么清除缓存。
    3) 如果你使用了CDN加速，本地调试千万记得先关闭加速。
    4) 如果你修改 _config.yml，调试前要执行 hexo clean 命令。
```
## favicon.ico 更换之后不显示

```css
（1）确保 favicon.ico路径没有问题。

（2）有些浏览器不支持localhost显示favicon.ico图标,更换浏览器试试。

（3）更换浏览器还是不能显示，将访问路径http://localhost:4000改为http://127.0.0.1:4000访问。
```

## 文章多个标签

```css
Q : 文章标签或分类想添加多个，不知道怎么写？
A : 
```

写法一
```yaml
tags: 
  - Hexo
  - Github
  - 博客
```

写法二
```yaml
tags: [Hexo,Github,博客]
```

## 提示` prism-plugin` 配置错误。

```
Q : 未完待续。。。
```
# 参考

> [【基础配置】matery中文档](https://github.com/small-rose/hexo-theme-matery/blob/develop/README_CN.md)
> 
> [张小菜苔-新手常见问题](https://zhangxiaocai.cn/posts/a53a9069.html#toc-heading-6)