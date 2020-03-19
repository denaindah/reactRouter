import React, { Component } from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

export default function Produk(){
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/food">Food</Link>
                    </li>
                    <li>
                        <Link to="fashion">Fashion</Link>
                    </li>
                </ul>
                <hr />

                <Switch>
                    <Route path="/food">
                        <Food />
                    </Route>
                    <Route path="/fashion">
                        <Fashion />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Food(){
    let {path, url} = useRouteMatch();
    return(
        <div>
            <h2>Food</h2>
            <ul>
                <li>
                    <Link to={`${url}/Sate Ayam, Nasi Padang, Soto`}>Makanan</Link>
                </li>
                <li>
                    <Link to={`${url}/Es Teh, Jus, Es Jeruk`}>Minuman</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Select item</h3>
                </Route>
                <Route path={`${path}/:topicTd`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Fashion(){
    let{path, url} = useRouteMatch();
    return(
        <div>
            <h2>Fashion</h2>
            <ul>
                <li>
                <Link to={`${url}/Kemeja, Jaket Jeans, Rok`}>Pakaian</Link>
                </li>
                <li>
                <Link to={`${url}/Pashmina, Segi Empat, Saudia`}>Hijab</Link>
                </li>
                <li>
                <Link to={`${url}/Adidas, Nike, Vans`}>Sepatu</Link>
                </li>
            </ul>
        <Switch>
            <Route exact path={path}>
                <h3>Select item</h3>
            </Route>
            <Route path={`${path}/:topicId`}>
                <Topic />
            </Route>
        </Switch>
        </div>
    );
}

function Topic(){
    let {topicId} = useParams();

    return(
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}