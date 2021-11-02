export const helpHttp = () => {

    const customFetch = (edpoint, options) => {
        const defaultHeader = {
            accept: 'application/json'
        }
        const controler = new AbortController();
        options.signal = controler.signal;
        options.method = options.method || 'GET';
        options.headers = options.headers ? {...options.headers, ...defaultHeader} : defaultHeader;
        options.body = JSON.stringify(options.body) || false;

        console.log(options);
        if(!options.body) delete options.body;

        setTimeout(() => controler.abort(), 4000);

        return fetch(edpoint, options)
            .then(res => res.ok ? res.json() : Promise.reject({errror: true, status: res.status || 400, statusText: res.statusText || 'Ocurrio un error'}))
            .catch(err => err);
    }

    const get = (url, options = {}) => customFetch(url, options)

    const post = (url, options = {}) => {
        options.method = 'POST'
        return customFetch(url, options)
    }

    const put = (url, options = {}) => {
        options.method = 'PUT'
        return customFetch(url, options)
    }

    const del = (url, options = {}) => {
        options.method = 'DELETE'
        return customFetch(url, options)
    }


    return {get, post, put, del}
}