const Entry = ({ style, name, amount, category, id, removeEntry }) => {
	const handleRemove = () => {
		removeEntry && removeEntry(id);
	};
	return (
		<div style={style}>
			<p>{name}</p>
			<p>{amount}</p>
			<p>{category}</p>
			<button onClick={handleRemove}>Remove</button>
		</div>
	);
};

export default Entry;
