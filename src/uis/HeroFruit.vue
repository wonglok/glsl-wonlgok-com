<template>
  <div class="full bor">
    <div class="absolute logo-pos flex items-center cursor-pointer" @click="$emit('hero', 'kitty')">
      <img src="../assets/icons/logo-dark.svg" alt="logo">
      <img src="../assets/home/glsl-js-dark.svg" class="hidden lg:block ml-5" alt="glsl and js academy">
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
  left: 40px;
}

.login-pos{
  top: 50px;
  right: 40px;
}

</style>