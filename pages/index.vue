<template>
  <div>
    <Aoe />
  </div>
</template>

<script>
export default {
  data(){
    return{
      loinit: false
    }
  },
  head(){
    // console.log(this)
  },
  async asyncData(context){
    try{
      console.log(context.$cookiz.get("token"))
      if(context.$cookiz.get("token"))
        return {
          loinit: true
        }
      // app.$cookiz.get("token")
    }catch(e){
      context.error(e);
    }
  },
}
</script>
