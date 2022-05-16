import React , {useState}from 'react';
 
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const PostForm = ({create}) => {
  
 
    const [post , setPost] = useState( {title : ' ' , body : ''});

        
    function addNewPost(e){
        e.preventDefault();
            const newPost = {
              ...post , id: Date.now() 
            }
            create(newPost);
            setPost({title : '' , body : ''});
       
        
      }
    return (
        
        <div>

         
         <form>
          <MyInput

             value={post.title} 
          type="text" placeholder="The name"
          onChange={(e) => setPost( {...post , title : e.target.value})}
          
          
          />
          
       
          <MyInput 
         
           value={post.body}
          onChange={(e) => setPost({...post , body : e.target.value})}
          type="text" placeholder="Description" />
          
          
          
      

          <MyButton  onClick={addNewPost}>Post</MyButton>

 

        </form>
        </div>
          

        
    );
};

export default PostForm;