export default ({ $axios, app }) => {
  $axios.setHeader("Accept", "application/json");
  // $axios.setHeader("Authorization", "application/json");
  // $axios.setHeader("X-CSRF-Token", "FETCH");

  // $axios.defaults.xsrfHeaderName = 'x-csrftoken'
  // $axios.defaults.xsrfCookieName = 'csrftoken'
  // console.log($axios.defaults)
  if (app.$cookiz.get("token")) {
    $axios.setToken(app.$cookiz.get("token"), "Token");
  }

  $axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (app.store) {
        if (error.response.status == "401") {
          app.$cookiz.remove("token");
          $axios.setToken(false);
          
          // app.$router.push(app.localePath({ path: "/login" }));
          app.router.push("/login")
        } else if (error.response.status == "403") {

        } else if (error.response.status == "500") {
        }
      }
      if (process.server) {
        console.log("Hello");
        // $axios.interceptors.response.eject(interceptor);
      }

      return Promise.reject(error);
    }
  );

};
