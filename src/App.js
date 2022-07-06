import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ChatRoom from './components/ChatRoom';
import Login from './components/Login';
import AddRoomModal from './components/Modals/AddRoomModal';
import AppProvider from './Context/AppProvider';
import AuthProvider from './Context/AuthProvider';
function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <Switch>
                        <Route component={Login} path="/login"></Route>
                        <Route component={ChatRoom} path="/"></Route>
                    </Switch>
                    <AddRoomModal/>
                </AppProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
