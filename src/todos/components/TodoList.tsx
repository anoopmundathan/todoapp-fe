import React, { useEffect } from "react";
import { PulseLoader } from "react-spinners";
import styled from "styled-components";
import TodoListItem from "../containers/TodoListItem";
import { Todo } from "../interfaces";

const TodoListContainer = styled.div`
`;

const Spinner = styled.div`
    display: flex;
    padding-top: 5px;
    justify-content: center;
`;

const Ulist = styled.ul`
    list-style: none;
    padding: 0;
`;

export interface TodoListProps {
    todos: Todo[];
    loading: boolean
}

export interface TodoListDispatchProps {
    fetchTodos: () => void;
}


type Props = TodoListProps & TodoListDispatchProps;

export const TodoList = ({ todos, loading, fetchTodos }: Props) => {
    
    useEffect(() => {
        const interval = setInterval(() => {
           fetchTodos()
          }, 10*1000);
          return () => clearInterval(interval);
    }, [])

    const renderTodoListItem = () => todos.map((todo: Todo) => <TodoListItem key={todo.id} todo={todo} />);

    const renderSpinner = () =>
        <Spinner>
            <PulseLoader size={15} color="#fe2f7c" /> 
        </Spinner>;
        

    return (
        <TodoListContainer>
            {loading ? renderSpinner() : (
            <Ulist>
                {renderTodoListItem()}
            </Ulist>
            )}
        </TodoListContainer>
    )
}
