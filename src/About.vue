<template id="">

  <div>
    <div class="parallax-container">
      <div class="parallax">
        <img src="https://images.unsplash.com/photo-1422226256160-9b266e308ea6?dpr=1&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=">
      </div>

      <div class="row">

        <div class="col m3 s4 offset-s4 center-align">
          <img class='responsive-img hide-on-small-only circle profilePic' src="https://avatars2.githubusercontent.com/u/19599037?v=3&u=edf107b06b4bbb2de355e46bbacc09e2798ad486&s=400"
            alt="" />
        </div>

        <div class="col m9 s12 ">
          <h1 class='center-align'><em>About Me</em></h1>
          <div class="row">
            <div class="col s12">
              <ul class="tabs ">
                <li class="tab col s3"><a href="#test1">Who Am I??</a></li>
                <li class="tab col s3"><a href="#test2">Skills</a></li>
                <li class="tab col s3"><a class="" href="#test3">Hobbies</a></li>
              </ul>

              <div id="test1" class="col s12 color1 about-mes carousel-item animated fadeInLeft">
                <span>Just a noob learning about things</span>
                <br>

              </div>
              <div id="test2" class="col s12 color2 about-mes carousel-item animated fadeInDown">Skills:
                <br>
                <span>Super Noob, but I like working with JavaScript to make cool things</span>
                <br>
                <span> I work with HTML, CSS, JavaScript (jQuery, ES6 & React/Vue.js) and Node.js.</span>
                <br>
                <span>Currently learning about React.js, but I've had experience with using Vue.js in my projects</span>
              </div>
              <div id="test3" class="col s12 color3 about-mes carousel-item animated fadeInRight">Hobbies:
                <br>
                <span>I like taking naps, and watching Youtube vids about food</span>
                <br>
                <span>Food</span>
                <br>
                <span>I want to play around with Phaser.io</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>



    <port-page></port-page>

    <div class="section black">
      <div class="row container grey-text">
        <h2 class="header " v-on:click='changeMessage'>{{ message }} + Stuff</h2>
        <p class=" text-lighten-1">Too much parallax?</p>
        <p class=" text-lighten-1">Definitely too much parallax. Looks very cool though</p>
      </div>
    </div>

    <div class="parallax-container">
      <div class="parallax">
        <img src="https://images.unsplash.com/photo-1482398650355-d4c6462afa0e?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=">
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Portfolio from './Portfolio.vue'
  export default {
    components: {
      'port-page': Portfolio
    },
    data: function () {
      return {
        message: 'Parallax'
      }
    },
    methods: {
      changeMessage: function () {
        this.message = 'Too Much'
      }
    }
  }

</script>

<style media="screen">
  .page2 {
    background-color: black;
    background: url("https://images.unsplash.com/photo-1422226256160-9b266e308ea6?dpr=1&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=");
    background-size: cover;
    height: 800px;
  }
  
  .profilePic {
    margin-top: 20%;
  }
  
  h1 {
    margin-top: 0;
    color: white;
  }
  
  img {
    display: inline;
  }
  
  .color2 {
    background: #4568DC;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #B06AB3, #4568DC);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #B06AB3, #4568DC);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  .color3 {
    background: #314755;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #314755, #26a0da);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #314755, #26a0da);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  .color1 {
    background: #348F50;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #348F50, #56B4D3);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #348F50, #56B4D3);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  .carousel {
    height: 250px;
  }
  
  .about-mes {
    display: block;
    word-wrap: break-all;
    height: 250px;
    width: 100%;
    font-size: 24px;
  }
</style>