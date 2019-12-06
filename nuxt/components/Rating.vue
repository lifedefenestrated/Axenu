<template>
  <div class="rating-container">
    <template v-for="index in 5">
      <font-awesome-icon
        :icon="['fas', 'star']"
        v-if="index <= rating"
        :key="index"
      />
      <font-awesome-icon :icon="['far', 'star']" v-else :key="index" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: ['rating']
}
</script>

<style lang="sass">

.rating-container
  display: flex
  flex-direction: row
</style>
