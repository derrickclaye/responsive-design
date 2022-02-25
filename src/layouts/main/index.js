import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { isMobileOnly, isDesktop, isTablet, isMobile } from 'react-device-detect';


// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery, BottomNavigation, BottomNavigationAction, Typography, Avatar } from '@mui/material';
import { Home, Favorite, GroupTwoTone, FormatListBulletedTwoTone, CalendarTodayOutlined, BoltOutlined, MonetizationOnOutlined } from '@mui/icons-material';

import Header from '../../components/header.component';
import Footer from '../../components/footer.component';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import '../../css/effects.css';

const MainLayout = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const { width, height } = useWindowDimensions();
    const [middleStyles, setMiddleStyles] = useState({});
    const [wingStyles, setWingStyles] = useState({});

    const navigateTo = path => {
        navigate(path);
    }

    useEffect(() => {
        if(width > 1055) {
            const wingWidth = (width - 1055) / 2;
            setMiddleStyles({
                width: 1055,
                backgroundColor: '#F0F3F8',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'scroll'

            })
            setWingStyles({
                width: wingWidth,
                backgroundColor: 'blue'

            })
        }
        if(width < 1055) {
            setMiddleStyles({
                flex: 1,
                backgroundColor: '#F0F3F8',
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'scroll'
            })
            setWingStyles({
                flex: 0,
                backgroundColor: 'blue'
            })
        }
    }, [width])


    
    return (
        <Box sx={{ display: 'flex', width: {width}, height: {height}}}>
            <CssBaseline />
            {
                isMobileOnly === true && isTablet === false && isDesktop === false && 
                <>
                    <Box sx={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        overflowX: 'auto'
                    }}>
                        <Box className='blueGradientBg' sx={{
                            backgroundColor:'#339af0', 
                            flex: .5, 
                            textAlign: 'center'
                        }}>
                            <Typography sx={{mt:1.5, color:'white'}}>LOGO</Typography>
                        </Box>
                        <Box sx={{backgroundColor:'#F0F3F8', flex: 5, overflowY: 'scroll'}}>
                            <Outlet />
                        </Box>
                        <Box sx={{flex: .5}}>
                        <BottomNavigation
                            value={value}
                            onChange={(event, newValue) => setValue(newValue)}
                            
                        >
                        
                            <BottomNavigationAction onClick={() => navigateTo('lobby')} showLabel label='Lobby' icon={<FormatListBulletedTwoTone />} />
                            <BottomNavigationAction onClick={() => navigateTo('upcoming')} showLabel label='Upcoming' icon={<CalendarTodayOutlined />} />
                            <BottomNavigationAction onClick={() => navigateTo('live')} showLabel label='Live' icon={<BoltOutlined />} />
                            <BottomNavigationAction onClick={() => navigateTo('friends')} showLabel label='Friends' icon={<GroupTwoTone />} />
                            <BottomNavigationAction onClick={() => navigateTo('lobby')} showLabel label='Account' icon={<MonetizationOnOutlined />} />
                            

                        </BottomNavigation>
                        </Box>

                    </Box>
                </>
            }
            {
                isDesktop === true && isMobile === false &&
                <>
                    <Box sx={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <Box sx={wingStyles}></Box>
                        <Box sx={middleStyles}>
                            <Header />
                            <Outlet />
                            <Footer />
                        </Box>
                        <Box sx={wingStyles}></Box>
                        

                    </Box>
                </>
            }
            {
                isTablet === true &&
                <>
                    <Box sx={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor:'#F0F3F8',
                        overflowX: 'auto'
                    }}>
                        <Header />
                        <Outlet /> 
                        <Footer />        
                    </Box>
                </>
            }
        </Box>
    )
}

export default MainLayout;