---
title: Hexo | hexo-butterfly主题配置大合集
tags:
  - Hexo
  - Butterfly
  - 配置
categories:
  - 技
toc: true
abbrlink: 204f
date: 2020-09-26 14:29:39
top:
cover:
---




# hexo-butterfly-version-3.1.1使用大合集

参考主题开发者官方文档：[官方文档](https://demo.jerryc.me/posts/dc584b87/#Front-matter)



**注意**



```css
1. butterfly版本是 3.1.1
2. 配置文件，有不同之处，需要分辨，推荐重新花时间大改
3. 若想升级，在博客主题目录下 git pull (前提你是通过git clone下来的)
4. 若想大的改动，最好记录下来
```

目录 | 链接
--- | ---
配置1 | [主题页面](#front-matter)
配置2|[主题配置1](#语言)




# Front-matter

```css
1. Front-matter 是档案最上方以 --- 分隔的区域，用于指定个别档案的变数。
2. 如果标注可选的参数，可根据自己需要添加，不用全部都写在 markdown 里
```



## page Front-matter

```markdown
---
title:
date:
updated:
type:
comments:
description:
keywords:
top_img:
mathjax:
katex:
aside:
aplayer:
highlight_shrink:
---
```


写法|说明
:---: | :---:
title | 【必须】页面标题
date | 【必须】页面创建日期
type | 【必须】标签，分类，友情链接三页面需要配置
updated |【可选】页面更新日期
description | 【可选】页面描述
keywords | 【可选】页面关键字
comments | 【可选】显示页面评论模块(默认 true)
top_img | 【可选】页面顶部图片
mathjax | 【可选】显示 mathjax (当设置 mathjax 的 per_page: false 时，才需要配置，默认 false)
katex |【可选】显示 katex (当设置 katex 的 per_page: false 时，才需要配置，默认 false)
aside | 【可选】显示侧边栏 (默认 true)
aplayer | 【可选】在需要的页面加载 aplayer 的 js 和 css, 请参考文章下面的音乐 配置
highlight_shrink | 【可选】配置代码框是否展开 (true/false)(默认为设置中 highlight_shrink 的配置)

> 这是对于(特殊)页面的配置



## Post Front-matter

```markdown
---
title:
date:
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
cover:
toc:
toc_number:
auto_open:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:

---

```

写法 | 说明
--- | ---
title |【必需】文章标题
date | 【必需】文章创建日期
updated | 【可选】文章更新日期
tags| 【可选】文章标籤
categories | 【可选】文章分类
keywords | 【可选】文章关键字
description | 【可选】文章描述
top_img | 【可选】文章顶部图片
cover | 【可选】文章缩略图 (如果没有设置 top_img, 文章页顶部将显示缩略图，可设为 false / 图片地址 / 留空)
comments| 【可选】显示文章评论模块 (默认 true)
toc| 【可选】显示文章 TOC (默认为设置中 toc 的 enable 配置)
toc_number | 【可选】显示 toc_number (默认为设置中 toc 的 number 配置)
auto_open | 【可选】是否自动打开 TOC (默认为设置中 toc 的 auto_open 配置)
copyright | 【可选】显示文章版权模块 (默认为设置中 post_copyright 的 enable 配置)
copyright_author | 【可选】文章版权模块的`文章作者`
copyright_author_href| 【可选】文章版权模块的`文章作者链接`
copyright_url | 【可选】文章版权模块的`文章连结链接`
copyright_info | 【可选】文章版权模块的版权声明文字
mathjax | 【可选】显示 mathjax (当设置 mathjax 的 per_page: false 时，才需要配置，默认 false)
katex|  【可选】显示 katex (当设置 katex 的 per_page: false 时，才需要配置，默认 false)
aplayer	|【可选】在需要的页面加载 aplayer 的 js 和 css, 请参考文章下面的音乐 配置
highlight_shrink|	【可选】配置代码框是否展开 (true/false)(默认为设置中 highlight_shrink 的配置)

> 即发布的文章的页面配置

# 标签tags

```css
1. 进入你的Hexo博客的 根目录
2. 打开git bash终端 ，输入 hexo new page tags
3. 你会找到source/tags/index.html 这个文件
4. 修改这个文件，如下
```
```markdown
---
title: 标籤
date: 2018-01-05 00:00:00
type: "tags"
---
```

> 注意原封不动的写，不要改动

# 分类categories

与`tags`类似，第2步和第4步只需把`tags`改为`categories`

# 友情链接link

1 . 与`tags`类似，第2步和第4步只需把`tags`改为`link`

2 . 添加友情链接,如下

3 . 进入Hexo博客目录的`source/_data`，创建文件`link.yml`

```yml
- class_name: 友情链接
  class_desc: 那些人，那些事
  link_list:
    - name: JerryC
      link: https://jerryc.me/
      avatar: https://jerryc.me/image/avatar.png
      descr: 今日事,今日毕
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、简单且强大的网誌框架

- class_name: 网站
  class_desc: 值得推荐的网站
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: 视频网站
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: 中国最大社交分享平台
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: 社交分享平台
```

> `class_name` 和 `class_desc `支持 html 格式书写，如不需要，也可以留空。

## 友情链接界面设置

由 `2.2.0` 起，友情链接界面可以由用户自己自定义，只需要在友情链接的 md 档设置就行，以普通的 Markdown 格式书写。

# 音乐

```css
1. 使用插件 hexo-tag-aplayer
2 . 使用方法参考文档 ： https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md
3. 音乐页面只是普通的 page 页，按普通页面操作生成就行。
```

# 电影

```css
1. 使用 插件 hexo-douban
2. 使用方法参考： https://github.com/mythsman/hexo-douban
```
> 注意： `hexo-douban` 会主动生成页面，所以不需要自己创建。对应网页的 `top_img` 可以在主题配置文件中修改。

# 404页面

```css
1. 主题内置一个404页面，简单的，可在设置中开启
2. 本地预览时，访问出错的网站是不会跳到 404 页面的。
```

```yml
# A simple 404 page
error_404:
  enable: true
  subtitle: "页面没有找到"
  background: 
```

![404显示](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-error404.png)

---

# 语言

```css
1. 修改站点配置文件(/_config.yml),不是 /themes/butterfly/_config.yml

默认语言是 en
可选 ：
    ➡default(en)
    ➡zh-CH(简体中文)
    ➡zh-TW(繁体中文)
```

# 网站资料

修改网站各种资料，例如标题、副标题和邮箱等个人资料，请修改博客根目录的`_config.ym`l

![img](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/20191120000444.png)

# 导航菜单nav

```css
1. 修改主题配置文件，如下
```

```yaml
menu:
  Home: / || fas fa-home
  Archives: /archives/ || fas fa-archive
  Tags: /tags/ || fas fa-tags
  Categories: /categories/ || fas fa-folder-open
  List||fas fa-list:
    - Music || /music/ || fas fa-music
    - Movie || /movies/ || fas fa-video
  Link: /link/ || fas fa-link
  About: /about/ || fas fa-heart

# 格式是
显示名: /文件名/ || fas fa-图标

# 导航文字(显示名)可以修改

# 如
menu:
  首页: / || fas fa-home
  时间轴: /archives/ || fas fa-archive
  标籤: /tags/ || fas fa-tags
  分类: /categories/ || fas fa-folder-open
  清单||fa fa-heartbeat:
    - 音乐 || /music/ || fas fa-music
    - 照片 || /Gallery/ || fas fa-images
    - 电影 || /movies/ || fas fa-video
  友链: /link/ || fas fa-link
  关于: /about/ || fas fa-heart

```

![img](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-menu.png)

# 代码code

```css
代码块中的所有功能只适用于 Hexo 默认的 highlight 渲染

如果使用第三方的渲染器，不一定会有效
```

参考👉： [代码高亮主题](https://demo.jerryc.me/posts/4aa8abbe/#%E4%BB%A3%E7%A2%BC)

> 新增 `mac`主题

## 代码复制

1 . 修改`主题配置文件`

```yaml
highlight_copy: true
```
效果

![img](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-copy.png)

## 代码框展开 / 关闭

参考👉： [代码框展开 / 关闭
](https://demo.jerryc.me/posts/4aa8abbe/#%E4%BB%A3%E7%A2%BC%E8%A4%87%E8%A3%BD)

## 代码换行

```css
1. hexo-highlight 编译时，默认不会自动换行
2. 想开启?，修改主题配置文件如下
```

```yaml
code_word_wrap: true
```

然后找到你站点的 Hexo 配置文件`_config.yml`，将 `line_number` 改成 `false`

```yaml
highlight:
  enable: true
  line_number: false
  auto_detect: false
  tab_replace:
```

设置前效果

![img](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-word-wrap-before.png)

设置后效果

![img](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-word-wrap-after.png)

# 社交图标

1 . butterfly支持 [ font-awesome v5 ](https://fontawesome.com/icons?from=io)图标

设置如下

```yaml
social:
  fab fa-github: https://github.com/xxxxx || Github
  fas fa-envelope: mailto:xxxxxx@gmail.com || Email

# 书写格式

图标名：url || 描述性文字
```

# 主页文章节选(自动节选和文章页description)

```css
1. 因主题UI原因，主页文章节选只支持自动节选和文章页description
2. butterfly有三种选择
   ✔description 只显示 description
   ✔both 优先选择 description，如果没有配置 description，则显示自动节选的内容
   ✔auto_excerpt 只显示自动节选
3. 修改主题配置文件如下
```

```yaml
index_post_content:
  method: 3
  length: 500 # if you set method to 2 or 3, the length need to config
```

`description`在 `front-matter`中添加

![img](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-description.png)

# 顶部图

`顶部图`有 2 种配置：具体 url 和（留空，true 和 false，三个效果一样）

## page页

## 当具体url时

```css
1. 主页的顶部图可以在主题配置文件中设置 index_img
2. archives 页的顶部图可以在主题配置文件中设置 archive_img
3. 其他 page 页的顶部图可以在各自的 md 页面设置 front-matter 中的 top_img
```
```python
if (页面没有设置各自的top_img):
    显示 default_top_img
    配置中的 tag_img 和 category_img 分别是 子标签页 和 子分类 的 顶部图配置
if (如果你是想配置 tags页 和 categories页的顶部图):
    请到对应的 md 页面设置 front-matter 中的 top_img
```

![20200926180738](https://cdn.jsdelivr.net/gh/martinniee/hexoBlogImg/img/20200926180738.png)

## 当顶部图留空 true & false


```python
if (当顶部图留空):
    主页会显示纯颜色的顶部图
    其他 page 的顶部图没有设置时，也会显示纯颜色的顶部图
```

## post 页

`post` 页的顶部图会优先显示各自 `front-matter` 中的 `top_img`, 如果没有设置，则会缩略图（即各自 front-matter 中的 cover)，如果没有则会显示显示 `default_top_img` 图片

# 文章顶置

1 . `hexo-generator-index`支持文章顶置功能自从`version 2.00`开始

2 . 你可以在文章`front-matter`的`sticky: 1`
3 . 数值越大，置顶的优先级越大。

当然，你也可以安装第三方插件来实现这个功能 ([hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top) 或者 [hexo-generator-indexed](https://github.com/hexo-next/hexo-generator-indexed))

如果使用 `hexo-generator-index-pin-top`, 需要先卸载掉 `hexo-generator-index`，然后在文章的 `front-matter` 区域里添加 `top: true` 属性来把这篇文章置顶

如果使用 `hexo-generator-indexed`, 需要先卸载掉 `hexo-generator-index`，然后在文章的 `front-matter` 区域里添加 `sticky: 1 `属性来把这篇文章置顶。数值越大，置顶的优先级越大

# 文章封面

```python
1. 在文章(_post下的)markdown文档中 front-mattetr添加 cover ，并写上显示图片的url
# 具体如下
if (需要手动配置):
  格式如下
  cover : https://xxxx.png
elif (不配置)；
  1. 则可以设置默认的cover
```

```yaml
cover:
  # 是否显示文章封面
  index_enable: true
  aside_enable: true
  archives_enable: true
  # 封面显示的位置
  # 三个值可配置 left , right , both
  position: both
  # 当没有设置cover时，默认的封面显示
  default_cover: 

```

当配置多张图片时，会随机选择一张作为 cover. 此时写法应为

```yaml
default_cover:
  - https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/default_bg.png
  - https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/default_bg2.png
  - https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/default_bg3.png

```

![img](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-cover.png)

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-cover-show.png)

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-cover-false.png)

> left

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-cover-left.png)

> right

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-cover-right.png)

> both

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-cover-both.png)

# 页面的相关配置

## 文章 meta 显示

这个选项是用来显示文章的相关信息的。

修改 `主题配置文件`

```yaml
post_meta:
  page:
    date_type: both # created or updated or both 主页文章日期是创建日或者更新日或都显示
    categories: true # true or false 主页是否显示分类
    tags: true # true or false 主页是否显示标籤
    label: true # true or false 显示描述性文字
  post:
    date_type: both # created or updated or both 文章页日期是创建日或者更新日或都显示
    categories: true # true or false 文章页是否显示分类
    tags: true # true or false 文章页是否显示标籤
    label: true # true or false 显示描述性文字

```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-page-meta.png)

在文章顶部的资料，

`date_type`: 可设置文章日期显示创建日期 (`created`) 或者更新日期 (`updated`) 或者两种都显示 (`both`)

`categories`: 是否显示分类

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-info.png)

`tags` 是否显示标籤

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-tag.png)

