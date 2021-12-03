export const helpHttp = () => {

    const custonFetch = (edpoint, options) => {
        const defaultHeader = {
            accept: 'application/json'
        }
        const controller = new AbortController();
        options.signal = controller.signal
        options.method = options.method || 'GET'
        options.headers = options.headers ? {...options.headers, ...defaultHeader} : defaultHeader
        options.body = JSON.stringify(options.body) || false

        if(!options.body) delete options.body

        //console.log(options)
        setTimeout(() => controller.abort(), 2000);

        return fetch(edpoint, options)
                    .then(res => res.ok
                        ? res.json()
                        : Promise.reject({
                            error: true,
                            status: res.status || 499,
                            statusText: res.statusText || "Ocurrio un Error"
                        }))
                    .catch(err => err)
    }

    const get = (url, options = {}) => custonFetch(url, options)

    const post = (url, options = {}) => {
        options.method = "POST"
        return custonFetch(url, options)
    }

    const put = (url, options = {}) => {
        options.method = "PUT"
        return custonFetch(url, options)
    }

    const del = (url, options = {}) => {
        options.method = "DELETE"
        return custonFetch(url, options)
    }

    return {
        get,
        post,
        put,
        del
    }
}