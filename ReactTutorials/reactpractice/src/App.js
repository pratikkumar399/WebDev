// import logo from './logo.svg';
// import './App.css';

import Card from './components/Card'
import Profile from './components/Profile'


function App() {
  return (
    <>
      <Card>
        <Profile
          size={{
            height: 200,
            width: 200
          }}
          person={{
            name: "Katherine",
            id: 'YfeOqp2.jpg'
          }
          }
        />
        <br />
        <Profile
          size={{
            height: 200,
            width: 200
          }}
          person={{
            name: "Katherine",
            id: 'YfeOqp2.jpg'
          }
          }
        />
      </Card>
    </>

  );
}

export default App;