## 文章版权

参考👉： [文章版权](https://demo.jerryc.me/posts/4aa8abbe/#%E6%96%87%E7%AB%A0meta%E9%A1%AF%E7%A4%BA)

## 文章打赏

在你每篇文章的结尾，可以添加打赏按钮。相关二维码可以自行配置。

对于没有提供二维码的，可配置一张软件的 icon 图片，然后在 link 上添加相应的打赏链接。用户点击图片就会跳转到链接去。

link 可以不写，会默认为图片的链接。

修改`主题配置文件`

```yaml
reward:
  enable: true
  QR_code:
    - img: /image/wechat.jpg
      link:
      text: 微信
    - img: /image/alipay.jpg
      link:
      text: 支付宝
```
![donate](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-donate.png)

## 文章隐藏

> 2.3.0 开始主题不再默认提供文章隐藏功能

如需要文章隐藏功能，请装插件 [hexo-generator-indexed](https://github.com/hexo-next/hexo-generator-indexed) 或者 [hexo-hide-posts](https://github.com/printempw/hexo-hide-posts)

## TOC

文章页，有目录，显示TOC

```css
enable: 是否显示TOC
number: 是否显示章节数
auto_open: 可选择进入文章页面时，是否自动打开 sidebar 显示 TOC
```

修改 `主题配置文件`

```yaml
toc:
  enable: true
  number: true
  auto_open: true # auto open the sidebar
```

> Toc pC

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-toc-pc.png)

> Toc Mobie

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-toc-mobile.png)

