class HttpRequest {

    static get(url, params = {}) {
        
        return HttpRequest.request('get', url, params)
        
    }

    static post(url, params = {}) {
        
        return HttpRequest.request('post', url, params)
        
    }

    static put(url, params = {}) {
        
        return HttpRequest.request('put', url, params)
        
    }

    static delete(url, params = {}) {
        
        return HttpRequest.request('delete', url, params)
        
    }
    
    static request(method, url, params = {}) {

        return new Promise((resolve, reject) => {
            const ajax = new XMLHttpRequest();
            ajax.open(method.toUpperCase(), url, params);
            ajax.onload = event => {

                let obj = {};

                try {

                    obj = JSON.parse(ajax.responseText);

                } catch(e) {

                    console.log(e)
                    reject(e)

                }

                resolve(obj);

            }
                
            ajax.send();
        })

    }

}