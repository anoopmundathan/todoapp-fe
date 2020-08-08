import { connect } from "react-redux";
import { RootState } from "../../rootReducer";
import { fetchTodos } from "../actions/actionCreators";
import { TodoApp, TodoAppDispatchProps, TodoAppProps } from "../components/TodoApp";

const mapStateToProps = (state: RootState): TodoAppProps => ({
    todos: state.todos.items
});

const mapDispatchToProps: TodoAppDispatchProps  = {
    fetchTodos
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
