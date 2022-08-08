import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Input.css";
import { saveTodo } from "../features/todoSlice";

function Input() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function addTodo() {
        console.log(`Adding ${input}`);
        dispatch(
            saveTodo({
                item: input,
                done: false,
                id: Date.now(),
            })
        );
    }
    return (
        <div className="input">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>Add!</button>
        </div>
    );
}

export default Input;
