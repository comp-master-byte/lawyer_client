import { fetchUser } from "features/user/model/async-actions";
import { userSlice } from "features/user/model/userSlice";
import { useEffect, useRef } from "react"
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";

export const useCabinetLayout = () => {
    const dispatch = useAppDispatch();

    const websocket = useRef<WebSocket>();

    const {user} = useTypedSelector(state => state.userSlice);

    const {setUser} = userSlice.actions;


    useEffect(() => {
        const user = localStorage.getItem('user');

        if(!user) {
            dispatch(fetchUser());
            return;
        } 

        const parsedUser = JSON.parse(user);
        dispatch(setUser(parsedUser));
    }, [])

    useEffect(() => {
        if(user?.is_lawyer && !user?.is_lawyer_confirmed) {
            websocket.current = new WebSocket(`wss://backend.juraprav.ru/ws/account/lawyer_status_confirmation/${user.id}`);
    
            websocket.current.onopen = function() {
                console.log("Соединение установлено");
            }

            websocket.current.onmessage = function(event) {
                const response = JSON.parse(event.data);
                const is_lawyer_confirmed = response.is_lawyer_confirmed;
                const confirmedUser = {
                    ...user,
                    is_lawyer_confirmed
                }
                dispatch(setUser(confirmedUser));
                const toStringConfirmedUser = JSON.stringify(confirmedUser);
                localStorage.setItem('user', toStringConfirmedUser);
            }
            
            websocket.current.onclose = function() {
                // close
            }
        }
    }, [user])
}