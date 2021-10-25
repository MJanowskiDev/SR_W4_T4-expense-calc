const border = '1px solid black';
const borderError = '1px solid red';

export const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		borderRadius: 6
	},
	textarea: {
		borderRadius: 6,
		padding: 10,
		border: border
	},
	input: {
		borderRadius: 6,
		padding: 10,
		border: border
	},
	inputError: {
		borderRadius: 6,
		padding: 10,
		border: borderError
	},
	label: {
		fontWeight: 700,
		padding: '4px 0',
		letterSpacing: 2
	},
	button: {
		borderRadius: 6,
		padding: 10,
		fontWeight: 700,
		border: '2px solid #0096c7',
		color: '#0096c7',
		background: 'white',
		letterSpacing: 2,
		width: '100%'
	},
	form: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: 16
	},
	checkboxLabel: {
		fontStyle: 'italic'
	},
	checkbox: {
		width: 20,
		height: 20,
		top: 4,
		position: 'relative',
		marginRight: 5
	},
	radioInput: {
		width: 20,
		height: 20,
		top: 4,
		position: 'relative',
		marginRight: 5,
		fontStyle: 'italic'
	},
	requiredError: {
		color: 'red',
		padding: 5
	}
};
