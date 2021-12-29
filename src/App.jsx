import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
// Styles
import "./sass/index.scss";
// Firestore
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import store from "./firebase/firebase.config";
// Components
import AddComponent from "./components/add.component";
import ListComponent from "./components/list.component";
import ConfigComponent from "./components/config.component";

const App = () => {
    const [Tasks, setTasks] = useState([]);
    const [Id, setId] = useState(null);
    useEffect(() => {
        onSnapshot(collection(store, "tasks"), (snapshot) => {
            let temp = [];
            snapshot.docs.forEach((doc) => {
                temp.push({...doc.data(), id: doc.id});
            });
            setTasks(temp);     
            // setTasks(snapshot.docs.map(doc => (doc.data())));
        });
    }, []);

    const setCompleted = (newId) => (setId(newId));

    return (
        <>
            <div className="header-task">
                <h1>TODO</h1>
                <div className="theme-box">
                    <FiSun />
                    <HiMoon />
                </div>
            </div>
            <AddComponent countTask={Tasks.length} />
            <ListComponent list={Tasks} completedItems={setCompleted} />
            <ConfigComponent numTasks={Tasks.length} completed={Id} />
            <div className="footer-task">
                <span>Drag and drop to reorder list</span>
            </div>
        </>
    )
}

export default App;
