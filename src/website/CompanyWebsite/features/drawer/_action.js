import { useDispatch } from "react-redux";
import { openDrawer, closeDrawer } from "./_reducer";

const useDrawerAction = () => {
    const dispatch = useDispatch();

    const onOpenDrawer = () => (
        dispatch(openDrawer())
    )

    const onCloseDrawer = () => (
        dispatch(closeDrawer())
    )

    return {
        onOpenDrawer,
        onCloseDrawer
    }    
}

export default useDrawerAction