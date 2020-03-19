import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

//a. Basic Router
// export default function BasicExample(){
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">HOme</Link>
//           </li>
//           <li>
//             <Link to="/About">About</Link>
//           </li>
//           <li>
//             <Link  to="/Dashboard">Dashboard</Link>
//           </li>
//         </ul>
//       <hr />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/About">
//           <About />
//         </Route>
//         <Route path="/Dashboard">
//           <Dashboard />
//         </Route>
//       </Switch>
//       </div>
//       </Router>
//   );
// }
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }
// function About(){
//   return(
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }
// function Dashboard(){
//   return(
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }


//b. URL Paraeters
// export default function ParamsExample(){
//   return(
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/:id" children={<Child />} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Child(){
//   let { id } = useParams();

//   return(
//     <div>
//       <h3>ID: { id }</h3>
//     </div>
//   );
// }

//c. Use Nesting Router
// 

//d. Use Redirects(Auth)
// 

//tugas praktikum
export default function Tugas(){
  return(
    <Router>
      <div>
        <AuthButton />

        <ul>
          <li>
            <Link to="/home">Home page</Link>
          </li>
          <li>
            <Link to="/menu">Menu page</Link>
          </li>
        </ul>

      <hr />

        <Switch>
          <Route path="/home">
           <center> <HomePage /></center>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/menu">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authanticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button onClick={() =>{
        fakeAuth.signout(() => history.push("/"));
      }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>You Are Not Logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return(
    <Route 
      {...rest}
      render={({ location }) => 
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function HomePage(){
  return <h3>Welcome, Silahkan Login!</h3>;
}

function ProtectedPage(){
  return <h3>Menu</h3>;
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/"} };
  let login = () => {
    fakeAuth.authanticate(() => {
      history.replace(from);
    });
  };

  return(
    <div>
      <p>You Must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log In</button>
    </div>
  );
}