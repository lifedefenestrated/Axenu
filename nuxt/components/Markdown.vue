<template>
  <div class="markdown-body" v-html="renderMarkdown()"></div>
</template>

<script>
import 'markdown-it-vue/dist/markdown-it-vue.css'
import markdownIt from 'markdown-it'
import hljs from 'highlight.js'

export default {
  name: 'Footer',
  props: ['content'],
  methods: {
    renderMarkdown() {
      if (!this.content || this.content == '') {
        return ''
      }
      const mdi = markdownIt({
        highlight: function(str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return (
                '<pre class="hljs"><code>' +
                hljs.highlight(lang, str, true).value +
                '</code></pre>'
              )
            } catch (__) {
              console.error('cant render markdown highlight')
            }
          }

          return '<pre class="hljs"><code>' + str + '</code></pre>'
        }
      })
      return mdi.render(this.content)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

@import ../assets/styles/config

p, h1, h2, h3, h4, div, code, pre
  display: block
  text-align: left

.markdown-body
  display: block

  p
    img
      display: block
      margin: 0 auto

    em
      color: $accent-color
      font-style: normal
</style>
