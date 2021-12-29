import React, { useEffect, useState } from "react";
// Styles
import "./sass/index.scss";
// Firestore
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import store from "./firebase/firebase.config";
// Components
import AddComponent from "./components/add.component";
import ListComponent from "./components/list.component";
import ConfigComponent from "./components/config.component";
import HeaderComponent from "./components/header.component";
import FooterComponent from "./components/footer.component";

const App = () => {
    const [Tasks, setTasks] = useState([]);
    const [Id, setId] = useState(null);
    useEffect(() => {
        onSnapshot(collection(store, "tasks"), (snapshot) => {
            let temp = [];
            snapshot.docs.forEach((doc) => {
                temp.push({ ...doc.data(), id: doc.id });
            });
            setTasks(temp);
            // setTasks(snapshot.docs.map(doc => (doc.data())));
        });
    }, []);

    const setCompleted = (newId) => (setId(newId));

    return (
        <>
            <HeaderComponent />
            <AddComponent countTask={Tasks.length} />
            <ListComponent list={Tasks} completedItems={setCompleted} />
            <ConfigComponent numTasks={Tasks.length} completed={Id} />
            <FooterComponent />
        </>
    )
}

export default App;
