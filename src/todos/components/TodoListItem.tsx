import React from "react";
import styled from "styled-components";
import { Todo } from "../interfaces";

const List = styled.li`
    display: flex;
    align-items: center;
    height: 60px;
    padding: none;
`;

const CheckBox = styled.input`
    width: 30px;
    height: 30px;
`

const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Span = styled.span`
    margin-left: 10px;
`

export interface TodoListItemProps {
    todo: Todo;
}

export interface TodoListItemDispatchProps {
    change: (id: number) => void;
}

type Props = TodoListItemProps & TodoListItemDispatchProps;

export const TodoListItem = ({ todo, change }: Props) => {
    
    const handleChange = () => {
        change(todo.id);
    }

    return (
        <List>
            <Label>
                <CheckBox type="checkbox" checked={todo.completed} onChange={handleChange} />
                <Span>{todo.name}</Span>
            </Label>
        </List>
    );
}
