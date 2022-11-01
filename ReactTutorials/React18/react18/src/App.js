import Navbar from './Navbar'
import List from './List'
function App() {
    const guitars = ['Gui1', 'Gui2', 'Gui3'];
    return (
        <>
            <Navbar title="lots of components" />
            <div className="container">
                <List
                    title='Guitars'
                    items={guitars}
                />
            </div>

        </>
    )
}

export default App;