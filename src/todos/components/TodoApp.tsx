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

const Header = styled.div`
    background: #fe2f7c;
    padding-top: 15px;
    padding-bottom: 15px;
`;

const HeadingText = styled.h2`
    text-align: center;
    margin: 0;
    color: #fff;
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
            <Header>
                <HeadingText>
                    Another Todo App
                </HeadingText>
            </Header>
            <TodoAppContainer>
                <Container>
                    <TodoForm />
                    <TodoList />
                </Container>
            </TodoAppContainer>
        </>
    );
} 
