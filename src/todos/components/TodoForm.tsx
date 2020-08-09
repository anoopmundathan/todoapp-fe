import React, { ChangeEvent, FC, useState } from "react";

export interface TodoFormDispatchProps {
    submit: (text: string) => void;
}

type Props = TodoFormDispatchProps;

export const TodoForm: FC<Props> = ({
    submit
}: Props) => {

    const [name, setName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (name) {
            submit(name);
            setName("");
            setError(false);
        } else {
            setError(true);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} />
            {error && <p>Please enter todo name</p>}
        </form>
    )
}
