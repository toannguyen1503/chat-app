import React from 'react';
import useFireStore from '../hooks/useFireStore';
import { AuthContext } from './AuthProvider';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
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
    console.log({ rooms });
    return (
        <AppContext.Provider value={{ rooms }}>{children}</AppContext.Provider>
    );
}
