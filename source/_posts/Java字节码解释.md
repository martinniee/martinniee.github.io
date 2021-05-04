---
title: Java | java字节码解释
tags:
  - Java
  - 字节码
  - 理解
categories:
  - 道
  - Java
toc: true
abbrlink: '5435'
date: 2020-09-16 00:28:27
top:
cover:
---






<embed wmode="transparent" src="https://files.cnblogs.com/files/enjoy233/honehone_clock_tr.swf" quality="high" bgcolor="#FDF6E3" width="200" height="120" name="honehoneclock" align="middle" allowscriptaccess="always"type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">




**机器码:**

○ machine code / Native code
○ 电脑CPU可直接"读取"的数据
○ 执行速度最快
○ 对于人来说繁琐，对于"计算机"简单
○ 总结
  - 电脑CPU直接读取的机械指令
  - 运行速度快





**字节码:**



○ Bytecode 
○ 包含执行程序的二进制文件
○ 是中间码
○ 直译器=>字节码=>机器码
○ 为了实现特定的软件运行环境，通过编译器和虚拟机器，典型的是java bytecode
○ 字节码运行时，通过jvm(java 虚拟机)做一次转成机器指令，因此可跨平台
○ 总结

  - 字节码时中间状态的二进制代码(file),需要直译器转译后才能成机器码



