---
title: hexo-butterfly主题数据可视化
tags:
  - Hexo
  - Butterfly
  - Data_visualization
  - 配置
toc: true
abbrlink: 66f7
date: 2021-05-01 17:02:40
categories:
sticky:
cover:
---


本文章针对hexo-butterfly主题设置,其他主题不保证能成功

⚠️ 做较大改动之前,请备份,或者使用[git]()保留当前版本



## 1. 下载插件

```shell
npm install hexo-charts -S
```



## 2. 使用





{% note warning flat%}
注意！下面的标签可以放到post和不含type的page的md文件中，含有type的page请自行修改相应的模板文件，这个就不要来问我了，因为每个人用的主题可能都不一样，建议去问主题的作者。
{% endnote %}




### 2.1. 配置



针对上述问题,对于 `butterfly`主题可以进行设置,如下

**1、将文章发布统计图添加到归档页面**

在主题目录`/Butterfly/layout/archive.pug`文件的`#archive`下面添加一行`#posts-chart`, 新添加的比上一行多缩进两个`空格`。

```code
block content
  include ./includes/mixins/article-sort.pug
  #archive
    #posts-chart
```

**2、将标签统计图和分类统计图分别添加到标签和分类页面**

编辑主题目录`/Butterfly/layout/page.pug`文件，在`.tag-cloud`下面添加一行`#tags-chart`，在`.category-content`下面添加一行`#categories-chart`，新添加的比上一行多缩进`两个空格`。



```code
block content
  if page.type === 'tags'
    .tag-cloud
      #tags-chart
  else if page.type === 'categories'
    .category-content
    #categories-chart
```

⚠️如所在`butterfly`版本上无上述内容,可进行如下设置

> 改`hexo-theme-butterfly/layout/includes/page/tags.pug`这个文件
>
> ```code
> .tag-cloud-title.is-center= _p('page.tag')
> |  - 
> span.tag-cloud-amount= site.tags.length
> #tags-chart
> .tag-cloud-list.is-center
> !=cloudTags({source: site.tags, minfontsize: 1.2, maxfontsize: 2.1, limit: 0, unit: 'em'})
> ```
>



### 2.2. 添加标签

**1、文章发布统计图**

```code
<div id="posts-chart"></div>
```

**2、标签统计图**

```code
<!-- "data-length"为显示标签个数(从多到少)，默认为10 -->
<div id="tags-chart" data-length="10"></div>
```

**3、文章分类统计图**

```code
<div id="categories-chart"></div>
```



**4、重新 `hexo clean && hexo generate && hexo server`预览**



效果参考: [时间轴](https://blog.hclonely.com/archives/) | [标签](https://blog.hclonely.com/tags/) | [分类](https://blog.hclonely.com/categories/)

参考:

- [Hexo 博客美化](https://blog.hclonely.com/posts/57bd67ce/)