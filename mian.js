const app = {
    data(){
        return {
            title: 'Дз',
            text: '',
            color: '',
        }
    },
    methods: {
       emptyText(){
        if(this.text.length > 1 && Number.isNaN(this.text)){
            this.text.push()
        }
       }
      }
}

Vue.createApp(app).mount('#app')
