const books = Vue.createApp({
   data() {
    return {
        showBooks: true,
        btitle: 'Atomic Habits',
        bauthor: 'Sofia Sarmiento',
        year: 2015
    }
   },

   methods: {
    toggleShowBooks() {
        this.showBooks = !this.showBooks
    }
   }
});

books.mount('#books');