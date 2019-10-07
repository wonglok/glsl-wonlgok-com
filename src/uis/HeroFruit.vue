<template>
  <div class="full absolute top-0 left-0">
    <div class="absolute logo-pos flex items-center cursor-pointer" @click="$emit('hero', 'kitty')">
      <img src="../assets/icons/logo-dark.svg" alt="logo">
      <img src="../assets/home/glsl-js-dark.svg" class="ml-5 hidden xl:block" alt="glsl and js academy">
    </div>

    <div class="absolute login-pos">
      <img src="../assets/home/login-dark.svg" class="cursor-pointer" alt="login">
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

.logo-pos{
  top: 40px;
  left: 35px;
}

.login-pos{
  top: 50px;
  right: 35px;
}

</style>
