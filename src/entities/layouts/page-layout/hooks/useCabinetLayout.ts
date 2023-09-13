import { fetchUser } from "features/user/model/async-actions";
import { userSlice } from "features/user/model/userSlice";
import { useEffect, useRef } from "react"
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";

export const useCabinetLayout = () => {
    const dispatch = useAppDispatch();

    const websocket = useRef<WebSocket>();

    const {user} = useTypedSelector(state => state.userSlice);


    useEffect(() => {
        const user = localStorage.getItem('user');

        if(!user) {
            dispatch(fetchUser());
            return;
        } 

        const parsedUser = JSON.parse(user);
        dispatch(userSlice.actions.setUser(parsedUser))
    }, [])

    useEffect(() => {
        if(user?.is_lawyer && !user?.is_lawyer_confirmed) {
            // websocket.current = new WebSocket(`wss://backend.juraprav.ru/ws/account/lawyer_status_confirmation/${user}`,);
    
            // websocket.current.onopen = function() {
            //     console.log("Соединение установлено");
            // }

            // websocket.current.onmessage = function(event) {
            //     console.log(event);
            // }
        }
    }, [user])
}