import axios from "axios";

export const ajax =  (url='/',params={},type='GET')=>{
    let promise  ;
    //返回promise对象
    return new Promise(
        (resolve, reject)=>{
            if('GET' === type.toUpperCase()){
                //拼接字符串
                const paramsStr =
                    Object.keys(params).reduce(
                        (a,b) => b ? a +  '&' + b + '='+ params[b] :'' , ''
                    );
                paramsStr && paramsStr.substr(0,1)
                url += paramsStr ? '?'+paramsStr : ''
                // debugger;
                promise = axios.get(url)
            }else if('POST' === type.toUpperCase()){
                promise = axios.post(
                    url,params
                )
            }
            //结果
            promise.then(
                (res)=>{
                    resolve(res.data)
                }
            ).catch(
                err=>reject(err)
            )
        }
    )
}