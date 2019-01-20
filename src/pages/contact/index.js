import React from 'react'

import Layout from '../../components/Layout';
import withRoot from '../../withRoot';
import TitledPage from '../../components/TitledPage';
import { TextField, Typography } from '@material-ui/core';
import ContactForm from '../../components/ContactForm';

const Contact = ({ }) => (
    <Layout>
        <TitledPage title='Contact'>
            <Typography variant='headline' gutterBottom>Get in touch!</Typography>
            <ContactForm />
        </TitledPage>
    </Layout>
)

export default withRoot(Contact);