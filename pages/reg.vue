<template>
  <div class="reg">
    <notifications group="app" class="notifications-def" :duration="6000" :width="400"/>
    <div class="container">    
      <div class="card absolute">
        <div class="card__wrapper">
          <div v-if="!user">
            <h3>Регистрация</h3>
            <div class="field-content m-y-3">
              <input type="text" name="login" placeholder="Логин" v-model="username">
            </div>
            <div class="field-content m-y-3">
              <input type="text" name="password" placeholder="Пароль" v-model="password">
            </div>
            <div class="field-content m-y-3">
              <input type="text" name="email" placeholder="E-mail" v-model="email">
            </div>
            <div class="btn-content m-t-6">
              <btn @click.native.prevent="reg">Отправить</btn>
            </div>
          </div>
          <div v-else class="ta-center p-y-6">
            <div class="text-x3 fw-6 m-b-3">Регистрация прошла успешно !</div>
            <nuxt-link to="/" class="color-3">Перейти на главную</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { logIn, logOut, addUser } from "~/api/userApi";

export default {
  data(){
    return{
      user: false,
      username:'',
      password: '',
      email: '',
    }
  },
  methods:{
    async reg(){
      const data = {
        username: this.username,
        password: this.password,
        email: this.email,
      }
      this.user = await addUser(this, data)

    },
  }
}
</script>