const Entry = ({ color, name, amount, category, id, removeEntry }) => {
	const handleRemove = () => {
		removeEntry && removeEntry(id);
	};

	const styles = {
		labelText: {
			textAlign: 'center',
			paddingRight: 5,
			letterSpacing: 1,
			fontWeight: 500
		},
		valueText: {
			letterSpacing: 1
		},
		container: {
			padding: 10,
			borderRadius: 6,
			display: 'flex',
			flexDirection: 'column',
			gap: 10,
			background: '#f0faff',
			border: '1px solid lightgray'
		},
		categoryContainer: {
			textAlign: 'right'
		},
		buttonContainer: {
			display: 'flex',
			textAlign: 'right',
			justifyContent: 'flex-end',
			alignItems: 'flex-end',
			width: '100%'
		},
		button: {
			background: 'transparent',
			color: '#e6300b',
			border: '1px solid #e6300b',
			borderRadius: 6,
			padding: 3
		},
		amount: {
			color: color,
			fontWeight: 700
		},
		amountContainer: {
			display: 'flex'
		}
	};

	return (
		<div style={styles.container}>
			<div style={styles.categoryContainer}>
				<span style={styles.labelText}>Category:</span>
				<span style={styles.valueText}>{category}</span>
			</div>

			<div>
				<span style={styles.labelText}>Name:</span>
				<span style={styles.valueText}>{name}</span>
			</div>
			<div style={styles.amountContainer}>
				<span style={styles.labelText}>Amount:</span>
				<span style={styles.amount}>{Number(amount).toFixed(2)}</span>
				<div style={styles.buttonContainer}>
					<button style={styles.button} onClick={handleRemove}>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default Entry;
