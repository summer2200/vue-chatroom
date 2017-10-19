<template>
  <div id="login" class="login">
    <img class="home-image">
    <h2>{{ msg }}</h2>
    <p>Please <a href="">Sign In</a>/<router-link to="register">Register</router-link></p>
    <div class="row">
      <div class="col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2">
        <form id="loginForm" @submit.prevent="validateBeforeSubmit">
          <div class="form-group">
            <input type="text" name="email" v-model="user.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" class="form-control"  placeholder="Email">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <!-- <icon name="baidu"></icon> -->
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </div>
          <div class="form-group">
            <input type="password" v-model="user.password" v-validate="'required|min:6'" class="form-control" placeholder="Password">
            <i class="fa fa-key" aria-hidden="true"></i>
            <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('email') }}</span>
          </div>
          <button type="submit" class="btn btn-default">Sign In</button>
        </form>
      </div>
<!--
      <ul class="nav nav-tabs nav-justified">
        <li role="presentation" class="active"><a href="#">Sign In</a></li>
        <li role="presentation"><a href="#">Register</a></li>
      </ul>
    -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        msg: 'Meow Chatroom',
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login: function () {
        console.log(this.user)
        this.$router.push('home')
      },
      validateBeforeSubmit: function () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            console.log('yes')
            this.login()
          } else {
            console.log('errors!')
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    text-align: center;
  }

  .home-image {
    height: 300px;
    width: 300px;
    background-image: url("../assets/home.png");
    background-size: 100%;
    background-repeat: no-repeat;
    z-index: 999;
  }

  a {
    color: #42b983;
  }

  i {
    position: absolute;
    right: 25px;
  }

  .fa-envelope {
    
    top: 10px;
  }

  .fa-key {
    top: 60px;
  }

</style>
