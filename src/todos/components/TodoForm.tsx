import React, { ChangeEvent, useState } from "react";

export const TodoForm = () => {
    const [name, setName] = useState("add");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
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
