import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import coverImage from './Flyer2.png';
import locationIcon from './location.png';
import bedIcon from './bedIcon.png';
import bathroomIcon from './bathroomIcon.png';
import carIcon from './carIcon.png';
import houseSizeIcon from './houseSizeIcon.jpg';

export default function Flyer2() {
    const placeName = 'Nagvarpalya';
    const city = 'Bengaluru';
    const rs = "40,000";
    const payMonthly = "per month";
    const bhk = "2BHK";
    const furnished = "Semi-Furnished";
    const apartment = "Apartment";
    const forRent = "For Rent";
    const bed = 2;
    const bathroom = 2;
    const car = 1;
    const houseSize = "1250 Sqft";

    return (
        <>
            <Box
                id="flyer1"
                sx={{
                    width: '480px',
                    height: '601px',
                    margin: '10px',
                    backgroundColor: "white",
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Cover Image */}
                <Box
                    sx={{
                        width: "100%",
                        height: "75%",
                        backgroundImage: `url(${coverImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative',
                    }}
                />

                {/* Place Name Box (Below Image, Centered) */}
                <Box
                    id="placeName"
                    sx={{
                        backgroundColor: "#600DB4",
                        height: "30px",
                        width: "250px",
                        borderRadius: "12px",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                        position: 'absolute',
                        top: '73%',
                        left: '50%',
                        transform: 'translate(-50%, 0%)',
                        zIndex: 2,
                        gap: '5px',
                        padding: '5px 10px',
                    }}
                >
                    <Box
                        component="img"
                        src={locationIcon}
                        alt="Location"
                        sx={{ width: '20px', height: '20px' }}
                    />
                    {placeName}, {city}
                </Box>

                {/* Grid with 2 Columns and a Vertical Divider */}
                <Box 
                    id="detailsOfEst" 
                    sx={{ 
                        marginTop: '30px',
                        width: '95%',  
                        padding: '10px',  
                        paddingBottom:'0px',
                    }}
                >
                    <Grid container alignItems="center" justifyContent="center">
                        {/* Column 1: Left-aligned "For Rent" above the amount */}
                        <Grid 
                            id="amount" 
                            item xs={5} 
                            sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'flex-start', 
                                paddingLeft: '10px',
                                position: 'relative',
                            }}
                        >
                            <Box sx={{ textAlign: 'left', fontSize: '16px', color:"#555", fontWeight: 'bold', fontFamily:"Inter" }}>
                                {forRent}
                            </Box>
                            <Box sx={{ textAlign: 'left', fontSize: '34px', color:"#555", fontWeight: 'bold' }}>
                                <span style={{ fontSize: '34px' }}>&#8377;</span> {rs}
                            </Box>
                            <Box 
                                sx={{ 
                                    fontSize: '14px', 
                                    fontWeight: 'bold', 
                                    color: '#555', 
                                    alignSelf: 'flex-end',  // Aligns "per month" to the right side
                                    marginRight:"35%"
                                }}
                            >
                                {payMonthly}
                            </Box>
                        </Grid>

                        {/* Vertical Divider */}
                        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Divider orientation="vertical" sx={{ height: '55px', width: '1px', backgroundColor: '#555' }} />
                        </Grid>

                        {/* Column 2: Two Rows (BHK & Furnished in 1st Row, Apartment & Rent in 2nd Row) */}
                        <Grid item xs={5}>
                            <Grid container direction="column" spacing={1}>
                                {/* First Row: BHK & Furnished */}
                                <Grid item>
                                    <Grid container>
                                        <Grid item sx={{ fontSize: '16px', fontWeight: 'bold', color: '#555', marginRight:"5px" }}>
                                            {bhk}
                                        </Grid>
                                        <Grid item sx={{ fontSize: '16px', fontWeight: 'bold', color: '#555' }}>
                                            {furnished}
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* Second Row: Apartment & For Rent */}
                                <Grid item>
                                    <Grid container>
                                        <Grid item sx={{ fontSize: '16px', fontWeight: 'bold', color: '#555', marginRight:"5px" }}>
                                            {apartment}
                                        </Grid>
                                        <Grid item sx={{ fontSize: '16px', fontWeight: 'bold', color: '#555' }}>
                                            {forRent}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                {/* Icons Section (Aligned to Right) */}
                <Box 
                    sx={{ 
                        width: '95%', 
                        display: 'flex', 
                        flexDirection: 'row-reverse', 
                        justifyContent: 'flex-start', 
                        alignItems: 'center',
                        gap: '10px', 
                    }}
                >
                    {/* House Size Icon */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Box component="img" src={houseSizeIcon} alt="House Size" sx={{ width: '30px', height: '35px' }} />
                        <Box sx={{ fontSize: '15px',color: '#474747' }}>{houseSize}</Box>
                    </Box>

                    {/* Car Icon */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Box component="img" src={carIcon} alt="Car Parking" sx={{ width: '30px', height: '35px' }} />
                        <Box sx={{ fontSize: '15px', color: '#474747' }}>{car}</Box>
                    </Box>

                    {/* Bathroom Icon */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Box component="img" src={bathroomIcon} alt="Bathroom" sx={{ width: '30px', height: '35px' }} />
                        <Box sx={{ fontSize: '15px', color: '#474747' }}>{bathroom}</Box>
                    </Box>

                    {/* Bed Icon */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Box component="img" src={bedIcon} alt="Bed" sx={{ width: '30px', height: '35px' }} />
                        <Box sx={{ fontSize: '15px', color: '#474747' }}>{bed}</Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
