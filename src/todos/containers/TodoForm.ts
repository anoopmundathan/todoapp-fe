import { connect } from "react-redux";
import { addTodo } from "../actions/actionCreators";
import { TodoForm, TodoFormDispatchProps } from "../components/TodoForm";

const mapDispatchToProps: TodoFormDispatchProps  = {
    submit: addTodo
}

export default connect(null, mapDispatchToProps)(TodoForm);
