import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const List = ({ list, completedItems }) => {
    const [List, setList] = useState(null);
    const [Completed, setCompleted] = useState([]);
    useEffect(() => {
        setList(list);
    }, [list]);
    useEffect(() => {
        completedItems(Completed);
    }, [Completed])

    const handleDrag = (result) => {
        const { source, destination } = result;
        if (!destination) return;
        if (destination.index === source.index
            && destination.droppableId === source.droppableId) return;
        setList(List => reorder(List, source.index, destination.index));
    }

    const reorder = (list, sourceIndex, destinationIndex) => {
        const result = [...list];
        const [removed] = result.splice(sourceIndex, 1);
        result.splice(destinationIndex, 0, removed);
        return result;
    }

    const updateCompleted = (e) => {
        if (!e.target.checked) {
            const index = Completed.indexOf(e.target.id);
            if (index > -1) {
                Completed.splice(index, 1);
            }
            return;
        }
        setCompleted([...Completed, e.target.id]);
    }
    return (

        List ?
            <DragDropContext onDragEnd={(result => handleDrag(result))}>
                <Droppable droppableId="task" key={List.lenght}>
                    {(droppableProvider) =>
                    (<div
                        {...droppableProvider.droppableProps}
                        ref={droppableProvider.innerRef}
                        className="list-task">
                        {
                            List.map((task, id) => (
                                <Draggable
                                    draggableId={task.index.toString()}
                                    index={id}
                                    key={task.id}>
                                    {(draggableProvider) => (
                                        <div
                                            {...draggableProvider.draggableProps}
                                            ref={draggableProvider.innerRef}
                                            {...draggableProvider.dragHandleProps}
                                            className="task-item">
                                            <label htmlFor={task.id}>{task.task}</label>
                                            <input
                                                type="checkbox"
                                                id={task.id}
                                                defaultChecked={task.completed}
                                                onChange={updateCompleted} />
                                        </div>
                                    )}
                                </Draggable>
                            ))
                        }
                        {droppableProvider.placeholder}
                    </div>)
                    }
                </Droppable>
            </DragDropContext>
            : null
    )
}

export default List;
