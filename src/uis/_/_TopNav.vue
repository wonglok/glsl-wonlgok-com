<template>
  <nav class="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
    <div @click="$router.push('/')" class="cursor-pointer flex items-center flex-shrink-0 text-white mr-6">
      <img src="../assets/icons/logo.svg" class="mr-2" alt="logo">
      <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
      <span class="font-semibold text-xl tracking-tight">JS & GLSL Academy</span>
    </div>
    <div class="block lg:hidden">
      <button @click="toggleDetails = !toggleDetails" class="flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div v-if="toggleDetails" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-base lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
          Home
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
          Examples
        </a>

        <!-- <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white">
          Awesome
        </a> -->
      </div>
      <div>
        <a href="#" class="inline-block text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0">Login</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      toggleDetails: window.innerWidth > 767
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.toggleDetails = window.innerWidth > 767
    }, false)
  }
}
</script>

<style>

</style>
