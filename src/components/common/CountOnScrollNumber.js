import React from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import { Heading } from '../UI';
import CountUp from 'react-countup';
import { isDecimal } from '../../utils/calculation';

const CountOnScrollNumber = ({n, unit = ""}) => {
    const [isScroll,setIsScroll] = React.useState(false);

    const onEnter = () => setIsScroll(true);
    const onExit = () => setIsScroll(false);

    return (
        <ScrollTrigger onEnter={onEnter} onExit={onExit}>
            { isScroll &&  <Heading variant='h1'>
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