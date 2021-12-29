import React from "react";
// Firebase
import store from "../firebase/firebase.config";
import { collection, addDoc } from "firebase/firestore";

const Add = ({ countTask }) => {

    const addTask = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(store, "tasks"), {
            index: countTask + 1,
            task: e.target[0].value,
            completed: false,
        });
    }
    return (
        <form className="add-task" onSubmit={addTask}>
            <label htmlFor="task">Type</label>
            <input type="text" name="task" id="task" placeholder="Create a new task..." />
        </form>
    )
}

export default Add;
