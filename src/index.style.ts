import { injectGlobal } from 'styled-components';
import { grey50 } from 'material-ui/styles/colors';

injectGlobal`
	html{
		height: 100%;
		background: ${grey50};
	}
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
`;
