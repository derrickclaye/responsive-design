import { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box, AppBar, Divider, Grid, Toolbar, Tabs, Tab, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { isDesktop, isTablet, isMobileOnly, isMobile } from 'react-device-detect';
import useWindowDimensions from '../hooks/useWindowDimensions';
import AvailableContestsContext from '../contexts/available.contest.context';
import PickemAppbar from './pickem.appbar';
import TournamentAppbar from './tournament.appbar';

import '../css/effects.css'

const AvailableContests = () => {

    const league = useSelector(state => state.ui.league);
    const { width } = useWindowDimensions();
    const [barWidth, setBarWidth] = useState(null);
    const [pickemStyle, setPickemStyle] = useState({});
    const [tourneyStyle, setTourneyStyle] = useState({});
    const [gridStyle, setGridStyle] = useState({});
    const [miniStyle, setMiniStyle] = useState({});

    const [contestType, setContestType] = useState(0);
    const contests = useContext(AvailableContestsContext);

    const incStep = () => {
        if(contestType !== 3) {
            setContestType(prev => prev + 1);
        }
        if(contestType === 3) setContestType(0); 
    }
    const decStep = () => {
        if(contestType !== 0) {
            setContestType(prev => prev - 1);
        }  
        if(contestType === 0) setContestType(3); 
    }
    useEffect(() => {
        if(contestType === 0) {
            setPickemStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1, 
                borderBottomWidth: 3, 
                borderBottomStyle: 'solid', 
                borderBottomColor: '#1493FF',
                cursor: 'pointer'
            })
            setTourneyStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
            setGridStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
            setMiniStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
        }
        if(contestType === 1) {
            setPickemStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
            setTourneyStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                borderBottomWidth: 3, 
                borderBottomStyle: 'solid', 
                borderBottomColor: '#1493FF',
                cursor: 'pointer'
            })
            setGridStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
            setMiniStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
        }
        if(contestType === 2) {
            setPickemStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
            setTourneyStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
            setGridStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                borderBottomWidth: 3, 
                borderBottomStyle: 'solid', 
                borderBottomColor: '#1493FF',
                cursor: 'pointer'
            })
            setMiniStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
        }
        if(contestType === 3) {
            setPickemStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
            setTourneyStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
            setGridStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                cursor: 'pointer'
            })
            setMiniStyle({
                flex:1, 
                textAlign:'center', 
                height: 115, 
                pt: 1,
                borderBottomWidth: 3, 
                borderBottomStyle: 'solid', 
                borderBottomColor: '#1493FF',
                cursor: 'pointer'
            })
        }
    }, [contestType])
    useEffect(() => {}, [width]);
    useEffect(() => {
        setContestType(0);
    }, [league])
    
    return (
        <>

            {/* DESKTOP - BASKETBALL */}
            {
                isDesktop === true && isTablet === false && league === 'nba' && width >= 900 &&
                <Box>
                    <Box sx={{ pl:4, pr:4 }}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white',
                            cursor: 'pointer'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95', '* + *':{marginLeft:1}}}>
                                <Box sx={pickemStyle} onClick={() => setContestType(0)}>
                                    <Typography sx={{color:'#1493FF'}}>Daily Pick Em</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                </Box>
                                <Box sx={tourneyStyle} onClick={() => setContestType(1)}>
                                    <Typography sx={{color:'#1493FF'}}>Tournaments</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                </Box>
                                <Box sx={gridStyle} onClick={() => setContestType(2)}>
                                    <Typography sx={{color:'#1493FF'}}>50/50s</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Finish in the top half and split the prize pot!</Typography>
                                </Box>
                                <Box sx={miniStyle} onClick={() => setContestType(3)}>
                                    <Typography sx={{color:'#1493FF'}}>Head to Heads</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Compete against a single opponent. Winner takes all! </Typography>
                                </Box>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{ pl:4, pr:4 }}>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            {
                                contestType === 0 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Daily Pick Em contest <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 1 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Tournament <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 2 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom 50/50 <br></br> to play with your friends.</Typography>
                                </Box>
                            }
                            {
                                contestType === 3 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Head to Head <br></br> to play with your friends.</Typography>
                                </Box>
                            }
                            <Box sx={{ml: 5, color: '#818E95'}}>
                                <Typography sx={{fontWeight: '600', fontSize: 14}}>Legend</Typography>
                                <Typography sx={{fontSize: 12}}>unique - all your entries are placed in unique rooms </Typography>
                                <Typography sx={{fontSize: 12}}>multi entry - contest supports multiple entries </Typography>
                                <Typography sx={{fontSize: 12}}>single entry - contest supports 1 entry per user </Typography>
                            </Box>
                            
                        </Box>
                        <PickemAppbar />
                        <TournamentAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />

                        
                    </Box>
                </Box>
                
            }
            {
                isDesktop === true && isTablet === false && league === 'nba' && width < 900 &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', minWidth: '100%'}}>
                                    <Typography sx={{textAlign: 'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center'
                                    }} >
                                        <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                        {
                                            contestType === 0 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Daily Pick Em</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 1 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Tournaments</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 2 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115,
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>50/50s</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Finish in the top half and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 3 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Head to Heads</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Compete against a single opponent. Winner takes all!</Typography>
                                            </Box>
                                    }
                                        <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                    </Box>
                                </Box>
                               
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{ pl:4, pr:4 }}>
                        <Box sx={{display: 'flex', flexDirection: 'row', mb:4}}>
                            {
                                contestType === 0 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Daily Pick Em contest <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 1 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Tournament <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 2 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom 50/50 <br></br> to play with your friends.</Typography>
                                </Box>
                            }
                            {
                                contestType === 3 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Head to Head <br></br> to play with your friends.</Typography>
                                </Box>
                            }
                            <Box sx={{ml: 5, color: '#818E95'}}>
                                <Typography sx={{fontWeight: '600', fontSize: 14}}>Legend</Typography>
                                <Typography sx={{fontSize: 12}}>unique - all your entries are placed in unique rooms </Typography>
                                <Typography sx={{fontSize: 12}}>multi entry - contest supports multiple entries </Typography>
                                <Typography sx={{fontSize: 12}}>single entry - contest supports 1 entry per user </Typography>
                            </Box>
                            
                        </Box>
                        <PickemAppbar />
                        <TournamentAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />

                        
                    </Box>
                </Box>
                
            }

            {/* DESKTOP - FOOTBALL */}
            {
                isDesktop === true && isTablet === false && league === 'nfl' && width >= 900 &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95', '* + *':{marginLeft:1}}}>
                                <Box sx={pickemStyle} onClick={() => setContestType(0)}>
                                    <Typography sx={{color:'#1493FF'}}>Daily Pick Em</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                </Box>
                                <Box sx={tourneyStyle} onClick={() => setContestType(1)}>
                                    <Typography sx={{color:'#1493FF'}}>Tournaments</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                </Box>
                                <Box sx={gridStyle} onClick={() => setContestType(2)}>
                                    <Typography sx={{color:'#1493FF'}}>50/50s</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Finish in the top half and split the prize pot!</Typography>
                                </Box>
                                <Box sx={miniStyle} onClick={() => setContestType(3)}>
                                    <Typography sx={{color:'#1493FF'}}>Head to Heads</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Compete against a single opponent. Winner takes all! </Typography>
                                </Box>
                            </Toolbar>
                        </AppBar>
                    </Box>
                     
                </Box>
                
            }
            {
                isDesktop === true && isTablet === false && league === 'nfl' && width < 900 &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', minWidth: '100%'}}>
                                    <Typography sx={{textAlign: 'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center'
                                    }} >
                                        <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                        {
                                            contestType === 0 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Daily Pick Em</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 1 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Tournaments</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 2 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115,
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>50/50s</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Finish in the top half and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 3 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Head to Heads</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Compete against a single opponent. Winner takes all!</Typography>
                                            </Box>
                                    }
                                        <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                    </Box>
                                </Box>
                               
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{ pl:4, pr:4 }}>
                        <Box sx={{display: 'flex', flexDirection: 'row', mb:4}}>
                            {
                                contestType === 0 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Daily Pick Em contest <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 1 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Tournament <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 2 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom 50/50 <br></br> to play with your friends.</Typography>
                                </Box>
                            }
                            {
                                contestType === 3 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Head to Head <br></br> to play with your friends.</Typography>
                                </Box>
                            }
                            <Box sx={{ml: 5, color: '#818E95'}}>
                                <Typography sx={{fontWeight: '600', fontSize: 14}}>Legend</Typography>
                                <Typography sx={{fontSize: 12}}>unique - all your entries are placed in unique rooms </Typography>
                                <Typography sx={{fontSize: 12}}>multi entry - contest supports multiple entries </Typography>
                                <Typography sx={{fontSize: 12}}>single entry - contest supports 1 entry per user </Typography>
                            </Box>
                            
                        </Box>
                        <PickemAppbar />
                        <TournamentAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />

                        
                    </Box>
                </Box>
                
            }

            {/* DESKTOP - BASEBALL */}
            {
                isDesktop === true && isTablet === false && league === 'mlb' && width >= 900 &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95', '* + *':{marginLeft:1}}}>
                                <Box sx={pickemStyle} onClick={() => setContestType(0)}>
                                    <Typography sx={{color:'#1493FF'}}>Daily Pick Em</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                </Box>
                                <Box sx={tourneyStyle} onClick={() => setContestType(1)}>
                                    <Typography sx={{color:'#1493FF'}}>Tournaments</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                </Box>
                                <Box sx={gridStyle} onClick={() => setContestType(2)}>
                                    <Typography sx={{color:'#1493FF'}}>50/50s</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Finish in the top half and split the prize pot!</Typography>
                                </Box>
                                <Box sx={miniStyle} onClick={() => setContestType(3)}>
                                    <Typography sx={{color:'#1493FF'}}>Head to Heads</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Compete against a single opponent. Winner takes all! </Typography>
                                </Box>
                            </Toolbar>
                        </AppBar>
                    </Box>
                     
                </Box>
                
            }
            {
                isDesktop === true && isTablet === false && league === 'mlb' && width < 900 &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', minWidth: '100%'}}>
                                    <Typography sx={{textAlign: 'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center'
                                    }} >
                                        <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                        {
                                            contestType === 0 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Daily Pick Em</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 1 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Tournaments</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 2 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115,
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>50/50s</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Finish in the top half and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 3 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Head to Heads</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Compete against a single opponent. Winner takes all!</Typography>
                                            </Box>
                                    }
                                        <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                    </Box>
                                </Box>
                               
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{ pl:4, pr:4 }}>
                        <Box sx={{display: 'flex', flexDirection: 'row', mb:4}}>
                            {
                                contestType === 0 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Daily Pick Em contest <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 1 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Tournament <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 2 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom 50/50 <br></br> to play with your friends.</Typography>
                                </Box>
                            }
                            {
                                contestType === 3 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Head to Head <br></br> to play with your friends.</Typography>
                                </Box>
                            }
                            <Box sx={{ml: 5, color: '#818E95'}}>
                                <Typography sx={{fontWeight: '600', fontSize: 14}}>Legend</Typography>
                                <Typography sx={{fontSize: 12}}>unique - all your entries are placed in unique rooms </Typography>
                                <Typography sx={{fontSize: 12}}>multi entry - contest supports multiple entries </Typography>
                                <Typography sx={{fontSize: 12}}>single entry - contest supports 1 entry per user </Typography>
                            </Box>
                            
                        </Box>
                        <PickemAppbar />
                        <TournamentAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />

                        
                    </Box>
                </Box>
                
            }


            {/* DESKTOP - HOCKEY */}
            {
                isDesktop === true && isTablet === false && league === 'nhl' && width >= 900 &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95', '* + *':{marginLeft:1}}}>
                                <Box sx={pickemStyle} onClick={() => setContestType(0)}>
                                    <Typography sx={{color:'#1493FF'}}>Daily Pick Em</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                </Box>
                                <Box sx={tourneyStyle} onClick={() => setContestType(1)}>
                                    <Typography sx={{color:'#1493FF'}}>Tournaments</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                </Box>
                                <Box sx={gridStyle} onClick={() => setContestType(2)}>
                                    <Typography sx={{color:'#1493FF'}}>50/50s</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Finish in the top half and split the prize pot!</Typography>
                                </Box>
                                <Box sx={miniStyle} onClick={() => setContestType(3)}>
                                    <Typography sx={{color:'#1493FF'}}>Head to Heads</Typography>
                                    <Typography sx={{
                                        fontWeight:'bold',
                                        fontSize:12,
                                        textAlign: 'left'
                                    }}>Compete against a single opponent. Winner takes all! </Typography>
                                </Box>
                            </Toolbar>
                        </AppBar>
                    </Box>
                     
                </Box>
                
            }
            {
                isDesktop === true && isTablet === false && league === 'nhl' && width < 900 &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', minWidth: '100%'}}>
                                    <Typography sx={{textAlign: 'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center'
                                    }} >
                                        <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                        {
                                            contestType === 0 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Daily Pick Em</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 1 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Tournaments</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 2 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115,
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>50/50s</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Finish in the top half and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 3 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                borderBottomWidth: 3, 
                                                borderBottomStyle: 'solid', 
                                                borderBottomColor: '#1493FF',
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontWeight: 600, fontSize: 14}}>Head to Heads</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:12,
                                                    textAlign: 'center'
                                                }}>Compete against a single opponent. Winner takes all!</Typography>
                                            </Box>
                                    }
                                        <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                    </Box>
                                </Box>
                               
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{ pl:4, pr:4 }}>
                        <Box sx={{display: 'flex', flexDirection: 'row', mb:4}}>
                            {
                                contestType === 0 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Daily Pick Em contest <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 1 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Tournament <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 2 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom 50/50 <br></br> to play with your friends.</Typography>
                                </Box>
                            }
                            {
                                contestType === 3 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Head to Head <br></br> to play with your friends.</Typography>
                                </Box>
                            }
                            <Box sx={{ml: 5, color: '#818E95'}}>
                                <Typography sx={{fontWeight: '600', fontSize: 14}}>Legend</Typography>
                                <Typography sx={{fontSize: 12}}>unique - all your entries are placed in unique rooms </Typography>
                                <Typography sx={{fontSize: 12}}>multi entry - contest supports multiple entries </Typography>
                                <Typography sx={{fontSize: 12}}>single entry - contest supports 1 entry per user </Typography>
                            </Box>
                            
                        </Box>
                        <PickemAppbar />
                        <TournamentAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />

                        
                    </Box>
                </Box>
                
            }



            
            
            
            
            {/* TABLET - BASKETBALL */}
            {
                isTablet === true && league === 'nba' &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', minWidth: '100%'}}>
                                    <Typography sx={{textAlign:'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center',
                                    
                                    }} >
                                    <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                    {
                                        contestType === 0 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Daily Pick Em</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 1 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Tournaments</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 2 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                           <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>50/50s</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Finish in the top half and split the prize pot!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 3 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                           <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Head to Heads</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Compete against a single opponent. Winner takes all!</Typography>
                                        </Box>
                                    }
                                    <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                </Box>
                                </Box>
                                
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{ pl:4, pr:4 }}>
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            {
                                contestType === 0 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Daily Pick Em contest <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 1 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom Tournament <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 2 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom GRID <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            {
                                contestType === 3 && 
                                <Box>
                                    <Button sx={{mb:.5}} className='btn' variant='contained'>Create Contest</Button>
                                    <Typography sx={{color: '#818E95', fontWeight: '600', fontSize: 12}}>Create a custom MINI GRID <br></br> to play with your friends or 1 v 1.</Typography>
                                </Box>
                            }
                            <Box sx={{ml: 5, color: '#818E95'}}>
                                <Typography sx={{fontWeight: '600', fontSize: 16}}>Legend</Typography>
                                <Typography sx={{fontSize: 14}}>unique - all your entries are placed in unique rooms </Typography>
                                <Typography sx={{fontSize: 14}}>multi entry - contest supports multiple entries </Typography>
                                <Typography sx={{fontSize: 14}}>single entry - contest supports 1 entry per user </Typography>
                            </Box>
                            
                        </Box>
                        <PickemAppbar />
                        <TournamentAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />
                        <PickemAppbar />

                        
                    </Box>
                     
                </Box>
            }

            {/* TABLET - FOOTBALL */}
            {
                isTablet === true && league === 'nfl' &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', minWidth: '100%'}}>
                                    <Typography sx={{textAlign:'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center',
                                    
                                    }} >
                                    <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                    {
                                        contestType === 0 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Daily Pick Em</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 1 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Tournaments</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 2 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                           <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>50/50s</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Finish in the top half and split the prize pot!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 3 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                           <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Head to Heads</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Compete against a single opponent. Winner takes all!</Typography>
                                        </Box>
                                    }
                                    <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                </Box>
                                </Box>
                                
                            </Toolbar>
                        </AppBar>
                    </Box>
                    
                     
                </Box>
            }

            {/* TABLET - BASEBALL */}
            {
                isTablet === true && league === 'mlb' &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', minWidth: '100%'}}>
                                    <Typography sx={{textAlign:'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center',
                                    
                                    }} >
                                    <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                    {
                                        contestType === 0 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Daily Pick Em</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 1 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Tournaments</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 2 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                           <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>50/50s</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Finish in the top half and split the prize pot!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 3 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                           <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Head to Heads</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Compete against a single opponent. Winner takes all!</Typography>
                                        </Box>
                                    }
                                    <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                </Box>
                                </Box>
                                
                            </Toolbar>
                        </AppBar>
                    </Box>
                </Box>
            }

            {/* TABLET - HOCKEY */}
            {
                isTablet === true && league === 'nhl' &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', minWidth: '100%'}}>
                                    <Typography sx={{textAlign:'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center',
                                    
                                    }} >
                                    <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                    {
                                        contestType === 0 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Daily Pick Em</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 1 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Tournaments</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 2 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                           <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>50/50s</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Finish in the top half and split the prize pot!</Typography>
                                        </Box>
                                    }
                                    {
                                        contestType === 3 &&
                                        <Box sx={{
                                            flex:1, 
                                            textAlign:'center', 
                                            height: 115, 
                                            pt: 1, 
                                            borderBottomWidth: 3, 
                                            borderBottomStyle: 'solid', 
                                            borderBottomColor: '#1493FF',
                                            cursor: 'pointer',
                                            justifyContent: 'center'
                                    
                                        
                                        }}>
                                           <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Head to Heads</Typography>
                                            <Typography sx={{
                                                fontWeight:'bold',
                                                fontSize:16,
                                                textAlign: 'center'
                                            }}>Compete against a single opponent. Winner takes all!</Typography>
                                        </Box>
                                    }
                                    <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                </Box>
                                </Box>
                                
                            </Toolbar>
                        </AppBar>
                    </Box>
                     
                </Box>
            }





            {/* MOBILE - BASKETBALL */}
            {
                isMobileOnly === true && league === 'nba' &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            pb: 2,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{textAlign: 'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center',
                                        mb: 1
                                    }} >
                                        <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                        {
                                            contestType === 0 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Daily Pick Em</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 1 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Tournaments</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 2 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>50/50s</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Finish in the top half and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 3 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Head to Heads</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Compete against a single opponent. Winner takes all!</Typography>
                                            </Box>
                                        }
                                        <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                    </Box>
                                    <Button size='small' className='btn' variant='contained'>Create Custom Contest</Button>
                                </Box>
                                
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        
                        <Box sx={{color: '#818E95', ml:2, mb:1}}>
                            <Typography sx={{fontWeight: '600', fontSize: 14}}>Legend</Typography>
                            <Typography sx={{fontSize: 12}}><b>u</b> - all your entries are placed in unique rooms </Typography>
                            <Typography sx={{fontSize: 12}}><b>m</b> - contest supports multiple entries </Typography>
                            <Typography sx={{fontSize: 12}}><b>s</b> - contest supports 1 entry per user </Typography>
                            <Typography sx={{fontSize: 12}}><b>w</b> - winner takes all </Typography>
                            <Typography sx={{fontSize: 12}}><b>mw</b> - multiple winners split prize pot </Typography>
                        </Box>
                        
                    </Box>
                    <PickemAppbar />
                    <TournamentAppbar />
                    <PickemAppbar />
                    <PickemAppbar />
                    <PickemAppbar />
                    <PickemAppbar />
                </Box>
            }

            {/* MOBILE - FOOTBALL */}
            {
                isMobileOnly === true && league === 'nfl' &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            pb: 2,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{textAlign: 'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center',
                                        mb: 1
                                    }} >
                                        <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                        {
                                            contestType === 0 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Daily Pick Em</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 1 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Tournaments</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 2 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>50/50s</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Finish in the top half and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 3 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Head to Heads</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Compete against a single opponent. Winner takes all!</Typography>
                                            </Box>
                                        }
                                        <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                    </Box>
                                    <Button size='small' className='btn' variant='contained'>Create Custom Contest</Button>
                                </Box>
                                
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        
                        <Box sx={{color: '#818E95', ml:2, mb:1}}>
                            <Typography sx={{fontWeight: '600', fontSize: 14}}>Legend</Typography>
                            <Typography sx={{fontSize: 12}}><b>u</b> - all your entries are placed in unique rooms </Typography>
                            <Typography sx={{fontSize: 12}}><b>m</b> - contest supports multiple entries </Typography>
                            <Typography sx={{fontSize: 12}}><b>s</b> - contest supports 1 entry per user </Typography>
                            <Typography sx={{fontSize: 12}}><b>w</b> - winner takes all </Typography>
                            <Typography sx={{fontSize: 12}}><b>mw</b> - multiple winners split prize pot </Typography>
                        </Box>
                        
                    </Box>
                    
                </Box>
            }

            {/* MOBILE - BASEBALL */}
            {
                isMobileOnly === true && league === 'mlb' &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            pb: 2,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{textAlign: 'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center',
                                        mb: 1
                                    }} >
                                        <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                        {
                                            contestType === 0 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Daily Pick Em</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 1 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Tournaments</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 2 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>50/50s</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Finish in the top half and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 3 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Head to Heads</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Compete against a single opponent. Winner takes all!</Typography>
                                            </Box>
                                        }
                                        <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                    </Box>
                                    <Button size='small' className='btn' variant='contained'>Create Custom Contest</Button>
                                </Box>
                                
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        
                        <Box sx={{color: '#818E95', ml:2, mb:1}}>
                            <Typography sx={{fontWeight: '600', fontSize: 14}}>Legend</Typography>
                            <Typography sx={{fontSize: 12}}><b>u</b> - all your entries are placed in unique rooms </Typography>
                            <Typography sx={{fontSize: 12}}><b>m</b> - contest supports multiple entries </Typography>
                            <Typography sx={{fontSize: 12}}><b>s</b> - contest supports 1 entry per user </Typography>
                            <Typography sx={{fontSize: 12}}><b>w</b> - winner takes all </Typography>
                            <Typography sx={{fontSize: 12}}><b>mw</b> - multiple winners split prize pot </Typography>
                        </Box>
                        
                    </Box>
                    
                </Box>
            }

            {/* MOBILE - HOCKEY */}
            {
                isMobileOnly === true && league === 'nhl' &&
                <Box>
                    <Box sx={{ pl:4, pr:4}}>
                        <AppBar position='static' sx={{
                            minHeight: 115,
                            mt: 6,
                            mb: 5,
                            pb: 2,
                            bgcolor: 'white'
                        }}>
                            <Toolbar sx={{justifyContent: 'center', display: 'flex', flexDirection: 'row', color: '#818E95'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{textAlign: 'right'}}>{contestType+1}/4</Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: 1,
                                        alignItems: 'center',
                                        mb: 1
                                    }} >
                                        <ArrowBackIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={decStep} />
                                        {
                                            contestType === 0 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Daily Pick Em</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Contests with great ODDS and high payouts. Just pick your lineup, tiebreaker - and you're all set!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 1 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                                <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Tournaments</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Elimination style contest that lasts for 3 days. Make it to the end of day 3 and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 2 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>50/50s</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Finish in the top half and split the prize pot!</Typography>
                                            </Box>
                                        }
                                        {
                                            contestType === 3 &&
                                            <Box sx={{
                                                flex:1, 
                                                textAlign:'center', 
                                                height: 115, 
                                                pt: 1, 
                                                cursor: 'pointer',
                                                justifyContent: 'center'
                                        
                                            
                                            }}>
                                            <Typography sx={{color:'#1493FF', fontSize: 18, fontWeight: 'bold'}}>Head to Heads</Typography>
                                                <Typography sx={{
                                                    fontWeight:'bold',
                                                    fontSize:14,
                                                    textAlign: 'center'
                                                }}>Compete against a single opponent. Winner takes all!</Typography>
                                            </Box>
                                        }
                                        <ArrowForwardIosIcon className='press' sx={{cursor: 'pointer', color: '#1493FF'}} onClick={incStep} />
                                    </Box>
                                    <Button size='small' className='btn' variant='contained'>Create Custom Contest</Button>
                                </Box>
                                
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        
                        <Box sx={{color: '#818E95', ml:2, mb:1}}>
                            <Typography sx={{fontWeight: '600', fontSize: 14}}>Legend</Typography>
                            <Typography sx={{fontSize: 12}}><b>u</b> - all your entries are placed in unique rooms </Typography>
                            <Typography sx={{fontSize: 12}}><b>m</b> - contest supports multiple entries </Typography>
                            <Typography sx={{fontSize: 12}}><b>s</b> - contest supports 1 entry per user </Typography>
                            <Typography sx={{fontSize: 12}}><b>w</b> - winner takes all </Typography>
                            <Typography sx={{fontSize: 12}}><b>mw</b> - multiple winners split prize pot </Typography>
                        </Box>
                        
                    </Box>
                </Box>
            }
        </>
    )
};

export default AvailableContests;