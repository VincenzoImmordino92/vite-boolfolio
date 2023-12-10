  <script>
    export default {
      name: 'Navigator',
      props:{
        paginator:Object
      },
      data() {
        return {}
      },
      computed: {},
      mounted() {},
      methods: {
        callApi(linkUrl){
          console.log(linkUrl);
          this.$emit('callApi',linkUrl)
        }
      }
    }

  </script>

<template>
  <div class="nav-wrapper">
    <button @click="callApi(paginator.firstPageUrl)"
            :disabled="paginator.currentPage === 1">
      |&lt;
    </button>

    <button
            v-for="link in paginator.links"
            :key="link.label"
            v-html="link.label"
            :disabled="link.active || !link.url"
            @click="callApi(link.url)"
            ></button>
      
    <button @click="callApi(paginator.lastPageUrl)"
            :disabled="paginator.currentPage === paginator.lastPage">
      &gt;|
    </button>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.nav-wrapper{
padding: 20px;
display: flex;
justify-content: center;
button{
  padding: 3px 12px;
  border-radius: 10px;
}
}
</style>