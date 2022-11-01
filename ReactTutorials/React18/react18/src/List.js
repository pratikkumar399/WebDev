function List(props) {
    let items = props.items.map(item => <li>{item}</li>)
    return (
        <>
            <h3>{props.title}</h3>
            <ul>
                {items}
            </ul>
        </>
    )
}

export default List;