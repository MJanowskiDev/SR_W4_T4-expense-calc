import Entry from './Entry';

const expenseColor = '#e6300b';
const incomeColor = '#47a025';

const styles = {
	container: {
		display: 'flex',
		gap: 10,
		borderRadius: 6,
		padding: 10
	},
	infoText: {
		textAlign: 'center',
		fontWeight: 700
	},
	list: {
		maxHeight: 350,
		overflowY: 'auto',
		display: 'flex',
		flexDirection: 'column',
		gap: 10
	},
	listContainer: {
		width: '50%'
	},

	header: {
		textAlign: 'center'
	},
	expenseHeader: {
		textAlign: 'center',
		color: expenseColor,
		fontSize: 18,
		fontWeight: 700
	},
	incomeHeader: {
		textAlign: 'center',
		color: incomeColor,
		fontSize: 18,
		fontWeight: 700
	}
};
const EntriesList = ({ data, removeEntry }) => {
	const expenseData = data.filter((el) => el.type === 'expense');
	const incomeData = data.filter((el) => el.type === 'income');

	const removeEntryHandle = (id) => {
		removeEntry && removeEntry(id);
	};

	const noDataComponent = <p style={styles.infoText}>No entries to show</p>;
	const noExpensesComponent = <p style={styles.infoText}>No expenses</p>;
	const noIncomesComponent = <p style={styles.infoText}>No incomes</p>;

	if (data.length <= 0) return noDataComponent;
	return (
		<div>
			<div style={styles.container}>
				<div style={styles.listContainer}>
					<p style={styles.incomeHeader}>Incomes</p>
					{incomeData.length <= 0 && noIncomesComponent}
					<div style={styles.list}>
						{incomeData.map((el) => (
							<Entry key={el.id} color={incomeColor} removeEntry={removeEntryHandle} data={el} />
						))}
					</div>
				</div>

				<div style={styles.listContainer}>
					<p style={styles.expenseHeader}>Expenses</p>
					{expenseData.length <= 0 && noExpensesComponent}
					<div style={styles.list}>
						{expenseData.map((el) => (
							<Entry key={el.id} color={expenseColor} data={el} removeEntry={removeEntryHandle} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EntriesList;
