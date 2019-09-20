<template lang="pug">
  li
    span(class="hour") {{ schedule.hour }}
    div(class="user-list")
      users(v-for="user in schedule.users" :user="user" :key="user.id")
</template>

<script>
import Users from './Users'

export default {
  name: 'hour',
  props: [ 'schedule' ],
  components: { Users }
}
</script>
<style lang="stylus">
li
  display block

.user-list
  display flex
  flex-direction row

.hour
  display block
  font-size 1.5rem
  font-weight bold
  text-align center
  background-color #f7f7f7
li + li
  border-top 1px solid #f7f7f7
</style>
