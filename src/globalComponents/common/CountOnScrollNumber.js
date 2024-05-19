import React from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import Heading from '../ui/Heading';
import { isDecimal } from '../../utils/calculation';

const CountOnScrollNumber = ({n, unit = "", variant = 'h1', color}) => {
    const [isScroll,setIsScroll] = React.useState(false);

    const onEnter = () => setIsScroll(true);
    const onExit = () => setIsScroll(false);

    return (
        <ScrollTrigger onEnter={onEnter} onExit={onExit}>
            { isScroll &&  <Heading variant={variant} color={color}>
                <CountUp 
                    start={0}
                    end={n}
                    duration={2.75}
                    decimals={isDecimal(n) ? 1 : undefined}
                    decimal=","
                />
                {unit}
            </Heading> }
        </ScrollTrigger>
    )
}

export default CountOnScrollNumber