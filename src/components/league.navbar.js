import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, Box, Typography, Divider, Container, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { SportsBasketballOutlined, SportsBaseballOutlined, SportsFootballOutlined, SportsHockeyOutlined } from '@mui/icons-material';
import { isDesktop, isTablet, isMobile, isMobileOnly } from 'react-device-detect';
import { SET_LEAGUE } from '../redux/ui/ui.actions';


const LeagueNavbar = () => {

    const dispatch = useDispatch();
    const [navBoxHeight, setNavBoxHeight] = useState(null);

    const [nbaStyle, setNbaStyle] = useState({});
    const [nflStyle, setNflStyle] = useState({});
    const [mlbStyle, setMlbStyle] = useState({});
    const [nhlStyle, setNhlStyle] = useState({});
    
    const [active, setActive] = useState('nba');

    const selectLeague = league => {
        setActive(league);
        dispatch({type: SET_LEAGUE, payload: league});
    }

    useEffect(() => {
        if(isDesktop === true) {
            setNavBoxHeight('100%')
        }
        if(isTablet === true) {
            setNavBoxHeight(75)
        }
        if(isMobileOnly === true) {
            setNavBoxHeight(60)
        }
    },[])

    useEffect(() => {
        if(active === 'nba') {
            setNbaStyle({
                bgcolor: '#F0F3F8',
                color: '#339af0',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
            setNflStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
            setNhlStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center',
                mr: .2
            })
            setMlbStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
        }
        if(active === 'nfl') {
            setNbaStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
            setNflStyle({
                bgcolor: '#F0F3F8',
                color: '#339af0',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
            setNhlStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center',
                mr: .2
            })
            setMlbStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
        }
        if(active === 'nhl') {
            setNbaStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
            setNflStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
            setNhlStyle({
                bgcolor: '#F0F3F8',
                color: '#339af0',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center',
                mr: .2
            })
            setMlbStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
        }
        if(active === 'mlb') {
            setNbaStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
            setNflStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
            setNhlStyle({
                bgcolor: '#1864ab',
                color: '#F0F3F8',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center',
                mr: .2
            })
            setMlbStyle({
                bgcolor: '#F0F3F8',
                color: '#339af0',
                flex:1, 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            })
        }
    },[active])

    return (
      <>
        {
            isDesktop === true && isTablet === false &&
            <AppBar position='static' sx={{backgroundColor:'#1864ab', pl: 3, pr: 3, boxShadow: 0, cursor: 'pointer'}}>
                <Toolbar disableGutters sx={{
                    backgroundColor: '#339af0',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    '*': {
                        marginLeft: .2
                    }
                }}>  
                
                    <Box onClick={() => selectLeague('nba')} sx={{...nbaStyle, height: navBoxHeight}}>
                        <SportsBasketballOutlined />
                        <Typography>NBA</Typography>
                    </Box>

                    <Box onClick={() => selectLeague('nfl')} sx={{...nflStyle, height: navBoxHeight}}>
                        <SportsFootballOutlined />
                        <Typography>NFL</Typography>
                    </Box>

                    <Box onClick={() => selectLeague('mlb')} sx={{...mlbStyle, height: navBoxHeight}}>
                        <SportsBaseballOutlined />
                        <Typography>MLB</Typography>
                    </Box>

                    <Box onClick={() => selectLeague('nhl')} sx={{...nhlStyle, height: navBoxHeight}}>
                        <SportsHockeyOutlined />
                        <Typography>NHL</Typography>
                    </Box>

                </Toolbar>
            </AppBar>
        }
        {
            isMobile &&
            <AppBar position='static' sx={{backgroundColor:'#1864ab', pl: 3, pr: 3, boxShadow: 0}}>
                <Toolbar disableGutters sx={{
                    backgroundColor: '#339af0',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    '*': {
                        marginLeft: .2
                    }
                }}>  
                
                    <Box onClick={() => selectLeague('nba')} sx={{...nbaStyle, height: navBoxHeight}}>
                        <SportsBasketballOutlined />
                        <Typography>NBA</Typography>
                    </Box>

                    <Box onClick={() => selectLeague('nfl')} sx={{...nflStyle, height: navBoxHeight}}>
                        <SportsFootballOutlined />
                        <Typography>NFL</Typography>
                    </Box>

                    <Box onClick={() => selectLeague('mlb')} sx={{...mlbStyle, height: navBoxHeight}}>
                        <SportsBaseballOutlined />
                        <Typography>MLB</Typography>
                    </Box>

                    <Box onClick={() => selectLeague('nhl')} sx={{...nhlStyle, height: navBoxHeight}}>
                        <SportsHockeyOutlined />
                        <Typography>NHL</Typography>
                    </Box>

                    
                </Toolbar>
            </AppBar>
                        
        }
      </>
    )
}

export default LeagueNavbar;

















{/* <Divider orientation='vertical' light />
               <Box sx={{
                   display: 'flex',
                   flexDirection: 'row',
                //    bgcolor: '#F0F3F8'
               }}>
                   <SportsBasketballOutlined sx={{mr:.5}} />
                   <Typography>NBA</Typography>
               </Box>
               <Divider orientation='vertical' light />
               <Box sx={{
                   display: 'flex',
                   flexDirection: 'row'
               }}>
                   <SportsBaseballOutlined sx={{mr:.5}} />
                   <Typography>MLB</Typography>
               </Box>
               <Divider orientation='vertical' light />
               <Box sx={{
                   display: 'flex',
                   flexDirection: 'row'
               }}>
                   <SportsHockeyOutlined sx={{mr:.5}} />
                   <Typography>NHL</Typography>
               </Box>
               <Divider orientation='vertical' light />
               <Box sx={{
                   display: 'flex',
                   flexDirection: 'row'
               }}>
                   <SportsFootballOutlined sx={{mr:.5}} />
                   <Typography>NFL</Typography>
               </Box>
               <Divider orientation='vertical' light /> */}



            //    <AppBar position='static'>
            //     <BottomNavigation
            //                 value={value}
            //                 onChange={(event, newValue) => setValue(newValue)}
            //                 sx={{
            //                     backgroundColor: '#339af0'
            //                 }}
            //             >
                        
            //                 <BottomNavigationAction onClick={() => {}} showLabel label='NBA' icon={<SportsBasketballOutlined />} />
            //                 <BottomNavigationAction onClick={() => {}} showLabel label='MLB' icon={<SportsBaseballOutlined />} />
            //                 <BottomNavigationAction onClick={() => {}} showLabel label='NFL' icon={<SportsFootballOutlined />} />
            //                 <BottomNavigationAction onClick={() => {}} showLabel label='NHL' icon={<SportsHockeyOutlined />} />                            

            //      </BottomNavigation>
            // </AppBar>