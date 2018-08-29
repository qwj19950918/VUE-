<template>
  <div class="hello">
    <img class="PageBg" src="../assets/page1.png" alt="无卡收款">
    <span class="PageSpan">
      <img src="../assets/pagebutton.png" alt="按钮">
    </span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      transitionName: 'slideUp'
    }
  },
  methods:{

  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 100%;
  width: auto;
  position: relative;
}
.hello .PageBg{
  display: block;
  width: 100%;
  height: 100%;
}
.hello .PageSpan{
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
}
.hello .PageSpan img{
  display: block;
  width: 100%;
  height: 100%;
}

</style>
