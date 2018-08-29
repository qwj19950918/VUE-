<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <v-touch @swipeup="swiperup" @swipedown="swiperdown" class="wrapper">
      <transition :name="transitionName">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </v-touch>
  </div>
</template>

<script>
  const MAXPAGE = 4;
  const MINPAGE =1;
export default {
  name: 'App',
  data(){
    return {
      transitionName : ''
    }
  },
  components:{},
  methods:{
    swiperup(){
      let sections =this.$route.path.split('/page');
      let num = Number(sections[sections.length-1]) + 1;
      if(num > MAXPAGE){
        return alert('到头了22223')
      }
      this.transitionName = 'slideUp';
      this.$router.push(`page${num}`);
      console.log(sections)
      console.log(num,'是这是')
    },
    swiperdown(){
      let sections =this.$route.path.split('/page');
      let num = Number(sections[sections.length-1]) - 1;
      if(num < MINPAGE){
        return alert('到头了22223')
      }
      this.transitionName = 'slideDown';
      this.$router.push(`page${num}`);
      console.log(num,'是这是2')
    }
  },
  created(){
    // this.swiperup()
  }
}
</script>

<style>
  html{
    height: 100%;
  }
  body{
    margin: 0!important;
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
  .slideUp-enter{
    transform: translate3d(0,0,0);
  }
  .slideUp-enter-to{
    transform: translate3d(0,-100%,0);
  }
  .slideUp-enter-active{
    transition: 1s;
  }
  .slideUp-leave{
    transform: translate3d(0,0,0);
  }
  .slideUp-leave-to{
    transform: translate3d(0,-100%,0);
  }
  .slideUp-leave-active{
    transition: 1s
  }
  .slideDown-leave{
    transform: translate3d(0,0,0);
  }
  .slideDown-leave-to{
    transform: translate3d(0,100%,0);
  }
  .slideDown-leave-active{
    transition: 1s;
  }
  .slideDown-enter{
    transform: translate3d(0,-200%,0);
  }
  .slideDown-enter-to{
    transform: translate3d(0,-100%,0);
  }
  .slideDown-enter-active{
    transition: 1s;
  }
</style>
