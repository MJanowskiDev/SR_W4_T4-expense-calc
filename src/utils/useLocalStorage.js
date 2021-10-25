import { useState } from 'react';

function getData(name, initialValue) {
	const data = JSON.parse(localStorage.getItem(name));
	return data ? data : initialValue;
}

export const useLocalStorage = (name, initialValue) => {
	const [ value, setValue ] = useState(getData(name, initialValue));

	const handleChange = (value) => {
		setValue(value);
		localStorage.setItem(name, JSON.stringify(value));
	};

	return [ value, handleChange ];
};
