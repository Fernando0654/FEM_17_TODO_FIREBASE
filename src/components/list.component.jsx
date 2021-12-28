import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const List = ({ list }) => {
    const [List, setList] = useState(null);
    useEffect(() => {
        setList(list);
    }, [list]);

    const handleDrag = (result) => {
        const { source, destination } = result;
        if (!destination) return;
        if (destination.index === source.index
            && destination.droppableId === source.droppableId) return;
        setList( List => reorder(List, source.index, destination.index));
    }

    const reorder = (list, sourceIndex, destinationIndex) => {
        const result = [...list];
        const [removed] = result.splice(sourceIndex, 1);
        result.splice(destinationIndex, 0, removed);
        return result;
    }
    return (
        List ?
            <DragDropContext onDragEnd={(result => handleDrag(result))}>
                <Droppable droppableId="task">
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
                                    key={task.index}>
                                    {(draggableProvider) => (
                                        <div
                                            {...draggableProvider.draggableProps}
                                            ref={draggableProvider.innerRef}
                                            {...draggableProvider.dragHandleProps}
                                            className="task-item">
                                            <label htmlFor="task-1">{task.task}</label>
                                            <input type="checkbox" id="task-1" />
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
