<template lang="pug">
    span(class="username") {{user.name}}
      span(class="available") available
</template>
<script>
export default {
  name: 'users',
  props: [ 'user' ],
}
</script>
<style lang="stylus">
body
  background-color

@media screen and (max-width: 992px)
  body

@media screen and (max-width: 600px)
  body
  .username
    display flex
    flex-direction column

.username
  box-sizing border-box
  color white
  font-size 1rem
  margin 1vw
  padding 0.5rem
  color #ff5537
  span
    background-color #217677
    border-radius 1rem
    color #fff
    font-size 0.6rem
    padding 0.2rem
    margin-left 0.5rem
</style>
