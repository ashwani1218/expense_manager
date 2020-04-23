
// Set Text Filter

export const setTextFilter = (filter = "") => ({
	type: "SET_TEXT_FILTER",
	filter
});



// Sort By date

export const sortByDate = () => ({
	type: "SORT_BY_DATE",
	filter: 'date'
});



// Sort By amount

export const sortByAmount = () => ({
	type: "SORT_BY_DATE",
	filter: 'amount'
});



// Set Start Date

export const setStartDate = (startDate) => ({
	type: "SET_START_DATE",
	startDate
});



// Set End Date

export const setEndDate = (endDate) => ({
	type: "SET_END_DATE",
	endDate
});
