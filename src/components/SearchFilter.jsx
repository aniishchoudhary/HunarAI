import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    Chip,
    Autocomplete,
    Drawer
} from '@mui/material';
import { Close, Add } from '@mui/icons-material';

const jobRoles = [
    'Business Development Manager',
    'Sales Executive',
    'Account Manager',
    'Product Manager',
    'Software Engineer'
];

const mockOptions = [
    'Option 1', 'Option 2', 'Option 3'
];

const commonInputStyles = {
    '& .MuiOutlinedInput-root': {
        height: '60px',
        padding: '12px',
        gap: '8px',
        borderRadius: '4px',
        border: '1px solid #C4C4C4',
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        '& fieldset': { border: 'none' },
    },
    '& input': {
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
    },
    '& input::placeholder': {
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        color: '#666666',
        opacity: 1,
    }
};

const FilterAutocomplete = ({ options, placeholder }) => (
    <Box sx={{ flex: 1 }}>
        <Autocomplete
            freeSolo
            options={options}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder={placeholder}
                    sx={commonInputStyles}
                />
            )}
        />
    </Box>
);

const SearchFilter = ({ open, onClose }) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            variant="persistent"
            PaperProps={{
                sx: {
                    width: '660px',
                    height: '868px',
                    borderLeft: '1px solid #e0e0e0',
                    boxShadow: '-4px 0 20px rgba(0,0,0,0.05)'
                }
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{
                    width: '660px',
                    height: '748px',
                    padding: '40px',
                    gap: '24px',
                    bgcolor: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'hidden'
                }}>
                    <Box sx={{
                        width: '580px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',

                    }}>
                        <Typography variant="h6" sx={{
                            width: '394px',
                            height: '24px',
                            fontFamily: 'Lato',
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '24px',
                            letterSpacing: '0.15px',
                            color: '#333'
                        }}>Search & Filter</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button
                                size="small"
                                sx={{
                                    width: '119px',
                                    height: '19px',
                                    fontFamily: 'Lato',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '0.15px',
                                    textTransform: 'none',
                                    color: 'text.secondary',
                                    mr: 2,
                                    minWidth: 'auto',
                                    p: 0,
                                    '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' }
                                }}
                            >
                                Reset to Default
                            </Button>
                            <IconButton
                                onClick={onClose}
                                size="small"
                                sx={{
                                    width: '24px',
                                    height: '24px',
                                    p: 0,
                                    color: '#000'
                                }}
                            >
                                <Close sx={{ fontSize: '24px' }} />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box sx={{ width: '580px' }}>
                        <Typography variant="subtitle1" sx={{
                            width: '311px',
                            height: '19px',
                            fontFamily: 'Lato',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '0.15px',
                            color: '#121212',
                            mb: 2
                        }}>Search Terms</Typography>

                        <Box sx={{ mb: 3 }}>
                            <Autocomplete
                                multiple
                                freeSolo
                                options={jobRoles}
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip
                                            label={option}
                                            size="small"
                                            {...getTagProps({ index })}
                                            sx={{ borderRadius: 1, bgcolor: '#f5f5f5', border: '1px solid #e0e0e0' }}
                                        />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Job Role *"
                                        placeholder="Type and press enter to add multiple job roles"
                                        InputLabelProps={{
                                            shrink: true,
                                            sx: {
                                                fontFamily: 'Roboto',
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                color: '#666666',
                                                bgcolor: 'white',
                                                px: 0.5
                                            }
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                width: '580px',
                                                height: '60px',
                                                padding: '12px',
                                                display: 'flex',
                                                gap: '8px',
                                                alignItems: 'center',
                                                borderRadius: '4px',
                                                '& fieldset': {
                                                    border: '1px solid #C4C4C4',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#9e9e9e',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'primary.main',
                                                },
                                            },
                                            '& input': {
                                                width: '283px',
                                                height: '20px',
                                                textAlign: 'left',
                                                fontFamily: 'Roboto',
                                                fontWeight: 400,
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                letterSpacing: '0em',
                                                verticalAlign: 'middle',
                                            },
                                            '& input::placeholder': {
                                                textAlign: 'left',
                                                fontFamily: 'Roboto',
                                                fontWeight: 400,
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                letterSpacing: '0em',
                                                verticalAlign: 'middle',
                                                color: '#666666',
                                                opacity: 1,
                                            }
                                        }}
                                    />
                                )}
                                sx={{ mb: 2 }}
                            />

                            <Box sx={{ width: '580px', height: '60px', display: 'flex', gap: '16px' }}>
                                <TextField
                                    fullWidth
                                    placeholder="Must Have "
                                    sx={{
                                        ...commonInputStyles,
                                        '& .MuiOutlinedInput-root': {
                                            ...commonInputStyles['& .MuiOutlinedInput-root'],
                                            width: '282px'
                                        }
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    placeholder="Must Not Have"
                                    sx={{
                                        ...commonInputStyles,
                                        '& .MuiOutlinedInput-root': {
                                            ...commonInputStyles['& .MuiOutlinedInput-root'],
                                            width: '282px'
                                        }
                                    }}
                                />
                            </Box>
                        </Box>

                        <Typography variant="subtitle1" sx={{
                            width: '311px',
                            height: '19px',
                            fontFamily: 'Lato',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '0.15px',
                            color: '#121212',
                            mb: 2
                        }}>Default Filters</Typography>

                        <Box sx={{ width: '580px', height: '60px', display: 'flex', gap: '16px', mb: 3 }}>
                            <FilterAutocomplete options={mockOptions} placeholder="State" />
                            <FilterAutocomplete options={mockOptions} placeholder="Location" />
                        </Box>

                        <Box sx={{ width: '580px', height: '60px', display: 'flex', gap: '16px', mb: 3 }}>
                            <FilterAutocomplete options={mockOptions} placeholder="Degree" />
                            <FilterAutocomplete options={mockOptions} placeholder="Education" />
                        </Box>

                        <Box sx={{ width: '580px', height: '60px', display: 'flex', gap: '16px', mb: 4 }}>
                            <FilterAutocomplete options={mockOptions} placeholder="Min. Experience (Years)" />
                            <FilterAutocomplete options={mockOptions} placeholder="Max. Experience (Years)" />
                        </Box>

                        <Box sx={{
                            width: '580px',
                            height: '20px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 2
                        }}>
                            <Typography variant="subtitle1" sx={{
                                width: '432px',
                                height: '19px',
                                fontFamily: 'Lato',
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '0.15px',
                                color: '#121212'
                            }}>Advanced Filters</Typography>
                            <Typography variant="caption" sx={{
                                width: '108px',
                                height: '20px',
                                fontFamily: 'Roboto',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '20px',
                                color: '#717171',
                                textAlign: 'center'
                            }}>0/5 Filters Added</Typography>
                        </Box>
                        <Typography sx={{
                            width: '306px',
                            height: '20px',
                            fontFamily: 'Roboto',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#000000',
                            textAlign: 'left',
                            mb: 3
                        }}>You can add upto 5 Advanced Filters from the list</Typography>

                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                width: '580px',
                                height: '56px',
                                padding: '12px',
                                borderRadius: '4px',
                                border: '1px solid #C4C4C4',
                                textTransform: 'none',
                                '&:hover': {
                                    borderColor: '#9e9e9e',
                                    bgcolor: '#fafafa'
                                }
                            }}
                        >
                            <Box sx={{
                                width: '556px',
                                height: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                opacity: 1
                            }}>
                                <Add sx={{ color: 'text.secondary' }} />
                                <Typography sx={{
                                    width: '133px',
                                    height: '20px',
                                    fontFamily: 'Roboto',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: 'text.secondary',
                                    textAlign: 'center'
                                }}>Add Advanced Filters</Typography>
                            </Box>
                        </Button>
                    </Box>
                </Box>

                <Box sx={{
                    width: '660px',
                    height: '120px',
                    padding: '24px 40px',
                    borderTop: '1px solid #f0f0f0',
                    bgcolor: '#fff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                }}>
                    <Box sx={{
                        width: '81px',
                        height: '42px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '4px'
                    }}>
                        <Typography variant="subtitle2" sx={{ color: '#66BB6A', fontWeight: 700, fontSize: '0.95rem', lineHeight: '1.2' }}>0 Results</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem', lineHeight: '1.2' }}>0 with CVs</Typography>
                    </Box>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            width: '104px',
                            height: '42px',
                            opacity: 1,
                            padding: '8px 22px',
                            gap: '8px',
                            textTransform: 'none',
                            borderRadius: 0,
                            bgcolor: '#00000042',
                            boxShadow: 'none',
                            '&:hover': {
                                bgcolor: '#00000042',
                            }
                        }}
                    >
                        SEARCH
                    </Button>
                </Box>
            </Box>
        </Drawer >
    );
};

export default SearchFilter;
