import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { isDesktop, isMobileOnly, isMobile, isTablet } from 'react-device-detect';

import useWindowDimensions from '../hooks/useWindowDimensions';
import '../css/effects.css';

const PromoSlider = props => {

    
    const { width, height } = useWindowDimensions(); 
    const sliderWidth = width * .95;
    const sliderHeight = height * .2;

    const [styles, setStyles] = useState({
        flex: 1,
                overflowX: 'scroll',
                overflowY: 'hidden',
                display: 'flex',
                flexDirection: 'row',
                width: 1055,
                // height: props.height,
                // mt: 5,
                p: 0,
                '* + *': {
                    marginLeft: 3
                }
    });


    useEffect(() => {
        if(width > 1055) {
            setStyles({
                flex: 1,
                overflowX: 'scroll',
                overflowY: 'hidden',
                display: 'flex',
                flexDirection: 'row',
                width: 1055,
                // height: props.height,
                // mt: 5,
                p: 0,
                '* + *': {
                    marginLeft: 3
                }
            })
        }
        if(width < 1055) {
            setStyles({
                flex: 1,
                overflowX: 'scroll',
                overflowY: 'hidden',
                display: 'flex',
                flexDirection: 'row',
                width: sliderWidth,
                // height: props.height,
                // mt: 5,
                p: 0,
                '* + *': {
                    marginLeft: 3
                }
            })
        }
    },[width])

    return (
        <Container className='blueGradientBg' sx={styles}>
            {props.children}
        </Container>
    )
}

export default PromoSlider;