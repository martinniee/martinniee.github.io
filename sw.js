/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6073310f48cb612bbffd16f787f9748d"],["/about/index.html","5cdbdc4a9497dbce48bab057406e18b4"],["/about/新建文本文档.html","7115a7c73fbbc4cd5295ade16bd5f4b5"],["/archives/2020/04/index.html","e1b34a7b5ca04f0092fdb4df55d29dce"],["/archives/2020/09/index.html","538f9a251a199a78d62836ba4635c71c"],["/archives/2020/12/index.html","9ee9f93679c506e220e894f837883f64"],["/archives/2020/index.html","77b7d369020fdc3c730eb28876d10b5c"],["/archives/2021/03/index.html","48109b34af6bd41f6071423b7e2b5e4f"],["/archives/2021/03/page/2/index.html","cd474803ca339c5f76c3c1df14e3e5ab"],["/archives/2021/04/index.html","23ca8918af811476b66edf0d782d3570"],["/archives/2021/05/index.html","3e043a58ccbe583a4bc4919ca047bab1"],["/archives/2021/index.html","73d56c5538f604e1f31c33183b33a5fd"],["/archives/2021/page/2/index.html","f6f519733fc1f1aa31ee6e7c23a3ad19"],["/archives/index.html","163736fb62ccf48ecf5d8f3e0372a64a"],["/archives/page/2/index.html","58fc65f40999268df40a248ae9463827"],["/archives/page/3/index.html","a98211bb6edf0b1006daa31f393bcdff"],["/artitalk/index.html","3333a45f28c426417ac74ba70cb89443"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","20727785a0dbbf67d76ceff269a91d25"],["/box/index.html","900461cb9eca3e3cbf66004825bc6cae"],["/categories/index.html","d8083179c7979b799d1fe8bdf40978df"],["/categories/技/Android/index.html","508cb12bb93f2baec53dd9f48293e274"],["/categories/技/Badge/index.html","4374780ba1781ee4e2d9c68371b78704"],["/categories/技/GitHub/index.html","bdb9a0227a0d1be450ebac4f751b3102"],["/categories/技/Windows/index.html","964342a3a0f60e511e4396ee14ecc5d4"],["/categories/技/Youtube/index.html","e6368e935f746eb61f57457e404f119f"],["/categories/技/index.html","0c1cf29e263d2212c98106ec30136f6e"],["/categories/技/page/2/index.html","61076e4370f617c65d620b82bf64373b"],["/categories/技/page/3/index.html","0eba67cb916591724acd205504b994ee"],["/categories/技/工具/index.html","f9e71cbc18145b85d34b808018c9fca1"],["/categories/技/网站/index.html","835557db22f04a3abbcf56ff07074399"],["/categories/技/计算机知识/index.html","9520d592b22c19d363257e0c2836c7fa"],["/categories/技/路径/index.html","978f05234b82865b9e85aa7546fc4d88"],["/categories/技/转换/index.html","d16617b69637c4b020ddd47060baa4cc"],["/categories/技/输入法/index.html","59d0425032f7f2bcc0b6ff1a72b1c47c"],["/categories/术/index.html","880a620f5000e5ecbfa1492853c89f98"],["/categories/术/管理/index.html","9596fab98afbe635a26d6b72161ca620"],["/categories/道/Java/index.html","bd7bd22e6bc4ff31f9e807155c147939"],["/categories/道/index.html","d37bb6fbee60ccd4ccc2e0b8135c3596"],["/comment/index.html","36f2de19e15fb13d4fc28c5221e9a875"],["/contact/index.html","4cf69f20038183cb16e7d3351e65c30e"],["/css/custom.css","7bb50fd7cc6cc224f6f4a3283eca03c3"],["/css/index.css","62a437c0f9136e8612995d8f780d4448"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/tag.css","eadd8a2073c31ce2730fdf1e5ad722c1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","2160ff345cd1fae7e8ebff47da84d62d"],["/gallery/blogComUse.html","54037161c7fd1f866c6252ac249da486"],["/gallery/index.html","5c43bd4db2688e7236f5b571d6875401"],["/history/index.html","0a55ef30a4f5e468ea780c3ef70fedc5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","141cac79d9b0bc344d7744a87ab96d48"],["/img/avatar.png","2cfccaf6053cf6a5bf80db47e5fc033b"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechat.png","43d0b06bdfbddb87c7395eaf4005eb64"],["/index.html","6feb1f7a75fea4437d0d4492cfc29980"],["/js/ip_content.js","92bacff50587527d43589642a7caecff"],["/js/main.js","34ea8c2b8471d377895f59cd30e1227f"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/timeDate.js","56a981b8c9acb871b12ff09a16b2663a"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","340bbe65655c3aa82acbabed1fc177c4"],["/list/index.html","108855324a3674724b7d45736040bf20"],["/mindmap/index.html","57ec7037fd1a5bcf7c174e6ec820546e"],["/movies/index.html","d0b5226f88ff524bf2e209420c78e9c7"],["/music/index.html","e2fc714096e2fb0167a3d6b7664bd29f"],["/page/2/index.html","caf1b336f67f0c2d6e4107569aa6a3df"],["/page/3/index.html","6c6b6cafbcb41db11417caea86bc509c"],["/page/4/index.html","8581d1ff13d29baf19e090f379d6a5e2"],["/posts/1ad6.html","6ffeca6c5364c6f37b8119372ecea4f3"],["/posts/1c63.html","9aa602f54343a5f4bb52f9124b0f8a1d"],["/posts/204f.html","ba3fbea9dc820e15e66c5c570e0dd4a1"],["/posts/2409.html","7c61550f30104f3f3e16a8ef3d6ea973"],["/posts/2865.html","faea7dbe31990cd2fc1a2cb854692bd8"],["/posts/34f8.html","b111184ca24a3f9d1d6261ae98cb22fe"],["/posts/3b10.html","fa07a9ab7b3387590a0c2c657cd742fb"],["/posts/5435.html","80c493c67193f1104e5856b82c3a204a"],["/posts/5735.html","7fad7a36244a435bf2c08c82fe6da48e"],["/posts/58cd.html","1ebf4f98179d95489d6eaeaf03212840"],["/posts/6367.html","03566a97c20d17bbd6833eb7e5cb5899"],["/posts/66f7.html","4c004bbcfe1d6e7af299c51e6e7e9a91"],["/posts/6b8d.html","b0050ee5936fcab3cc20b64d291eec24"],["/posts/6db5.html","ea53b6bc41bf118d7b9043e87c4c44fc"],["/posts/713b.html","9d3918787df18177b2d4c4e0210b96b6"],["/posts/776b.html","5b52c081e4bc214a82ef877ae5310567"],["/posts/9096.html","b0eb749bb19c20e822417d061e13d148"],["/posts/9298.html","f7a0de3b3ee555d3f4e2ae708b5b487f"],["/posts/9e9c.html","6f208288acda6a040e0d35782ba2d745"],["/posts/a7aa.html","1bcafa2ccad4510a421543af177c3c17"],["/posts/c7e8.html","4e6e17311ac8f993a060241c2d4b6097"],["/posts/c8cc.html","bbc2ed1302ebec7471a476dc3ff3cf9d"],["/posts/dcb2.html","f08dea67ab04a64e1b34191b9d966fba"],["/posts/e0b.html","99ef700e7fd922b926d5acf50668460a"],["/posts/e1ba.html","7638c7693e3757b95d4aee3902169901"],["/posts/e823.html","2c440edf6a29eccfe711addf3f08dbd4"],["/posts/f17.html","0c22447d864b54dfebc4d45032d23f7a"],["/posts/f48d.html","3b0c6c7cb31942c303431a1c4c613935"],["/posts/f786.html","7cab39cf6d87dcb7d5da668d84ba1f29"],["/posts/f949.html","66886270a94bbd2df9b92f1fdf2539c0"],["/posts/fb11.html","7b4ea1c867041a38a63b34db0c12e57b"],["/random.html","2b8ad96395a38d2aea91a0b78f9a11f7"],["/sw-register.js","879739633440931a34164ed901d3ac4a"],["/tags/Android/index.html","5b891ff358ed2f2824573e9ca2959291"],["/tags/Avril-Lavigne/index.html","bf06427877182d5260bb6b5ec9fb4257"],["/tags/Badge/index.html","f5609840aed6c6c43541f01ac829db12"],["/tags/Butterfly/index.html","3fa07e0b38a123fa5039bcf65b3de497"],["/tags/CSS/index.html","320dfe8e80a0c15ca03459de0bf75fe0"],["/tags/Daily/index.html","0cf1ecd078b1daf0114b4085656aa7cf"],["/tags/Data-visualization/index.html","0a3b3c6f1dab2bcfb75280829eb5d119"],["/tags/Elizabeth-jane-bishop/index.html","a1df84b59e1b6b96dd5fe20c482a8a62"],["/tags/GitHub/index.html","e0b6f76f5e2e16de54a85d295a613c0f"],["/tags/Hexo/index.html","81e3357b9c61c963548ae38390bc940e"],["/tags/Java/index.html","e551521af1362143d716a08e2afe0c4b"],["/tags/MP4/index.html","1c2160a5d3ec5c2d0ca8ac8a3d7af9af"],["/tags/Markdown/index.html","c1e05f0df1aca7a6022ec1986cd1bc2e"],["/tags/MateryTheme/index.html","e8f1cb02947e44959e1a5cf50b22d9a1"],["/tags/Tools/index.html","b74e61486f01f5bb57cdb6cf49a161c9"],["/tags/Vmware/index.html","60bbd8ae5bb214223b8c95b97ad7c5d4"],["/tags/Windows/index.html","1f3eb61f19d472034ad628020b001867"],["/tags/Youtube/index.html","c2da61e64ce152557cf3513d7d965a41"],["/tags/b站/index.html","7007cf48559d241ddbf63b83486dca9c"],["/tags/cet/index.html","526b263e2c3dedbf99113976ba2dca8a"],["/tags/english/index.html","5bfd8de207484ac439ae21481be8e39a"],["/tags/index.html","9b7870eaf67d23aa9b189a1e8e57a970"],["/tags/macOS/index.html","f53258ff2984a8c0b580ea05c27d7922"],["/tags/mv/index.html","60e3147a785f7712349cffb9146e881e"],["/tags/office/index.html","b3a6e79c01351e168a510dd486be058e"],["/tags/valine/index.html","518aacbdc36b785a98312eae48280bb6"],["/tags/下载/index.html","edf61dc1c8bf9b37d52f4734e221ebd0"],["/tags/云盘/index.html","f1ea7270504b8b5094fee2911336e8f8"],["/tags/使用/index.html","7128367fb436b0457ca01590f13c1f14"],["/tags/储存/index.html","6cfd2b4a7c00a7253d90754c66203dca"],["/tags/免费/index.html","e534e14e6b047b7634b54ad5deffeb8a"],["/tags/写作/index.html","f7e23d04fde0db409e32210b4ea4aaf7"],["/tags/博客/index.html","e70ff4cbfe8ece821b0b0a9e5669de34"],["/tags/合集/index.html","4a1f00e8a29d635cde91927e6836c1e0"],["/tags/图床/index.html","66fdbe6dec7fb7822b60fdfa4beb96e6"],["/tags/在线/index.html","7b646cfc48ef4429923fac507ffa4778"],["/tags/字节码/index.html","e147e61d6855412c051ed56f763facd4"],["/tags/安装/index.html","13fa14f294b1576a49b783a6b07fcb86"],["/tags/工具/index.html","faca3712d9ec3ea5e874f6699d917961"],["/tags/干货/index.html","d113798189cd8190bc42168dadf4be4c"],["/tags/必备/index.html","f9c15b0a7fc4c4ba199946dd224fc846"],["/tags/截图/index.html","287373ae4d9bf19202e8200450abcaa4"],["/tags/技巧/index.html","8dff370e5b3e165673ede52f327f79b4"],["/tags/按钮/index.html","60f3a1d7b1b0cab9055fd3de61934fa1"],["/tags/捕获/index.html","a474f6079231dbee82064373204c31d2"],["/tags/推荐/index.html","bbe1bf4d49a6596e48928554313b3cd3"],["/tags/插件/index.html","ac5b33f8f53d434f60c5cae7b0ff5c89"],["/tags/效率/index.html","d6504f2169457278e086922f21fc1550"],["/tags/文章/index.html","a02cb5c728909e73a799ba79a14d9e18"],["/tags/标签/index.html","886c765dafd4aff79dc8457e23f52d1d"],["/tags/标记/index.html","db239492f0902633b35e38d31f7625c5"],["/tags/样式/index.html","3cb91c7864ebd03cb19cbc75a8b67453"],["/tags/格式/index.html","0f3e6ea61b54b32561b4478d4514ce37"],["/tags/特性/index.html","53debfbe0e5a7bb89aee10e49bd343f8"],["/tags/环境变量/index.html","51b76a3ef337c91353891a5154898099"],["/tags/理解/index.html","b09707be125a24c535f9f7522a02a64c"],["/tags/白嫖/index.html","1808fb504737e97cb7a39beb7759d80c"],["/tags/管理/index.html","9eccce61aff8162e14593f101b75256f"],["/tags/网盘/index.html","301a4089e05f8b96213108ebf4bb8e09"],["/tags/网站/index.html","0d565387ad5f248834702135e62bafef"],["/tags/网速/index.html","4d428e74c333a6187fcce78da5e34cb4"],["/tags/脑图/index.html","e446771d78fb7bb34f796c6a7727870d"],["/tags/虚拟机/index.html","4a9b19a4186b4198e330aa0c5ceca3d0"],["/tags/视频/index.html","bed6b7a5b8da79500f34610e8af81e7b"],["/tags/访问/index.html","eaf8fb58d22510ef59464834801a361d"],["/tags/评论/index.html","7ef139be540ff1f686db88a26b2482ba"],["/tags/读书/index.html","4c5895505ab88b31a94cc99d080fc2a9"],["/tags/豆瓣/index.html","779429bdc74d48961e8db50b8baa9800"],["/tags/路径/index.html","fa34ef3a352629d4ff38643840a8f343"],["/tags/转换/index.html","7d9b189f09a29b6f64bc79d5b334d88a"],["/tags/软件/index.html","30a50148d04ddc4a2afc3a56565385ee"],["/tags/输入法/index.html","c4bfea09590ab5940acb3f85069ee1af"],["/tags/配置/index.html","3b9c7108e5d6e76b46db9364bf3edc86"],["/tags/频道/index.html","2a35b2279c5868394f97591a2a2d867d"]];
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
