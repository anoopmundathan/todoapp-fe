import { connect } from "react-redux";
import { updateTodo } from "../actions/actionCreators";
import { TodoListItem, TodoListItemDispatchProps } from "../components/TodoListItem";

const mapDispatchToProps: TodoListItemDispatchProps  = {
    change: updateTodo
}

export default connect(null, mapDispatchToProps)(TodoListItem);
