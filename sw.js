/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","28c77dfb61dd5f620e56104e0db8b670"],["/about/index.html","47f2c3e7653a5840d0bd4c77f73ae63b"],["/about/新建文本文档.html","06ba510d7619806ae9d40b8b26e9a419"],["/archives/2020/04/index.html","38013b12c4e26553af895ae8771decc9"],["/archives/2020/09/index.html","6792090d316ad75fb29779efb8e88e0d"],["/archives/2020/12/index.html","3b695d072e8a2a335dcb34c19e0065c5"],["/archives/2020/index.html","e7db7bf6368abf6424f5a3f80075a715"],["/archives/2021/03/index.html","65bddce98d412f5038f0ed593e17b8d0"],["/archives/2021/03/page/2/index.html","e05a7bf19b6e6993295933c8762d6abe"],["/archives/2021/04/index.html","c1d2e9e55f174217e7cf00ea95b38b23"],["/archives/2021/05/index.html","33c3877e6dbf097104fa3efcab3c6fd9"],["/archives/2021/index.html","364a7f693b3541be5f10d7f45150124f"],["/archives/2021/page/2/index.html","7307f7e8c62d1751f13d3502917e9962"],["/archives/index.html","4676e76872a3226b62e092f4baeeeb55"],["/archives/page/2/index.html","d09cf14c49faa6aafec045dc27820233"],["/archives/page/3/index.html","2546d96e76447ccb0855d956cda58faa"],["/artitalk/index.html","6a71e0c46bfb6a854532375e59708531"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/books/index.html","b52b7713f31749475c71d89db0522329"],["/box/index.html","900461cb9eca3e3cbf66004825bc6cae"],["/categories/index.html","7e3809a0e1663509dbb7396a32f76cfd"],["/categories/技/Android/index.html","b488d2d21472f37674ac8b8e0c3d137b"],["/categories/技/Badge/index.html","8db65a6e6baef7148e1af484e76af90d"],["/categories/技/GitHub/index.html","948535bc478622569c29fd27fa5316a5"],["/categories/技/Windows/index.html","4aabef0ac17f82056e077f1eff497946"],["/categories/技/Youtube/index.html","0cccd8a577847b6abe38d8f78ecd188f"],["/categories/技/index.html","bda16ed4d7cbbee37b7aae46860c653c"],["/categories/技/page/2/index.html","e8a9a624f68502f5f50289ccde6d403e"],["/categories/技/工具/index.html","b17c21cabea6dc4696aed97f7718dd49"],["/categories/技/网站/index.html","bf589b5bf8fc5ad950a19eda636d3101"],["/categories/技/路径/index.html","0c4c0a9a6065e627c3307c26ce18e94d"],["/categories/技/转换/index.html","3f1b75a9d2a0257ba679a3a8cf478605"],["/categories/技/输入法/index.html","6fd12f6e7fabd9358a7982a49fa07399"],["/categories/术/index.html","08a77f6831ad01f3f8d1f50d3ce0e961"],["/categories/术/管理/index.html","4270419a5db92c54cad5687cd1dfdcdc"],["/categories/道/Java/index.html","0eb33e3e54023ab224d2aa4716cf9e3c"],["/categories/道/index.html","dbc748717003f9244615c2f21f4489f5"],["/comment/index.html","b2845f9cbb4359613382c0cdac749958"],["/contact/index.html","75ce12418c400638aefbfc47a9a5e664"],["/css/custom.css","7bb50fd7cc6cc224f6f4a3283eca03c3"],["/css/index.css","62a437c0f9136e8612995d8f780d4448"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/css/tag.css","eadd8a2073c31ce2730fdf1e5ad722c1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","bcb323f753e8df01ddf67824fbe2eb16"],["/gallery/blogComUse.html","beba0e2ba73d0c7922d5c3aebcbe938b"],["/gallery/index.html","f880bfbfae4c8df8a1032daf990524c4"],["/history/index.html","17b8316aaf0b90101be9c1653ab817f3"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","141cac79d9b0bc344d7744a87ab96d48"],["/img/avatar.png","2cfccaf6053cf6a5bf80db47e5fc033b"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/wechat.png","43d0b06bdfbddb87c7395eaf4005eb64"],["/index.html","ea5638563b037e4cd9f62c16c7322612"],["/js/ip_content.js","92bacff50587527d43589642a7caecff"],["/js/main.js","34ea8c2b8471d377895f59cd30e1227f"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/timeDate.js","56a981b8c9acb871b12ff09a16b2663a"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","bcf28b036c9bdf9bd58a36b1a2567b60"],["/list/index.html","5ae07498dba89ee7e6f306bfeb7fa4b8"],["/mindmap/index.html","d5708af33ec4934454d5d33be2d32950"],["/movies/index.html","22d6196fdb4b37abcbac469523c15fcc"],["/music/index.html","51b8f6aecafd1f3aace3666e9be3de8a"],["/page/2/index.html","0c0f15f0cd4c57e29ef98eef5afdbc62"],["/page/3/index.html","f527826180dcdbc44819b913446b6a29"],["/page/4/index.html","21e25868d1a9e3a15f0c6a3624e7c1cf"],["/posts/1ad6.html","99b28d3a6a8344ce50e2b29cd6fde2d5"],["/posts/1c63.html","b1023c410a95032798a7983ff33f91cc"],["/posts/204f.html","143a02610c78203252f809774e8e8926"],["/posts/2409.html","adc4b31b422527ad5c038837fbf1c583"],["/posts/2865.html","69bbf928be861109a00a955bc7f5c545"],["/posts/34f8.html","ec7b0e66fe2f1c18c57c8f31d7c9c07d"],["/posts/3b10.html","2ed3a8aa99a147d18ad161deef2e6c63"],["/posts/5435.html","e48edc00deda39a2f0d4d4a9a0e90f45"],["/posts/5735.html","cb77657a663c8b07f56dd869090b6ee3"],["/posts/58cd.html","d79e4b9c00c6668b90b1622faedd20dc"],["/posts/6367.html","ab683eef5aa18012bc86f42261ec03a5"],["/posts/66f7.html","bf06b0defb39c5ab44c7dbc6b9979393"],["/posts/6b8d.html","c66a01a0ae24505a7680dc38f354d4c4"],["/posts/6db5.html","f4aeef291d41cc390da54736eb7e50f2"],["/posts/713b.html","5939a5ab2b70f67dfce83ca656ebe8fb"],["/posts/776b.html","abe2e29bbaeb2710d62107b2013c812b"],["/posts/9096.html","d0b95bc0fbc0e84483608b3b939aac94"],["/posts/9298.html","92bca739c5ebbfe430018d831a931557"],["/posts/9e9c.html","66a7d9f677cee721efd0bbeacbb5c354"],["/posts/c7e8.html","ba2cd98a32d2440540d545260e7d6b62"],["/posts/c8cc.html","eb4beeb8bfdb26a877e3ff7f22b6049b"],["/posts/dcb2.html","98e69f1a1d9051f8dfe6f0b73247b8f0"],["/posts/e0b.html","2590df6f3661a27c627d1a9d5947cb2c"],["/posts/e1ba.html","1f11f1fcd8d19e969f7fad01a3947383"],["/posts/e823.html","54d7729dd1d88ed61e2d79aeae5ce7f5"],["/posts/f17.html","559ba9cdc90430c817a2e01c604cf6b3"],["/posts/f48d.html","d37bce8a5c3f2d4e1fa6f5892ad4ad0e"],["/posts/f786.html","fdbb2f5751c904bcce342276287ea759"],["/posts/f949.html","bf9dac98398f505ab5862aa50df81e04"],["/posts/fb11.html","1d612eafdf941ac6ac0b63c4a86876bf"],["/random.html","bb6ee7f2954736650b2494049fc4c76b"],["/sw-register.js","51e869c96813aa07f62a0cbdda9af023"],["/tags/Android/index.html","bccc3999bd0d40932fa3e29022d30cef"],["/tags/Avril-Lavigne/index.html","934a0cb3cf437b7bb261eb1e2e278150"],["/tags/Badge/index.html","5fd21728b1b9c1992fff9b1b87d5372f"],["/tags/Butterfly/index.html","5d4aff6924898c42c539a952e093241e"],["/tags/CSS/index.html","a5ab14d41a5d7a1e4ba551a3fb1e22db"],["/tags/Daily/index.html","ce365377590550ee4b728ada9473005e"],["/tags/Data-visualization/index.html","67db7c7b6d963700d8d2fa12ee305b3d"],["/tags/Elizabeth-jane-bishop/index.html","45e7dc7c093cd9dd6f8468ace9ea7ccd"],["/tags/GitHub/index.html","0ccff90d0b22b566f112779bd9da7674"],["/tags/Hexo/index.html","d2066aa6dce1de66391fbbda8698c105"],["/tags/Java/index.html","09d78dfdedf92e9bc01ca83d70e893c8"],["/tags/MP4/index.html","bd1b0b1b5d7af645dc057f5481ab6eaf"],["/tags/Markdown/index.html","be9b389eea2ada158d95b987a1977364"],["/tags/MateryTheme/index.html","700578c760c1a0efd48e953015fd08e3"],["/tags/Tools/index.html","79bd5496614d1508315160f35c0006e4"],["/tags/Vmware/index.html","7484817ec9dc530ff654f9f2300ec0d8"],["/tags/Windows/index.html","5031a85c05bf95bdb79fca9d16d67221"],["/tags/Youtube/index.html","1fab58e0042e42091e807becc0ce47bd"],["/tags/b站/index.html","8bf99d19d8ede46b34664373a39a19e7"],["/tags/cet/index.html","11c7e8cb11364cb895f65e7a58832cd9"],["/tags/english/index.html","209bd52e8662216ab5cb3c270741bc2c"],["/tags/index.html","1de9d4795e2f49659c743decdab8f3cd"],["/tags/macOS/index.html","876623db34e94c9c818b2f78e5041b85"],["/tags/mv/index.html","5df102c1cc261dd81113707520286751"],["/tags/office/index.html","bfc35284c5648e8911339e512f13d79b"],["/tags/valine/index.html","d334bcb590a119266fd80f2b59acb1da"],["/tags/下载/index.html","ca4ff80c6ffbe46ae23c412e3cfdaf5f"],["/tags/云盘/index.html","50ee8534f78784921184faf354c38b30"],["/tags/使用/index.html","681a97f482893ab7e54c9ad947fe2927"],["/tags/储存/index.html","a9efc1ee2063b41cc3e048fff5e6d0fd"],["/tags/免费/index.html","e665d100b33bd81d6e63525903702206"],["/tags/写作/index.html","21db6ec05c4daef0087758c8cc6cfe56"],["/tags/博客/index.html","d00396f5fb0a6b15281dd7c028757553"],["/tags/合集/index.html","40a60f37fdabbdc095ed7b60a8ce17e5"],["/tags/图床/index.html","52faab1093dacafbe74b67e92aa9025e"],["/tags/在线/index.html","c8d39631636a00d18b242c7c0aff652c"],["/tags/字节码/index.html","e201d4bbfb44a46004cac9f00d966375"],["/tags/安装/index.html","4d8ebecf6ff7c392a81c51271d1f3b16"],["/tags/工具/index.html","68c579072add3250fa2fe70bfc338113"],["/tags/干货/index.html","2f84f8c4940c68a4b600799fd7fd9d8e"],["/tags/必备/index.html","e75cc162f9fb987ce1204c269b8f9495"],["/tags/截图/index.html","f72acf67fd064b6de3ed6138bc2f0dd2"],["/tags/技巧/index.html","c40b8e5f2b0f1ed02a1cbd2d2e09a048"],["/tags/按钮/index.html","f25c7777d4fa76ae51fafe602a90f826"],["/tags/捕获/index.html","64d7e7ffb9b87bb04854b27d878eb390"],["/tags/推荐/index.html","0324380ed8989a9c5d1c3a75a2f48008"],["/tags/插件/index.html","816632b6bcc4b26a28e191a6567562f7"],["/tags/效率/index.html","2a49f7588b8496bf7949fd92258b531a"],["/tags/文章/index.html","35b480203928322ba342a4f9f8cad781"],["/tags/标签/index.html","c9d9ac3c8d2ee37d9376a661f90ab61a"],["/tags/标记/index.html","e227807c29f5e9bd4d385fdf6c018f6a"],["/tags/样式/index.html","e38a2ed3323b037946fee7f570e3064a"],["/tags/格式/index.html","a684dbeff3e8d0d6453ef83eb43f586c"],["/tags/特性/index.html","dd2062d41b088ddea8775129ed03fce8"],["/tags/环境变量/index.html","c3e8529db928b44366a96d2a835014b0"],["/tags/理解/index.html","3170bd1d7ed82ed395f79dd2660e4fef"],["/tags/白嫖/index.html","dd2d35f3bf2217a740eaf8ca5b7fa2b4"],["/tags/管理/index.html","101d9698b9d4a9299ea30e2aa3b6abb7"],["/tags/网盘/index.html","890765d9e86edc6a1b717a52c52a4c8d"],["/tags/网站/index.html","19b7594105f008b16380f65210bba20b"],["/tags/网速/index.html","98d491334091b3dcfc44009f912b1df7"],["/tags/脑图/index.html","3063032050eed1098a4cfe72e3203fc5"],["/tags/虚拟机/index.html","3e87d6b509c48e01f836a8ce8821b41d"],["/tags/视频/index.html","3b790c8f03937a5de75628d223f84405"],["/tags/访问/index.html","8ab0f437cfc532dc6a8c4a2564748998"],["/tags/评论/index.html","2fe219d78ddb69dbfc20d31307c91886"],["/tags/读书/index.html","1ecad8db3bed99745691781ecc89b838"],["/tags/豆瓣/index.html","fab29b0c06ed02f6ec7bbbe277733ef5"],["/tags/路径/index.html","05fe6b11325d4c63f9eb65cdc5268207"],["/tags/转换/index.html","14e03f56a1aa9f54e7e534615968f786"],["/tags/软件/index.html","6ab603d8f7c69f7c9b4623f58f8037e1"],["/tags/输入法/index.html","ece8f8d9d01166685c4aa12d51a74ecb"],["/tags/配置/index.html","e246ad5dfff690d7fe3a493976446c9a"],["/tags/频道/index.html","5242da88d4377fd90898b77ebd5095ab"]];
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
