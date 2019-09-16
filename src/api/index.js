
import {ajax} from './ajax.js'


//请求shop

const host  = 'http://localhost:8080';

export const shopData = ()=> ajax(host + '/api/shop',{name:'da',age:12});