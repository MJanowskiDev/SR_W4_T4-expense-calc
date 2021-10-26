import { useForm } from 'react-hook-form';
import { styles } from './styles';
import { v4 as uuidv4 } from 'uuid';

const expenseColor = '#e6300b';
const incomeColor = '#47a025';

const defaultCategories = [ 'Other' ];

const ExpenseForm = ({ newEntryHandle, categories = { defaultCategories } }) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const onSubmit = (data) => {
		newEntryHandle && newEntryHandle({ id: uuidv4(), ...data });
		reset();
	};

	const nameComponent = (
		<div style={styles.container}>
			<label htmlFor='name' style={styles.label}>
				Name
			</label>
			<input id='name' autoFocus style={styles.input} type='text' {...register('name', { required: true })} />
			{errors.name && <span style={styles.requiredError}>This field is required</span>}
		</div>
	);

	const typeComponent = (
		<div style={styles.container}>
			<span style={styles.label}>Type</span>
			<div>
				<input
					id='income'
					style={styles.radioInput}
					{...register('type', { required: true })}
					type='radio'
					value='income'
				/>
				<label style={{ color: incomeColor }} htmlFor='income'>
					Income
				</label>
			</div>
			<div>
				<input
					id='expense'
					style={styles.radioInput}
					{...register('type', { required: true })}
					type='radio'
					value='expense'
				/>
				<label htmlFor='expense' style={{ color: expenseColor }}>
					Expense
				</label>
			</div>
			{errors.type && <span style={styles.requiredError}>This field is required</span>}
		</div>
	);

	const amountComponent = (
		<div style={styles.container}>
			<label htmlFor='amount' style={styles.label}>
				Amount
			</label>
			<input
				id='amount'
				step={0.01}
				style={styles.input}
				type='number'
				{...register('amount', { required: true, min: 0.01 })}
			/>
			{errors.amount &&
			errors.amount.type === 'required' && <span style={styles.requiredError}>This field is required</span>}
			{errors.amount &&
			errors.amount.type === 'min' && <span style={styles.requiredError}>Minimum value is 0.01</span>}
		</div>
	);

	const categoryComponent = (
		<div style={styles.container}>
			<label htmlFor='category' style={styles.label}>
				Category
			</label>
			<select id='category' style={styles.input} {...register('category', { required: true })}>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</div>
	);

	const submitComponent = <input style={styles.button} type='submit' />;

	return (
		<form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{nameComponent}
			{typeComponent}
			{amountComponent}
			{categoryComponent}
			{submitComponent}
		</form>
	);
};

export default ExpenseForm;
