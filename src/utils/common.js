export default {
    /**
     * URL参数转换函数
     * @param {String} url 目标url
     * @param {String} param 需要替换的参数名称
     * @param {String} paramVal 替换后的参数的值
     * @returns {String} 参数替换后的url
     */
    updateURLParameter: function (url, param, paramVal) {
        if (url && param && paramVal) {
            let newAdditionalURL = ""
            let tempArray = url.split("?")
            let baseURL = tempArray[0]
            let additionalURL = tempArray[1]
            let temp = ""
            if (additionalURL) {
                tempArray = additionalURL.split("&")
                for (let i = 0; i < tempArray.length; i++) {
                    if (tempArray[i].split('=')[0] != param) {
                        newAdditionalURL += temp + tempArray[i]
                        temp = "&"
                    }
                }
            }
            return `${baseURL}?${newAdditionalURL}${temp}${param}=${paramVal}`
        }
        return url
    }
}
