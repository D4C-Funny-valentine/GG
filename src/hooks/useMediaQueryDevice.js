import { useMediaQuery } from '@mui/material'

const useMediaQueryDevice = () => {
    const mobile = useMediaQuery('(max-width: 600px)');
    const tablet = useMediaQuery('(min-width: 900px)');

    return {
        mobile,
        tablet,
    }
}

export default useMediaQueryDevice