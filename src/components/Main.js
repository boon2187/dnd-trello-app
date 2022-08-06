import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import dummyData from "../dummyData";

const Main = () => {
    const [data, setData] = useState(dummyData);

    return(
        <DragDropContext>
            <div className="trello">
                {data.map((section) => (
                    <Droppable key={section.id} droppableId={section.id}>
                        {(provided) => 
                            <div className="trello-section" ref={provided.innerRef} {...provided.droppableProps}>
                                <div className="trello-sction-title">{section.title}</div>
                                <div className="trello-seciton-content">
                                    {section.tasks.map((task, index) => (
                                        <Draggable>
                                            <div>
                                                <Card></Card>
                                            </div>
                                        </Draggable>
                                    ))}
                                </div>       
                            </div>}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    )
};

export default Main;