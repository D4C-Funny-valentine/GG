import { useSelector } from 'react-redux'
import useStartUpThemeSettingAction from './_action';

export const useStartUpThemeSetting = () => {
    const { changeMode } = useStartUpThemeSettingAction();

    const mode = useSelector((state) => state.theme.mode)

    return {
        changeMode,
        mode
    }
}

export { default as themeSettingReducer } from "./_reducer"