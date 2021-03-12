import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "./views/home/Home";

export const Routes = () => (
    <Switch>
        <Route path="/">
            <Home/>
        </Route>
    </Switch>
)