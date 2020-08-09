import { connect } from "react-redux";
import { fetchTodos } from "../actions/actionCreators";
import { TodoApp, TodoAppDispatchProps } from "../components/TodoApp";

const mapDispatchToProps: TodoAppDispatchProps  = {
    fetchTodos
}
export default connect(null, mapDispatchToProps)(TodoApp);
