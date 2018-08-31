# VUE移动端上下滑动切换路由加过度效果

> 在App.Vue中

> 使用Vue-touch来监控swiperup swiperdwon事件

> 使用Vue-router连监听当前路由 let sections = this.$route.path.split('/page');

> 获取当前路由页数 let num = Number(sections[sections.length-1]) + 1;

> 设置当前路由url this.$router.push(`page${num}`);

# 过度效果

> 1. data 存一个参数transitionName : " ";

> 2. swiperup(){this.transitionName = 'slideUp';}, swiperdown(){this.transitionName = 'slideDown';}

> 3. Vue transition 过度样式在CSS中 

# 解决手指快速连续滑动，路由跳转BUG

> 思路是在data存一个sssnull:ture 让上下滑动的事件if(sssnull == true){ssnull = false}

> 现在只能滑动一次，然后继续在上下滑动事件中添加定时器1s后ssnull == true

# 然后解决掉这个问题后又出现了return会让整个事件停止

> 解决方法 不使用return 使用if ()else if() 在判断中执行我的结果 ，OK！

# 坑爹的Vue-lazyload

```base
解决图片图片加载慢，提高客户体验决定使用懒加载。

npm install vue-lazyload -D

main.js 引入import VueLazyload from 'vue-lazyload'

main.js Vue.use(VueLazyload, {
  preLoad: 1.3, //loading 高度设置
  error: require('./assets/error.gif'),, //失败图片
  loading: require('./assets/loading.gif'),, //加载中图片
  attempt: 1 //请求次数
})

html中 <img v-lazy=''> 就可以了 然后。。。

loading的宽高居然是100% ,原因是lazyload的loding 和我的 src 用的都是一个 img 标签 所以样式是一样的。。坑爹,而且中文的博客根本就没有提到过这个坑

```
> 然而机智的我还是在英文文档中找到了答案 ( 官方文档确实比博客要强太多了，有些人可能都没弄清楚就往博客里面发：)

> css中 img=[lazy=loading] 可以控制loading的样式
