<template id="">

  <div>
    <div id='about-me' class="parallax-container">
      

      <div class="row">



        <div class="col m8 offset-m2 s12 about-box">
          <h1 class='center-align about-text'><em>About Me</em></h1>
          <div class="row">
            <div class="col s12">
              <ul class="tabs tabs-fixed-width">
                <li class="tab col s3"><a href="#test1">Who Am I??</a></li>
                <li class="tab col s3"><a href="#test2">Skills</a></li>
                <li class="tab col s3"><a class="" href="#test3">Hobbies</a></li>
              </ul>

              <div id="test1" class="col s12  about-mes color2 fade-in-left">
                <br>
                <span>Hi, I'm Shav!</span>
                <br><br>
                <span>I'm an internet/community taught web developer who likes making cool things with JavaScript. 
                    I've developed programs on my own, and have also built group projects with remote international teams.</span>
                <br><br>
                <span>I specialize in using the MEAN or MERN stack to build web applications and Google's magnificent Flutter to build hybrid mobile apps. 
                    Check out some of my projects below.</span>
                <br>
                
              </div>
              <div id="test2" class="col s12  about-mes color2 fade-in-top">
                <br>
                <span> I work with HTML, CSS, JavaScript( ES6 ), and have also used JavaScript on the backend with Node.js/Express/Mongoose. 
                    Extremely comfortable with modern JS frameworks like Angular and React and their toolchain, but currently in love with Vanilla JS.
                </span>
                <br><br>
                <span>Also playing with Dart/Flutter for mobile dev.</span>
                
              </div>
              <div id="test3" class="col s12  about-mes color2 fade-in-right">
                <br>
                <span> - Hanging out around cars and/or dogs or anything involving eating food</span>
                <br>
                <br>
                <span> - Browsing code, scouring Github for project ideas ( Learning mobile dev at the present time )</span>
                <br><br>
                <span> - Prematurely optimizing my applications for speed</span><br>
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
        message: 'Parallax',
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

  h1 {
    /* margin-top: 50px!important; */
    color: white;
  }
  
  img {
    display: inline;
  }

  #about-me {
      background-color: #330000;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23D18'/%3E%3Cstop offset='1' stop-color='%23330000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FA3' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FA3' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
      background-attachment: fixed;
      background-size: cover;
      /* background-position: center; */
  }
  .parallax-container {
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  
  
  .about-box{
      /* margin-top: 5%; */
  }

  .about-text {
    font-family: 'Roboto';
    margin-top: 3rem !important;
  }
  
  .tabs .tab a.active {
  color: #663399;
}

.tabs .tab a:hover {
  color: #DDA0DD;
}

.tabs .tab a {
  color: #663399;
  font-size: 16px;
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
  
  .about-mes {
    font-family: 'Roboto';
    color: white;
    display: block;
    padding: 0 20px !important;
    /*background-color: transparent !important;*/
    word-wrap: break-all;
    height: 25rem;
    width: 100%;
    font-size: 24px;
    margin-bottom: 20px;
    overflow: auto;
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

   @media(max-width: 600px){
    .tabs .tab a{
      font-size: 14px;
    }
  }

  @media(max-width: 500px){
    .tabs .tab a{
      font-size: 12px;
    }
  }
</style>