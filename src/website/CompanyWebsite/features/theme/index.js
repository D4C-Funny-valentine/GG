import { useSelector } from 'react-redux'
import useThemeSettingAction from './_action';

export const useThemeSetting = () => {
    const { changeMode } = useThemeSettingAction();

    const mode = useSelector((state) => state.theme.mode)

    return {
        changeMode,
        mode
    }
}

export { default as themeSettingReducer } from "./_reducer"