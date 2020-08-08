import { connect } from "react-redux";
import { TodoApp, TodoAppProps } from "../components/TodoApp";
import { TodoState } from "../interfaces";

const mapStateToProps = (state: TodoState): TodoAppProps => ({
    todos: state.todos 
});

export default connect(mapStateToProps)(TodoApp);
