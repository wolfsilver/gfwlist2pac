// Last Modified: Fri Sep  6 19:36:35 UTC 2024

var proxy = 'SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080; DIRECT;';
var rules = [
    [
        [],
        [
            "ant.design",
            "bingapis.com",
            "builder.io",
            "cdn.sstatic.net",
            "cfl.re",
            "claude.ai",
            "cloudflare.com",
            "cnbeta.com.tw",
            "copilot.microsoft.com",
            "deepl.com",
            "deepmind.google",
            "dev.to",
            "github.dev",
            "gitlab.com",
            "huo720.com",
            "jsfiddle.net",
            "linux.do",
            "msauth.net",
            "msecnd.net",
            "npmjs.com",
            "npmjs.org",
            "oaistatic.com",
            "oaiusercontent.com",
            "olelive.com",
            "olemovienews.com",
            "olevod.com",
            "olevod.tv",
            "ouxyi.tienda",
            "ping.pe",
            "pnpm.io",
            "subhd.tv",
            "unpkg.com",
            "visualstudio.com",
            "vsassets.io",
            "x.com"
        ]
    ],
    [
        [],
        []
    ]
];

var lastRule = '';

function FindProxyForURL(url, host) {
    for (var i = 0; i < rules.length; i++) {
        ret = testHost(host, i);
        if (ret != undefined)
            return ret;
    }
    return 'DIRECT';
}

function testHost(host, index) {
    for (var i = 0; i < rules[index].length; i++) {
        for (var j = 0; j < rules[index][i].length; j++) {
            lastRule = rules[index][i][j];
            if (host == lastRule || host.endsWith('.' + lastRule))
                return i % 2 == 0 ? 'DIRECT' : proxy;
        }
    }
    lastRule = '';
}

// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
  };
}
