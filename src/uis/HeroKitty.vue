
<template>
  <div class="full absolute top-0 left-0 herobg bg-no-repeat bg-cover bg-center">
    <div class="absolute logo-pos-2 flex items-center cursor-pointer">
      <img src="../assets/icons/logo.svg" alt="logo">
      <img src="../assets/home/glsl-js.svg" class="ml-5 hidden xl:block" alt="glsl and js academy">
    </div>

    <div class="absolute login-pos-2">
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
        <img  src="../assets/icons/circle.svg" class="mt-4  cursor-pointer flowdown" alt="">
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
.logo-pos-2{
  top: 40px;
  left: 35px;
}

.login-pos-2{
  top: 50px;
  right: 35px;
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
