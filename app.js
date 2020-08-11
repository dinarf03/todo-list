var app = new Vue({
    el: "#app",
    data() {
        return {
            todos: [], //array kosong untuk menampung semua isian user di dalam form
            todo: "" //string kosong untuk menampung tiap isian user di dalam form
        }
    },

    created() {
        this.loadLocalStorage();
    },

    watch: {
        todos() {
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    },

    methods: {
        loadLocalStorage() {
            const ls = JSON.parse(localStorage.getItem("todos"));
            console.log(ls);
            if(ls == null) { return; }
            this.todos = ls;
            console.log(this.todos);
        },
        addTodo() {
            this.todos.push(this.todo); //push() untuk menambah item ke dalam array
            this.todo = "";
        },
        deleteTodo(index) {
            this.todos.splice(index, 1); //splice() untuk menghapus item array tertentu 
            //(nilai index untuk menentukan item mana yang akan dihapus, nilai 1 untuk menentukan banyak item yang dihapus)
        }
    },
})