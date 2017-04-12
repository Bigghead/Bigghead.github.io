<template id="">
  <div id="portfolio">
    <div class="container center-align">
      <h3>Projects I've Done:</h3>



      <div class="row">

        <!--<div class="col s4">
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
        </div>-->


        <div class="col m6 s12 hello  " v-for='project in projects'>
          <div v-bind:class='project.scrollReveal'>
            <h4>{{ project.name }}</h4>
              <h6 class='project-tech'> {{ project.techs }} </h6>
                  <img v-bind:src=project.image class='responsive-img'>
                <a v-bind:href='project.githubLink' target='_blank'>Github</a><span> |</span>
                <a v-bind:href='project.liveLink' target='_blank'>Live Example</a>
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
            static: false,
            techs: 'Materialize, Node.js, Mongoose, Highcharts',
            scrollReveal: 'port-item1'
          },
          {
            name: "Voting App",
            image: require('./assets/fccVoting.png'),
            githubLink: 'https://github.com/Bigghead/fccVotingApp',
            liveLink: 'https://fcc-voting-app-ver2.herokuapp.com/',
            static: false,
            techs: 'Bootstrap, Node.js, Mongoose, Chart.JS',
            scrollReveal: 'port-item1'
          },
          {
            name: "Night-Life Coordination",
            image: require('./assets/NightLife.png'),
            githubLink: 'https://github.com/Bigghead/fcc-nightlife',
            liveLink: 'https://calm-shelf-79440.herokuapp.com/',
            static: false,
            techs: 'Bootstrap, Node, Mongoose, Yelp API',
            scrollReveal: 'port-item2'
          },
          {
            name: "Book Trading App",
            image: require('./assets/BookTradingApp.png'),
            githubLink: 'https://github.com/Bigghead/book-trading-app',
            liveLink: 'https://lychee-pie-43109.herokuapp.com/',
            static: false,
            techs: 'Materialize, Node/Express, Mongoose',
            scrollReveal: 'port-item2'
          },
          {
            name: "Momentum Clone",
            image: require('./assets/Momentum.png'),
            githubLink: 'https://github.com/Bigghead/Momentum-Clone',
            liveLink: 'http://rawgit.com/Bigghead/Momentum-Clone/master/index.html',
            static: true,
            techs: 'HTML, CSS, JavaScript',
            scrollReveal: 'port-item3'
          },
          {
            name: "Camper Leaderboard",
            image: require('./assets/CamperLeaderboard.png'),
            githubLink: 'https://github.com/Bigghead/Camper-Leaderboard',
            liveLink: 'http://exultant-bit.surge.sh/',
            static: true,
            techs: 'HTML, Bootstrap, React.js',
            scrollReveal: 'port-item3'
          },
          {
            name: "Wikipedia Viewer",
            image: require('./assets/WikiViewer.png'),
            githubLink: 'https://github.com/Bigghead/FCC-Vue/tree/master/Wikipedia-viewer',
            liveLink: 'http://dead-lunchroom.surge.sh/',
            static: true,
            techs: 'HTML, Materialize, Vue.js',
            scrollReveal: 'port-item4'
          },
          {
            name: "Weather App",
            image: require('./assets/WeatherApp.png'),
            githubLink: 'https://github.com/Bigghead/FCC-Vue/tree/master/weather-app',
            liveLink: 'http://http://moldy-position.surge.sh/',
            static: true,
            techs: 'HTML, Materialize, Vue.js',
            scrollReveal: 'port-item4'
          }

        ]
      }
    }
  }

</script>

<style media="screen" scoped>
  img {
    width: 100%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    border: solid 2px grey;
    margin-top: 5%;
    max-height: 275px;
  }
  
  
  
  .hello {
    width: 490px;
  }
  
  .port-item {
    transition: all 0.3 ease;
  }

  .project-tech{
   font-family: Raleway;
  }
</style>