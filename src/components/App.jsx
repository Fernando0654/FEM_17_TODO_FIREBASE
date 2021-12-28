import React from 'react';
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";
// Styles
import "../sass/index.scss";

const App = () => {
    return (
        <>
            <div className="header-task">
                <h1>TODO</h1>
                <div className="theme-box">
                    <FiSun />
                    <HiMoon />
                </div>
                <div className="add-task">
                    <label htmlFor="task">Currently typing</label>
                    <input type="text" name="task" id="task" placeholder="Type Something..." />
                </div>
                <div className="list-task">
                    <div className="task-item">
                        <label htmlFor="task-1">Task 1</label>
                        <input type="checkbox" id="task-1" />
                    </div>
                    <div className="task-item">
                        <label htmlFor="task-2">Task 2</label>
                        <input type="checkbox" id="task-2" />
                    </div>
                    <div className="task-item">
                        <label htmlFor="task-3">Task 3</label>
                        <input type="checkbox" id="task-3" />
                    </div>
                    <div className="task-item">
                        <label htmlFor="task-4">Task 4</label>
                        <input type="checkbox" id="task-4" />
                    </div>
                </div>
                <div className="config-task">
                    <div className="counting-items">
                        <span>5 Items left</span>
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