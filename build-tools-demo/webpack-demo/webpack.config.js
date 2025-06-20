const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production'
/**
 * @type {import('webpack').Configuration}
 */
module.exports={
  // 入口文件
  entry:'./src/index.js',

  // 输出配置
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.[contenthash].js', //带哈希值，防止缓存
    clean:true // 每次打包前清除dist目录
  },


  mode:isProduction?'production':'development',
  devtool: isProduction? false:'eval-source-map',  //生产环境不生成source-map
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html', //制定模板
      filename:'index.html', //输出文件名
      inject:'body' //自动把js注入到body标签底部
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/, //匹配所有.css文件
        use:['style-loader','css-loader'] //从右到左执行
      },
      {
        test:/\.(png|jpe?g|gif|svg)$/i,
        type:'asset/resource', 
      }
    ]
  },

  devServer:{
    static:{
      directory:path.join(__dirname,'dist')  //指定静态文件目录
    },
    port:8080, //端口号，可自定义
    open:true, //自动打开浏览器
    hot:true //启用热模块替换(HMR)
  }
}
