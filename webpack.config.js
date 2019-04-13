 const webpack = require('webpack');
    const path = require('path');
    module.exports = {
        entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
        output: {
            path: __dirname + "/dist",//打包后的文件存放的地方
            filename: "bundle.js"//打包后输出文件的文件名
        },
        module:{},
    
        plugins:[],
    
        devServer:{
                contentBase:path.resolve(__dirname,'dist'), //设置基本目录结构,本地服务器所加载的页面所在的目录
    host:'localhost',//服务器的IP地址，可以使用IP也可以使用localhost
    inline: true,//实时刷新
    compress:true,//服务端压缩是否开启，一般设置为开启，
    historyApiFallback: true,//不跳转
    port:1818 //配置服务端口号，建议不使用80，很容易被占用，这里使用了1818
        }
    };
 