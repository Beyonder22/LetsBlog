import React,{useEffect,useState} from 'react';
import Post from '../Post';

function IndexPage() {
	const [posts,setPosts] = useState([]);
	useEffect(()=>{
		fetch('http://localhost:9000/post').then(response =>{
			response.json().then(posts => {
				setPosts(posts);
			});
		});
	},[]);
	// console.log(posts[0])
	return (
		<div>
			{posts.map((post)=><Post {...post}/>)}
		</div>
	)
}

export default IndexPage