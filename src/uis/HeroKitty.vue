
<template>
  <div class="full herobg bg-no-repeat bg-cover bg-center">
    <div class="absolute logo-pos flex items-center cursor-pointer">
      <img src="../assets/icons/logo.svg" alt="logo">
      <img src="../assets/home/glsl-js.svg" class="hidden lg:block ml-5" alt="glsl and js academy">
    </div>

    <div class="absolute login-pos">
      <img src="../assets/home/login.svg" class="cursor-pointer" alt="login">
    </div>

    <div class="absolute vela-pos">
      <img src="../assets/home/vela.svg" alt="">
      <div class="desc font-mono">
        Why is this little kitty sleeping?
        <br />She’s had a great time coding.
        <br />happily ever after.
      </div>
    </div>

    <div class="absolute arrow-down">
      <div class=" flex flex-col justify-center items-center" @click="$emit('hero', 'fruit')">
        <div class="love-and-more font-serif cursor-pointer">
          LOVE AND MORE
        </div>
        <img src="../assets/icons/arrow-down.svg" class="mt-4  cursor-pointer" alt="">
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.herobg{
  background-position: 50% 95%;
  background-image: url('../assets/img/kitty-sleep.jpg');
}
.logo-pos{
  top: 40px;
  left: 40px;
}

.login-pos{
  top: 50px;
  right: 40px;
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
</style>
