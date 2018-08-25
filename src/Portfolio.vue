<template id="">
  <div id="portfolio" class='section'>
    <div class=" center-align">
      <h2>Projects I've Done:</h2>



      <div class="row">

        <div class="col l6 m8 offset-m2 s12 hello  " v-for='project in projects'>
          <div v-bind:class='project.scrollReveal'>
            <h4>{{ project.name }}</h4>
              <h6 class='project-tech'> {{ project.techs }} </h6>
              <p v-if="project.mobile">( See Github repo for more screenshots )</p>
                <a v-bind:href='project.liveLink' target='_blank'
                    v-bind:style="{ 'display': project.mobile ? 'block': '' }">
                    <img 
                        src="https://via.placeholder.com/350x150?text=+"
                        v-bind:data-src=project.image 
                        class='responsive-img lozad lozad-port'
                        v-bind:class="{ 'mobile-project': project.mobile }">
                </a>
                <a v-bind:href='project.githubLink' target='_blank'>Github</a><span> |</span>
                <a v-bind:href='project.liveLink' target='_blank'>Demo</a>
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
            name: "Noobflix",
            image: require('./assets/NoobFlix-min.jpg'),
            githubLink: 'https://github.com/Bigghead/Netflix-Clone-2.0',
            liveLink: 'http://noobflix.club/',
            static: false,
            techs: 'Node.js, Mongoose, Angular',
            scrollReveal: 'port-item1'
          },
           {
            name: "Spotify Clone",
            image: require('./assets/SpotifyClonePlaylist.jpg'),
            githubLink: 'https://github.com/Bigghead/Spotify-Clone',
            liveLink: 'http://discreet-cart.surge.sh/',
            static: false,
            techs: 'Angular (Need Spotify Account To Use)',
            scrollReveal: 'port-item1'
          },
          {
            name: "Chingu Warrior",
            image: require('./assets/Chingu_warrior1.jpg'),
            githubLink: 'https://github.com/chingu-voyage5/Geckos-Team-5',
            liveLink: 'http://chinguwarrior.surge.sh/',
            static: false,
            techs: 'Phaser 3',
            scrollReveal: 'port-item2'
          },
          {
            name: "Stock Market Charting",
            image: require('./assets/StockChart.jpg'),
            githubLink: 'https://github.com/Bigghead/fcc-stock-market',
            liveLink: 'https://cryptic-fjord-45243.herokuapp.com/',
            static: false,
            techs: 'Materialize, Node.js, Mongoose, Highcharts',
            scrollReveal: 'port-item2'
          },
          {
            name: "Book Trading App",
            image: require('./assets/BookTradingApp.jpg'),
            githubLink: 'https://github.com/Bigghead/book-trading-app',
            liveLink: 'https://lychee-pie-43109.herokuapp.com/',
            static: false,
            techs: 'Materialize, Node/Express, Mongoose',
            scrollReveal: 'port-item3'
          },
          {
            name: "Pinterest Clone",
            image: require('./assets/PinterestClone.jpg'),
            githubLink: 'https://github.com/Bigghead/Pinterest-Clone',
            liveLink: 'https://blooming-everglades-99212.herokuapp.com/',
            static: false,
            techs: 'Node/Express, Mongoose, Vue.js',
            scrollReveal: 'port-item4'
          },
          {
            name: "Voting App",
            image: require('./assets/fccVoting.jpg'),
            githubLink: 'https://github.com/Bigghead/fccVotingApp',
            liveLink: 'https://fcc-voting-app-ver2.herokuapp.com/',
            static: false,
            techs: 'Bootstrap, Node.js, Mongoose, Chart.JS',
            scrollReveal: 'port-item4'
          },
          {
            name: "Flashcard App",
            image: require('./assets/flashcards.jpg'),
            githubLink: 'https://github.com/chingu-voyage4/Bears-Team-9',
            liveLink: 'https://shrouded-taiga-52624.herokuapp.com/',
            static: false,
            techs: 'React/Redux, Node, Mongoose',
            scrollReveal: 'port-item3'
          },
          {
            name: "Night-Life Outing",
            image: require('./assets/NightLife.jpg'),
            githubLink: 'https://github.com/Bigghead/fcc-nightlife',
            liveLink: 'https://calm-shelf-79440.herokuapp.com/',
            static: false,
            techs: 'Bootstrap, Node, Mongoose, Yelp API',
            scrollReveal: 'port-item5'
          },
          {
            name: "Cryptex",
            image: require('./assets/toucans.jpg'),
            githubLink: 'https://github.com/chingu-voyage4/Toucans-Team-3',
            liveLink: 'https://chingu-voyage4.github.io/Toucans-Team-3/build/',
            static: true,
            techs: 'HTML, CSS, JavaScript',
            scrollReveal: 'port-item5'
          },
          {
            name: "Momentum Clone",
            image: require('./assets/Momentum.jpg'),
            githubLink: 'https://github.com/Bigghead/Momentum-Clone',
            liveLink: 'http://ten-cloud.surge.sh/',
            static: true,
            techs: 'HTML, CSS, JavaScript',
            scrollReveal: 'port-item6'
          },
          // {
          //   name: "Camper Leaderboard",
          //   image: require('./assets/CamperLeaderboard.png'),
          //   githubLink: 'https://github.com/Bigghead/Camper-Leaderboard',
          //   liveLink: 'http://lavish-lunch.surge.sh/',
          //   static: true,
          //   techs: 'HTML, Bootstrap, React.js',
          //   scrollReveal: 'port-item4'
          // },
          {
            name: "Wikipedia Viewer",
            image: require('./assets/WikiViewer.jpg'),
            githubLink: 'https://github.com/Bigghead/FCC-Vue/tree/master/Wikipedia-viewer',
            liveLink: 'http://cloistered-good-bye.surge.sh/',
            static: true,
            techs: 'HTML, Materialize, Vue.js',
            scrollReveal: 'port-item6'
          },
           {
            name: "Cryptex Shadow",
            image: require('./assets/Mobile/Cryptex_shadow.png'),
            githubLink: 'https://github.com/Bigghead/Cryptex_Shadow',
            // liveLink: 'http://cloistered-good-bye.surge.sh/',
            static: true,
            techs: 'Dart / Flutter',
            scrollReveal: 'port-item6',
            mobile: true
          },
          {
            name: "Spacey Boi",
            image: require('./assets/Mobile/Spacey_boi.png'),
            githubLink: 'https://github.com/Bigghead/Spacey-Boi',
            // liveLink: 'http://cloistered-good-bye.surge.sh/',
            static: true,
            techs: 'Dart / Flutter',
            scrollReveal: 'port-item6',
            mobile: true
          },
        //    {
        //     name: "Calculator",
        //     image: require('./assets/Mobile/Calculator.png'),
        //     githubLink: 'https://github.com/Bigghead/Dart_Flutter_Projects/tree/master/project_1_calculator',
        //     // liveLink: 'http://cloistered-good-bye.surge.sh/',
        //     static: true,
        //     techs: 'Dart / Flutter',
        //     scrollReveal: 'port-item6',
        //     mobile: true
        //   },
        //   {
        //     name: "Weather App",
        //     image: require('./assets/WeatherApp.jpg'),
        //     githubLink: 'https://github.com/Bigghead/FCC-Vue/tree/master/weather-app',
        //     liveLink: 'http://zippy-roof.surge.sh/',
        //     static: true,
        //     techs: 'HTML, Materialize, Vue.js',
        //     scrollReveal: 'port-item7'
        //   }

        ]
      }
    }
  }

</script>

<style media="screen" scoped>

 #portfolio {
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
}
@media only screen and (min-width: 601px) {
  #portfolio {
    width: 90%;
  }
}
@media only screen and (min-width: 993px) {
  #portfolio {
    width: 85%;
  }
}

  img {
    width: 100%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    border: solid 2px grey;
    margin-top: 5%;
  }

  img.mobile-project {
      width: 50%;
  }
  
  .hello {
    width: 490px;
    margin-top: 40px;
  }

 h2{
   font-family: 'Roboto';
 }
  
  .port-item {
    transition: all 0.3 ease;
  }

  .project-tech{
   font-family: 'Roboto';
   font-size: 16px;
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
  }

  a{
    font-size: 16px;
  }
  


  @media(max-width: 500px){
    a{
      font-size: 14px;
    }
  }
</style>