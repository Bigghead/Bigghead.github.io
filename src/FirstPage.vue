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
    export default {
        mounted() {
            const wrapper = this.$el.querySelector('.wrapper');
            wrapper.classList.add('show');
            wrapper.classList.add('bounce-in-top');
        }
    }
</script>

<style media="screen" scoped>
  .pageone {
    /*background: url("https://images.unsplash.com/photo-1475198751283-d3f5d231c7f4?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop=");*/
    /* background: url('./assets/firstPage.jpg');
    background-size: cover; */
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23180d1c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23261431' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23351947' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23451e5e' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23552277' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    position: relative;
    transition: height 999999s;
    height: 100vh;
  }
  
  h1 {
    font-family: 'Roboto';
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