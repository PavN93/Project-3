import "./App.css";
import Routed from "./routes/Routed";
import { useContext } from 'react';
import UserAuthContext from '../src/context/UserAuth';


function App() {

  // declare how many backgrounds there are for randomizing
  const bgAmount = 11;
  // Random background
  const bg = Math.floor(Math.random() * bgAmount) + 1;

  const { userLoggedIn, loginToggle } = useContext(UserAuthContext);

  // hit endpoint when component is mounted
  const addUserToDb = () => {
    (async () => {
      try {
        const response = await fetch('/api/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: 'Example',
            password: 'Blah',
            email: 'mail@mail.com',
            bio: 'about me',
            avatar: 'https://i.picsum.photos/id/778/200/200.jpg?hmac=fgFK_HI_g_N4MzYuYbssOB8ymhT_m0JK61tNJHfdPYU'
          })
        });
        const payload = await response.json();
        console.log(payload.message);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  return (
    <div
      className="backgroundImage"
      style={{ backgroundImage: `url(/bg-${bg}.jpg)` }}
    >
      <div className="pageContent">
        <Routed />
        <button onClick={addUserToDb}>Click to add user</button>
        {userLoggedIn ?
          (<>
            <p
              style={{ color: 'white' }}>Logged in - click to log out
            </p>
            <button onClick={loginToggle}>Log out</button>
          </>
          ) :
          (<>
            <p
              style={{ color: 'white' }}>Logged out - click to log in
            </p>
            <button onClick={loginToggle}>Log in</button>
          </>)
        }
      </div>
    </div>
  );
}

export default App;
