---
title: 快速转换视频格式 | format
tags: [格式,转换,MP4,视频]
categories:
  - 技
  - 转换
toc: true
cover: 'https://sc04.alicdn.com/kf/U6f91bc088800428484093a137c7d179eW.jpg'
abbrlink: e0b
date: 2021-03-27 14:32:31
top:
---



## FFmpeg

使用 FFmpeg批处理脚本



参考[教程](https://blog.csdn.net/u013699869/article/details/48466863),可以实现批量的将磁盘中某目录中的视频格式 `.mvk`转换为 `.mp4`格式



FFMPEG的批处理脚本文件（Microsoft Windows和DOS，OS / 2

主要作用: 使用 FFMPEG 将 audio,video等媒体文件转换

使用:

> All these .bat files drag and drop like.
>
> Just drag and drop some files in these bat files :)
>
> 所有这些 .bat 文件可以拖放，只需要将某些文件拖拽到 这些 bat文件



基本使用:

将 `.mvk`格式视频文件快速转换成 `.mp4`视频文件

格式:

```shell
ffmpeg -i "输入文件.mvk" "输出文件.mp4"
```

实例:

```shell
ffmpeg -i "Josey - YouTube.mkv" "Josey - YouTube.mp4"
```

执行命令后:











```shell
ffmpeg version 4.1.3 Copyright (c) 2000-2019 the FFmpeg developers
  built with gcc 8.3.1 (GCC) 20190414
  configuration: --enable-gpl --enable-version3 --enable-sdl2 --enable-fontconfig --enable-gnutls --enable-iconv --enable-libass --enable-libbluray --enable-libfreetype --enable-libmp3lame --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libopenjpeg --enable-libopus --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libtheora --enable-libtwolame --enable-libvpx --enable-libwavpack --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxml2 --enable-libzimg --enable-lzma --enable-zlib --enable-gmp --enable-libvidstab --enable-libvorbis --enable-libvo-amrwbenc --enable-libmysofa --enable-libspeex --enable-libxvid --enable-libaom --enable-libmfx --enable-amf --enable-ffnvcodec --enable-cuvid --enable-d3d11va --enable-nvenc --enable-nvdec --enable-dxva2 --enable-avisynth
  libavutil      56. 22.100 / 56. 22.100
  libavcodec     58. 35.100 / 58. 35.100
  libavformat    58. 20.100 / 58. 20.100
  libavdevice    58.  5.100 / 58.  5.100
  libavfilter     7. 40.101 /  7. 40.101
  libswscale      5.  3.100 /  5.  3.100
  libswresample   3.  3.100 /  3.  3.100
  libpostproc    55.  3.100 / 55.  3.100
Input #0, matroska,webm, from 'Josey - YouTube.mkv':
  Metadata:
    COMPATIBLE_BRANDS: isomiso2avc1mp41
    MAJOR_BRAND     : isom
    MINOR_VERSION   : 512
    ENCODER         : IDMmkvlib0.1
    LANGUAGE        : und
    HANDLER_NAME    : AudioHandler
  Duration: 00:03:19.30, start: 0.000000, bitrate: 255 kb/s
    Stream #0:0: Video: vp9 (Profile 0), yuv420p(tv), 480x480, SAR 1:1 DAR 1:1, 25 fps, 25 tbr, 1k tbn, 1k tbc (default)
    Stream #0:1: Audio: opus, 48000 Hz, stereo, fltp (default)
Stream mapping:
  Stream #0:0 -> #0:0 (vp9 (native) -> h264 (libx264))
  Stream #0:1 -> #0:1 (opus (native) -> aac (native))
Press [q] to stop, [?] for help
[libx264 @ 000002bf92d15240] using SAR=1/1
[libx264 @ 000002bf92d15240] using cpu capabilities: MMX2 SSE2Fast SSSE3 SSE4.2 AVX FMA3 BMI2 AVX2
[libx264 @ 000002bf92d15240] profile Progressive High, level 3.0, 4:2:0, 8-bit
[libx264 @ 000002bf92d15240] 264 - core 157 r2970 5493be8 - H.264/MPEG-4 AVC codec - Copyleft 2003-2019 - http://www.videolan.org/x264.html - options: cabac=1 ref=3 deblock=1:0:0 analyse=0x3:0x113 me=hex subme=7 psy=1 psy_rd=1.00:0.00 mixed_ref=1 me_range=16 chroma_me=1 trellis=1 8x8dct=1 cqm=0 deadzone=21,11 fast_pskip=1 chroma_qp_offset=-2 threads=15 lookahead_threads=2 sliced_threads=0 nr=0 decimate=1 interlaced=0 bluray_compat=0 constrained_intra=0 bframes=3 b_pyramid=2 b_adapt=1 b_bias=0 direct=1 weightb=1 open_gop=0 weightp=2 keyint=250 keyint_min=25 scenecut=40 intra_refresh=0 rc_lookahead=40 rc=crf mbtree=1 crf=23.0 qcomp=0.60 qpmin=0 qpmax=69 qpstep=4 ip_ratio=1.40 aq=1:1.00
Output #0, mp4, to 'Josey - YouTube.mp4':
  Metadata:
    COMPATIBLE_BRANDS: isomiso2avc1mp41
    MAJOR_BRAND     : isom
    MINOR_VERSION   : 512
    HANDLER_NAME    : AudioHandler
    LANGUAGE        : und
    encoder         : Lavf58.20.100
    Stream #0:0: Video: h264 (libx264) (avc1 / 0x31637661), yuv420p, 480x480 [SAR 1:1 DAR 1:1], q=-1--1, 25 fps, 12800 tbn, 25 tbc (default)
    Metadata:
      encoder         : Lavc58.35.100 libx264
    Side data:
      cpb: bitrate max/min/avg: 0/0/0 buffer size: 0 vbv_delay: -1
    Stream #0:1: Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, stereo, fltp, 128 kb/s (default)
    Metadata:
      encoder         : Lavc58.35.100 aac
frame= 4982 fps=1130 q=-1.0 Lsize=    4530kB time=00:03:19.29 bitrate= 186.2kbits/s speed=45.2x
video:1255kB audio:3125kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: 3.417383%
[libx264 @ 000002bf92d15240] frame I:20    Avg QP:15.92  size: 58472
[libx264 @ 000002bf92d15240] frame P:1255  Avg QP:19.11  size:    40
[libx264 @ 000002bf92d15240] frame B:3707  Avg QP:28.33  size:    18
[libx264 @ 000002bf92d15240] consecutive B-frames:  0.8%  0.0%  0.1% 99.2%
[libx264 @ 000002bf92d15240] mb I  I16..4:  8.6% 11.6% 79.8%
[libx264 @ 000002bf92d15240] mb P  I16..4:  0.0%  0.0%  0.0%  P16..4:  0.6%  0.0%  0.0%  0.0%  0.0%    skip:99.4%
[libx264 @ 000002bf92d15240] mb B  I16..4:  0.0%  0.0%  0.0%  B16..8:  0.0%  0.0%  0.0%  direct: 0.0%  skip:100.0%  L0: 9.6% L1:90.4% BI: 0.0%
[libx264 @ 000002bf92d15240] 8x8 transform intra:11.6% inter:71.6%
[libx264 @ 000002bf92d15240] coded y,uvDC,uvAC intra: 98.0% 96.2% 77.8% inter: 0.0% 0.1% 0.0%
[libx264 @ 000002bf92d15240] i16 v,h,dc,p:  1% 89%  7%  3%
[libx264 @ 000002bf92d15240] i8 v,h,dc,ddl,ddr,vr,hd,vl,hu: 10% 38% 15%  4%  5%  7%  4%  6% 10%
[libx264 @ 000002bf92d15240] i4 v,h,dc,ddl,ddr,vr,hd,vl,hu: 14% 30% 12%  6%  9% 10%  7%  6%  8%
[libx264 @ 000002bf92d15240] i8c dc,h,v,p: 51% 25% 22%  3%
[libx264 @ 000002bf92d15240] Weighted P-Frames: Y:0.0% UV:0.0%
[libx264 @ 000002bf92d15240] ref P L0: 95.1%  0.1%  3.5%  1.3%
[libx264 @ 000002bf92d15240] ref B L0: 93.8%  5.3%  0.9%
[libx264 @ 000002bf92d15240] ref B L1: 80.2% 19.8%
[libx264 @ 000002bf92d15240] kb/s:51.57
[aac @ 000002bf92d2f900] Qavg: 505.350
```



参考:

- [[总结]FFMPEG视音频编解码零基础学习方法](https://blog.csdn.net/leixiaohua1020/article/details/15811977)
- [FFmpeg 视频处理入门教程](http://www.ruanyifeng.com/blog/2020/01/ffmpeg.html)
- [KnightDanila/BAT_FFMPEG](https://github.com/KnightDanila/BAT_FFMPEG)







