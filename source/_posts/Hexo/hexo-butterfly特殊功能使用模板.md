---
title: hexo-butterfly特殊功能使用模板
tags: [Hexo,特性,样式,标签,按钮,Butterfly]
categories:
  - 技
toc: true
abbrlink: f949
date: 2021-05-01 01:38:15
sticky:
cover:
---



## 标签块样式

```code
# 格式
{% note [标志] [效果] %}
[内容]
{% endnote %}

# 实例
{% note disabled %}
默認 提示塊標籤
{% endnote %}

# 实例
{% note default disabled %}
default 提示塊標籤
{% endnote %}

# 实例

{% note success disabled %}
success 提示塊標籤
{% endnote %}
```

效果:

1、警告提示标签

```code
{% note warning flat %}
warning 警告提示标签
{% endnote %}
```

效果:

{% note warning flat %}
warning 警告提示标签
{% endnote %}



2、visa标志

```code 
{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}
```

效果:

{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是 UnionPay
{% endnote %}

详情: Note(Bootstrap Callout)([传送门](https://butterfly.js.org/posts/4aa8abbe/#%E6%A8%99%E7%B1%A4%E5%A4%96%E6%8E%9B%EF%BC%88Tag-Plugins%EF%BC%89)





## 按钮样式

```code
# 格式 
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}

# 使用
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
```



效果:



This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right %}

详情: 添加button [访问](https://butterfly.js.org/posts/4aa8abbe/#Button)

## 隐藏块

```code
#  格式
{% hideBlock display,bg,color %}
content
{% endhideBlock %}

# 使用
{% hideBlock 查看答案,bg,color %}
我是要显示的内容啊
{% endhideBlock %}
```

效果:

{% hideBlock 查看答案,bg,color %}
我是要显示的内容啊
{% endhideBlock %}



详情: 添加tag_hide [访问](https://butterfly.js.org/posts/4aa8abbe/#tag-hide)



## 添加 tab

```code
{% tabs [text], [number] %}

<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->

{% endtabs %}
```



效果:



{% tabs test2, 3 %}

<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->

{% endtabs %}



## 图库



```code
# 格式
<div class="gallery-group-main">
    {% galleryGroup name description link img-url %}
    {% galleryGroup name description link img-url %}
    {% galleryGroup name description link img-url %}
</div>

# 使用
<div class="gallery-group-main">
    {% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
    {% galleryGroup '漫威' '关于漫威的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
    {% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>
```

效果:



<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '关于漫威的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>



## 添加豆瓣读书

增加豆瓣书籍[访问](https://blog.csdn.net/cungudafa/article/details/105773983)

