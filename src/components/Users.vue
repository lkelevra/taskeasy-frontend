<template lang="pug">
    span(class="username") {{user.name}}
</template>
<script>
export default {
  name: 'users',
  props: [ 'user' ],
}
</script>
<style lang="stylus">
.username
  background-color #67cdd8
  box-box-sizing border-box
  padding 0.5rem
  margin 1vw
  border-radius 1vw
  color white
  font-size 1rem
</style>
