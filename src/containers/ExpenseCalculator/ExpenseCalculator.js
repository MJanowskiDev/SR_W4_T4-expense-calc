import { useState } from 'react';
import ExpenseForm from 'components/ExpenseForm';
import Expense from 'components/Expense';
import ShowHideButton from 'components/ShowHideButton';
import { useLocalStorage } from 'utils/useLocalStorage';
const styles = {
	container: {
		padding: 10,
		width: '50vw',
		minWidth: 500,
		display: 'flex',
		flexDirection: 'column',
		gap: 10
	},
	header: {
		textAlign: 'center'
	}
};
const ExpenseCalculator = () => {
	const [ entries, setEntries ] = useLocalStorage('entries', []);
	const [ formVisible, setFormVisible ] = useState(false);
	const newEntryHandle = (data) => {
		setEntries([ ...entries, data ]);
	};
	const removeEntryHandle = (id) => {
		setEntries(entries.filter((el) => el.id !== id));
	};

	const handleVisibilityChange = () => {
		setFormVisible(!formVisible);
	};
	return (
		<div style={styles.container}>
			<h1 style={styles.header}>Expense calculator</h1>
			<ShowHideButton visible={formVisible} handleChanged={handleVisibilityChange} />
			{formVisible ? (
				<ExpenseForm newEntryHandle={newEntryHandle} />
			) : (
				<Expense removeEntry={removeEntryHandle} data={entries} />
			)}
		</div>
	);
};

export default ExpenseCalculator;
