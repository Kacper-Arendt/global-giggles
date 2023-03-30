export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getFirstLetters = (str: string) => str?.match(/\b\w/g)?.join('');

export const getStringDate = (date: string) =>
	new Date(date).toLocaleDateString('en-us', {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
