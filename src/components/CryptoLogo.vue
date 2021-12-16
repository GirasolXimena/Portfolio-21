<script lang="ts">
import { defineComponent, h, ref, Ref } from 'vue'
const canvas = ref() as Ref<HTMLCanvasElement>

export default defineComponent({
  name: 'CryptoLogo',
  props: {
    height: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      context: null as any
    }
  },
  mounted () {
    this.setContext()
  },
  methods: {
    async setContext () {
      const context = await canvas.value.getContext('2d')
      this.context = context
      await this.drawCanvas()
    },
    async drawCanvas () {
      if (canvas.value) {
        canvas.value.width = this.width
        canvas.value.height = this.height
      }

      this.context.fillStyle = 'rgb(200, 0, 0)'
      this.context.fillRect(10, 10, 50, 50)
      this.context.fillStyle = 'rgba(0, 0, 200, 0.5)'
      this.context.fillRect(30, 30, 50, 50)
    }
  },
  render () {
    return [
      h('canvas', {
        innerHTML: 'fallback content',
        ref: canvas,
        id: 'canvas'
      }),
      h('img', {
        innerHTML: 'dookie',
        src: 'https://clipground.com/images/crypto-logo-6.png',
        alt: 'reference image crypto logo',
        id: 'reference-image'
      })
    ]
  }
})
</script>
<style>
#canvas {
    background-color: green;
}
</style>
