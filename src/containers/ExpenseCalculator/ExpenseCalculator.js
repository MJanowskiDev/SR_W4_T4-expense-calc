import { useState, useEffect } from 'react';
import Form from 'components/Form';
import EntriesList from 'components/EntriesList';
import ShowHideButton from 'components/ShowHideButton';
import Summary from 'components/Summary';
import { useLocalStorage } from 'utils/useLocalStorage';

const styles = {
	container: {
		padding: 10,
		width: '50vw',
		minWidth: 500,
		display: 'flex',
		flexDirection: 'column',
		gap: 5
	},
	header: {
		textAlign: 'center'
	}
};

const categories = [ 'Other', 'Salary', 'Entertainment', 'Shopping', 'Food', 'Household', 'Car', 'Withdrawal' ];

const ExpenseCalculator = () => {
	const [ entries, setEntries ] = useLocalStorage('entries', []);
	const [ formVisible, setFormVisible ] = useState(false);
	const [ totalIncome, setTotalIncome ] = useState(0);
	const [ totalExpenses, setTotalExpenses ] = useState(0);

	const newEntryHandle = (data) => {
		setEntries([ ...entries, data ]);
		setFormVisible(false);
	};
	const removeEntryHandle = (id) => {
		setEntries(entries.filter((el) => el.id !== id));
	};

	const handleVisibilityChange = () => {
		setFormVisible(!formVisible);
	};

	useEffect(
		() => {
			let expensesTotal = 0;
			let incomeTotal = 0;

			entries.forEach((element) => {
				if (element.type === 'income') incomeTotal += Number(element.amount);
				if (element.type === 'expense') expensesTotal += Number(element.amount);
			});

			setTotalIncome(incomeTotal);
			setTotalExpenses(expensesTotal);
		},
		[ entries ]
	);

	return (
		<div style={styles.container}>
			<h2 style={styles.header}>Expense calculator</h2>
			<ShowHideButton visible={formVisible} handleChanged={handleVisibilityChange} />
			{formVisible ? (
				<Form newEntryHandle={newEntryHandle} categories={categories} />
			) : (
				<div>
					<EntriesList removeEntry={removeEntryHandle} data={entries} />
					<Summary income={totalIncome} expenses={totalExpenses} />
				</div>
			)}
		</div>
	);
};

export default ExpenseCalculator;
