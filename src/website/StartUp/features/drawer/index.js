import { useSelector } from "react-redux";
import useStartUpDrawerAction from "./_action";

export const useStartUpDrawer = () => {
    const { onOpenDrawer, onCloseDrawer } = useStartUpDrawerAction();

    const open = useSelector(state => state.drawer.open);

    return {
        onOpenDrawer,
        onCloseDrawer,
        open
    }
} 

export { default as startUpDrawerReducer } from "./_reducer"