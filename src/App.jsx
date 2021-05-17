import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Posts from './conponents/Posts'
import Pagination from './conponents/Pagination'


const App = () => {
const [posts, setPosts] = useState([])
const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(1)//текущая страница
const [postsPerPage, setPostsPerPage] = useState(10) // кол-во постов на странице 


useEffect(() => {
		const fetchData = async () => {
			setLoading( true )
			const data = await axios.get( 'https://jsonplaceholder.typicode.com/posts' )
			setPosts( data.data )
			setLoading( false )
			}
		fetchData()
}, [])


const indexOfLastPost = currentPage * postsPerPage //последний пост
const indexOfFirstPost = indexOfLastPost - postsPerPage //первый пост
const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost) //текущий пост

const paginate = ( pageNumber  ) => {
	setCurrentPage( pageNumber )
}

	return (
		<div className="container mt-5">
				<h1 className="text-primary mb-3"> My Blog </h1>
				<Posts posts={ currentPost } loading={ loading }  />
				<Pagination  
				postsPerPage={ postsPerPage } 
				totalPosts={ posts.length }  
				paginate={ paginate } />
		</div>
	)
}




export default App
