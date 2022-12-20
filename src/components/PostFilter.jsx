import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import MySelect from '../components/UI/select/MySelect'

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				placeholder='Search...'
			/>
			<MySelect
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue='Sort by'
				options={[
					{ name: 'title', value: 'title' },
					{ name: 'body', value: 'body' }
				]}
			/>
		</div>
	)
}

export default PostFilter