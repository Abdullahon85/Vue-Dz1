const app = {
    data(){
        return {
            title: 'Дз',
            option1: 'green',
            option2: 'orange',
            option3: 'red',
            text: '',
            word: '',
            open: true,
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
