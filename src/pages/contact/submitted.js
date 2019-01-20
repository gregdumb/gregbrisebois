import React from 'react'

import Layout from '../../components/Layout';
import withRoot from '../../withRoot';
import TitledPage from '../../components/TitledPage';
import { Typography } from '@material-ui/core';
import ContactForm from '../../components/ContactForm';
import { Link } from 'gatsby';

const Submitted = ({ }) => {
    //const urlParams = new URLSearchParams(window.location.search);
    //const name = urlParams.get('name');

    return (
        <Layout>
            <TitledPage title='Success'>
                <Typography variant='headline' gutterBottom>Thank you, your message has been sent!</Typography>
                <Typography variant='body1'>
                    <Link to='/'>Return Home</Link>
                </Typography>
            </TitledPage>
        </Layout>
    );
}

export default withRoot(Submitted);