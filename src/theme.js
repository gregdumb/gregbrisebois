
/** 
 * Credit to Facebook and reactjs.org
 */

import { createMuiTheme } from '@material-ui/core/styles'

const constants = {
	headers: {
		fontFamily: 'Bitter, serif',
		color: '#222',
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
	}
});
 
const colors = {
	primary: '#222',
	white: 'white',
	
	veryDark: "#222",
	veryDarkText: 'white',
	veryDarkHover: "#555",
	
	primaryHighlight: 'cornflowerblue',
	primaryHighlightText: 'white',
	
	secondaryHighlight: '#ed9d64',
	secondaryHighlightText: 'white',
}

const sizes = {
	header: {
		small: '40px',
		large: '60px',
	}
}

const styleConstants = {
	shadow: '0px 0px 10px 0px rgba(179,179,179,1)',
	transition: 'all 0.1s ease-in-out',
	hoverScale: 'scale(1.1)',
}

const styles = {
	shadow: {
		boxShadow: styleConstants.shadow,
	},
	hoverShadow: {
		':hover': {
			boxShadow: styleConstants.shadow,
		}
	},
	animated: {
		transition: styleConstants.transition,
	},
	hoverScale: {
		transition: styleConstants.transition,
		':hover': {
			transform: styleConstants.hoverScale,
		}
	}
}

const SIZES = {
	xsmall: {min: 0, max: 599},
	small: {min: 600, max: 779},
	medium: {min: 780, max: 979},
	large: {min: 980, max: 1279},
	xlarge: {min: 1280, max: 1339},
	xxlarge: {min: 1340, max: Infinity},
  
	// Sidebar/nav related tweakpoints
	largerSidebar: {min: 1100, max: 1339},
	sidebarFixed: {min: 2000, max: Infinity},
};

type Size = $Keys<typeof SIZES>;

const media = {
	between(smallKey: Size, largeKey: Size, excludeLarge: boolean = false) {
	  if (excludeLarge) {
		return `@media (min-width: ${
		  SIZES[smallKey].min
		}px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
	  } else {
		if (SIZES[largeKey].max === Infinity) {
		  return `@media (min-width: ${SIZES[smallKey].min}px)`;
		} else {
		  return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
			SIZES[largeKey].max
		  }px)`;
		}
	  }
	},
  
	greaterThan(key: Size) {
	  return `@media (min-width: ${SIZES[key].min}px)`;
	},
  
	lessThan(key: Size) {
	  return `@media (max-width: ${SIZES[key].min - 1}px)`;
	},
  
	size(key: Size) {
	  const size = SIZES[key];
  
	  if (size.min == null) {
		return media.lessThan(key);
	  } else if (size.max == null) {
		return media.greaterThan(key);
	  } else {
		return media.between(key, key);
	  }
	},
  };

export { colors, styles, sizes, media };

export default theme;