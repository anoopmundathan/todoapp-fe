import { connect } from "react-redux";
import { inputTextChange } from "../actions/actionCreators";
import { TodoForm, TodoFormDispatchProps } from "../components/TodoForm";

const mapDispatchToProps: TodoFormDispatchProps  = {
    change: inputTextChange
}

export default connect(null, mapDispatchToProps)(TodoForm);
