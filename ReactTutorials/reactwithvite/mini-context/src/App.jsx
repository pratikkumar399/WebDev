import UserContextProvider from './userContext/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider >
      <h1>Context</h1>

      <Login />
      <Profile />
      {/* lets do routing */}
    </UserContextProvider>
  )
}

export default App
