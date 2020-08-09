import { connect } from "react-redux";
import { RootState } from "../../rootReducer";
import { fetchTodos } from "../actions/actionCreators";
import { TodoList, TodoListDispatchProps, TodoListProps } from "../components/TodoList";

const mapDispatchToProps: TodoListDispatchProps  = {
    fetchTodos
}

const mapStateToProps = (state: RootState): TodoListProps => ({
    todos: state.todos.items,
    loading: state.todos.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
