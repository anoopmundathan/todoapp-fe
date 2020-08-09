import { connect } from "react-redux";
import { RootState } from "../../rootReducer";
import { fetchTodos } from "../actions/actionCreators";
import { TodoList, TodoListDispatchProps, TodoListProps } from "../components/TodoList";
import { getLoading, getTodos } from "../selectors";

const mapDispatchToProps: TodoListDispatchProps  = {
    fetchTodos
}

const mapStateToProps = (state: RootState): TodoListProps => ({
    todos: getTodos(state),
    loading: getLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
