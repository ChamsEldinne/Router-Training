export default function NewPost({handlAddPost,newPost,setNewPost}){
    return (
    <div className="addpost">
        <input type="text"  placeholder="enter the title of the new post" value={newPost.title} onChange={(e)=>{
        setNewPost({...newPost,title:e.target.value}) ;
        }}/>
        <input type="text" placeholder="enter the body of the new post" value={newPost.body}  onChange={(e)=>{
        setNewPost({...newPost,body:e.target.value}) ;
        }}/> 
        <button onClick={handlAddPost} >post</button>
    </div> 
    )
}