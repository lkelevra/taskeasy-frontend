<template lang="pug">
  #app
    h1 Availivity List
    #schedule
      ul
        hour(v-for="schedule in schedules" :schedule="schedule" :key="schedule.hour")



</template>

<script>
import Hour from './components/Hour'
import getDisponibility from './api'

export default {
  name: 'app',
  components: {
        Hour
  },
  data () {
    return {
      schedules:[
      ]
    }
  },
  mounted: function(){
    let self = this
    getDisponibility()
    .then( function(data) {
      self.schedules = data
    })
  }

}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial
#schedule
  border v
  overflow hidden
ul
  padding 0
  max-width 100vw
  margin 0
</style>
