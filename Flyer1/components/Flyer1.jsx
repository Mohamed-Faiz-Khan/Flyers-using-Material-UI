import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import coverImage from './flyer1bgimg.png';
import coverBackground from './Background.png';
import carfront from './car_front.png';
import bathfront from './bathfront.png';
import bedfront from './bedfront.png';
import vrefydsymbol from './vREfyd Symbol.png';
import vrefyd from './vREfyd.png';

export default function Flyer1() {
    const message = "Classy Interior";
    const rs = "50,000";

    return (
        <Box
            id="flyer1"
            sx={{
                width: '480px',
                height: '601px',
                margin: '10px',
                backgroundImage: `url(${coverBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Divider
                sx={{
                    position: "absolute",
                    top: '20px',
                    width: '100%',
                    borderBottomWidth: '2px',
                    backgroundColor: 'white'
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    top: '40px',
                    left: '0',
                    width: '100%',
                    height: '59%',
                    backgroundImage: `url(${coverImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '49%',
                    fontFamily: 'Times New Roman, serif',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#FFFFFF',
                }}
            >
                <Box sx={{ mt: '80px' }}>
                    <Box sx={{ fontSize: '30px', mt: '10px' }}>
                        {message}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', marginTop: '15px', fontSize: '24px' }}>
                        <span style={{ fontSize: '18px' }}>&#8377;</span>
                        <span style={{ fontSize: '18px', marginLeft: '5px' }}>{rs} / Month</span>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '70px',
                        marginTop: '15px',
                        marginBottom: '5px',
                    }}
                >
                    <Box
                        sx={{
                            width: '60px',
                            height: '55px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid white',
                        }}
                    >
                        <Box component="img" src={carfront} alt="Car Front" sx={{ width: '40px', height: 'auto' }} />
                    </Box>

                    <Box
                        sx={{
                            width: '60px',
                            height: '55px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid white',
                        }}
                    >
                        <Box component="img" src={bathfront} alt="Bath Front" sx={{ width: '40px', height: 'auto' }} />
                    </Box>

                    <Box
                        sx={{
                            width: '60px',
                            height: '55px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid white',
                        }}
                    >
                        <Box component="img" src={bedfront} alt="Bed Front" sx={{ width: '40px', height: 'auto' }} />
                    </Box>
                </Box>

                {/* Divider with vrefydsymbol and vrefyd in the center */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        marginTop: '13px',
                        position: 'relative',
                    }}
                >
                    {/* Left Divider */}
                    <Divider sx={{ flex: 1, borderBottomWidth: '2px', backgroundColor: 'white' }} />

                    {/* vrefydsymbol and vrefyd with some gap */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', px: '35px' }}>
                        <Box component="img" src={vrefydsymbol} alt="Verified Symbol" sx={{ width: '15px', height: 'auto' }} />
                        <Box component="img" src={vrefyd} alt="Verified" sx={{ width: '40px', height: 'auto' }} />
                    </Box>

                    {/* Right Divider */}
                    <Divider sx={{ flex: 1, borderBottomWidth: '2px', backgroundColor: 'white' }} />
                </Box>
            </Box>
        </Box>
    );
}