> number :true

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-toc-true.png)

> number: false

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-toc-number-false.png)

## 为特定的文章配置

在你的文章 `md `文件的头部，加入 `toc_number`、`toc` 和 `auto_open`，并配置 `true` 或者 `false` 即可。

主题会优先判断文章 Markdown 的 `Front-matter` 是否有配置，如有，则以 Front-matter 的配置为準。否则，以主题配置文件中的配置为準

## 相关文章

相关文章推荐的原理是根据文章 tags 的比重来推荐

修改 `主题配置文件`

```yaml
related_post:
  enable: true
  limit: 6 # 显示推荐文章数目
  date_type: created # or created or updated 文章日期显示创建日或者更新日
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-releatedpost.png)

# 文章锚点

开启文章锚点后，当你在文章页进行滚动时，文章链接会根据标题 ID 进行替换
(注意：每替换一次，会留下一个歷史记录。所以如果一篇文章有很多锚点的话，网页的歷史记录会很多。)

修改 `主题配置文件`

```yaml
# anchor
# when you scroll in post , the url will update according to header id.
anchor: true
```

## 文章过期提醒

可设置是否显示文章过期提醒，以更新时间为基準。

```yaml
# Displays outdated notice for a post (文章过期提醒)
noticeOutdate:
  enable: true
  style: flat # style: simple/flat
  limit_day: 365 # When will it be shown
  position: top # position: top/bottom
  message_prev: It has been
  message_next: days since the last update, the content of the article may be outdated.

