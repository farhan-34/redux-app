import React from 'react';
import { useState } from 'react';
import { Box, Drawer, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FavoriteBorderOutlined, Home, Menu, Person, Person2Outlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { navList } from '../data/NavList';
import SearchBar from './SearchBar';

const Header = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <Box>
            <Box display='flex' sx={{
                height: '50px', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e2e2',
                alignContent: 'center', position: 'sticky'
            }} p={2}>
                {isMatch ? (<>
                    <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                        <Menu color='purple' />
                    </IconButton>
                    <Box sx={{
                            display: 'flex',
                            background: 'orange',
                            borderRadius: 20,
                            paddingX: 3,
                            paddingY: 1,
                            marginLeft: 'auto'
                        }}>
                            <ShoppingCartOutlined />
                            <Typography variant='subtitle1'>
                                (0)
                            </Typography>
                        </Box>
                    </>) : (<>
                    <Stack direction="row"
                    >
                        <Link to={'/'}>
                            <Home sx={{ marginRight: '20px' }} />
                        </Link>
                        {navList.map((item) => (<Link to={item.path}>
                            <Typography className='navList' key={item.id} variant='button' fontWeight="bold" sx={{ marginRight: '20px' }}>
                                {item.text}
                            </Typography>
                        </Link>
                        ))}
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'purple' }}>
                        <SearchBar sx={{ marginRight: '10px' }} />
                        <Person2Outlined />
                        <FavoriteBorderOutlined />
                        <Box sx={{
                            display: 'flex',
                            background: 'orange',
                            borderRadius: 20,
                            paddingX: 3,
                            paddingY: 1
                        }}>
                            <ShoppingCartOutlined />
                            <Typography variant='subtitle1'>
                                (0)
                            </Typography>
                        </Box>
                    </Stack>
                </>)}
            </Box>

            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Stack direction="column" spacing={2} sx={{ alignItems: 'center', paddingTop: 2 }}>
                    {navList.map((item) => (<Link to={item.path}>
                        <Typography className='navList' key={item.id} variant='button' fontWeight="bold" sx={{ marginRight: '20px', paddingX: 2 }}>
                            {item.text}
                        </Typography>
                    </Link>
                    ))}
                </Stack>
            </Drawer>
        </Box>
    )
}

export default Header