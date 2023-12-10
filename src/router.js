// importa i createRouter e createWebHistory che vengono utilizzati per collegare le rotte create dalle nostre componenti 
import { createRouter, createWebHistory } from "vue-router";

//importo i componenti delle pagine
import Home from '/src/pages/Home.vue'
import About from '/src/pages/About.vue'
import Contacts from '/src/pages/Contacts.vue'
import Project from '/src/pages/Project.vue'
import Error404 from '/src/pages/Error404.vue'
//createRouter è un metodo con dentro un oggetto con delle determinate chiavi
const router = createRouter({

  history: createWebHistory(),
  //cosi customizziamo il nome della classe del link attivo
  linkExactActiveClass: 'active',
// routers è un array di oggetti che contiene le nostre rotte
  routes:[
    {
      //path è il nome del nostro percorso 
      path:'/',
      name:'home',
      //il componente per associalrlo devo importarlo con import
      component: Home
    },
    {
      path:'/chi-siamo',
      name:'about',
      component: About
    },
    {
      path:'/contatti',
      name:'contacts',
      component: Contacts
    },
    {
      path:'/progetti',
      name:'project',
      component: Project
    },

    //rotta 404 da mettere come ultima rotta, significa 'tutte le rotte possibili' quindi ed è per questo motivo che intercetta tutte le rotte sbagliate ad esclusione di quelle precedenti
    {
      path: '/:pathMatch(.*)*',
      component: Error404
    }
  ]
});
// export il roter cioè le nostre rotte in routes dentro il nostro main.js
export { router }