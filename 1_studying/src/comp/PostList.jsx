
import React , {useState} from 'react';
import Postiteam from './Postiteam';

const PostList = ({posts , remove}) => {
     
    return (
        <div>
            
            <h1 style={{textAlign: 'center'}}>List of posts</h1>
            {posts.map((post , index) => (<Postiteam 
            remove={remove}
            number={index+1} 
            post={post} 
            key={post.id}/> ))}


        </div>
    );
};





export default PostList;