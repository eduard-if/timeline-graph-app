import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TimelinePage = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div>TimelinePage {id}</div>
    );
};

export default TimelinePage;