import React,{useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import {useNavigate } from 'react-router-dom';
import Editor from '../Editor'

function CreatePost() {
	const navigate = useNavigate ();

	const [title, setTitle] = useState('');
	const [summary, setSummary] = useState('');
	const [content, setContent] = useState('');
	const [files, setFiles] = useState('');
	async function createNewPost(ev) {
		const data = new FormData();
		data.set('title',title);
		data.set('summary',summary);
		data.set('content',content);
		data.set('file',files[0]);
		ev.preventDefault();
		const response = await fetch('http://localhost:9000/post',{
			method: 'POST',
			body: data,
			credentials:'include',
		});
		if(response.ok){
			navigate('/',{ replace: true })
		}
	}

	return (
		<div>
			<form onSubmit={createNewPost}>
				<input type="title" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
				<input type="summary" placeholder='Summary' value={summary} onChange={e=>setSummary(e.target.value)}/>
				<input type="file" onChange={ev=>setFiles(ev.target.files)}/>
				<Editor onChange={setContent} value={content}/>
				{/*{console.log(content)}*/}
				<button style={{marginTop:'5px'}}>Create Post</button>
			</form>
		</div>
	)
}

export default CreatePost