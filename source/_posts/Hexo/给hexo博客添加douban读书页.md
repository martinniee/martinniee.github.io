---
title: 给hexo博客添加douban读书页
tags:
  - 豆瓣
  - Hexo
  - Butterfly
  - 读书
categories:
  - 技
toc: true
cover: 'https://sc02.alicdn.com/kf/U09a92767195142a5a6011397976ff276k.jpg'
abbrlink: e1ba
date: 2021-03-27 17:39:15
top:
---



## 原理

爬取 个人豆瓣网页，嵌入到 个人博客页面



**准备:**

- 注册/登录 [豆瓣](https://www.douban.com) 
- 搜索书籍，选择 「想读」或 「在读」 或 「读过」，生成读书记录
- 豆瓣ID , 进入主页，浏览器网址栏的`https://www.douban.com/people/xxxxxxxxx/` 的 xxxxxxxxx 就是

## 安装配置

git bash中



**1、安装依赖模块**

```shell
npm install hexo-douban --save
```



**2、博客站点根目录下的 `_config.yml` 文件中添加**



```yml
douban:
  user: XXXXXXX
  builtin: false # 选择是否有主题渲染
  book:
    title: 'This is my book title'
    quote: 'This is my book quote'
  movie:
    title: 'This is my movie title'
    quote: 'This is my movie quote'
  game:
    title: 'This is my game title'
    quote: 'This is my game quote'
  timeout: 10000
```



参数说明:

| 参数    | 说明                                                   |
| ------- | ------------------------------------------------------ |
| user    | 你的豆瓣 id                                            |
| builtin | （true/false）是否将生成页面的功能嵌入hexo s和hexo g中 |
| title   | 该页面的标题                                           |
| quote   | 写在页面开头的一段话,支持html语法.                     |
| timeout | 爬取数据的超时时间                                     |

⚠️默认为 `false`, 如果不设置 为`true`,则需要添加 `hexo douban -bgm`命令才能让功能生效(如下启动命令)

设置为`true`即是将命令嵌入到`hexo s`和`hexo g`中,这样生成会自动执行`hexo douban -bgm`



**3、启动生成**

`-bgm`代表的是`book、game、movie`三个参数，选择你需要生成的页面。

```shell
hexo clean && hexo douban -bgm && hexo g && hexo s
```

查看`http://localhost:4000/books`或者`http://localhost:4000/movies`测试（出现相应内容即配置成功）。

另外，修改你的`主题`配置`_config.xml`，我这里是butterfly.yml，配置到目录；如果有中英文设置，相应配置即可，不唯一。



**4、部署**



⚠️强调：由于`hexo douban`的简写也是`hexo d`，与`hexo deploy`的简写指令`hexo d`冲突，因此在进行二者部署的时候，只能都打全名而不能打简写形式。

```shell
hexo clean && hexo g && hexo deploy
```



**6、如果你是butterfly主题，可以配置封面页哦：**

```yml
# 如果你有使用hexo-douban，可配置這個
douban:
   meta: true
   movies_img: /image/movie.jpg
   books_img: /image/book.jpg
#   games_img:
```



参考:

- [hexo美化（豆瓣阅读、电影、常用网站搜索页）](https://blog.csdn.net/cungudafa/article/details/105773983)



