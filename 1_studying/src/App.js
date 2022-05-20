import React , {useState , useRef}  from 'react';
import PostForm from './comp/PostForm';
// import './App.css'
// import ClassCounter from './comp/ClassCounter';
// import Postiteam from './comp/Postiteam';
import PostList from './comp/PostList';
import MyInput from './comp/UI/input/MyInput';
import MySelect from './comp/UI/select/MySelect';
// import MyButton from './comp/UI/button/MyButton';
// import MyInput from './comp/UI/input/MyInput';
// import Counter from './comp/Counter';
import './Style/Style.css';


function App() {
  const [posts , setPosts] = useState( [

    {id:1 , title:'HTML' , body: '1) HTML is the most important language in the world'},
    {id:2 , title: '1_JS_vanilla', body: '3) JS is the most important language in the world'},
    {id:3 , title: '3_TS' , body: '2) TS is the most important language in the world',}     
])

const createPost = (newPost) =>{
    setPosts( [...posts, newPost] );
} 



 const removePost  = (post) => {
      setPosts(posts.filter(p=>p.id !== post.id))
 }

 const [selectedSort, setSelectedSort] = useState('');
 const sortPosts=(sort)=>{
  setSelectedSort(sort);
 
}

const [searchedForQuery , setsearchedForQuery] = useState('');

 
 
function getSortedPosts () {
  console.log('Works')
  if(selectedSort){
    return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]));
  }
  return posts;

}
 
const sortedPosts  = getSortedPosts();


return(
  <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <div>
         
          <MySelect
              value={selectedSort}
              onChange={sortPosts}
              defaultValue="Sortying"
              options={[
                  {value:'title', name:'By title'},
                  {value:'body', name:'By body'},
              ]}
          />
      </div>

       
      <hr  style={{ margin : '20px 0 20px 0'}}/>

    {posts.length 
          ? <PostList remove={removePost} posts={sortedPosts} title="List of post"/>
        :  <div style={{
        color:'red', 
        fontSize : '25px', 
        fontWeight:'bold',
        textAlign : 'center'
      }}>No posts</div>
    }
 
       
      <MyInput
        value={searchedForQuery}
        onChange={(e)=>setsearchedForQuery(e.target.value)}


      placeholder="Search"      
      
      />
      
      

       
    </div>
  );
}

export default App;
