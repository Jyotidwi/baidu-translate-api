const url = "http://fanyi.baidu.com";

module.exports = {
    FANYI_BAIDU_URL: url,
    transapi: {
        v1: `${url}/transapi`,
        v2: `${url}/v2transapi`,
    },
    COOKIES: "cookies",
    PARAMS: "params"
};