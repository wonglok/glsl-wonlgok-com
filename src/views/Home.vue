<template>
  <div class="full">
    <transition-group name="movin">
      <HeroKitty :key="'kitty'" v-show="hero === 'kitty'" @hero="hero = $event"></HeroKitty>
      <HeroFruit :key="'fruit'" v-show="hero === 'fruit'" @hero="hero = $event"></HeroFruit>
    </transition-group>
  </div>
</template>

<script>
export default {
  components: {
    HeroKitty: require('../uis/HeroKitty.vue').default,
    HeroFruit: require('../uis/HeroFruit.vue').default
  },
  data () {
    return {
      hero: 'fruit'
    }
  }
}
</script>

<style lang="postcss" scoped>
.movin-enter-active{
  transition: transform 1.5s;
}
.movin-leave-active {
  transition: transform 1.5s;
}
.movin-enter /* .movin-leave-active below version 2.1.8 */ {
  transform: perspective(100vmax) translateZ(-400px) rotateX(10deg) translateY(120%);
}
.movin-leave-to /* .movin-leave-active below version 2.1.8 */ {
  transform: perspective(100vmax) translateZ(-400px) rotateX(10deg) translateY(120%);
}
</style>
