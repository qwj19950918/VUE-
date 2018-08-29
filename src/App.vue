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
      transitionName : '',
      sssnull:true,
    }
  },
  components:{},
  methods:{
    swiperup(){
      let _this = this;
      if(_this.sssnull == true){
        _this.sssnull = false;
        let sections =_this.$route.path.split('/page');
        let num = Number(sections[sections.length-1]) + 1;
        if(num > MAXPAGE){
          // return
          alert('到头了22223a');
        }else if(num <= MAXPAGE){
          _this.transitionName = 'slideUp';
          _this.$router.push(`page${num}`);
        }

        setTimeout(function () {
          _this.sssnull = true;
        },1000);
        console.log(_this.sssnull)
      }
    },
    swiperdown(){
      let _this =this;
      if(_this.sssnull == true){
        _this.sssnull = false;
        let sections =_this.$route.path.split('/page');
        let num = Number(sections[sections.length-1]) - 1;
        if(num < MINPAGE){
          // return
          alert('到头了22223');
        }else if(num >=MINPAGE){
          _this.transitionName = 'slideDown';
          _this.$router.push(`page${num}`);
        }
        setTimeout(function () {
          _this.sssnull = true;
        },1000)
      }
    },
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
