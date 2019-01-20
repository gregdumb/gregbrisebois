import React from 'react';
import { TextField, withStyles, Grid, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        width: '100%',
    },
    hidden: {
        display: 'none',
    },
    send: {
        marginLeft: 8,
    }
});

class ContactForm extends React.Component {

    state = {
        name: '',
        email: '',
        company: '',
        message: '',

        nameChanged: false,
        emailChanged: false,
        companyChanged: false,
        messageChanged: false,

        nameValid: false,
        emailValid: false,
        companyValid: false,
        messageValid: false,
    }

    handleBlur = e => {
        const { name } = e.target;
        this.setState({ [`${name}Changed`]: true });
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        }, () => this.validate());
    }

    hasError = name => {
        return this.state[`${name}Changed`] === true && !this.state[`${name}Valid`];
    }

    readyForSubmit = () => {
        return (
            this.state.nameValid &&
            this.state.emailValid &&
            this.state.companyValid &&
            this.state.messageValid
        );
    }

    validate = () => {
        const { name, email, company, message } = this.state;
        this.setState({
            nameValid: name !== '',
            emailValid: email !== '' && /^\S+@\S+\.\S+$/.test(email),
            companyValid: true,
            messageValid: message !== '',
        });
    }

    render() {
        const { state, props } = this;
        const { classes } = props;

        return (
            <form
                className={props.classes.root} action="/contact/submitted"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="birthday" >
                <input type="hidden" name="form-name" value="contact" />
                <span className={classes.hidden}>
                    <input type="date" name="birthday" />
                </span>
                <Grid container spacing={16}>
                    <Grid item md={4} sm={6} xs={12} >
                        <TextField
                            className={classes.input}
                            variant='outlined'
                            label='Name'
                            name='name'
                            value={state.name}
                            error={this.hasError('name')}
                            required
                            onBlur={this.handleBlur}
                            onChange={this.handleChange} />
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} >
                        <TextField
                            className={classes.input}
                            variant='outlined'
                            label='Email'
                            name='email'
                            type='email'
                            value={state.email}
                            error={this.hasError('email')}
                            required
                            onBlur={this.handleBlur}
                            onChange={this.handleChange} />
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} >
                        <TextField
                            className={classes.input}
                            variant='outlined'
                            label='Company'
                            name='company'
                            value={state.company}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange} />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            className={classes.input}
                            variant='outlined'
                            label='Message'
                            name='message'
                            multiline
                            value={state.message}
                            error={this.hasError('message')}
                            required
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                            inputProps={{
                                style: { minHeight: 100, }
                            }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type='submit'
                            variant='outlined'
                            size='large'
                            color='secondary'
                            disabled={!this.readyForSubmit()}>
                            Submit
                            <SendIcon className={classes.send} />
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default withStyles(styles)(ContactForm);