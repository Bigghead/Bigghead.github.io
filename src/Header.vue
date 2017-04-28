<template id="">

  <nav>
    <div class="nav-wrapper deep-purple lighten-1">
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <div class="brand-logo center">

        <ul id="nav-mobile" class="center-align hide-on-small-only top-nav">
          <li><a href="#a">Home</a></li>
          <li><a href="#about-me">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact-me">Contact Me</a></li>
        </ul>
      </div>
         <ul class="side-nav" id="mobile-demo">
          <li><a href="#a">Home</a></li>
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
  .top-nav{
    visibility: hidden;
  }

  .show{
    visibility: visible;
  }
</style>