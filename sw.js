/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/04/25/HEXO_addValineCommentSystem/index.html","96666ba7e7e0749cf7cd7e5d7efa9e9e"],["/2020/05/01/mv/index.html","93a43ab5ca070b977a826b32ee81d2d3"],["/2020/06/23/VMware安装使用Linux(centos虚拟机)/index.html","868f3670417815aebe45752f601ef69b"],["/2020/06/24/pycharm连接Github/index.html","5b82ba84d70e8d50cd6f3057c200e320"],["/2020/09/09/博客说明/index.html","9df006a4234f5b6e59f5ec6a20edca0f"],["/2020/09/16/Java字节码解释/index.html","2f42a19cc2865decb489188035d92fe6"],["/2020/09/16/理解环境变量/index.html","0172b8b3acc8bab587fea026e685ac9e"],["/2020/09/17/HEXO_matery-Theme/index.html","2f3896a1d9fd403416fb171ef7dd2a61"],["/2020/09/26/HEXO_butterflyTheme配置大合集/index.html","3e92a448bcbe7d500b7e1ba2fbd9d2be"],["/2020/12/16/在线markdown编辑器推荐/index.html","576ecc2dc2fd46969ad25082094be775"],["/2020/12/16/在线代码测试工具/index.html","acce5fcab7fb4dc984b8e87f2faa80f7"],["/2020/12/17/Mermaid使用教程/index.html","12b9d315357779f20136bab7bd8b5de6"],["/2021/01/28/Python之anaconda下载安装/index.html","e333fcd8beae897fd5ddff81f058141a"],["/2021/01/28/Python之配置yupyter_notebook/index.html","72f12295017e1c78989f2386c597b941"],["/2021/01/30/Windows使用技巧/index.html","39977ef5bad681afd1bb933d5a5abf83"],["/2021/01/30/Windows图文详解win10-8-1-7系统cmd命令提示符出现“不是内部或外部命令，也不是可运行的程序或批处理文件/index.html","41603036a68b4ec989c658d5dcb23984"],["/2021/01/30/Windows解决microsoft-store无法打开-联网问题/index.html","c7b274a2ea1c5589fcfbf38f2cdc7d0a"],["/404.html","1ebb851c8cf952d8dbd9c422ed8981d6"],["/about/index.html","d37a61cfa2c1e5239347c03036baeb87"],["/archives/2020/04/index.html","4ba74208924f882cfa41892f160697ab"],["/archives/2020/05/index.html","4de525ae649933c722cd44613cd7e0ea"],["/archives/2020/06/index.html","6a925429b781eec2467502d1fc8fac3e"],["/archives/2020/09/index.html","9cbcffaa01594beada039ee759a25981"],["/archives/2020/12/index.html","966b511251be4162168fbafa50c755ad"],["/archives/2020/index.html","df3bd8958596b18e42634ecd373a8bb5"],["/archives/2021/01/index.html","794d4bf511b4ba468b27dd0db0e3618f"],["/archives/2021/index.html","3e31ba5c22666f7501cdd2046c2ff337"],["/archives/index.html","8ecbf485149677942b1530ba186810d6"],["/archives/page/2/index.html","d18fd1e99b2f3d9a98945d928d6d629c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","6856482edd7ac435d394d1077b2488a7"],["/box/index.html","5c282d8861f9d2b47d6608bc4b183b04"],["/categories/index.html","a81a0c526ac6edc7cc0d93656f613fe5"],["/categories/学习上/index.html","ac236a3e0d8318df959c5d5ecef3b975"],["/categories/学习下/index.html","2cbd39f717bee6c2c20360f9c8938019"],["/categories/学习中/index.html","f207a8545e101648b9d1e491a49ab90b"],["/comment/index.html","269a87917176738086f3134c92f27a0c"],["/contact/index.html","b14afb7d4196759c5c9b0e3070a5c93e"],["/css/custom.css","4d4360502362fcc33b10a03c3759195c"],["/css/index.css","9e55ea1e38ba05a480e7cf67a9321aa1"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/tag.css","eadd8a2073c31ce2730fdf1e5ad722c1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","cd419db0011e14d8dcbcb056e7fff6a6"],["/gallery/blogComUse.html","d81457022b7762c5710c41a9f7bc4a86"],["/gallery/index.html","8720c23e732522a4fe6ab1e31a944e27"],["/history/index.html","d83f69761c1c92531d7ae46acca44c4c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","141cac79d9b0bc344d7744a87ab96d48"],["/img/avatar.png","2cfccaf6053cf6a5bf80db47e5fc033b"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechat.png","43d0b06bdfbddb87c7395eaf4005eb64"],["/index.html","58b483aea74b6030afdfeb4c19329578"],["/js/ip_content.js","92bacff50587527d43589642a7caecff"],["/js/main.js","34ea8c2b8471d377895f59cd30e1227f"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/timeDate.js","56a981b8c9acb871b12ff09a16b2663a"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","73f97c439a9a66a04084af149444b193"],["/list/index.html","b2faafe9844ad3e296fbdf3fc6dd5ef8"],["/memo/index.html","a28b85715be7e8a60ce3dbc6046ca975"],["/moment/index.html","6b40b6c0303c524dba91194d7c00494d"],["/movies/index.html","e15801a7ceb0c3a3dc0b0a41ac3acb20"],["/music/index.html","80e7f632e5147868d55c77fe59cb8081"],["/page/2/index.html","6f68d3328d22e1c18f035ede86836f7e"],["/sw-register.js","510af6d6c76bc37daadee3f31cea727a"],["/tags/Centos/index.html","9d1884ac2249928a31dac3b1a9719494"],["/tags/Git/index.html","5c0da3e7af8d0f91d7391c2e091a8375"],["/tags/GotIt/index.html","30bced703ab28162952593cc8cc0a970"],["/tags/Hexo/index.html","79f3274e510b9859d0fb558cad7227eb"],["/tags/Java/index.html","4bd96bf6a5860e2bd7702c8691990427"],["/tags/Linux/index.html","044f51e69627ec41cbfadc6323e3d1b7"],["/tags/Markdown/index.html","58cf2151acd511f8052c46b9c1d7c93e"],["/tags/MateryTheme/index.html","05da2841f1db5c1cec67200beb286aa8"],["/tags/Mermaid/index.html","5b5bbe0e3843ba697dd55e0e8c9123d0"],["/tags/Microsoft/index.html","0efe4deb748227565be753b7772854e7"],["/tags/Python/index.html","ea8a7370730a48a66b2e4821e4234ccf"],["/tags/Tools/index.html","10fd896f455c82ee69fd57009d59d3dd"],["/tags/Windows/index.html","ed6f6e32b39531f02398b983a15d9352"],["/tags/index.html","7d22deef9ec37279a3fff3af959e82d7"],["/tags/mv/index.html","23d91d93311dcc7867814e0bc9d7da40"],["/tags/valine/index.html","7a916dada5a5008aea149cd285042108"],["/tags/教程笔记/index.html","5a396ccce2e3126bb5489eb670936870"],["/tags/环境配置/index.html","5dcbc31d2e13949d25102ac4e6c39146"],["/tags/脑图/index.html","865c56e3ce9e4e8632e8f485faff5e7f"],["/tags/评论/index.html","3f43eb08ae903649d449ec31abf52558"]];
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
