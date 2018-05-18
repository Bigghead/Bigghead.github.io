<template id="">
  <div class="pageone center-align">
    <div class="wrapper ">
      <div class='box '>
        <h1>Shav D. Parta</h1>


        <div class='btn-list'>
          <div class="row">
              <a class='col s6 offset-s3 waves-effect waves-light btn indigo lighten-1' target='_blank' href='https://github.com/Bigghead'>Github</a>
            
              <!-- <a class="col s5 offset-s1  waves-effect waves-light btn indigo lighten-1" target='_blank' href='https://codepen.io/Bigghead/pens/public/'>Codepen</a> -->
            
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/javascript">

</script>

<style media="screen" scoped>
  .pageone {
    /*background: url("https://images.unsplash.com/photo-1475198751283-d3f5d231c7f4?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop=");*/
    background: url('./assets/firstPage.jpg');
    background-size: cover;
    height: 100vh;
    background-attachment: fixed;
    background-position: fixed;
    position: relative;
    transition: height 999999s;
  }
  
  h1 {
    font-family: 'Secular One';
  }
  
  .wrapper {
    width: 100%;
    height: 100%;
    visibility: hidden;
  }
  
  .show {
    visibility: visible;
  }
  
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    color: white;
  }

  
  /*@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    .pageone{
      height: 770px;
    }
}*/
</style>