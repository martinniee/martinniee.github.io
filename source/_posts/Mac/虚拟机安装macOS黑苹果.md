---
title: 虚拟机安装macOS黑苹果
tags:
  - macOS
  - 虚拟机
  - Vmware
  - 安装
categories:
  - 技
toc: true
abbrlink: c8cc
date: 2021-04-30 13:00:06
sticky:
cover:
---





参考:

- [全网最详细的VMware虚拟机安装MacOS系统教程，没有之一！！！附全部资源](https://zhuanlan.zhihu.com/p/337036027)





## 前言

使用Vmware安装macOS虚拟机系统, Vmware默认支持安装macOS,所以需要**解锁工具**解锁VMware

## 环境准备

- 宿主机 `windows 10` lenovo Yoga 14sARH 2021 

- 虚拟机 VMware`15.5.5` build-16285975 | [VMware安装教程▶](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s%3F__biz%3DMzU4NDcxNjQ2Ng%3D%3D%26mid%3D2247489315%26idx%3D1%26sn%3D222d90fa2805b01fa408e2fea8844671%26chksm%3Dfd94cefecae347e8093dd537d564c00316abef92d2bdf2c7a47125d07ff404c7866607d09641%26token%3D956469501%26lang%3Dzh_CN%23rd)

⚠️听说虚拟机版本太高可能安装不了(>16.x.x.x),建议使用VMware 15.0.x.x版本



准备文件/工具(3个)



## 所需工具

1. VM解锁工具: MK-Unlocker 或  Unlocker_v3.0.3 
2. MacOS Mojave 10.14懒人包
3. 优化卡顿工具(beamoff)



**下载方式**

1. 全部下载 [提取码：txgp ](https://pan.baidu.com/s/1lXzyW2YRui_OJzVGtOWPJA )

2. 部分下载

    - [解锁工具（MK-Unlocker + Unlocker_v3.0.3）【提取码：txgp 】](https://pan.baidu.com/s/1lXzyW2YRui_OJzVGtOWPJA )

    - [MacOS镜像懒人包(MacOS Mojave 10.14.6)【提取码：9e60 】](https://pan.baidu.com/s/1tp-1DIRssL9WMOTmGyDQRw )
    - [优化卡顿工具（beamoff【提取码：y7vh】](https://pan.baidu.com/s/1ceag0nXeBgv-OT_CkriXaQ )



## 安装教程

参考:https://zhuanlan.zhihu.com/p/337036027



⚠️基本上很详细,可能存在**多出**一些步骤,自行处理即可



### 下载后的准备工作

🧡1、开启BIOS虚拟化 (分为CPU Intel 和 AMD 机型) | [lenovo开启BIOS虚拟化▶](https://blog.csdn.net/weixin_44741610/article/details/107041197)

⚠️其他品牌机型自行搜索

⚠️如没有启用,否则安装过程中会出错，提示“Intel VT-x处于禁用状态”。

🧡2、关闭杀毒软件 和 windows defender

默认的VMware不支持识别和安装MacOS镜像，需要解锁，解锁前记得关闭杀毒软件以及windefender。

🧡3、使用解压缩工具MK-Unlocker

关闭虚拟机，解压解锁工具MK-Unlocker，以管理员身份运行`win-install.cmd`

运行后会弹出dos命令窗口，等待运行完成，运行完成后会自动关闭窗口。

⚠️MK-Unlocker文件路径不能出现中文，否则会出现`Can't load frozen modules`的错误。



### 使用虚拟机创建macOS



详细步骤参考: https://zhuanlan.zhihu.com/p/337036027





解锁后,打开VMware15.5虚拟机,点击【创建新的虚拟机选项】

**🧡1、新建虚拟机导向**

1、弹出界面,勾选【自定义(高级(C))】,点击【下一步】

2、选择虚拟机硬件兼容性

兼容性选择 【Workstation15.x】,点击【下一步】

> 如果你下载是上面给的MacOS懒人包，那么下载的10.14的懒人包后缀为`.iso`，需要把`.iso`后缀改为`.cdr`，懒人包都是用原版镜像制作的。（也可以在网上自行找`.cdr`懒人包，那么忽略此步骤）
>
> 重命名: `.iso`改为➡`.cdr`,出现提示⚠️,选择【是】

3、安装客户操作系统

下一步,点击【浏览】,选择后缀为`.cdr`的懒人包( 注意把右下角选择【所有文件】，选中后【打开】。)

4、选择客户机操作系统

操作系统选择【Apple Mac OS X(M)】,版本选择[macOS 10.14] (如果没有macOS 10.14选项,则选择最高的一个版本)

⚠️如果前面没有解锁或者解锁失败，此处是没有[Apple Mac OS X]选择项的。

5、命名虚拟机

修改MacOS的安装位置，建议新建一个专门的文件夹，路径中不要出现中文。

6、处理器配置

⚠️以实际设备配置为准自行设置

此时 设备AMD 1处理器 +8内核(16线程)+内存`16GB`+硬盘`512GB`

选择配置是 `1处理器+4内核`,内核总数`4`,点击【下一步】

一般处理器选择 总数`2~4`即可 （宿主机处理器核配置可以在设备管理器中都能看到）

7、此虚拟机内存

设置 `4GB`,点击【下一步】

8、网络连接

选择【使用网络地址转换NAT(E】,点击【下一步】

9、选择I/O控制器类型

选择【LSI Logic(L)  (推荐)】,点击【下一步】

10、选择磁盘类型

硬盘类型选择推荐设置【SATA(A  (推荐)】  ,点击【下一步】

11、选择磁盘

选择【创建新虚拟磁盘】,点击【下一步】

12、指定磁盘容量

- 选择 最大磁盘大小 `100GB` (此时设备是512GB(可用140多GB))
- 选择 将虚拟磁盘拆分为多个文件(M) ,点击【下一步】

13、已准备好创建虚拟机

直接 点击【下一步】

配置完成，点击[完成]，配置好后先不要启动MacOS系统。



---



🧡2、配置`.vmx`文件



1、找到MacOS的安装位置（上面步骤中已自行设置），使用记事本打开后缀为`.vmx`的[macOS 10.14.vmx]的文件。

2.在最后添加以下代码

```code
smc.version = 0
```

3、保存退出。



---



🧡3、开启虚拟机



启动MacOS系统。

启动MacOS界面。

详细步骤参考: https://zhuanlan.zhihu.com/p/337036027



后面如果想继续**提升流畅度**,可以选择使用 MacOS虚拟机优化软件`beamoff`[GitHub项目地址▶](https://github.com/JasF/beamoff)

`beamoff`是VM上Mac虚拟机的优化神器

⚠️

由于macOS是mac操作系统上支持的,所以虚拟机上的配置,图形显存最大 `128M`

也没有人开发,研究,毕竟在**非mac**电脑使用**mac系统**是不合法的

128M这个事情让windows下vmware装MacOS就是一个玩具系统，没办法。还是感谢提供优化工具。



由于各种条件的限制，在 Vmware 虚拟机上安装的 macOS 性能远远没有真机好，只能浅尝辄止，如果要将其作为生产力工具还是不现实的。等熟悉了该系统的操作后，再决定是否去买真实的苹果电脑，或许才是更为明智的选择。



## 总结





- 一般来说按照上面教程**基本没有问题**,可能会出现,网络无法连接,或者其他小问题,这个可能和自己设备的相关实际情况有关

- macOS虚拟机的运行流畅**关系**宿主机设备的配置,和对macOSU虚拟机的配置
- 笔者使用没有明显的延迟,当然比不过真机😂



### 🖥相关网站&文件





- [vmware文档【中文】](https://docs.vmware.com/cn/VMware-Workstation-Pro/15.0/com.vmware.ws.using.doc/GUID-0EE752F8-C159-487A-9159-FE1F646EE4CA.html)
- [draw.iso](http://softwareupdate.vmware.com/cds/vmw-desktop/fusion/10.0.0/6665085/packages/)



- mac应用资源站 https://www.macdo.cn/23164.html             
- mac应用资源教程站 https://www.mfpud.com/topics/612/         
-  【虚拟机】macOS Mojave 10.14.6 黑苹果虚拟机懒人版镜像 https://www.mfpud.com/topics/1126/ 




### 🙋‍♂️总结常见问题及其解决方案

 问题/异常



| 问题简述                                                     | 来源                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| VMWARE 虚拟机问题——打开.vmx文件无响应                        | 来自 <https://blog.csdn.net/wanruiou/article/details/105630904> |
| 联想笔记本进入BIOS开启Intel VT-x (DONE)                      | 来自 <https://blog.csdn.net/weixin_44741610/article/details/107041197> |
| Vmware删除已创建虚拟机                                       | 来自 <https://blog.csdn.net/weixin_46424556/article/details/105129732> |
| VMware无法打开已存在虚拟机vmx文件解决办法                    | 来自 [来源](https://blog.csdn.net/Reserved_person/article/details/70853328?utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-9.control&dist_request_id=1619682748221_45257&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-9.control) |
| VM虚拟机安装(升级)苹果Mac系统停在logo界面不动解决办法        | 来自 <https://www.beihaiting.com/a/SJC/PG/20200226/11513.html> |
| 如何解决VMware上MAC虚拟机不能上网问题                        | 来自 <https://jingyan.baidu.com/article/0964eca21fd7a38284f53656.html> |
| VM虚拟机装MAC无法联网，如何设置？                            | 来自 <https://blog.csdn.net/Bearin/article/details/106182539> |
| VMware安装MacOSx系统如何实现联网                             | 来自 <https://www.jianshu.com/p/5fa0caf30b6c>                |
| VMware16安装Mac11.1Big Sur遇到“客户机操作系统已禁用 CPU。请关闭或重置虚拟机。“解决方案 | 来自 <https://blog.csdn.net/weixin_42848413/article/details/115260253> |
| AMD Vmware15 装 MaCOSX 10.14 报错# 客户机操作系统已禁用 CPU，请关闭或重置虚拟机 | 来自 <https://blog.csdn.net/silentbird520/article/details/96039415> |
| 如果出现类似 这个虚拟机需要avx2，但是没有avx 的报错 将文件中 virtualHW.version = "16"改为10即可解决。<br/>安装过程中如果出现鼠标键盘无法使用的情况，请将usb改为2.0 | 来自 <https://blog.csdn.net/u011809374/article/details/106448298> |
| {搬运}[虚拟机](https://www.52pojie.cn/thread-661779-1-1.html)VMware Workstation Pro 15.0.0及永久激活密钥 | 来自 <https://www.52pojie.cn/thread-804891-1-1.html>         |
| vmware12中mac系统与主机共享文件                              | 来自 <https://blog.csdn.net/soachenshui/article/details/49303519> |
| 虚拟机的macOS与主机windows如何实现文件互通                   | 来自 <https://www.jianshu.com/p/d10f8a2fd173>                |
| VMware 安装macOS 系统无法安装VMtools解决方案                 | 来自 <https://blog.csdn.net/weixin_45348389/article/details/102784858> |
| VMware中的mac os（Catalina）与win10共享文件夹                | 来自 <https://blog.csdn.net/winniezhang/article/details/104303489> |
| 安装VMTools失败的三类解决方法（Windows、Linux、MacOs）       | 来自 <https://blog.csdn.net/Frank_dwx/article/details/107852311> |
| 教你如何在Mac系统下解压rar,zip等各种格式文件                 | 来自 <https://zhuanlan.zhihu.com/p/103473716>                |
| 【转载】【iOS】VMWare中MAC OS X的安装，VMWare tools的配置与iOS的Helloworld | 来自 <https://www.pianshen.com/article/4702588369/>          |

⚠️最后发现所有问题都是 因为解锁时,选择错了解锁工具

上述给出的解锁工具有两个MK-Unlocker 或  Unlocker_v3.0.3 

应该选择MK-Unlocker



⚠️可能存在的坑

1、VMware版本。Vmware版本使用 15.0.0,使用15.5.0不行 (可能虚拟机版本太高)

2、虚拟机处理器设置。**不要勾选虚化**AMD-V/RVI,和虚拟化cpu计数器