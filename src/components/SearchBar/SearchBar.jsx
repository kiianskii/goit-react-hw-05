import { Field, Form, Formik } from 'formik'
import s from "./SearchBar.module.css"

const SearchBar = ({ setSearchParams }) => {
	const initialValues = {
		search: '',
	}
	const handleSubmit = values => {
		setSearchParams(values.search ? { query: values.search } : {})
	}
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className={s.form}>
				<Field name='search' placeholder='Search movie...' className={s.input} />
				<button type='submit' >
					Search
				</button>
			</Form>
		</Formik>
	)
}

export default SearchBar
