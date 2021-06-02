interface Todo {
    name: string;
    completed?: boolean;
}

interface TodoService {
    getAll(): Todo[];
    getById(id: number): Todo;
    delete(id: number): void;
    add(todo: Todo): Todo;
}

interface ExtendedTodoService {
    (todo: Todo): Todo;
}

const myTodo: Todo = {name: "my first task"};

const f = function(todo: Todo) : Todo {
    return {name: todo.name + '-blabol', completed: false}
}

const result = f(myTodo);
console.log(`result: ${result.name}`)