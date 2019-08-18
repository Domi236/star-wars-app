import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loader = () => {
    return (
        <div style={{ textAlign: 'center', margin: '10px auto', width: '80vw' }}>
            <CircularProgress />
        </div>
    );
};

export default Loader;