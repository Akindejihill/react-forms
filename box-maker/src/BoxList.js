import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    /** used by the NewBoxForm component
     * adds a box description to the list 
     * of box descriptions in the 'boxes' state
    */
    const addBox = (box) => {
        setBoxes([...boxes, box]);
    };

    const removeBox = (id) => {
        setBoxes(boxes.filter((box) => box.id !== id));
    };

    /**
     * creates box components based on parameters in 'boxes' state
     */ 
    const renderBoxes = () => {
        return boxes.map((box) => (
            <Box
                key={box.id}
                id={box.id}
                width={box.width}
                height={box.height}
                backgroundColor={box.backgroundColor}
                removeBox={removeBox}
            />
        ));
    };

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );
};

export default BoxList;
