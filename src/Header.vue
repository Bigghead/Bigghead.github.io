<template id="">

  <nav>
    <div class="nav-wrapper deep-purple lighten-1">
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <div class="brand-logo center">

        <ul id="nav-mobile" class="center-align hide-on-small-only top-nav">
          <li><a href="#about-me" class='main-nav-tab'>About</a></li>
          <li><a href="#portfolio" class='main-nav-tab'>Portfolio</a></li>
          <li><a href="#contact-me" class='main-nav-tab'>Contact Me</a></li>
        </ul>
      </div>
         <ul class="side-nav" id="mobile-demo">
          <li><a href="#about-me">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact-me">Contact Me</a></li>
        </ul>

    </div>
  </nav>
</template>

<script type="text/javascript">

</script>

<style scoped>

  nav{
    height: 50px;
    line-height: 50px;
  }

  .main-nav-tab{
    font-size: 24px;
    /*font-family: 'Secular One';*/
  }
  .top-nav{
    visibility: hidden;
  }

  .show{
    visibility: visible;
  }
</style>