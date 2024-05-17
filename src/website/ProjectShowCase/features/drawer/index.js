import { useSelector } from "react-redux";
import useProjectShowCaseDrawerAction from "./_action";

export const useProjectShowCaseDrawer = () => {
    const {onCloseDrawer, onOpenDrawer} = useProjectShowCaseDrawerAction();

    const open = useSelector(state => state.drawer.open);

    return {
        onOpenDrawer,
        onCloseDrawer,
        open
    }
} 

export { default as projectShowCaseDrawerReducer } from "./_reducer"