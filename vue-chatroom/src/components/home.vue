<template>
  <div class="homepage">
    <div class="container-fluid">
      <h1>{{username}}</h1>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'homepage',
    data () {
      return {
        username: 'Summer'
      }
    }
  }
</script>

<style scoped>
  .homepage {
    width: 100%;
    height: 100%;
    /*background: url(../assets/bg.jpg) repeat;*/
  }
</style>
