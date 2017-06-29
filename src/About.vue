<template id="">

  <div>
    <div id='about-me' class="parallax-container">
      <div class="parallax">
        <!--<img src="https://images.unsplash.com/photo-1422226256160-9b266e308ea6?dpr=1&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=">-->
        <img src='./assets/SecondPage.jpg' alt="">
      </div>

      <div class="row">



        <div class="col m8 offset-m2 s12 ">
          <h1 class='center-align about-text'><em>About Me</em></h1>
          <div class="row">
            <div class="col s12">
              <ul class="tabs tabs-fixed-width">
                <li class="tab col s3"><a href="#test1">Who Am I??</a></li>
                <li class="tab col s3"><a href="#test2">Skills</a></li>
                <li class="tab col s3"><a class="" href="#test3">Hobbies</a></li>
              </ul>

              <div id="test1" class="col s12  about-mes color2  animated fadeInLeft">
                <br>
                <span>I'm an internet/community taught aspiring web developer who likes making cool things with JavaScript</span>
                <br>
                <br>
                <span>I specialize in using the MEAN stack to build full stack applications. Check out some of my projects below</span>

              </div>
              <div id="test2" class="col s12  about-mes color2  animated fadeInUp">
                <br>
                <span> I work with HTML, CSS, JavaScript (jQuery ,Vue.js, minor React.js) and have also used JavaScript on the backend with Node.js/Express/Mongoose</span>
                <br>
                <br>
                <span>Currently in love with Angular</span>
              </div>
              <div id="test3" class="col s12  about-mes color2  animated fadeInRight">
                <br>
                <span>Going to random meetups in my area</span>
                <br>
                <br>
                <span>Watching random tutorials on YouTube</span>
                <br>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>



    <port-page></port-page>
    <contact-me></contact-me>
  </div>
</template>

<script type="text/javascript">
  import Portfolio from './Portfolio.vue';
  import ContactMe from './ContactMe.vue';
  export default {
    components: {
      'port-page': Portfolio,
      'contact-me': ContactMe
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
  .parallax-container {
    height: 600px;
  }
  
  .page2 {
    background-color: black;
    background: url("https://images.unsplash.com/photo-1422226256160-9b266e308ea6?dpr=1&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=");
    background-size: cover;
    height: 800px;
  }
  
  .profilePic {
    margin-top: 20%;
  }

  .about-text{
    font-family: 'Secular One';
  }
  
  h1 {
    margin-top: 50px!important;
    color: white;
  }
  
  img {
    display: inline;
  }

  .tabs .tab a.active {
  color: #663399;
}

.tabs .tab a:hover {
  color: #DDA0DD;
}

.tabs .tab a {
  color: #663399;
}
  
  .color2 {
    background: rgba(0, 0, 0, 0.7) !important;
    /*background: rgba(69,104,220, 0.5) !important;*/
    /* fallback for old browsers */
    /*background: -webkit-linear-gradient(to right, rgba(176,106,179, .5), rgba(69,104,220, 0.5));*/
    /* Chrome 10-25, Safari 5.1-6 */
    /*background: linear-gradient(to right, rgba(176,106,179, .5), rgba(69,104,220, 0.5));*/
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  
  .color3 {
    background: rgba(241, 55, 55, 0.6)!important;
    /* fallback for old browsers */
    /*background: -webkit-linear-gradient(to left, rgba(49,71,85, 0.5), rgba(38,160,218, 0.5));*/
    /* Chrome 10-25, Safari 5.1-6 */
    /*background: linear-gradient(to left, rgba(49,71,85, 0.5), rgba(38,160,218, 0.5));*/
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  .color1 {
    background: rgba(0, 148, 131, 0.5) !important;
    /* fallback for old browsers */
    /*background: -webkit-linear-gradient(to left, #348F50, #56B4D3);*/
    /* Chrome 10-25, Safari 5.1-6 */
    /*background: linear-gradient(to left, #348F50, #56B4D3);*/
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  
  .carousel {
    height: 250px;
  }
  
  .about-mes {
    font-family: Raleway;
    color: white;
    display: block;
    padding: 0 20px !important;
    /*background-color: transparent !important;*/
    word-wrap: break-all;
    height: 250px;
    width: 100%;
    font-size: 24px;
  }
  
  .contact-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .fa-fonts{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    margin:auto;
  }

  .fa{
    color: white;
    transition: 0.33s all ease-in;
  }

  .fa:hover{
    color: steelblue;
  }
</style>