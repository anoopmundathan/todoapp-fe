import React, { ChangeEvent, FC, useState } from "react";

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
        submit(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
        </form>
    )
}
