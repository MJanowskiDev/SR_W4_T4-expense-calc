const styles = { textAlign: 'right', paddingRight: 10 };

const Summary = ({ income, expenses }) => {
	const balance = income - expenses;
	const color = balance > 0 ? '#47a025' : '#e6300b';

	return (
		<div style={styles}>
			<div>
				<p>
					Total income :
					<span style={{ color: '#47a025' }}>
						<strong> {income}</strong>
					</span>
				</p>
				<p>
					Total expenses :
					<span style={{ color: '#e6300b' }}>
						<strong> {expenses}</strong>
					</span>
				</p>
			</div>
			<hr />
			<p>
				Balance :
				<span style={{ color: color }}>
					<strong> {income - expenses}</strong>
				</span>
			</p>
		</div>
	);
};

export default Summary;
