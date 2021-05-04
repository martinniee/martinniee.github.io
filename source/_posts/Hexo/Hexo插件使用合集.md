---
title: Hexo插件使用合集
tags: [插件,Hexo,Butterfly,合集,配置,使用,脑图]
categories:
  - null
toc: true
abbrlink: '5735'
date: 2021-05-02 01:44:26
updated:
sticky:
cover:
---

<div id="categories-chart"></div>

## 常用命令

**1、查看插件列表**

```2
npm list
```

**2、卸载插件**

```shell
npm  uninstall <插件名> 
```

如 `npm uninstall hexo-simple-mindmap` 就是删除 `hexo-simple-mindmap` 插件

**3、更新插件**

```shell
npm outdated
```

---

## hexo-permalink-pinyin

作用: 中文转拼音,可以防止因为文件名中文导致网页链接显示中文乱码而访问不了网页

> 如果你的文章名称是中文的，那么 Hexo 默认生成的永久链接也会有中文，这样不利于 `SEO`，且 `gitment` 评论对中文链接也不支持。我们可以用 [hexo-permalink-pinyin](https://link.zhihu.com/?target=https%3A//github.com/viko16/hexo-permalink-pinyin) Hexo 插件使在生成文章时生成中文拼音的永久链接。
>
> **注**：除了此插件外，[hexo-abbrlink](https://link.zhihu.com/?target=https%3A//github.com/rozbo/hexo-abbrlink) 插件也可以生成非中文的链接。



1、安装

```shell
npm -i hexo-permalink-pinyin --save
```

2、配置

博客根目录`_config.yml`最下添加

```yaml
# 中文转拼音
permalink_pinyin:
  enable: true
  separator: '-' # default: '-'
```



---

## hexo-filter-github-emojis

作用:

> 对`emoji`表情的支持，使用到了 [hexo-filter-github-emojis](https://link.zhihu.com/?target=https%3A//npm.taobao.org/package/hexo-filter-github-emojis) 的 Hexo 插件来支持 `emoji`表情的生成，把对应的`markdown emoji`语法（`::`,例如：`:smile:`）转变成会跳跃的`emoji`表情



1、安装

```shell
npm install hexo-filter-github-emojis --save
```

2、配置

在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

```yaml
githubEmojis:
  enable: true
  className: github-emoji
  inject: true
  styles:
  customEmojis:
```



---

## hexo-abbrlink

作用: 

>主题默认的文章链接配置
>
>```yaml
>premalink: :year/:month/:day/:title
>```
>
>这种生成的链接地址很长，我们可以修改文章生成链接的格式。

1、安装

首先再根目录下执行下面的命令：

```bash
npm install hexo-abbrlink --save
```

2、配置

在博客文件夹根目录下`_config.yml`添加如下配置

```text
abbrlink:
    alg: crc16   #算法： crc16(default) and crc32
    rep: hex     #进制： dec(default) and hex: dec 
    			#输出进制：十进制和十六进制，默认为10进制。丨dec为十进制，hex为十六进制
```

再将站点配置文件的`permalink`的值修改为：

```text
permalink: posts/:abbrlink.html
```

生成文章的链接格式格式如下（官方样例）:

```text
crc16 & hex
https://post.zz173.com/posts/66c8.html

crc16 & dec
https://post.zz173.com/posts/65535.html
crc32 & hex
https://post.zz173.com/posts/8ddf18fb.html

crc32 & dec
https://post.zz173.com/posts/1690090958.html
```

## hexo-generator-random






转载:

{% tabs 使用 %}
<!-- tab 简述 -->

作用:创建Random随机页面

1、安装依赖和插件

```shell
npm install object-assign --save
npm install hexo-generator-random --save
```

2、添加主页菜单

butterfly主题的`butterfly.yml`文件

```shell
- 随机文章 || /random.html || fas fa-random
```

**原理分析**

Hexo,Butterfly主题是以博客根目录下的 `public`目录作为实际的`html访问网页`目录,将编写的`markdown文件`渲染模板化而来的

一个文章的访问格式是:

```shell
服务器地址/标签/xxxx.html
```

服务器地址可以是

```shell
http://localhost:4000
/
http://域名
```

因为使用 `hexo new page xxxx`

会在`public`目录下生成一个**同名文件夹**和这个文件夹下的`index.html`文件,`index.html`一般是属于默认访问网页

所以`butterfly.yml`中的Path是 文件夹名 (默认访问其下的html文件)

这个`random.html`文件和 标签的文件夹在同一目录,没有`index.html`标识,所以需要显式的写出

对比:

```yml
menu:
  首页: / || fas fa-home
  检索||fas fa-tasks:
    -  分类 || /categories/ || fas fa-bookmark
    -  标签 || /tags/ || fas fa-tags
    - 时间轴 || /archives/ || fas fa-folder-open
    - 文章目录 || /history/ || fas fa-history
    - 脑图 || /mindmap/   || fas fa-sitemap
    - 随机文章 || /random.html || fas fa-random   # 其余都是 单文件夹名,而 random是 显式的写出html文件
  留言板: /comment/ || fas fa-location-arrow
  说说: /artitalk/ || fas fa-comments
  清单||fas fa-list:
    - 音乐 || /music/ || fas fa-music
    - 电影 || /movies/ || fas fa-video
    - 书籍 || /books/ || fas fa-book
    - 相册 || /gallery/ || fas fa-images
  网址导航: /box/ || fas fa-compass
  友链: /link/ || fas fa-link
  关于: /about/ || fas fa-heart
```



⚠️ 需要注意的是,由于 只有`random.html`这一个文件,不像其他的页面,是 `文件夹/index.html`,页面在目录下

⚠️ 所以不能加最后`/`，即不能是`/random/`,这样表示 random是一个目录





<!-- endtab -->

<!-- tab 来源 @fab fa-sourcetree -->
**初衷及历程**

忘了在多久之前看到朋友的博客中有个随机浏览一篇文章的功能，问了一下发现是php中的一个函数（我也不是很懂2333）.但是我用的是hexo，也很想可以有这个功能。一开始没想那么多直接暴力用python爬取了我博客所有文章的链接，然后用一个html跳转，这样做的话会有几个很不方便的地方，比如说每次有新文章都得手动更新一个那个html，太麻烦了。然后我就寻思着做一个实现这个功能的插件。说干就干。可是这方面百度谷歌上面都没有什么让人能看得懂的教程，官网上的中文翻译也是有点模糊不清，英文又看不太懂。那几天心里面充满了想做但是又不知道怎么做的烦躁，用无从下手来描述太合适了。我又是看hexo里面的生成归档，标签什么的代码的，又是看各种插件的代码的。终于是知道了是用的`node.js`写插件的，好吧还是我太菜了，官网好像有说。我的锅我的锅。一开始想着模仿生成rss订阅的那个插件一样，但是没弄好，就换方向了。那两天做这个做到入魔，逃了好多课（把班长快气死了。。。然后在网上看到一个大佬的生成所有链接向百度提交的插件，[传送门](https://gitee.com/eillott/projects)，传送到他的码云仓库，%一下然后感谢一下，对我帮助非常大。最后终于是做好了。

**插件介绍**

hexo-generator-random是一款hexo插件，作用是生成一个`random.html`，随即跳转到博客下所有文章中的一篇。

**功能**

在`public`文件夹中生成一个`random.html`，访问`yoursite/random`即可随即跳转一篇文章。

**版本**

当前最新版本为1.0.2

版本2.0.0预计更新内容：在每篇文章的Front-matter中设置一个参数来控制是否添加到随机文章，希望我不会咕咕咕吧

**安装**



**依赖**

本插件用到的依赖如下：

1. minimatch
2. path
3. fs
4. object-assign
    上面四个依赖，前三个一般hexo init之后都会有，但是第四个一般都没有（我自己测试的时候是没有的。
    所以你需要先安装一下object-assign

```
npm install object-assign
```

**本地安装**

把本仓库的内容git clone或download到本地，然后把保存到本地的文件夹放在`../blog/node_modules`文件夹中

然后，在博客根目录下的`package.json`里面的`dependencies`中加入这一行

```
"hexo-generator-random": "^1.0.0"
```

注意：如果你是加到最后一行的，在这个上面的一行要加上逗号

这是完成后的效果

```
"dependencies": {
  "hexo": "^4.0.0",
  "hexo-generator-archive": "^1.0.0",
  "hexo-generator-category": "^1.0.0",
  "hexo-generator-index": "^1.0.0",
  "hexo-generator-tag": "^1.0.0",
  "hexo-generator-random": "^1.0.0",
  "hexo-renderer-ejs": "^1.0.0",
  "hexo-renderer-marked": "^2.0.0",
  "hexo-renderer-stylus": "^1.1.0",
  "hexo-server": "^1.0.0",
  "object-assign": "^4.1.1"
}
```

**npm安装**

同上，首先安装依赖

```
npm install object-assign
```

然后直接安装本插件即可

```
npm install hexo-generator-random
```

**注意**

在博客根目录下的`_config.yml`里面的`url`需要改成`/`或者你的域名'

**已知Bug**

不同的主题可能会有其他页面混进随机文章

**使用**

上面的配置如果都是正确的话，当你hexo g之后，在public文件夹下会生成一个random.html。
直接访问yoursite/random.html就可以感受这个随机文章了。
你甚至可以直接在菜单栏里面加上一个菜单，path写上`/random.html/`即可。

<!-- endtab -->

{% endtabs %}



---

## mindmap

给hexo博客添加思维导图

**1、安装**

```shell
npm install hexo-simple-mindmap
```



**2、使用**

```code 
{% pullquote mindmap mindmap-md %}
- [Hexo 的思维导图插件](https://hunterx.xyz/hexo-simple-mindmap-plugin-intro.html)
  - 前言
  - 使用方法
    - 一
    - 二
    - 三
  - 太长不看
  - 参考资料
{% endpullquote %}
```



{% pullquote mindmap mindmap-md %}
- [Hexo 的思维导图插件](https://hunterx.xyz/hexo-simple-mindmap-plugin-intro.html)
  - 前言
  - 使用方法
    - 一
    - 二
    - 三
  - 太长不看
  - 参考资料
{% endpullquote %}



{% note warning simple %}
**存在的问题: 页面渲染出`2`个脑图标签，可以通过隐藏标签，去除一个**

使用主题`butterfly themes`

博客`主题`目录`\themes\butterfly\source\css\`目录下，新建css文件，如 `custom.css`

输入:

```css
#kity_svg_24{
    cursor: -webkit-grab;
    display: none !important;  
}
```
{% endnote %}





详细使用: 

- [Hexo 的思维导图插件>>>](https://hunterx.xyz/hexo-simple-mindmap-plugin-intro.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
- [在 Hexo 中使用思维导图>>>](https://hunterx.xyz/use-mindmap-in-hexo.html)



---

