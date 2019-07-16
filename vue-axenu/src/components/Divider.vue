<template>
  <div class="divider"></div>
</template>


<script>
export default {
  name: "Divider"
};
</script>

<style lang="sass" scoped>

$divider-color: #aaa

.divider
  width: 40%
  flex-direction: row
  align-self: center
  // border: 0.5px solid black
  margin: 20px 0
  position: relative
  // margin-top: 90px
  height: 1px
  background-image: linear-gradient(to right, transparent, $divider-color, transparent)

.divider:after
  content: ""
  position: absolute
  z-index: 1
  top: -5px
  left: calc(50% - 5px)
  width: 10px
  height: 10px
  border-right: 1px solid $divider-color
  border-left: 1px solid $divider-color
  background-color: white
</style>
