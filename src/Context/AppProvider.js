import React, { useState } from 'react';
import useFireStore from '../hooks/useFireStore';
import { AuthContext } from './AuthProvider';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
    const [selectedRoomId, setSelectedRoomId] = useState('');
    const {
        user: { uid },
    } = React.useContext(AuthContext);

    const roomsCondition = React.useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        };
    }, [uid]);
    // roomCondition chỉ bị thay đổi khi uid bị thay đổi
    const rooms = useFireStore('rooms', roomsCondition);

    const selectedRoom = React.useMemo(() => 
        rooms.find((room) => room.id === selectedRoomId )|| {},
    [rooms, selectedRoomId]);
    
    const usersCondition = React.useMemo(() => {
        return {
            fieldName: 'uid',
            operator: 'in',
            compareValue: selectedRoom.members,
        };
    }, [selectedRoom.members]);
    const members = useFireStore('users',usersCondition);
    console.log(members);
    return (
        <AppContext.Provider
            value={{
                rooms,
                isAddRoomVisible,
                setIsAddRoomVisible,
                selectedRoomId,
                selectedRoom,
                setSelectedRoomId,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
