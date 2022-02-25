import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Dialog, DialogTitle, Button } from '@mui/material';
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

    const navigate = useNavigate();
    const league = useSelector(state => state.ui.league);
    const { width, height } = useWindowDimensions();
    const [ promoContainerStyles, setPromoContainerStyles ] = useState({});
    const [ contests, setContests] = useState(null);


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
    
    if(!sessionStorage.getItem('read')) return ( 
        <Box sx={{p:4}}>
            <Typography sx={{mb:1}}>Summary</Typography>
            <Typography sx={{mb:1}}>
                Hi! Welcome to my responsive web design demonstration. The purpose of this
                demonstration is to highlight some of my front-end development skills. 
                What you're going to see is a mock fantasy sports website. All navigation links work, 
                but for the purpose of this demo only the Lobby page has meaningful content on it. 
                What you will notice is how the content adapts seemlessly to any window size or
                device type.<br></br><br></br>You can view my source code <a href='https://github.com/derrickclaye/sample-fantasy'>here</a>.
            </Typography>
            <Button  variant='outlined' onClick={() => {
                sessionStorage.setItem('read', true);
                navigate('/lobby');
            }}>Enter Lobby</Button>
        </Box>
    )
  

   

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
        
             <AvailableContests />
         
             
            
        </Box>

    )
}

export default Lobby;