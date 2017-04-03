<template id="">

    <div>
        <div class="parallax-container">
            <div class="parallax">
                <img src="https://images.unsplash.com/photo-1422226256160-9b266e308ea6?dpr=1&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=">
            </div>

            <div class="row">

                <div class="col m3 s4 offset-s4 center-align">
                    <img class='responsive-img circle profilePic' src="https://avatars2.githubusercontent.com/u/19599037?v=3&u=edf107b06b4bbb2de355e46bbacc09e2798ad486&s=400"
                        alt="" />
                </div>

                <div class="col m9 s12 center-align">
                    <h1><em>About Me</em></h1>
                    <div class="row">
                        <div class="col s12">
                            <ul class="tabs">
                                <li class="tab col s3"><a href="#test1">Who Am I??</a></li>
                                <li class="tab col s3"><a href="#test2">Skills</a></li>
                                <li class="tab col s3"><a class="" href="#test3">Hobbies</a></li>
                            </ul>
                        </div>
                        <div class="carousel " >
                            <div id="test1" class="col s12 carousel-item animated fadeInLeft">Skills</div>
                            <div id="test2" class="col s12 carousel-item animated fadeInDown">Skills</div>
                            <div id="test3" class="col s12 carousel-item animated fadeInRight">Hobbies</div>
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

<style media="screen" scoped>
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
    
    .tabs {
        background-color: transparent;
    }
    



</style>