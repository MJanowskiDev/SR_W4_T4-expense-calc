import Entry from './Entry';

const styles = {
	container: {
		display: 'flex'
	},
	list: {
		width: '50%',
		maxHeight: 350,
		overflowY: 'auto'
	},
	incomeEntry: {
		border: '1px solid green'
	},
	expenseEntry: {
		border: '1px solid red'
	}
};
const Expense = ({ data, removeEntry }) => {
	const removeEntryHandle = (id) => {
		removeEntry && removeEntry(id);
	};
	const expenseData = data.filter((el) => el.type === 'expense');
	const incomeData = data.filter((el) => el.type === 'income');

	const noDataComponent = <p>No entries to show</p>;
	const noExpensesComponent = <p>No expenses</p>;
	const noIncomesComponent = <p>No incomes</p>;

	if (data.length <= 0) return noDataComponent;
	return (
		<div>
			<h2>Entries list</h2>
			<div style={styles.container}>
				<div style={styles.list}>
					{expenseData.length <= 0 && noExpensesComponent}
					{expenseData.map((el) => (
						<Entry
							key={el.id}
							style={styles.expenseEntry}
							name={el.name}
							amount={el.amount}
							category={el.category}
							id={el.id}
							removeEntry={removeEntryHandle}
						/>
					))}
				</div>
				<div style={styles.list}>
					{incomeData.length <= 0 && noIncomesComponent}
					{incomeData.map((el) => (
						<Entry
							key={el.id}
							style={styles.incomeEntry}
							name={el.name}
							amount={el.amount}
							category={el.category}
							id={el.id}
							removeEntry={removeEntryHandle}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Expense;
