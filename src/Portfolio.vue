<template id="">
  <div id="main">
    <div class="container center-align">
      <h3>Projects I've Done:</h3>



      <div class="row">

        <div class="col s4">
          <button class='waves-effect waves-light btn-large red'>
            All Projects
          </button>
        </div>

        <div class="col s4">
          <button class='waves-effect waves-light btn-large red'>
            Static Projects
          </button>
        </div>

        <div class="col s4">
          <button class='waves-effect waves-light btn-large red'>
            Node.js Projects
          </button>
        </div>


        <div class="col m6 s12" v-for='project in projects'>
          <div class='port-item1'>
            <h5>{{ project.name }}</h5>
            <img v-bind:src=project.image>
            <a v-bind:href='project.githubLink'>Github</a><span> |</span>
            <a v-bind:href='project.liveLink'>Live Example</a>
          </div>
        </div>

      </div>
    </div>



  </div>

</template>

<script type="text/javascript">
  export default {
    data: function () {
      return {
        show: true,
        projects: [

          {
            name: "Stock Market Charting",
            image: require('./assets/StockChart.png'),
            githubLink: 'https://github.com/Bigghead/fcc-stock-market',
            liveLink: 'https://cryptic-fjord-45243.herokuapp.com/',
            static: false
          },
          {
            name: "Voting App",
            image: require('./assets/fccVoting.png'),
            githubLink: 'https://github.com/Bigghead/fccVotingApp',
            liveLink: 'https://fcc-voting-app-ver2.herokuapp.com/',
            static: false
          },
          {
            name: "Night-Life Coordination",
            image: require('./assets/NightLife.png'),
            githubLink: 'https://github.com/Bigghead/fcc-nightlife',
            liveLink: 'https://calm-shelf-79440.herokuapp.com/',
            static: false
          },
          {
            name: "Book Trading App",
            image: require('./assets/BookTradingApp.png'),
            githubLink: 'https://github.com/Bigghead/book-trading-app',
            liveLink: 'https://lychee-pie-43109.herokuapp.com/',            
            static: true
          },
          {
            name: "Momentum Clone",
            image: require('./assets/Momentum.png'),
            githubLink: 'https://github.com/Bigghead/Momentum-Clone',
            liveLink: 'http://rawgit.com/Bigghead/Momentum-Clone/master/index.html',            
            static: true
          },
          {
            name: "Camper Leaderboard",
            image: require('./assets/CamperLeaderboard.png'),
            githubLink: 'https://github.com/Bigghead/Camper-Leaderboard',
            liveLink: 'http://exultant-bit.surge.sh/',            
            static: true
          }
          
        ]
      }
    }
  }

</script>

<style media="screen">
  img {
    width: 100%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    border: solid 2px grey;
  }
  
  .port-item {
    transition: all 0.3 ease;
  }
</style>