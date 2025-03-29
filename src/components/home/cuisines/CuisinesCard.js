import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import Link from 'next/link'
import CustomImageContainer from '../../CustomImageContainer'

const CuisinesCard = ({ item }) => {
    return (
        <Link href={`cuisines/${item?.id}?name=${item?.name}`} passHref>
            <Stack
                position="relative"
                width="100%"
                height={{ xs: '75px', md: '100px' }}
                borderRadius="12px"
                overflow="hidden"
                sx={{
                    background: '#ffffff',
                    border: '1px solid #FF7918',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',

                    '&:hover': {
                        transform: 'translateY(-5px)',
                    },
                }}
            >
                {/* Black to White Gradient Overlay */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    zIndex={1}
                    //   sx={{
                    //     background: "linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 1))",
                    //   }}
                />

                {/* Cuisine Image - Full Height on Right */}
                <Box
                    position="absolute"
                    top={0}
                    right={0}
                    width="40%" // Adjust to change image width
                    height="100%"
                    zIndex={2}
                    overflow="hidden"
                    sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.05)' },
                    }}
                >
                    <CustomImageContainer
                        src={item?.image_full_url}
                        height="100%"
                        width="100%"
                        objectFit="cover"
                    />
                </Box>

                {/* Cuisine Name - Left Side */}
                <Typography
                    position="absolute"
                    top="50%"
                    left={{xs:"12px",md:"20px"}}
                    zIndex={3}
                    fontSize={{ xs: '15px', md: '20px' }}
                    fontWeight="500"
                    color="#000"
                    sx={{
                        transform: 'translateY(-50%)',
                        textShadow: '1px 1px 5px rgba(0,0,0,0.2)',
                        width: '55%', // Prevents text from overlapping with image
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {item?.name}
                </Typography>
            </Stack>
        </Link>
    )
}

export default CuisinesCard
