const styles = {
	borderRadius: 6,
	padding: 10,
	fontWeight: 700,
	border: '2px solid #0096c7',
	color: '#0096c7',
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
