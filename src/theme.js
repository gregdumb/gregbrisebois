
/** 
 * Credit to Facebook and reactjs.org
 */

const colors = {
	primary: '#222',
	white: 'white',
	
	verydark: "#222",
	veryDarkHover: "#555",
}

const sizes = {
	header: {
		small: '40px',
		large: '60px',
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

export { colors, sizes, media };