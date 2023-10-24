<template>
  <div class="reg">
    <notifications group="app" class="notifications-def" :duration="6000" :width="400"/>
    <div class="container">    
      <div class="card absolute">
        <div class="card__wrapper">
          <div>
            <h3>Войти</h3>
            <div class="field-content m-y-3">
              <input type="text" name="login" placeholder="Логин" v-model="login_data.username">
            </div>
            <div class="field-content m-y-3">
              <input type="text" name="password" placeholder="Пароль" v-model="login_data.password">
            </div>
            <div class="btn-content m-t-6">
              <btn @click.native.prevent="send">Войти в систему</btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { logIn} from "~/api/userApi";

export default {
  data(){
    return{
      login_data:{
        username: '',
        password: '',
      }
      
    }
  },
  methods:{
    async send(){
      const data = await logIn(this, this.login_data)
      if (data && data.auth_token) {
        const token = data.auth_token
        const expires_at = new Date(Date.now() + 86400e3);
        this.$cookiz.set("token", token, {
          maxAge: expires_at,
          path: "/",
        });
        this.$axios.setToken(token, "Token");
      }
      console.log(data)
    },
  }
}
</script>