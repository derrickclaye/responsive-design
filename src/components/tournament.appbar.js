import { AppBar, Toolbar, Typography, Box, Divider, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { isDesktop, isTablet, isMobile, isMobileOnly } from 'react-device-detect';
import useWindowDimensions from '../hooks/useWindowDimensions';

import '../css/effects.css';






const TournamentAppbar = () => {

    const { width } = useWindowDimensions();

    return (
        <>
            {
                isDesktop === true && isTablet === false && width > 850 &&
                <AppBar className='selection' position='static' sx={{bgcolor: 'white', mt:4,  cursor: 'pointer'}}>
                    <Toolbar sx={{display: 'flex', flexDirection: 'row', color: '#818E95', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <Box>   
                                <Typography sx={{fontWeight:'bold', color: '#30cf1b'}}>$20 ENTRY</Typography>
                                <Typography sx={{fontSize: 12, color: '#818E95'}}>multi entry</Typography>
                            </Box>
                            <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                            <Box>   
                                <Typography sx={{fontWeight:'600', color: '#1493FF', cursor: 'pointer', textAlign: 'center'}}>NBA Shooters Shoot Tourney</Typography>
                                <Typography sx={{fontSize: 12, color: '#1493FF', textAlign: 'center'}}>2/20 - 2/22</Typography>
                            </Box>
                            <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                            <Box>   
                                <Typography sx={{color: '#6d706d', textAlign: 'center', fontSize: 12, fontWeight: '600'}}>  WINNERS SPLIT PRIZE</Typography>
                                <Typography sx={{fontSize: 12, fontWeight:'bold', color: '#30cf1b', cursor: '', textAlign: 'center'}}>Current prize pot: $560</Typography>
                            </Box>
                            <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                        </Box>
                    
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <Typography sx={{color: '#1493FF', fontWeight: 'bold', fontSize: 13 }}>ENTER TOURNAMENT</Typography>
                            <ArrowForwardIosIcon sx={{color: '#1493FF'}} fontSize='small' />
                        </Box>
                    </Toolbar>
                </AppBar>
            }
            {
                isDesktop === true && isTablet === false && width < 850 &&
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <AppBar className='selection' position='static' sx={{bgcolor: 'white', cursor: 'pointer'}}>
                        <Toolbar sx={{display: 'flex', flexDirection: 'row', color: '#818E95', justifyContent: 'space-between'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                <Box>   
                                    <Typography sx={{fontWeight:'bold', color: '#30cf1b', fontSize: 16}}>$20</Typography>
                                    <Typography sx={{fontSize: 14, color: '#818E95'}}>(m / mw)</Typography>
                                </Box>
                                <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                                <Box>   
                                    <Typography sx={{fontWeight:'600', color: '#1493FF', cursor: 'pointer', textAlign: 'center', fontSize: 12}}>NBA Shooters Shoot Tourney</Typography>
                                    <Typography sx={{fontSize: 12, color: '#1493FF', textAlign: 'center'}}>2/20 - 2/22</Typography>
                                    <Typography sx={{fontWeight:'600', fontSize: 12, color: '#30cf1b', textAlign: 'center'}}>Current prize: $560</Typography>
                                
                                    {/* <Typography sx={{fontSize: 14, fontWeight:'bold', color: '#30cf1b', cursor: '', textAlign: 'center'}}>prize: $560</Typography>
                                    <Typography sx={{fontSize: 14, color: '#818E95', textAlign: 'center' }}>(mw)</Typography> */}
                                </Box>
                                <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                            </Box>
                        
                            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{color: '#1493FF', fontWeight: 'bold', fontsize:13}}>Enter Tournament</Typography>
                                <ArrowForwardIosIcon sx={{color: '#1493FF'}} fontSize='small' />
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Divider light={true} />
                </Box>
            }
            {
                isTablet === true &&
                <AppBar className='selection' position='static' sx={{bgcolor: 'white', mt:4,  cursor: 'pointer'}}>
                    <Toolbar sx={{display: 'flex', flexDirection: 'row', color: '#818E95', justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <Box>   
                                <Typography sx={{fontWeight:'bold', color: '#30cf1b', fontSize: 16}}>$20 ENTRY</Typography>
                                <Typography sx={{fontSize: 14, color: '#818E95'}}>multi entry</Typography>
                            </Box>
                            <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                            <Box>   
                                <Typography sx={{fontWeight:'600', color: '#1493FF', cursor: 'pointer', textAlign: 'center', fontSize: 16}}>NBA Shooters Shoot Tourney</Typography>
                                <Typography sx={{fontSize: 14, color: '#1493FF', textAlign: 'center'}}>2/20 - 2/22</Typography>
                            </Box>
                            <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                            <Box>   
                                <Typography sx={{color: '#6d706d', textAlign: 'center', fontSize: 16, fontWeight: '600'}}>  WINNERS SPLIT PRIZE</Typography>
                                <Typography sx={{fontSize: 14, fontWeight:'bold', color: '#30cf1b', cursor: '', textAlign: 'center'}}>Current prize pot: $560</Typography>
                            </Box>
                            <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                        </Box>
                    
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <ArrowForwardIosIcon sx={{color: '#1493FF'}} fontSize='small' />
                        </Box>
                    </Toolbar>
                </AppBar>
            }
            {
                isMobileOnly === true && isTablet === false &&
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <AppBar className='selection' position='static' sx={{bgcolor: 'white', cursor: 'pointer'}}>
                        <Toolbar sx={{display: 'flex', flexDirection: 'row', color: '#818E95', justifyContent: 'space-between'}}>
                            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                <Box>   
                                    <Typography sx={{fontWeight:'bold', color: '#30cf1b', fontSize: 16}}>$20</Typography>
                                    <Typography sx={{fontSize: 14, color: '#818E95'}}>(m / mw)</Typography>
                                </Box>
                                <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                                <Box>   
                                    <Typography sx={{fontWeight:'600', color: '#1493FF', cursor: 'pointer', textAlign: 'center', fontSize: 12}}>NBA Shooters Shoot Tourney</Typography>
                                    <Typography sx={{fontSize: 12, color: '#1493FF', textAlign: 'center'}}>2/20 - 2/22</Typography>
                                    <Typography sx={{fontWeight:'600', fontSize: 12, color: '#30cf1b', textAlign: 'center'}}>Current prize: $560</Typography>
                                
                                    {/* <Typography sx={{fontSize: 14, fontWeight:'bold', color: '#30cf1b', cursor: '', textAlign: 'center'}}>prize: $560</Typography>
                                    <Typography sx={{fontSize: 14, color: '#818E95', textAlign: 'center' }}>(mw)</Typography> */}
                                </Box>
                                <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                            </Box>
                        
                            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                <ArrowForwardIosIcon sx={{color: '#1493FF'}} fontSize='small' />
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Divider light={true} />
                </Box>
                
            }
        </>
    )
}

export default TournamentAppbar;