```

```css
limit_day: 距离更新时间多少天才显示文章过期提醒
message_prev: 天数之前的文字
message_next：天数之后的文字
```

> style: flat

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butteffly-docs-outdate-flat.png)

> style: simple

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-outdated-simple.png)

# 头像

修改 `主题配置文件`

```yaml
avatar:
  img: /img/avatar.png
  effect: true # 头像会一直转圈
```
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-avatar.png)

# 图片描述

可开启图片 `Figcaption` 描述文字显示

修改 `主题配置文件`

```yaml
photofigcaption: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-photo-figcaption.png)

# 复製相关配置

可配置网站是否可以复製、复製的内容是否添加版权信息

```yaml
# copy settings
# copyright: Add the copyright information after copied content (复製的内容后面加上版权信息)
copy:
  enable: true
  copyright:
    enable: true
    limit_count: 50

```

配置 | 说明
--- | ---
enable|	是否开启网站复製权限
copyright|	复製的内容后面加上版权信息
enable|	是否开启复製版权信息添加
limit_count|	字数限制，当复製文字大于这个字数限制时，将在复製的内容后面加上版权信息

> 添加版权信息后

```code
Lorem ipsum dolor sit amet, test link consectetur adipiscing elit. Strong text pellentesque ligula commodo viverra vehicula. Italic text at ullamcorper enim. Morbi a euismod nibh. Underline text non elit nisl. Deleted text tristique, sem id condimentum tempus, metus lectus venenatis mauris, sit amet semper lorem felis a eros. Fusce egestas nibh at sagittis auctor. Sed ultricies ac arcu quis molestie. Donec dapibus nunc in nibh egestas, vitae volutpat sem iaculis. Curabitur sem tellus, elementum nec quam id, fermentum laoreet mi. Ut mollis ullamcorper turpis, vitae facilisis velit ultricies sit amet. Etiam laoreet dui odio, id tempus justo tincidunt id. Phasellus scelerisque nunc sed nunc ultricies accumsan.


作者: Jerry
连结: http://localhost:4000/posts/bd3c650b/#Paragraph
来源: Butterfly
着作权归作者所有。商业转载请联络作者获得授权，非商业转载请註明出处。


```

