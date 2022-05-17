import React , {useState , useRef}  from 'react';
import PostForm from './comp/PostForm';
// import './App.css'
// import ClassCounter from './comp/ClassCounter';
// import Postiteam from './comp/Postiteam';
import PostList from './comp/PostList';
import MySelect from './comp/UI/select/MySelect';
// import MyButton from './comp/UI/button/MyButton';
// import MyInput from './comp/UI/input/MyInput';
// import Counter from './comp/Counter';
import './Style/Style.css';


function App() {
  const [posts , setPosts] = useState( [

    {id:1 , title:'HTML' , body: 'Hyper Text Markup Language'},
    {id:2 , title:'JavaScript' , body: 'JavaScript is a high-level, dynamic, untyped, and interpreted programming language.'},
    {id:3 , title:'TypeScript' , body: 'TypeScript is a strict superset of JavaScript, and is also interpreted.'},     
])

const createPost = (newPost) =>{
    setPosts( [...posts, newPost] );
} 

 const removePost  = (post) => {
      setPosts(posts.filter(p=>p.id !== post.id))
 }
 const [selected, setSelected] = useState();
 
 const sortPosts=(sort)=>{
  setSelected(sort);
  setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
}


  return (
    
    <div className="App">
      

      
 
    <PostForm create={createPost}/>
      <hr  style={{ margin : '20px 0 20px 0'}}/>
      <div>
      <MySelect
      value={selected}
      onChange={sortPosts}


     defaultValue= 'Select Language'
     options ={[
        {value:'title', name:'By title'},
        {value:'body',name:'By discription'},
      ]}
/>
        

      </div>
      <hr  style={{ margin : '20px 0 20px 0'}}/>

    {posts.length 
          ? <PostList remove={removePost} posts={posts} title="List of post"/>
        :  <div style={{
        color:'red', 
        fontSize : '25px', 
        fontWeight:'bold',
        textAlign : 'center'
      }}>No posts</div>
    }
 
       

      
      

       
    </div>
  );
}

export default App;
