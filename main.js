// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// })

//{/* <button class="todoBtn leftBtn">-</button><button class="todoBtn">&#10004</button> */}

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
                           
})

var appIn = new Vue({
    el: '#app1',
    data: {
        todos: [], 
        todoIn : '',
    },
    methods: {
        add : function () {
            if(this.todoIn != '') {
                console.log("button pressed");
                var newTodo = {text: this.todoIn
                               };
                this.todos.push(newTodo);
                this.todoIn = '';
            }
            
        },
        clear : function() {
            console.log("todos cleared");
            this.todos = [];
            this.todoIn = '';
        }
    }
})