import styles from "../styles";

const Task = (props) => {
    const handleCompleteTask = () => {
        props.completeTask(props.id);
    };

    const handleUncompleteTask = () => {
        props.uncompleteTask(props.id);
    };

    const handleDeleteTask = () => {
        props.deleteTasks(props.id);
    };

    return (
        <div>
            <h1 className={props.completed ? styles.style1Completed : styles.style1}>
                {props.completed ? <s>{props.taskName}</s> : props.taskName}
            </h1>
            {props.completed ? (
                <button className={styles.style4} onClick={handleUncompleteTask}>
                    Uncomplete
                </button>
            ) : (
                <button className={styles.style4} onClick={handleCompleteTask}>
                    Complete
                </button>
            )}
            <button className={styles.style4} onClick={handleDeleteTask}>
                X
            </button>
        </div>
    );
};

export default Task;
