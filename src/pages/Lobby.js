import { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box, Grid } from '@mui/material';
import AvailableContestsContext from '../contexts/available.contest.context';
import PromoSlider from '../components/promo.slider.component';
import LeagueNavbar from '../components/league.navbar';
import AvailableContests from '../components/available.contests';
import Promo1 from '../assets/images/promo1.png';
import Promo2 from '../assets/images/promo2.png';

import useWindowDimensions from '../hooks/useWindowDimensions';
import { isDesktop, isMobileOnly, isTablet } from 'react-device-detect';
import '../css/effects.css';



const Lobby = () => {

    const league = useSelector(state => state.ui.league);
    const { width, height } = useWindowDimensions();
    const [ promoContainerStyles, setPromoContainerStyles ] = useState({});
    const [ contests, setContests] = useState(null);

    useEffect(() => {
        async function getAvailableContests() {
            try {
                const res = await fetch("http://localhost:3000/users/potatoes");
                if(res.status === 201) {
                    const data = await res.json();
                    setContests(data);
                    return
                } else setContests(null);
                
            } catch(err) {
                setContests(null);
            }
        }

        getAvailableContests();
        
    },[league])

    useEffect(() => {
        if(isDesktop) {
            setPromoContainerStyles({
                height: 190,
                backgroundColor: '#339af0',
                display: 'flex',
                padding: 3,
                justifyContent: 'center',
                alignItems: 'center'
            })
          
        }
        if(isMobileOnly) {
            setPromoContainerStyles({
                height: 144,
                backgroundColor: '#339af0',
                padding: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            })
       
        }
        if(isTablet) {
            setPromoContainerStyles({
                height: 190,
                backgroundColor: '#339af0',
                padding: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            })
          
        }
    },[width])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <Box className='blueGradientBg' sx={promoContainerStyles}>
                <PromoSlider>
                    <img height={110} minWidth={300} src={Promo1} alt='pic' />
                    <img height={110} minWidth={270} src={Promo1} alt='pic' />
                    <img height={110} minWidth={270} src={Promo1} alt='pic' />
                    <img height={110} minWidth={270} src={Promo1} alt='pic' />
                    <img height={110} minWidth={270} src={Promo1} alt='pic' />
                    <img height={110} minWidth={270} src={Promo1} alt='pic' />
                    <img height={110} minWidth={270} src={Promo1} alt='pic' />
                    <img height={110} minWidth={270} src={Promo1} alt='pic' />

                    {/* <Box sx={{backgroundColor: 'black', height: 140, minWidth: 250, borderRadius: 2}}></Box>
                    <Box sx={{backgroundColor: 'black', height: 140, minWidth: 250, borderRadius: 2}}></Box>
                    <Box sx={{backgroundColor: 'black', height: 140, minWidth: 250, borderRadius: 2}}></Box>
                    <Box sx={{backgroundColor: 'black', height: 140, minWidth: 250, borderRadius: 2}}></Box>
                    <Box sx={{backgroundColor: 'black', height: 140, minWidth: 250, borderRadius: 2}}></Box>
                    <Box sx={{backgroundColor: 'black', height: 140, minWidth: 250, borderRadius: 2}}></Box> */}
                </PromoSlider>
            </Box>
            
             <LeagueNavbar />
             <AvailableContestsContext.Provider value={contests}>
                 <AvailableContests />
             </AvailableContestsContext.Provider>
             
            
        </Box>

    )
}

export default Lobby;