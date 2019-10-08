
<template>
  <div class="full absolute top-0 left-0 herobg bg-no-repeat bg-cover bg-center">

    <TopNav mode="light"></TopNav>

    <div class="absolute vela-pos">
      <img src="../assets/home/vela.svg" alt="">
      <div class="desc font-mono">
        Why is this little kitty sleeping?
        <br />She’s had a great time coding.
        <br />happily ever after.
      </div>
    </div>

    <div class="absolute arrow-down"  @click="$router.push('/about')">
      <div class=" flex flex-col justify-center items-center">
        <div class="love-and-more font-serif cursor-pointer">
          LOVE AND MORE
        </div>
        <img  src="../assets/icons/circle.svg" class="mt-4  cursor-pointer flowdown" alt="">
      </div>
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
.herobg{
  background-position: 50% 95%;
  background-image: url('../assets/img/kitty-sleep.jpg');
}

.vela-pos{
  position: absolute;
  top: calc(33%);
  width: 100%;
}

.vela-pos img{
  width: 90vmin;
  margin: auto;
}

@screen lg{
  .vela-pos{
    top: 25%;
  }
}

.desc{
  padding: 0px 12px;
  font-size: 17px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  line-height: 34px;
}
@screen lg{
  .desc{
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 38px;
  }
}

.arrow-down{
  bottom: 4.5%;
  left: 0%;
  width: 100%;

}

.love-and-more{
  font-size: 12px;
  color: #FFFFFF;
  letter-spacing: 3px;
}

@keyframes flowdown {
  0%{
    opacity: 0;
    transform: scale(0.26);
  }
  15%{
    opacity: 1;
  }
  85%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: scale(1.15);
  }
}

.flowdown {
  width: 30px;
  animation: flowdown 1s linear 0s infinite normal both;
}
</style>
