import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostServce'
import { useState } from 'react'
import Loader from '../components/UI/Loader/Loader'

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id)
		setPost(response.data)
	})
	const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])

	return (
		<div>
			<h2>You have opened post page with ID = {params.id}</h2>
			{isLoading
				? <Loader />
				: <div>{post.id}. {post.title}</div>
 			}
			<h2>Comments</h2>
			{isComLoading
				? <Loader/>
				: <div>
					{comments.map(comm =>
						<div key={comm.id} style={{marginTop: 15}}>
							<h4>{comm.email}</h4>
							<div>{comm.body}</div>
						</div>
					)}
				</div>
			}

		</div>
	)
}

export default PostIdPage