import React, { useEffect, useState } from 'react';
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
// Styles
import "./sass/index.scss";
// Firestore
import { collection, getDocs } from "firebase/firestore";
import store from './firebase/firebase.config';
// Components
import ListComponent from './components/list.component';

const App = () => {
    const [Tasks, setTasks] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const tasks = await getDocs(collection(store, "tasks"));
            tasks.forEach((doc) => {
                setTasks(Tasks => [...Tasks, doc.data()]);
            });
        }
        getData();
    }, []);
    
    return (
        <>
            <div className="header-task">
                <h1>TODO</h1>
                <div className="theme-box">
                    <FiSun />
                    <HiMoon />
                </div>
                <div className="add-task">
                    <label htmlFor="task">Type</label>
                    <input type="text" name="task" id="task" placeholder="Create a new task..." />
                </div>
                <ListComponent list={Tasks} />
                <div className="config-task">
                    <div className="counting-items">
                        <span>{Tasks.length} Items left</span>
                    </div>
                    <div className="filter-items">
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                    </div>
                    <div className="delete-items">
                        <button>Clear Completed</button>
                    </div>
                </div>
            </div>
            <div className="footer-task">
                <span>Drag and drop to reorder list</span>
            </div>
        </>
    )
}

export default App;
