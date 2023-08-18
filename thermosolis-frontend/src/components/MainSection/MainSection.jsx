import React from 'react';

// External
import { Container, Typography, Button } from '@mui/material';

function MainSection() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Welcome to Our Enterprise
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                We offer innovative solutions for businesses.
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
                Get Started
            </Button>
        </Container>
    );
};

export default MainSection;
