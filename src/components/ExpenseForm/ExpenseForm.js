import { useForm } from 'react-hook-form';
import { styles } from './styles';
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = ({ newEntryHandle }) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const onSubmit = (data) => {
		newEntryHandle && newEntryHandle({ id: uuidv4(), ...data });
		reset();
	};

	return (
		<form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div style={styles.container}>
				<span style={styles.label}>Type</span>
				<div>
					<input
						style={styles.radioInput}
						{...register('type', { required: true })}
						type='radio'
						value='income'
					/>
					<label>Income</label>
				</div>
				<div>
					<input
						style={styles.radioInput}
						{...register('type', { required: true })}
						type='radio'
						value='expense'
					/>
					<label>Expense</label>
				</div>
			</div>
			<div style={styles.container}>
				<label style={styles.label}>Name</label>
				<input style={styles.input} type='text' {...register('name', { required: true })} />
				{errors.name && <span style={styles.requiredError}>This field is required</span>}
			</div>

			<div style={styles.container}>
				<label style={styles.label}>Amount</label>
				<input style={styles.input} type='number' {...register('amount', { required: true, min: 0 })} />
				{errors.number && <span style={styles.requiredError}>This field is required</span>}
			</div>
			<div style={styles.container}>
				<label style={styles.label}>Category</label>
				<select style={styles.input} {...register('category', { required: true })}>
					<option value='cat1'>cat1</option>
					<option value='cat2'>cat2</option>
				</select>
			</div>

			<input style={styles.button} type='submit' />
		</form>
	);
};

export default ExpenseForm;
