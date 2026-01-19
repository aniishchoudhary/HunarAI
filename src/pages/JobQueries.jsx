import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import SearchFilter from '../components/SearchFilter';

const JobQueries = () => {
    const [filterOpen, setFilterOpen] = useState(true);

    return (
        <Box sx={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
            {/* Main Content Area - Empty/Blank as requested */}
            <Box sx={{ flexGrow: 1, p: 3 }}>
                {!filterOpen && (
                    <Button variant="outlined" onClick={() => setFilterOpen(true)}>
                        Open Search & Filter
                    </Button>
                )}
            </Box>

            {/* Right Panel - Persistent Search & Filter Drawer */}
            <SearchFilter open={filterOpen} onClose={() => setFilterOpen(false)} />
        </Box>
    );
};

export default JobQueries;
