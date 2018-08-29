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






# 本来是在看微信小程序，准备写一下心得，算是一个总结，但是公司今天下午提出了这个移动端翻页的需求，小程序就先搁置了，弄出了这个需求，放到git上面，供自己翻阅。
