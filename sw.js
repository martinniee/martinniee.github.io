/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","aa0ce66305e1cda90bdf8545ae826338"],["/about/index.html","2b5436822eca86a5b15f1c71cc2f8f61"],["/about/新建文本文档.html","40f96ee240d36f1e8e0f79e3c8b6580a"],["/archives/2020/04/index.html","0cd3b7f78e48791b3c18d75871fdabff"],["/archives/2020/09/index.html","e3119c164b4cff947d3e65588708c280"],["/archives/2020/12/index.html","8d109e55344949323b38daf2c9bfea79"],["/archives/2020/index.html","a138a08a580efd83e435b9315d661544"],["/archives/2021/03/index.html","6bf708e68ffa3b423d30fe89978536ba"],["/archives/2021/03/page/2/index.html","5b6689d8abf3b738b6e3e59c25e7f9b9"],["/archives/2021/04/index.html","e7bd5826bc64f41015d3cafebbe47ba2"],["/archives/2021/05/index.html","30021c494762897e5c20bbacef28a89c"],["/archives/2021/index.html","82378da5320e72c3ba82a64b3a4a11d2"],["/archives/2021/page/2/index.html","98d2782911447095de95137fea1866a9"],["/archives/index.html","ac8b4f990d63a84841ba2d2530aeba6f"],["/archives/page/2/index.html","92d4bee2543cc26dfa6012db78f353e0"],["/archives/page/3/index.html","7fa27b808afc7bddcb772fe4c5c9ae0d"],["/artitalk/index.html","38cf8947ad51d69e164a16d8cf9cb22f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","8252ad85356edfa89225f919ca96e37b"],["/box/index.html","900461cb9eca3e3cbf66004825bc6cae"],["/categories/index.html","879b8320f5704b3e15cc5329628e3d9c"],["/categories/技/Android/index.html","c15d546dd0e80ad7d1048b987157edd8"],["/categories/技/Badge/index.html","5b7d6cde94cfffa784f087c05680aa5f"],["/categories/技/GitHub/index.html","08c1a20fe73874e9c09a37cbb2dfe15e"],["/categories/技/Windows/index.html","60edb3b4d83ad96ce43409545e413db8"],["/categories/技/Youtube/index.html","d84e80a6f0440688117e8f9777c96c8c"],["/categories/技/index.html","34408f49e261593fe9c2298df2b83944"],["/categories/技/page/2/index.html","884ea55425b4c826ba71c6a21208e812"],["/categories/技/page/3/index.html","b13ea6abee1f504de4eb6d004ff2f036"],["/categories/技/工具/index.html","b47a93eabd382d0a9761891463aa7619"],["/categories/技/网站/index.html","7d74141ca54b16717868395c60e1dbf7"],["/categories/技/计算机知识/index.html","20be3f09af29414839d1e2dc7f74892f"],["/categories/技/路径/index.html","9529222d0d2cbb23eaf85b672630fa06"],["/categories/技/转换/index.html","9366da08fbf99d412c635612049c5ee6"],["/categories/技/输入法/index.html","c507c722f742ea29e5f50ab9ffa2e0bd"],["/categories/术/index.html","2c721f3eadf1ca75344ec083e7ab21a0"],["/categories/术/管理/index.html","119529ce4fb371d0073cf1ad67fe3983"],["/categories/道/Java/index.html","15fb90d0aa0866dc4b605231f70423f8"],["/categories/道/index.html","202f7180331ff0f1340a549cd3e25b5f"],["/comment/index.html","0dce481d09bc16508bc0c419cbacf163"],["/contact/index.html","4f780ce9f420aa80d91e2e0373a20f66"],["/css/custom.css","7bb50fd7cc6cc224f6f4a3283eca03c3"],["/css/index.css","62a437c0f9136e8612995d8f780d4448"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/tag.css","eadd8a2073c31ce2730fdf1e5ad722c1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","d6366df54dfda0df1c7a956c2ecf5aea"],["/gallery/blogComUse.html","f2fedbfd35c7256578fbc8f985614c83"],["/gallery/index.html","1ddd8e25e62c30ea14ceed8611da31b8"],["/history/index.html","9543cfb1dcefb1f7063d8cd574756930"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","141cac79d9b0bc344d7744a87ab96d48"],["/img/avatar.png","2cfccaf6053cf6a5bf80db47e5fc033b"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechat.png","43d0b06bdfbddb87c7395eaf4005eb64"],["/index.html","36481052a981fe52cb8b50845faee6f4"],["/js/ip_content.js","92bacff50587527d43589642a7caecff"],["/js/main.js","34ea8c2b8471d377895f59cd30e1227f"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/timeDate.js","56a981b8c9acb871b12ff09a16b2663a"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","00545de6cdd2c08d045087ef6c558e7a"],["/list/index.html","92941cb4ccfa57f90de9f2a142a9a89d"],["/mindmap/index.html","b6378f7f4ef1e7de92726685b151228e"],["/movies/index.html","e57780c5a572dfc90d6846110c92aaa7"],["/music/index.html","9e5b0f5adc437046632a4bc22d656924"],["/page/2/index.html","95deca555a243ac1bdb7d765f3b9fd1b"],["/page/3/index.html","c7c40c70cdeb3b2f5cb2a261c75992fd"],["/page/4/index.html","40ea03ddb34c8bdd33abb6ff0305b3c8"],["/posts/1ad6.html","83dc31cc44779c9cbdbace882f4bd819"],["/posts/1c63.html","505db4ef172678e252afbd8aab58144d"],["/posts/204f.html","dc45ee6e536c3640ca6e8ef55dc2e2fe"],["/posts/2409.html","77fac8e04e41662a0320d243735d4467"],["/posts/2865.html","b4de741834109e65889683221a9cad7a"],["/posts/34f8.html","61e95a5227bb70ae8bcf60b470722726"],["/posts/3b10.html","0713dfdb5f0116bc5cb8a4ab1bfbe0db"],["/posts/5435.html","e1af739b6aa183d2fc28eb2b56e0e9ea"],["/posts/5735.html","0c2789fe2630dd2e00f6f767e6026691"],["/posts/58cd.html","8133ca82038d6deef8095b1c716b9ccc"],["/posts/6367.html","c055ff24190d556a010d4d67b22e38be"],["/posts/66f7.html","3811f1c1f2c2321ab687f23fee7ef935"],["/posts/6b8d.html","8e18656494e8a4b0813528309ecc0d7d"],["/posts/6db5.html","54134072f65853fe45577941e3738e68"],["/posts/713b.html","41ff097a4c11b5846e271e3b54ab5f07"],["/posts/776b.html","bb6d6333f1f3a7d8573917cc0c2e2b7a"],["/posts/9096.html","07eaa7260f1c4deb6b9b063db0db4c48"],["/posts/9298.html","7235298909b7e055b37a28d63371dfe7"],["/posts/9e9c.html","26dd952e5610649fe9b4ef508aec613d"],["/posts/a7aa.html","95c1d459b2e73cfbbad3f597c05e5f9b"],["/posts/c7e8.html","94eb7d1d3b0d0940fa5453b83ae209fb"],["/posts/c8cc.html","952e789dc87ca333417e82198fc61b57"],["/posts/dcb2.html","5d5a35693963db1a49a96ddefa8048db"],["/posts/e0b.html","c1b7f3a99755599c26b6ba5c03e764cc"],["/posts/e1ba.html","8512f225bd670792f69641af5a7c04e4"],["/posts/e823.html","9a61ef07152bfcb5ab5b635c91d517ee"],["/posts/f17.html","0119f84963f8b30b52f4f6fd7bbc9f6f"],["/posts/f48d.html","33df191690a1684c092f60492e694770"],["/posts/f786.html","3d60df800b86bc811853b6f6c4dffe06"],["/posts/f949.html","c5a0327e839376b3d7fae99ab385a66d"],["/posts/fb11.html","a5e44b8b6f424fac40a3cc447d47bed7"],["/random.html","009cf244302088e82eda5a3e1a467ce0"],["/sw-register.js","535962f4d794484370bab52be146ba3e"],["/tags/Android/index.html","457a27c64683860f66e4034aaea9e864"],["/tags/Avril-Lavigne/index.html","2d4f9a6ce8c9b25b16082ff02159291a"],["/tags/Badge/index.html","38eb1f35738b73895531cacf2a145c76"],["/tags/Butterfly/index.html","4050ee0da6ce66191680150da69225b4"],["/tags/CSS/index.html","dc729ce1b7e9e82512250bbac329a48f"],["/tags/Daily/index.html","9af055d74838693b5c2b0da3221e48e9"],["/tags/Data-visualization/index.html","7bc146b0a40541ae53a177a051f34dc5"],["/tags/Elizabeth-jane-bishop/index.html","1bdf39816df5e8531429a29193b69929"],["/tags/GitHub/index.html","7350e7462532d3fd1ce38a347308a1ea"],["/tags/Hexo/index.html","9139fd46966545ffa247026f626f15c8"],["/tags/Java/index.html","8100cd83bc5aa278efc9a3bcafb39889"],["/tags/MP4/index.html","60708f4ef02bec40f5a68692ed99a114"],["/tags/Markdown/index.html","ca5781047951e5969c677bd0a02780b5"],["/tags/MateryTheme/index.html","09443a27ff0141f4ee330edcd48dc5e5"],["/tags/Tools/index.html","54d317b62b8f0326745d77ff28025087"],["/tags/Vmware/index.html","29c204c498f61bf3e3e5a7f2ae029668"],["/tags/Windows/index.html","83353ae6d7b32d19ded23ac6c6d26987"],["/tags/Youtube/index.html","7f17d0a85f9609674d835d421f1d9320"],["/tags/b站/index.html","d202c6ee02c7e02847b6a26e2abdf0a3"],["/tags/cet/index.html","20bf907fd09917ed31a081ffa5fd3f8a"],["/tags/english/index.html","64600c845e5aa8d28ff7ee95c929d814"],["/tags/index.html","5a284ad18415514f7c73c510f0cbe5eb"],["/tags/macOS/index.html","9c340c0622728b32c0f89d1a4fe66bc6"],["/tags/mv/index.html","4475c1f5bc66a812a50a39dc43a02b9e"],["/tags/office/index.html","2e4f1faffc2d7fbe8e759cba28383996"],["/tags/valine/index.html","98637b4993fffbf437cb409aab7536a5"],["/tags/下载/index.html","e0f00cc610a17e23b62ecf0da5a98bcb"],["/tags/云盘/index.html","bb9b17174ab4739fd3336b0a69616e4b"],["/tags/使用/index.html","18a0eb69fdadb0e1a7111cf52f401edf"],["/tags/储存/index.html","9b2cee8912ebd9fc43a35822d64509b8"],["/tags/免费/index.html","b23f538f817c6c214914ff6f3a1667f5"],["/tags/写作/index.html","6d80f1228afde4d62b30491c9f3d7043"],["/tags/博客/index.html","807d87554859be142575bbb13c178d73"],["/tags/合集/index.html","f92aa30ddf76a8ee43d08d8a41cf2998"],["/tags/图床/index.html","fc5b28121afff0ab7d3b049dda25dc67"],["/tags/在线/index.html","0cd1b3921af6e0c56973b5c8a0aeec6e"],["/tags/字节码/index.html","434ef59635a1f07a6b096f07e7ca758b"],["/tags/安装/index.html","9312ad98ca358e8077e6d5e883e48718"],["/tags/工具/index.html","73c0f850afe336e3870a1f2e06356651"],["/tags/干货/index.html","133bc0fe520e2f4177a3b78fed33ad30"],["/tags/必备/index.html","fd94f39fa1bc77727022d134dd68e04c"],["/tags/截图/index.html","a5bf94f1145ff4be26eb39f61a83e980"],["/tags/技巧/index.html","ceb39dddd7472c251ef05558b65fec7b"],["/tags/按钮/index.html","a17a9aded0935fe96dc8c8516aaeb42b"],["/tags/捕获/index.html","95ceb8b9819f0a20bbd587e51d0fbf05"],["/tags/推荐/index.html","f48b5c108caaa786c43054861fe8254a"],["/tags/插件/index.html","8c37fd4b308917ddafd321a1096e9daf"],["/tags/效率/index.html","8952c55cd81ed13108d7ac2be7f0e1d1"],["/tags/文章/index.html","4f921247d0865ba9ab4e3b0b39f4c40d"],["/tags/标签/index.html","51da2ceafe759ccb0037761bd831852b"],["/tags/标记/index.html","0f0198814f985d7aec5de61f4db41938"],["/tags/样式/index.html","4e27352bd850af12eca759296a4a2843"],["/tags/格式/index.html","ce8216c45a091b97c58fb132ec673d0c"],["/tags/特性/index.html","a38f9ad882a5d133fa5fa60451a95b6a"],["/tags/环境变量/index.html","2cac1b7b862718ab1f68f2ed55aa66a5"],["/tags/理解/index.html","0c893415dabba2e40b8b3e5f309df3ca"],["/tags/白嫖/index.html","cd6fd64298124051dd228e50969c554c"],["/tags/管理/index.html","94cf5bcc83077f1403d8ea014f81aa99"],["/tags/网盘/index.html","1c0920442b3b9d7c6a883d68d42c3ae9"],["/tags/网站/index.html","f2385fdafbe8e77fe06956d10a9c7d23"],["/tags/网速/index.html","7d7e7eaeec39fc4abbd21f20ba8bf8b5"],["/tags/脑图/index.html","524e843f022849daa268b71efc850bf1"],["/tags/虚拟机/index.html","aec3a8b73208375bd0f4f679424f5653"],["/tags/视频/index.html","f0e9cf1709740acf771ddba25f9345c3"],["/tags/访问/index.html","c0f7169e0715f3a4df8b30fe59a4715f"],["/tags/评论/index.html","ca026eef8710282c87352d129accf26a"],["/tags/读书/index.html","6c5bbb05da306afe4700544336e52b8f"],["/tags/豆瓣/index.html","41f3c903217290e647a43ec4edca3a66"],["/tags/路径/index.html","cd9206554a0b1ea5fd5cc888b6c5a095"],["/tags/转换/index.html","a9e48490cbc527c3bdcb8d55f86f60be"],["/tags/软件/index.html","1d5bebadac446c0813143fc38c1fa3e5"],["/tags/输入法/index.html","ef16a35696fd5ebdc9262df3f2766273"],["/tags/配置/index.html","df17801ffcc1c2d9f8c36982eac05a02"],["/tags/频道/index.html","126334c754a22d9be6d4b0a8ff39157e"]];
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
