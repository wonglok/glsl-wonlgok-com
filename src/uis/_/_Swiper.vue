<template>
  <div class="full relative overflow-hidden">
    <HeroKitty class="full"></HeroKitty>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  components: {
    HeroKitty: require('../uis/HeroKitty.vue').default
  },
  data () {
    return {
      hero: 'kitty',
      pages: [
        'kitty',
        'fruit'
      ],
      idx: 0,
      ev: {
        tsY: 0,
        aY: 0,
        dY: 0,
        ltX: 0,
        ltY: 0
      }
    }
  },
  methods: {
    onTS (evt) {
      if (this.ev.ltX !== 0 && this.ev.ltY !== 0) {
        let dom = document.elementFromPoint(this.ev.ltX, this.ev.ltY)
        if (dom && dom.click) {
          dom.dispatchEvent(new Event('click'))
        }
      }
      this.ev.aY = 0
      this.ev.tsY = evt.touches[0].clientY
    },
    onTM (evt) {
      this.ev.dY = evt.touches[0].clientY - this.ev.tsY
      this.ev.tsY = evt.touches[0].clientY
      this.ev.aY += this.ev.dY
      this.ev.ltX = evt.touches[0].clientX
      this.ev.ltY = evt.touches[0].clientY
    },
    onTE (evt) {
      if (Math.abs(this.ev.aY) < 70) {
        this.ev.aY = 0
        return
      }
      if (this.ev.aY > 0) {
        this.idx--
      } else {
        this.idx++
      }
      this.ev.aY = 0

      this.idx = this.idx % (this.pages.length)
      this.hero = this.pages[this.idx]
    },
    onWheel: _.debounce(function (e) {
      // if (e.deltaY > 0) {
      //   this.idx++
      // } else {
      //   this.idx--
      // }
      // this.idx = this.idx % (this.pages.length)
      // this.hero = this.pages[this.idx]
    }, 100)
  }
}
</script>

<style lang="postcss" scoped>
.movin-enter-active{
  transition: opacity 1.5s;
}
.movin-leave-active {
  transition: opacity 1.5s;
}
.movin-enter /* .movin-leave-active below version 2.1.8 */ {
  opacity: 0;
  /* transform: perspective(100vmax) translateZ(-400px) rotateX(10deg) translateY(-150%); */
}
.movin-leave-to /* .movin-leave-active below version 2.1.8 */ {
  opacity: 0;
  /* transform: perspective(100vmax) translateZ(-400px) rotateX(10deg) translateY(-150%); */
}
</style>
