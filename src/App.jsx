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
import MsgComponent from "./components/msg.component";
// Img
import HeaderDarkMobile from "./assets/img/bg-mobile-dark.jpg";
import HeaderDarkDesktop from "./assets/img/bg-desktop-dark.jpg";
import HeaderLightMobile from "./assets/img/bg-mobile-light.jpg";
import HeaderLightDesktop from "./assets/img/bg-desktop-light.jpg";

const App = () => {
    const [Tasks, setTasks] = useState([]);
    const [TasksAll, setTasksAll] = useState([]);
    const [Theme, setTheme] = useState("dark");
    const [Id, setId] = useState(null);
    const [CurrentFilter, setCurrentFilter] = useState("");
    const [Msg, setMsg] = useState(null);
    useEffect(() => {
        onSnapshot(collection(store, "tasks"), (snapshot) => {
            let temp = [];
            snapshot.docs.forEach((doc) => {
                temp.push({ ...doc.data(), id: doc.id });
            });
            setTasks(temp);
            setTasksAll(temp);
        });
    }, []);

    const setCompleted = (newId) => setId(newId);

    const changeTheme = (newTheme) => setTheme(newTheme);

    const getAllTasks = () => setTasks(TasksAll);

    const getActiveTasks = (activeTasks) => setTasks(activeTasks);

    const getCompletedTasks = (completedTasks) => setTasks(completedTasks);

    return (
        <>
            <img src={HeaderDarkDesktop} className="img-dark-desktop" alt="desktop header dark" />
            <img src={HeaderDarkMobile} className="img-dark-mobile" alt="mobile header dark" />
            <img src={HeaderLightDesktop} className="img-light-desktop" alt="desktop header light" />
            <img src={HeaderLightMobile} className="img-light-mobile" alt="mobile hader light" />
            <div className={"content " + Theme}>
                <HeaderComponent changeTheme={changeTheme} />
                <AddComponent countTask={Tasks.length} />
                <MsgComponent />
                <ListComponent list={Tasks} completedItems={setCompleted} msg={Msg} />
                <ConfigComponent
                    numTasks={Tasks.length}
                    completed={Id}
                    staticTasks={TasksAll}
                    getAll={getAllTasks}
                    getActive={getActiveTasks}
                    getCompleted={getCompletedTasks} />
                <FooterComponent />
            </div>
        </>
    )
}

export default App;
