import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title}-Tanjum's Shop</title>
            </Helmet>
        </div>
    );
};

export default PageTitle;