const Box = (props) => {
    const removeBox = () => {
        props.removeBox(props.id);
    };

    return (
        <div style={{backgroundColor: props.backgroundColor, width: `${props.width}px`, height: `${props.height}px` }} >
            <button onClick={removeBox}>X</button>
        </div>
    );
};

export default Box;