# Footer设置

## 博客年份

`since` 是一个来展示你站点起始时间的选项。它位于页面的最底部。

修改 `主题配置文件`

```yaml
footer:
  owner:
    enable: true
    since: 2018
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-since.png)

## 页脚自定义文本

`custom_text` 是一个给你用来在页脚自定义文本的选项。通常你可以在这里写声明文本等。支持 HTML。

修改 `主题配置文件`

```yaml
custom_text: Hi, welcome to my <a href="https://jerryc.me/">blog</a>!
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-footer-text.png)

## ICP
对于部分有备案的域名，可以在 ICP 配置显示。

修改 `主题配置文件`

```yaml
ICP:
  enable: true
  url: http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action
  text: 粤ICP备xxxx
  icon: /img/icp.png

```

# 右下角按钮

参考👉： [右下角按钮](https://demo.jerryc.me/posts/4aa8abbe/#%E5%8F%B3%E4%B8%8B%E8%A7%92%E6%8C%89%E9%88%95)

## 夜间模式

右下角会有夜间模式按钮

修改 `主题配置文件`

```yaml
# dark mode
darkmode:
  enable: true
  # dark mode和 light mode切换按钮
  button: true
  autoChangeMode: false
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-dark-mode.png)

> V2.0.0 开始增加一个选项，可开启自动切换 light mode 和 dark mode

autoChangeMode: 1 跟随系统而变化，不支持的浏览器 / 系统将按照时间晚上 6 点到早上 6 点之间切换为 dark mode

autoChangeMode: 2 只按照时间 晚上 6 点到早上 6 点之间切换为 dark mode, 其余时间为 light mode

autoChangeMode: false 取消自动切换

## 閲读模式
閲读模式下会去掉除文章外的内容，避免干扰閲读。

只会出现在文章页面，右下角会有閲读模式按钮。

修改 `主题配置文件`

```yaml
readmode: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-read-mode.png)

# 侧边排版

