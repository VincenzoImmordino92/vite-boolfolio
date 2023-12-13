<script>
import axios from 'axios';
import { store } from '../../data/store';

export default {
name:'ContactForm',
data(){
  return{
    name:'',
    email:'',
    message:'',
    success: false,
    errors:{
      name:[],
      email:[],
      messages:[],
    },
  }
},
components:{},
methods:{
  sendForm(){
    const data = {
      name: this.name,
      email: this.email,
      message: this.message,
    }
    axios.post(store.apiUrl + 'invio-email', data)
    .then(res=>{
      console.log(store.apiUrl + 'invio-email', data);
      console.log(res.data)
      this.success = res.data.success;
      console.log(this.success)
      if(!this.success){
        this.errors = res.data.errors;
      }
    })
  }
},
mounted(){},
computed:{}
}
</script>


<template>



  <form v-if="!success" @submit.prevent="sendForm()">
    <div class="col-6">
      <label for="name">Inserisci il tuo Nome</label>
      <input v-model="name" type="text" name="name" id="name" class="form-control">
      <p class="error" v-for="error in errors.name">{{ error }}</p>
    </div>
    <div class="col-6">
      <label for="email">Inserisci la tua Email@</label>
      <input v-model="email" type="email" name="email" id="email" class="form-control">
      <p class="error" v-for="error in errors.email">{{ error }}</p>

    </div>
    <div class="col-6">
      <label for="message">Inserisci il Messaggio da Mandare</label>
      <textarea v-model="message" name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
      <p class="error" v-for="error in errors.message">{{ error }}</p>

    </div>
  <div>
    <button class="btn btn-light my-3" type="submit">Invia</button>
  </div>
  </form>
  <div v-else>Email inviata correttamente</div>


</template>


<style lang="scss"  scoped>
//da sistemare il form esteticamente

</style>