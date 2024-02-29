import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./boards/loginpage.board.tsx";
import MtopNew2 from "./boards/mtop-new-2.board.tsx";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/loginpage.board.tsx" />
                <Route exact path="/mtop-new-2.board.tsx" />
            </Switch>
        </Router>
    )
}

export default App;