参考👉： [侧边排版](https://demo.jerryc.me/posts/4aa8abbe/#%E5%81%B4%E9%82%8A%E6%8E%92%E7%89%88)

```yaml
aside:
  enable: true
  mobile: true # 手机页面（ 显示宽度 < 768px ）是否显示aside内容
  position: right # left or right
  card_author:
    enable: true
    description:
    button:
      icon: fab fa-github
      text: Github
      link: https://github.com/jerryc127/hexo-theme-butterfly
  card_announcement:
    enable: true
    content: This is my Blog
  card_recent_post:
    enable: true
    limit: 5 # if set 0 will show all
    sort: date # date or updated
  card_categories:
    enable: true
    limit: 8 # if set 0 will show all
    expand: none # none/true/false
  card_tags:
    enable: true
    limit: 40 # if set 0 will show all
    color: false
  card_archives:
    enable: true
    type: monthly # yearly or monthly
    format: MMMM YYYY # eg: YYYY年MM月
    order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending
    limit: 8 # if set 0 will show all
  card_webinfo:
    enable: true
    post_count: true
    last_push_date: true

```

> card_tags color: false

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/20200426182730.png)

> card_tags color: true

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/20200426183025.png)

## 访问人数busuanzi(UV & PV)

https://demo.jerryc.me/posts/4aa8abbe/#%E8%A8%AA%E5%95%8F%E4%BA%BA%E6%95%B8-busuanzi-UV-%E5%92%8C-PV

访问 [busuanzi](http://busuanzi.ibruce.info/) 的官方网站查看更多的介绍。

修改 `主题配置文件`

```yaml
busuanzi:
  site_uv: true
  site_pv: true
  page_pv: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-busuanzi-site-pv.png)

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-pv.png)

## 运行时间

```yaml
runtimeshow:
  enable: true
  publish_date: 6/7/2018 00:00:00  
  ##网页开通时间
  #格式: 月/日/年 时间
  #也可以写成 年/月/日 时间
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-runtime.png)

## 最新评论

参考👉： [最新评论](https://demo.jerryc.me/posts/4aa8abbe/#%E6%9C%80%E6%96%B0%E8%A9%95%E8%AB%96)

# 标签外挂

tag plugins

> 标籤外挂是 Hexo 独有的功能，并不是标準的 Markdown 格式。


>> 以下的写法，只适用于 Butterfly 主题，用在其它主题上不会有效果，甚至可能会报错。使用前请留意

## Note (Bootstrap Callout)

移植于 next 主题

修改 `主题配置文件`

```yaml
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: simple
  icons: false
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0

```

用法

```html
{% note [class] [no-icon] %}
Any content (support inline tags too.io).
{% endnote %}

[class]   : default | primary | success | info | warning | danger.
[no-icon] : Disable icon in note.

All parameters are optional.
```

例如

```html
{% note default %}
default 提示块标籤
{% endnote %}

{% note primary no-icon %}
primary 提示块标籤
{% endnote %}

{% note success %}
success 提示块标籤
{% endnote %}

{% note info %}
info 提示块标籤
{% endnote %}

{% note warning %}
warning 提示块标籤
{% endnote %}

{% note danger %}
danger 提示块标籤
{% endnote %}

```

> style : simple

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/20200105232825.png)

> style: modern

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/20200105233018.png)

> style: flat

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/20200105233145.png)

> style: disabled

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/20200105233310.png)

## Gellary相册图库

> 2.20 above provide

写法

```code
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>


```

```cs
name：图库名字
description：图库描述
link：连接到对应相册的地址
img-url：图库封面的地址
```

例如

```code
<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '关于漫威的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

```
## Gallery 相册

> 2.00以上支持

区别于旧版的 Gallery 相册，新的 Gallery 相册会自动根据图片长度进行排版，书写也更加方便，与 markdown 格式一样。可根据需要插入到相应的 md。

写法:

```markdown
{% gallery %}
markdown 图片格式
{% endgallery %}
```

例如

```markdown
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

```

## tag-hide

> 2.2.0 以上提供
>
>请注意，tag-hide 内的标签外挂 content 内都不建议有 h1 - h6 等标题。因为 Toc 会把隐藏内容标题也显示出来，而且当滚动屏幕时，如果隐藏内容没有显示出来，会导致 Toc 的滚动出现异常。

参考👉： [tag-hide](https://demo.jerryc.me/posts/4aa8abbe/#tag-hide)

> 未完待续。。。