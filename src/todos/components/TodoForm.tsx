import React, { ChangeEvent, FC, useState } from "react";
import { InputTextChange } from "../actions/actionCreators";

export interface TodoFormDispatchProps {
    change: (text: string) => InputTextChange
}

type Props = TodoFormDispatchProps;

export const TodoForm: FC<Props> = ({ change }: Props) => {

    const [name, setName] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        change(event.target.value);
        setName(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
        </form>
    )
}
