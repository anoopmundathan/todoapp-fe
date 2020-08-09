import React, { FC, useEffect } from "react";
import styled from "styled-components";
import TodoForm from "../containers/TodoForm";
import TodoList from "../containers/TodoList";

const TodoAppContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`;

const Container = styled.div`
   width: 80%;
`;

export interface TodoAppDispatchProps {
    fetchTodos: () => void;
}

type Props = TodoAppDispatchProps;

export const TodoApp: FC<Props> = ({ fetchTodos }: Props) => {

    useEffect(() => {
        fetchTodos()
    }, []);
    
    return (
        <>
        <div style={{ border: "1px solid red", background: "#fe2f7c", paddingTop: "15px", paddingBottom: "15px"}}>
            <h2 style={{ textAlign: "center", margin: 0, color: "#fff" }}>TODO</h2>
        </div>
        <TodoAppContainer>
            <Container>
                <TodoForm />
                <TodoList />
            </Container>
        </TodoAppContainer>
        </>
    );
} 
