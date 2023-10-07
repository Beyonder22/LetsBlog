import React from 'react';
import './Post.css';
import {format} from 'date-fns';
import {Link} from 'react-router-dom';
// {title,summary,cover,content}
function Post({_id,title,summary,cover,content,createdAt,author}) {
	return (
		 <div className='post'>
          <div className='image'>
            <Link to={`/post/${_id}`}>
              <img src={'http://localhost:9000/'+cover} alt=""/>
            </Link>
          </div>
          <div className='texts'>
              <Link to={`/post/${_id}`} style={{textDecoration: 'none',color:'inherit'}}>
                <h2>{title}</h2>
              </Link>
              <p className='info'>
                <a href="\" className='author'>{author.username}</a>
                <time>{format(new Date(createdAt),'MMM d, yyyy HH:mm')}</time>
              </p>
              <p className='summary'>{summary}</p>
          </div>
        </div>
	)
}

export default Post