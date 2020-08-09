import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

const TodoFormContainer = styled.div`
   flex: 1;
   width: 100%;
   height: 100%;
`;

const Form = styled.form`
    flex: 1;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    font-size: 30px;
    padding: 15px;
    color: #505462;
`;

const errorMessage = ''
export interface TodoFormDispatchProps {
    submit: (text: string) => void;
}

type Props = TodoFormDispatchProps;

export const TodoForm: FC<Props> = ({
    submit
}: Props) => {

    const [name, setName] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (name) {
            submit(name);
            setName("");
        }
    }

    return (
        <TodoFormContainer>
            <Form onSubmit={handleSubmit}>
                <Input type="text" value={name} onChange={handleChange} placeholder={"Enter todo"}/>
            </Form>
        </TodoFormContainer>
    )
}
