const app = Vue.createApp({
    // Create functions, data
    // template: "<h2>This is my template .... </h2>"
   data() {
    return {
        title: 'Atomic Habits',
        author: 'Sofia Sarmiento',
        age: 20
    }
   }
});

app.mount('#app');