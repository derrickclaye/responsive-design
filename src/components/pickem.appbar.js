import { AppBar, Toolbar, Typography, Box, Divider, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { isDesktop, isTablet, isMobile, isMobileOnly } from 'react-device-detect';
import useWindowDimensions from '../hooks/useWindowDimensions';
import '../css/effects.css';






const PickemAppbar = () => {

    const { width } = useWindowDimensions();
    
    return (
        <>
        {
            isDesktop === true && isTablet === false && width > 850 &&
            <AppBar className='selection press' position='static' sx={{bgcolor: 'white', mt:4,  cursor: 'pointer'}}>
                <Toolbar sx={{display: 'flex', flexDirection: 'row', color: '#818E95', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Box>   
                            <Typography sx={{fontWeight:'bold', color: '#30cf1b'}}>$5 ENTRY</Typography>
                            <Typography sx={{fontSize: 12, color: '#818E95'}}>multi entry / unique</Typography>
                        </Box>
                        <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                        <Box>   
                            <Typography sx={{fontWeight:'600', color: '#1493FF', cursor: 'pointer', textAlign: 'center'}}>NBA Pick 6</Typography>
                            <Typography sx={{fontSize: 12, color: '#1493FF', textAlign: 'center'}}>(create a linuep consisting of 6 players)</Typography>
                        </Box>
                        <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                        <Box>   
                            <Typography sx={{color: 'white', textAlign: 'center', bgcolor: '#6d706d', p:.5, display: 'inline', borderRadius: 2, fontSize: 12, fontWeight: '600'}}>$45 Prize</Typography>
                            <Typography sx={{color: '#6d706d', textAlign: 'center', display: 'inline', borderRadius: 2, fontSize: 12, fontWeight: '600'}}>  WINNER TAKES ALL</Typography>
                            <Typography sx={{fontSize: 12, color: '#6d706d', cursor: '', textAlign: 'center'}}>(Room size: 10 contestants)</Typography>
                        </Box>
                        <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                    </Box>
                
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Typography sx={{color: '#1493FF', fontWeight: 'bold', fontSize: 13 }}>ENTER ROOM</Typography>
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
                                <Typography sx={{fontWeight:'bold', color: '#30cf1b', fontSize: 16}}>$5</Typography>
                                <Typography sx={{fontSize: 14, color: '#818E95'}}>(m / u)</Typography>
                            </Box>
                            <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                            <Box>   
                                <Typography sx={{fontWeight:'600', color: '#1493FF', cursor: 'pointer', textAlign: 'center'}}>NBA Pick 6</Typography>
                                <Typography sx={{fontSize: 14, color: '#1493FF', textAlign: 'center'}}>12 - 22</Typography>
                            </Box>
                            <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                            <Box>   
                                <Typography sx={{color: '6d706d', textAlign: 'center', fontSize: 14, fontWeight: '600'}}>$45 Prize</Typography>
                                {/* <Typography sx={{color: '#6d706d', textAlign: 'center', display: 'inline', borderRadius: 2, fontSize: 12, fontWeight: '600'}}>  WINNER TAKES ALL</Typography> */}
                                <Typography sx={{fontSize: 14, color: '#818E95', cursor: '', textAlign: 'center'}}>(w)</Typography>
                            </Box>
                            <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                        </Box>
                    
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Typography sx={{color: '#1493FF', fontWeight: 'bold', fontsize:13}}>Enter Contest</Typography>
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
                            <Typography sx={{fontWeight:'bold', color: '#30cf1b', fontSize: 16}}>$5 ENTRY</Typography>
                            <Typography sx={{fontSize: 14, color: '#818E95'}}>multi entry / unique</Typography>
                        </Box>
                        <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                        <Box>   
                            <Typography sx={{fontWeight:'600', color: '#1493FF', cursor: 'pointer', textAlign: 'center'}}>NBA Pick 6</Typography>
                            <Typography sx={{fontSize: 14, color: '#1493FF'}}>(create a linuep consisting of 6 teams)</Typography>
                        </Box>
                        <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                        <Box>   
                            <Typography sx={{color: 'white', textAlign: 'center', bgcolor: '#6d706d', p:.5, display: 'inline', borderRadius: 2, fontSize: 14, fontWeight: '600'}}>$45 Prize</Typography>
                            <Typography sx={{color: '#6d706d', textAlign: 'center', display: 'inline', borderRadius: 2, fontSize: 12, fontWeight: '600'}}>  WINNER TAKES ALL</Typography>
                            <Typography sx={{fontSize: 14, color: '#6d706d', cursor: '', textAlign: 'center'}}>(Room size: 10 contestants)</Typography>
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
                                <Typography sx={{fontWeight:'bold', color: '#30cf1b', fontSize: 16}}>$5</Typography>
                                <Typography sx={{fontSize: 14, color: '#818E95'}}>(m / u)</Typography>
                            </Box>
                            <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                            <Box>   
                                <Typography sx={{fontWeight:'600', color: '#1493FF', cursor: 'pointer', textAlign: 'center'}}>NBA Pick 6</Typography>
                                <Typography sx={{fontSize: 14, color: '#1493FF', textAlign: 'center'}}>12 - 22</Typography>
                            </Box>
                            <Divider orientation='vertical' flexItem variant='middle' sx={{ml:2, mr:2}}  />
                            <Box>   
                                <Typography sx={{color: '6d706d', textAlign: 'center', fontSize: 14, fontWeight: '600'}}>$45 Prize</Typography>
                                {/* <Typography sx={{color: '#6d706d', textAlign: 'center', display: 'inline', borderRadius: 2, fontSize: 12, fontWeight: '600'}}>  WINNER TAKES ALL</Typography> */}
                                <Typography sx={{fontSize: 14, color: '#818E95', cursor: '', textAlign: 'center'}}>(w)</Typography>
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

export default PickemAppbar;