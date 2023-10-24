import { toFormData } from "./_helper";


export function logIn(app, data) {
  return app
    .$axios({
      method: "post",
      data: toFormData(data),
      url: `http://localhost:8000/auth/token/login`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
export function logOut(app, data) {
  return app
    .$axios({
      method: "post",
      data: toFormData(data),
      url: `http://localhost:8000/auth/token/logout`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((data)=>{
      app.$cookiz.remove("token");
      app.$axios.setToken(false);
    })
    .catch((error) => {
      return error;
    });
}

export function addUser(app, data) {
  return app
    .$axios({
      method: "post",
      data: toFormData(data),
      url: `/auth/users/`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((data)=>{
      return data
    })
    .catch((error, data) => {
      console.log(error, error.response.data, 'error')
      console.log(app.$notify, 'app.$notify')
      let errors = error.response.data
      let text_errors = ''
      for (const key in errors) {
        if (errors.hasOwnProperty.call(errors, key)) {
          console.log(errors[key])
          text_errors = text_errors+`<div>${key}: ${errors[key][0]}</div>`
        }
      }
      app.$notify({ group: 'app', text: text_errors })
      return false;
    });
}
export function getUser(axios) {
  return axios({
    method: "get",
    url: `content/profile`,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return null;
    });
}
