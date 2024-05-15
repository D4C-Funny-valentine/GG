import { useSelector } from "react-redux";
import useDrawerAction from "./_action";

export const useDrawer = () => {
    const { onOpenDrawer, onCloseDrawer } = useDrawerAction();

    const open = useSelector(state => state.drawer.open);

    return {
        onOpenDrawer,
        onCloseDrawer,
        open
    }
} 

export { default as drawerReducer } from "./_reducer"