<template>
  <div id="app">
    <transition name="fadein">
      <router-view class="full"/>
    </transition>
  </div>
</template>

<style>
body {
  background-color: #E7D7CC;
}
.fuller{
  height: calc(100% - 110px);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fadein-enter-active{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 100%;
  transition: opacity 1s;
  opacity: 1;
}
.fadein-leave-active {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 100%;
  transition: opacity 1s;
  opacity: 1;
}
.fadein-enter /* .fadein-leave-active below version 2.1.8 */ {
  opacity: 0;
  /* transform: perspective(100vmax) translateZ(-400px) rotateX(10deg) translateY(-150%); */
}
.fadein-leave-to /* .fadein-leave-active below version 2.1.8 */ {
  opacity: 0;
  /* transform: perspective(100vmax) translateZ(-400px) rotateX(10deg) translateY(-150%); */
}

::selection {
  color: rgb(252, 230, 230);
  background: rgba(240, 159, 93, 0.685);
  /* background: linear-gradient(45deg, rgba(240, 159, 93, 0.685), rgba(240, 230, 93, 0.685)); */
}
</style>
