import Todo from "./Todo";
import {View} from "react-native";

const TodoList = ({todos, deleteTodo, toggleComplete, type}) => {

    const getVisibleTodos = (todos, type) => {
        switch (type) {
            case 'All':
                return todos
            case 'Active':
                return todos.filter((t) => !t.complete)
            case 'Complete':
                return todos.filter((t) => t.complete)
            default:
                console.error('unknown type : ' + type)
                return []
        }
    }
    todos = getVisibleTodos(todos, type)
    todos = todos.map((todo, i) => {
        return (
            <Todo
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                key={i}
                todo={todo}/>
        )
    })
    return (
        <View>
            {todos}
        </View>
    )
}

export default TodoList