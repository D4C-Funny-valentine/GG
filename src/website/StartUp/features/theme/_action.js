import { useDispatch } from "react-redux"
import { changeThemeMode } from "./_reducer";

const useStartUpThemeSettingAction = () => {
    const dispatch = useDispatch();

    const changeMode = () => {
        dispatch(changeThemeMode())
    }

    return {
        changeMode
    }
}

export default useStartUpThemeSettingAction