import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import dummyData from "../dummyData";

const Main = () => {
    const [data, setData] = useState(dummyData);

    return(
        <DragDropContext>
            <div className="trello">
                {data.map((section) => (
                    
                ))}
            </div>
        </DragDropContext>
    )
};

export default Main;