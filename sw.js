/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","193e9e78fcdc6173c3380cacaeda97df"],["/about/index.html","3127513d259f6cdec0e4b6e473abe3ee"],["/about/新建文本文档.html","8cf5e41271c398a72dcc6b032d879a23"],["/archives/2020/02/index.html","3200707a89db5ac055cdaff0f46b678e"],["/archives/2020/04/index.html","292db96d2b05558db065120751e6d369"],["/archives/2020/07/index.html","86e4f3f4461afcd32eab596e61d20fce"],["/archives/2020/09/index.html","64ec95f036b2432974608e910d51476f"],["/archives/2020/index.html","94c82a0aef58f8c86e1d4e9c9f37632a"],["/archives/2021/03/index.html","4e255af7e6c08b66898c4fe28287c2cb"],["/archives/2021/04/index.html","b5010116bd72e66231406bb36836cc5f"],["/archives/2021/05/index.html","467db998514e9aed1bf55f5b7697cf3d"],["/archives/2021/05/page/2/index.html","aeea3ac4207335971e56e7d58db8097e"],["/archives/2021/06/index.html","81ab7e8711da66f7f4f19a3d84d52896"],["/archives/2021/06/page/2/index.html","0faab44aa8847eec637d14881132bd77"],["/archives/2021/07/index.html","3276da039d3fcdc45d540c5c7cb3af84"],["/archives/2021/index.html","21011c1a7d35f7951a26aece784c5dcd"],["/archives/2021/page/2/index.html","d8b0a5a3466e56645f03040907df5c36"],["/archives/2021/page/3/index.html","1c81a77312c9c314df075865a55d7638"],["/archives/index.html","fc42a3f070300884de5af2dc06218907"],["/archives/page/2/index.html","d0289858e31fceab372abc632165df9c"],["/archives/page/3/index.html","a1364dc177e376bd7ece9f4c81bade6f"],["/archives/page/4/index.html","811b3367d1ac67c7a96ef0bd0f21009b"],["/artitalk/index.html","8f33f55b0e031ab607512b6d82a18518"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","8e01bf5e31f09913d0ef0148fa016e63"],["/box/index.html","f0762fdd21ba781fa65df49199168093"],["/categories/01-学习笔记/index.html","94b8328757d7481f929f18a7541b7ae3"],["/categories/02-案例教程/index.html","00ade52cfc1b5b7238279daf44f3fffb"],["/categories/03-备忘清单/index.html","dfccc700cbe69ed751c3c1a90e9b2746"],["/categories/03-备忘清单/page/2/index.html","e6cade204132e15a3b49add7b3e595c2"],["/categories/05-日志随笔/index.html","a85292e9018b0825492f366460196e47"],["/categories/06-工具网站/index.html","fbd2b409382372e6c9c0e6fff713672d"],["/categories/07-学习资源/index.html","0b9a6d047c544daae7a0b773995d7dbe"],["/categories/index.html","b4890bf6e9778f1f3bc35c03c857ed58"],["/comment/index.html","9bfd41fc9f314c0d7db35ea5babed638"],["/contact/index.html","246f549afccba942f44d2479b4edad22"],["/css/custom.css","b7b071807b2afa664f2a5a7d55d667c2"],["/css/index.css","abe8423415025f8a96c163cb97d5f9c8"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/tag.css","eadd8a2073c31ce2730fdf1e5ad722c1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","9ae9896ebc2ede60e10d2b3955d66633"],["/gallery/index.html","8b53490a2fc6cdf427bc5348e59aeea5"],["/games/index.html","7f08ee91c9aba02180a33cbb39b5e2c9"],["/history/index.html","c3fcd76f52d8fd3e3efd2b33843b3ec5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","141cac79d9b0bc344d7744a87ab96d48"],["/img/avatar.png","2cfccaf6053cf6a5bf80db47e5fc033b"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechat.png","43d0b06bdfbddb87c7395eaf4005eb64"],["/index.html","309e05037fd94fcbd2706c030862a982"],["/js/get-markdownLink.js","6a221c7974161cb7c3ee5fae733abc66"],["/js/ip_content.js","92bacff50587527d43589642a7caecff"],["/js/main.js","34ea8c2b8471d377895f59cd30e1227f"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/timeDate.js","56a981b8c9acb871b12ff09a16b2663a"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","3887e5857ef9125ec521a3804d85d391"],["/list/index.html","5c3833c093eaceec9fe134de5647f5fe"],["/mindmap/index.html","b06d05b5d12577bf8c1ff8d1da4537df"],["/movies/index.html","a44af887d748c6b102836bec251c1105"],["/music/index.html","edfc42a6e6a136bef6fef376edb1c537"],["/page/2/index.html","8d29cecedf6958a2a5274b714a8c5c97"],["/page/3/index.html","3abbb8ab4657030e2cf05da0e6d3a118"],["/page/4/index.html","7a136d9897e55429cd0b55333dfba1b6"],["/posts/13e8.html","0f89474aefb02c67d2a5310c5ff3deff"],["/posts/1983.html","e251700e4d815c1c21050c355828ad18"],["/posts/1ad6.html","9125530f0bfd9198479876f34d1a5095"],["/posts/204f.html","e238a083e8650b035af3f8c99987a69e"],["/posts/2409.html","c367c60b310e75632b77d100ec12a18b"],["/posts/284d.html","644524dd6b503f84d2b895a30a9b800d"],["/posts/2865.html","49bc118430b5af21dfb2c076047fafbb"],["/posts/3678.html","447e83424b0c489b05f3bc280a14e12a"],["/posts/3b10.html","afd03a27594d6d4f8c4aa4ff92831247"],["/posts/4b75.html","fa421b7cf4ddaae6e7ccbec817a92c4f"],["/posts/4b97.html","a7abb2b7516b536abfe3e3a05d5de06d"],["/posts/4cbe.html","aeafaf7ba5a7f275828c175457cc7b61"],["/posts/4d9c.html","391dd3cd0c7f3877fedc46ae8cdea91a"],["/posts/5735.html","c61058f1527ae0722127ca8600c128be"],["/posts/58cd.html","243556ac346a5c70434fafe58d1ff4e2"],["/posts/66f7.html","9c0d6b54f40266374f9de6587dfeeae3"],["/posts/69bf.html","e0bc27d5191453a381f2bf12b81599e0"],["/posts/7319.html","caa3f5fc6e3f7483c78572430c9d6580"],["/posts/776b.html","d555942c293c7600d24e24e2039bf969"],["/posts/7a.html","cffe401492f85b0be7e676a513f53a6e"],["/posts/7ddb.html","7fa616951fa1aeae9b7de1e3950bcf62"],["/posts/87b8.html","49ede6096895a7cdef39ad6493684585"],["/posts/89a9.html","d39f970ac3230e7e6aa7618da5e64f83"],["/posts/8baa.html","a67861d0c14b1adfbdc4b45c5bc6bbe0"],["/posts/8df1.html","c522288a4afa93b3b8c563b75db0f9fa"],["/posts/9096.html","b67fff695c672affeeb94a0e8533186f"],["/posts/9298.html","4872828af2984608b159d5a68fa89e41"],["/posts/9ab4.html","9666141a02adb973125804da746a06e1"],["/posts/9e9c.html","9c9f22c8aea652ce476a7f21060510db"],["/posts/af43.html","468a639b9f040f560129f87e8a1c5a64"],["/posts/b4bb.html","cd4b9884357c28334e6129cb266d9a2c"],["/posts/b921.html","3c6efac5a9c1ff2a611d91126acb122a"],["/posts/c391.html","c7f51a1f6f15d4b21e39746898cb6083"],["/posts/c554.html","a467f0e37204746cc6685d4cb56447eb"],["/posts/c8cc.html","bbf16db73ee6dfd480416f4fff5db14c"],["/posts/c8dd.html","7c3d052dc6da4d62b8901cf1f88ef19d"],["/posts/c9a7.html","30a664b1e0653308f24cd9b8dc0930e5"],["/posts/cee5.html","965c2ee45d7bff2cb3d1e1863b161a7d"],["/posts/d163.html","bf3d6b3f9641b93b632864e399e9151c"],["/posts/dc50.html","f005e7db3efdc03178b8a7d227ffa8e0"],["/posts/dcb2.html","34243e4db35a86d6acca22cba1c99d2d"],["/posts/dde3.html","b254e305a0bd65316a265b46b2541ac3"],["/posts/de2e.html","a784127e74dd844465560167134bf50e"],["/posts/de6d.html","0770a6479e1943faeecf1118982b6978"],["/posts/dea1.html","694f443e4c3e312832c85caaf8d2a5d4"],["/posts/e557.html","23ce38383efe309a5e0410be63ff9cf2"],["/posts/e7c2.html","6f320303ff103ca1c528e9a1e5b553d0"],["/posts/e823.html","fb7d48412b692ac0736fd4a24fcbad9b"],["/posts/e971.html","b3d56072b0544870e7b56960330c2a2f"],["/posts/f03a.html","0254d6483ca83bed5e404ea486fc85e1"],["/posts/f5a1.html","db6ae0fb35fbd069b4b1a9d1cbb07e89"],["/posts/f634.html","9df863d7003b9bf0c1edec0b516fb293"],["/posts/f949.html","b5685139201386523ae2e0f8bc63492f"],["/posts/f9d8.html","3df197786653db6ee281dbe352b96747"],["/posts/fbb4.html","f4796147a06d15e2a8f16fac8a90b21b"],["/posts/fbc8.html","093fb632f365dbf2264e2b22529fb14e"],["/posts/fc05.html","ac614101572641cce5fd173dc23c17df"],["/random.html","f48a08fe44d2978a1f797d6347f4d4fc"],["/self/vs2015.css","614b9c5c11ee991504273c8e665f58fb"],["/sw-register.js","69d3a49ce6a0753b001235769cd90bc5"],["/tags/Avril-Lavigne/index.html","569c03a174927114a77027f873a67a72"],["/tags/CS01-原创小工具/index.html","568d2339db4743de53004513e5cd35ce"],["/tags/CS02-WebFrontEnd/index.html","57eca5fc014710261426736724a67944"],["/tags/CS03-数据可视化/index.html","6aaf6aeee0c815b0a85424fe36fefbd5"],["/tags/Elizabeth-jane-bishop/index.html","00faf7a97f308cae95c8681841181e0b"],["/tags/LI01-写作模板/index.html","185ed254f7611f1cd584cf858b1d8afe"],["/tags/LI02-文章写作/index.html","0b4dd7d22af6ebaa994122a725676ec7"],["/tags/LI03-说说/index.html","818dcf4c0256a2ee42afb13731b4dc1b"],["/tags/LI05-文章阅读/index.html","0dbc2938a7afa0bf1e38a38442461b9d"],["/tags/LI06-网站/index.html","bde56ad76ad888435f127ba9ab32f2f4"],["/tags/LI07-英语/index.html","ddec60042e10c3618d95c159c94af751"],["/tags/LI08-CET4/index.html","704898fb542aab6f70cad132f9ddd865"],["/tags/LI10-技巧/index.html","b4560087828d1ad7566476fbbc96bec5"],["/tags/LI11-脑图/index.html","ec64a349e405709806cf0c5be6ec3e90"],["/tags/LI12-傅佩荣/index.html","1853b5bee322b8f7293b76f44905b242"],["/tags/LI13-国学传统/index.html","f3d34354a830feafa6345c57f03e9df3"],["/tags/LI14-模板/index.html","6a64af4653c0a02d7e0b2d26082097a1"],["/tags/LI15-下载/index.html","ac0532dcb1c14c844f8c387bcd65d85b"],["/tags/LI16-资源/index.html","e205b7eca17e07924521b1b6ea73499b"],["/tags/TE01-Hexo/index.html","abfa96fb486cb7d9c88cf224207d09e9"],["/tags/TE02-GitHub/index.html","dd740ae2538dfd7e615f889a0d47d49a"],["/tags/TE03-MacOS/index.html","ebccdb6307193f576e91cb23bd24fbb9"],["/tags/TE03-外设/index.html","a7bf93a300d1639deec0efa629dc3d1a"],["/tags/TE04-Google/index.html","ce2fb98caabee1a6392da130d8091c0f"],["/tags/TE05-Windows/index.html","4a7908e3ef50df7a966eea26818d387e"],["/tags/TE06-Git/index.html","bcca5c1b0ab4c79603c2de253458feb8"],["/tags/TE07-CDN/index.html","b89cd86c2ca52d6a51aca48502848238"],["/tags/TE08-Hexo-butterfly/index.html","0cff7047676e2287763d1ea9efc95e96"],["/tags/TE09-valine/index.html","3c4a0b3875ecb381ca636547d3eb214b"],["/tags/TE10-Yoututbe/index.html","ab194ef7b624093218cace05d708a142"],["/tags/TO01-软件清单/index.html","e5a1f9d510c80143c683c2d56165066e"],["/tags/TO02-图床/index.html","cdf2fc955d3f41d64d02985d4f9c0758"],["/tags/TO04-写作工具/index.html","5f772cd3fe21d9c18131328dc25435d8"],["/tags/TO05-插件工具/index.html","5150ad05420083d4cc19796762e8f8a1"],["/tags/TO06-搜书网站/index.html","f0f9763e5813c9a4fcccb54dc83bfce2"],["/tags/TO07-网盘工具/index.html","e2a65014c1e6bdfad9f1a2436887fca9"],["/tags/TO08-工具/index.html","fd5e8c458a6a311276d816355ef3fe74"],["/tags/index.html","5fb595bb683f38aab5e2da327e7b2d70"],["/tags/mv/index.html","3439f5734a5b846448072795b9037395"],["/tags/知乎/index.html","36496b0be1844d5daea78602769fb8ee"],["/tags/计划安排/index.html","648aec9237f5e090426de743e71d0494"],["/zone/grammarToolsComparation.html","db386c363d0c69f77d9355c415c2c416"],["/zone/myGetEmbed.html","499b923515b8a48d0bd5c6a8122f6969"],["/zone/youtubeChannel.html","40aefb2bc79dbca3280beaa68ec2f37d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
