const ListRendering = {
   data() {
    return {
        todos: [
            { text: 'Clean my Room' },
            { text: 'Feed my Cat' },
            { text: 'Attend WSERVER class' },
        ]
    }
    }
};

Vue.createApp(ListRendering).mount('#list-rendering')