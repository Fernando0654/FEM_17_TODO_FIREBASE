import React, { useState } from 'react';
// Firebase
import { deleteDoc, doc } from 'firebase/firestore';
import store from '../firebase/firebase.config';

const Config = ({ numTasks, completed, staticTasks, getAll, getActive, getCompleted }) => {
    const [Filter, setFilter] = useState("All");
    const clearCompleted = async () => {
        completed.forEach(id => deleteDoc(doc(store, "tasks", id)));
    }
    const filterAll = () => (getAll(), setFilter("All"));

    const filterActive = () => {
        const active = staticTasks.filter(task => !task.completed);
        getActive(active);
        setFilter("Active");
    }
    const filterCompleted = () => {
        const completed = staticTasks.filter(task => task.completed);
        getCompleted(completed);
        setFilter("Completed");
    }
    return (
        <div className="config-task">
            <div className="counting-items">
                <span>{numTasks} Items left</span>
                <div className="delete-items">
                    <button onClick={clearCompleted}>Clear Completed</button>
                </div>
            </div>
            <div className="filter-items">
                <button
                    className={Filter === "All" ? "active" : ""}
                    onClick={() => filterAll("all")}>
                    All
                </button>
                <button
                    className={Filter === "Active" ? "active" : ""}
                    onClick={() => filterActive()}>
                    Active
                </button>
                <button
                    className={Filter === "Completed" ? "active" : ""}
                    onClick={() => filterCompleted()}>
                    Completed
                </button>
            </div>
        </div>
    )
}

export default Config;
