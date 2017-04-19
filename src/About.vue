<template id="">

  <div>
    <div id='about-me' class="parallax-container">
      <div class="parallax">
        <img src="https://images.unsplash.com/photo-1422226256160-9b266e308ea6?dpr=1&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=">
      </div>

      <div class="row">



        <div class="col m8 offset-m2 s12 ">
          <h1 class='center-align'><em>About Me</em></h1>
          <div class="row">
            <div class="col s12">
              <ul class="tabs ">
                <li class="tab col s3"><a href="#test1">Who Am I??</a></li>
                <li class="tab col s3"><a href="#test2">Skills</a></li>
                <li class="tab col s3"><a class="" href="#test3">Hobbies</a></li>
              </ul>

              <div id="test1" class="col s12  about-mes color1 carousel-item animated fadeInLeft">
                <br>
                <span>I'm an internet/community taught aspiring web developer that likes making cool things with JavaScript</span>
                <br>

              </div>
              <div id="test2" class="col s12  about-mes color2 carousel-item animated fadeInDown">
                <br>
                <span> I work with HTML, CSS, JavaScript (jQuery ,Vue.js) and have also used JavaScript on the backend with Node.js/Express/Mongoose</span>
                <br>
                <br>
                <span>Currently learning about React.js</span>
              </div>
              <div id="test3" class="col s12  about-mes color3 carousel-item animated fadeInRight">
                <br>
                <span>Going to random meetups in my area</span>
                <br>
                <br>
                <span>JS tutorials on YouTube</span>
                <br>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>



    <port-page></port-page>



    <div class="parallax-container contact-icons">
      <div class="parallax">
        <img src="https://images.unsplash.com/photo-1482398650355-d4c6462afa0e?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=">
      </div>
      <div class="fa-fonts">
      <a href="">
        <i class="fa fa-github-alt fa-5x" aria-hidden="true"></i>
      </a>
       <a href="">
        <i class="fa-contact fa fa-codepen fa-5x" aria-hidden="true"></i>
      </a>
      <a href="mailto:shavenchew@yahoo.com">
        <i class="fa fa-envelope fa-5x" aria-hidden="true"></i>
      </a>

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
  
  h1 {
    margin-top: 50px!important;
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
    font-family: Raleway;
    color: white;
    display: block;
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
    color: steelblue;
    transition: 0.33s all ease-in;
  }

  .fa:hover{
    color: white;
  }
</style>