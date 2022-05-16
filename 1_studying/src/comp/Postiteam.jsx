import React from 'react';
import MyButton from './UI/button/MyButton';

const Postiteam = (props) => {
  
    return (
         
             <div className="post">  
        
        <div className="post__content">

          <strong>{props.number} {props.post.title}</strong>
          <div>
            {/* Javascript - language that is used to create dynamic webpages. */}
            {props.post.body}
          </div>
          </div>
               <div className="post__btn"> 
                <MyButton onClick={()=> props.remove(props.post)}>Delete</MyButton>
                
                </div>
        
      </div>
        
       
    );
};

export default Postiteam; 
    
        