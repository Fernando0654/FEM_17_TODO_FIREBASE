import React from 'react';
// Firebase
import { collection, deleteDoc, doc } from 'firebase/firestore';
import store from '../firebase/firebase.config';

const Config = ({ numTasks, completed }) => {
    const clearCompleted = async () => {
        completed.forEach(item => deleteDoc(doc(store, "tasks", item)))
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default Config;
