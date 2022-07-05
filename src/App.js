import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <Route component={Login} path="/login"></Route>
                    <Route component={ChatRoom} path="/"></Route>
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
