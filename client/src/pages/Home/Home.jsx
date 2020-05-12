import React from 'react';
import {Helmet} from "react-helmet-async";

export const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Home page." />
            </Helmet>
            Home
        </div>
    )
}
