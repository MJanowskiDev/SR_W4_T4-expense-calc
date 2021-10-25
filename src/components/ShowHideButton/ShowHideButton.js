const styles = {
	borderRadius: 6,
	padding: 10,
	fontWeight: 700,
	border: '1px solid #3d8107',
	color: '#3d8107',
	background: 'white',
	letterSpacing: 2,
	width: '100%'
};
const ShowHideButton = ({
	visible,
	handleChanged,
	visibleText = 'Show entries list',
	hiddenText = 'Create new entry'
}) => {
	const handleOnClick = () => {
		handleChanged && handleChanged();
	};
	return (
		<button onClick={handleOnClick} style={styles}>
			{visible ? visibleText : hiddenText}
		</button>
	);
};

export default ShowHideButton;
