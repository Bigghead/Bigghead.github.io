<template>
  <div>
    <app-nav></app-nav>
    <first-page></first-page>
    <about-page></about-page>
  </div>
</template>

<script>
import Header from './Header.vue'
import FirstPage from './FirstPage.vue'
import About from './About.vue'
import Portfolio from './Portfolio.vue'
import TestAbout from './Test.vue';
export default {
  components:{
    'app-nav' : Header,
    'first-page': FirstPage,
    'about-page': About,
    'port-page': Portfolio
  }
}
</script>

<style>
body{
      font-family: 'Roboto';
      background-color: #f9ebe0;
      /*background-color: rgba(255, 255, 255, 0.3);*/

}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  font-family: 'Avenir';
}
p{
  color:#00FFFF;
 font-size:2em;
}*/
</style>