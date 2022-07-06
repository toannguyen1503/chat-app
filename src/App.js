import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import AppProvider from './Context/AppProvider';
function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <Switch>
                        <Route component={Login} path="/login"></Route>
                        <Route component={ChatRoom} path="/"></Route>
                    </Switch>
                </AppProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
