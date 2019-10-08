
<template>
  <div class="full bg-white">
    <TopNav mode="dark"></TopNav>
    <div class="flex justify-center items-center fuller">
      <div class="flex flex-col full justify-between">
        <div class="w-full bg-white">
        </div>
        <form class="w-full fruit bg-cover">
          <div class="full form-area relative">
            <div class="font-title text-6xl login-title absolute">
              Register
            </div>

            <div class=" font-sans absolute login-fields lg:text-3xl">
              <input type="text" autocomplete="reg username" class="appearance-none bg-transparent border-black border-b-2 w-full font-black rounded-none" placeholder="username">
              <input type="password"  autocomplete="reg password" class="appearance-none bg-transparent border-black mt-8 border-b-2 w-full font-black rounded-none" placeholder="password">
              <input type="email"  autocomplete="reg email" class="appearance-none bg-transparent border-black mt-8 border-b-2 w-full font-black rounded-none" placeholder="email">
            </div>

            <img src="../assets/auth/go.svg" class="absolute go" alt="go" @click="submit()" />

            <img src="../assets/auth/login.svg" class="secondary-cta cursor-pointer" @click="$router.push('/login')" alt="login" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TopNav: require('../uis/TopNav.vue').default
  },
  methods: {
    submit () {
    }
  }
}
</script>

<style scoped lang="postcss">
.fruit{
  height: 80%;
  background-image: url(../assets/img/fruit.jpg);
  background-position: 50% 75%;
}
.login-title{
  transform: translateY(-50%) translateX(20px);
}
.secondary-cta{
  position: absolute;
  right: 10px;
  top: -57px;
}
.login-fields{
  top: 50px;
  left: 20px;
  width: 250px;
}
.go{
  cursor: pointer;
  top: 240px;
  left: 20px;
}
@screen lg {
  .form-area{
    margin: 0px auto;
    max-width: 1024px;
  }
  .login-title{
    font-size: 120px;
  }
  .login-fields{
    top: 120px;
    width: 350px;
  }
  .secondary-cta{
    transform: scale(1.1);
  }
  .go {
    top: -15px;
    left: 550px;
  }
}
</style>
