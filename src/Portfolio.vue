<template id="" >
  <div class="" >
    <div class="container center-align">
      <h3>Projects I've Done:</h3>

      <button type="button" name="button" @click="run"></button>

      <div class="row">
          <div class="col m6 s12">
            <div class='port-item'>
              <h5>Momentum Clone</h5>
              <img src='./assets/Momentum.png'>
              <a href='https://github.com/Bigghead/Momentum-Clone'>Github</a><span> |</span>
              <a href='#a'>Live Example</a>


            </div>
          </div>

          <div class="col m6 s12">
            <div class='port-item'>
              <h5>Voting App</h5>
              <img src='./assets/fccVoting.png'>
              <a href='https://github.com/Bigghead/Momentum-Clone'>Github</a><span> |</span>
              <a href='#a'>Live Example</a>
            </div>
          </div>

          <div class="col m6 s12">
            <div class='port-item'>
              <h5>Night Life Coordination App</h5>
              <img src='./assets/NightLife.png'>
              <a href='https://github.com/Bigghead/Momentum-Clone'>Github</a><span> |</span>
              <a href='#a'>Live Example</a>
            </div>
          </div>

          <div class="col m6 s12">
            <div class='port-item'>
              <h5>Stock Market Charting</h5>
              <img src='./assets/StockChart.png'>
              <a href='https://github.com/Bigghead/Momentum-Clone'>Github</a><span> |</span>
              <a href='#a'>Live Example</a>
            </div>
          </div>

          <div class="col m6 s12">
            <div class='port-item'>
              <h5>Watson Tone Analyzer</h5>
              <img src='./assets/Tone-Analyzer.png'>
              <a href='https://github.com/Bigghead/Momentum-Clone'>Github</a><span> |</span>
              <a href='#a'>Live Example</a>
            </div>
          </div>
    </div>



  </div>

</template>

<script type="text/javascript">
export default{
  data: function(){
    return {
      show: true,
    }
  },
  methods: {
    run: function(){
      window.sr = ScrollReveal({reset: true});
      console.log(window.top);
      sr.reveal('.port-item', { duration: 1000 });
    }
  }
}
</script>

<style media="screen">

img{
    width: 100%;
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
    border: solid 2px grey;
  }

.port-item{
  transition: all 0.3 ease;
}
</style>
