<template>
  <div class="" v-if="mode === 'light'">
    <div class="fixed logo-pos-2 flex items-center cursor-pointer" @click="$router.push('/');">
      <img src="../assets/icons/logo.svg" class=" cursor-pointer" alt="logo">
      <img src="../assets/home/glsl-js.svg" class="ml-5 hidden xl:block" alt="glsl and js academy">
    </div>

    <div class="fixed login-pos-2">
      <img src="../assets/home/login.svg" class="cursor-pointer" alt="login" @click="$router.push('/login')">
    </div>
    <div class="taller"></div>

  </div>
  <div class="" v-else-if="mode === 'dark'">
    <div class="fixed logo-pos-2 flex items-center cursor-pointer" @click="$router.push('/');">
      <img src="../assets/icons/logo-dark.svg" class=" cursor-pointer" alt="logo">
      <img src="../assets/home/glsl-js-dark.svg" class="ml-5 hidden xl:block" alt="glsl and js academy">
    </div>

    <div class="fixed login-pos-2">
      <img src="../assets/home/login-dark.svg" class="cursor-pointer" alt="login" @click="$router.push('/login')">
    </div>

    <div class="taller"></div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      default: 'dark'
    }
  }
}
</script>

<style lang="postcss" scoped>
.logo-pos-2{
  top: 40px;
  left: 35px;
}

.login-pos-2{
  top: 50px;
  right: 35px;
}

.taller{
  height: 110px;
}
</style>
