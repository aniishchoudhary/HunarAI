import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    p: 3,
                    minHeight: '100vh',
                    width: 'calc(100% - 260px)',
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default DashboardLayout;
