const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy(
            '/api',
            {
                target : 'http://localhost:8080',
                changeOrigin :true
            }
        )
    )
};
//其实可以在package.json里面直接配置，但是必须要把react-scripts的版本降低。高版本的有冲突的！！！
//https://blog.csdn.net/xiaoyao9524/article/details/85236550