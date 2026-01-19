import React from 'react';
import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import {
    WorkOutline as WorkIcon,
    KeyboardArrowLeft as CollapseIcon
} from '@mui/icons-material';
import logo from '../assets/logo.png';

const drawerWidth = 260;

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    bgcolor: '#f5f7fa',
                    borderRight: '1px solid #e0e0e0',
                },
            }}
        >
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box component="img" src={logo} alt="HUNAR" sx={{ height: 56 }} />
                <CollapseIcon sx={{ color: 'text.secondary', cursor: 'pointer' }} />
            </Box>

            <List component="nav">
                <ListItemButton selected>
                    <ListItemIcon>
                        <WorkIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Job Queries" />
                </ListItemButton>
            </List>
        </Drawer>
    );
};

export default Sidebar;
