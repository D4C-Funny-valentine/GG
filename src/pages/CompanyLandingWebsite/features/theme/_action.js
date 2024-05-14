import { useDispatch } from "react-redux"
import { changeThemeMode } from "./_reducer";

const useThemeSettingAction = () => {
    const dispatch = useDispatch();

    const changeMode = () => {
        dispatch(changeThemeMode())
    }

    return {
        changeMode
    }
}

export default useThemeSettingAction