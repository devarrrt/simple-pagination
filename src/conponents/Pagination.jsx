import React from 'react'




const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
const pageNumbers = []

for ( let i = 1; i <= Math.ceil( totalPosts / postsPerPage ); i++ ) {
	pageNumbers.push(i)
}

	return (
<nav className="pagination">  
		{ pageNumbers.map( n => (
			<li key={ n } className="page-item">
					<a onClick={ ()=> paginate( n )} className="page-link" href="#">  
					{ n }
					</a>
			</li>  
		) ) }
</nav>
	)
}

export default Pagination
