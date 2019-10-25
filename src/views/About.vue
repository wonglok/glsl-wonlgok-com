<template>
  <div class="full greenbg relative overflow-hidden">
    <TopNav mode="light"></TopNav>
    <div class="fuller overflow-y-scroll scrolling-touch flex flex-col lg:flex-row p-8 max-w-6xl mx-auto">
      <div class="mx-6 mb-8">
        <img src="../assets/about/love.svg" alt="">
      </div>

      <div class="">
        <div class="mb-8">
          <div class="font-serif title mx-auto">
            <img src="../assets/about/aboutus.svg" class="lg:h-24" alt="">
          </div>
        </div>
        <div class="mb-8 lg:ml-20 lg:mt-20 lg:mb-20">
          <div class="font-serif lg:text-4xl lg:mb-5 title mx-auto">
            Making Happiness Popular
          </div>
          <div class="font-mono words lg:text-lg mx-auto">
            Love enables Invetions.
            <br />
            Kindness is the encouragement
            <br />
            Be Happy again.
          </div>
        </div>
        <div class="mb-8 lg:ml-20 lg:mb-20">
          <div class="font-serif lg:text-4xl lg:mb-5 title mx-auto">
            Inventions are playful.
          </div>
          <div class="font-mono words lg:text-lg mx-auto">
            Making Happiness Popular
            <br />
            via Tech and Kindness
          </div>
        </div>
      </div>

      <div class="hidden lg:block absolute msg">
        <img src="../assets/about/madeby.svg" alt="Made by Lok With Love">
      </div>

      <div class="hidden lg:flex absolute aboutus-mini justify-end">
        <img @click="$router.push('/')" class="ml-12 cursor-pointer" src="../assets/about/home-mini.svg" alt="Home">
        <!-- <img class="ml-12" src="../assets/about/dash-mini.svg" alt="Dash"> -->
        <!-- <img @click="$router.push('/about')" class="ml-12 cursor-pointer" src="../assets/about/aboutus-mini.svg" alt="Made by Lok With Love"> -->
      </div>

      <div class="hidden lg:flex absolute flex-col social-mini justify-end">
        <img class="mb-8 cursor-pointer" src="../assets/about/fb.svg" alt="Home">
        <img class="mb-8 cursor-pointer" src="../assets/about/twitter.svg" alt="Dash">
        <img class="mb-8 cursor-pointer" src="../assets/about/ig.svg" alt="Made by Lok With Love">
      </div>

    </div>

    <div>

    </div>
  </div>
</template>

<script>
export default {
  components: {
    TopNav: require('../uis/TopNav.vue').default
  }
}
</script>

<style lang="postcss" scoped>
.greenbg{
  color: white;
  background-color: #2C4340;
}
.title{
  color: #FFFFFF;
  letter-spacing: 0.46px;
  line-height: 38px;
}
.words{
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 30px;
}

.msg{
  bottom: 40px;
  left: 40px;
}

.aboutus-mini{
  bottom: 40px;
  right: 40px;
  width: 400px;
}

.social-mini{
  top: calc((100vh - 400px) / 2 - 100px);
  right: 40px;
  height: 400px;
}
</style>
