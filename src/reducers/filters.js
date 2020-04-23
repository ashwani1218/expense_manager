import moment from 'moment';


// Fiters Reducers
const fiterReducerDefaultState = {
	text: "",
	sortBy: "date",
	startDate: moment().startOf("month"),
	endDate: moment().endOf("month")
}

export default (state = fiterReducerDefaultState, action) => {
	switch (action.type){
		case "SET_TEXT_FILTER":
			return {
				...state,
				text: action.filter
			}
		case "SORT_BY_DATE":
			return {
				...state,
				sortBy: action.filter
			}
		case "SORT_BY_AMOUNT":
			return {
				...state,
				sortBy: action.filter
			}

		case "SET_START_DATE":
			return {
				...state,
				startDate: action.startDate
			}

		case "SET_END_DATE":
			return {
				...state,
				endDate: action.endDate
			}
		default:
			return state;
	}
}

//-------------------------------------------------------------------------------------------//

