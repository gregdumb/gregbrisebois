import { createMuiTheme } from '@material-ui/core/styles'

const constants = {
	headers: {
		fontFamily: 'Bitter, serif',
		//color: '#222',
	}
}

const theme = createMuiTheme({
	palette: {
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
	
	typography: {
		fontSize: 16,
		
		display4: {
			...constants.headers,
			fontSize: '3rem',
		},
		
		display3: {
			...constants.headers,
			fontSize: '2.6rem',
		},
		
		display2: {
			...constants.headers,
			fontSize: '2.3rem',
		},
		
		display1: {
			...constants.headers,
			fontSize: '2rem',
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