import { connect } from "react-redux";
import { RootState } from "../../rootReducer";
import { TodoList, TodoListProps } from "../components/TodoList";

const mapStateToProps = (state: RootState): TodoListProps => ({
    todos: state.todos.items
});

export default connect(mapStateToProps)(TodoList);
