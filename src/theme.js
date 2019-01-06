import { createMuiTheme } from '@material-ui/core/styles'

const constants = {
	headers: {
		fontFamily: 'Bitter, serif',
		//color: '#222',
	},
	palette: {
		type: 'light',
		primary: {
			light: '#819ca9',
			main: '#546e7a',
			dark: '#29434e',
			contrastText: '#ffffff',
		},
		secondary: {
			light: '#8bf6ff',
			main: '#4fc3f7',
			dark: '#0093c4',
			contrastText: '#000'
		}
	},
}

const theme = createMuiTheme({
	palette: {
		...constants.palette,
	},
	
	mixins: {
		link: {
			color: constants.palette.secondary.dark,
			textDecoration: 'none',
			'&:hover': {
				color: constants.palette.secondary.main,
				textDecoration: 'underline',
			}
		}
	},
	
	typography: {
		fontSize: 16,
		
		h6: { ...constants.headers },
		h5: { ...constants.headers },
		h4: { ...constants.headers },
		h3: { ...constants.headers },
		h2: { ...constants.headers },
		h1: { ...constants.headers },
		
		display4: {
			...constants.headers,
			//fontSize: '3rem',
		},
		
		display3: {
			...constants.headers,
			//fontSize: '2.6rem',
		},
		
		display2: {
			...constants.headers,
			//fontSize: '2.3rem',
		},
		
		display1: {
			...constants.headers,
			//fontSize: '2rem',
		},
		
		headline: {
			...constants.headers,
		},
		
		title: { ...constants.headers },
		
		body1: {
			lineHeight: '1.6em'
		}
	}
});

export default theme;