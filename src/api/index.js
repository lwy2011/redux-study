
import {ajax} from './ajax.js'


//请求shop

const host  = '/api';   //这里是package.json里面的跨域设置里的api的指代了。

export const shopData = ()=> ajax(host + '/shop');