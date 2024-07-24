import Post from "./post.js";
export default function Posts({ posts ,handelDeletPost}) {
  return ( 
    posts.length>0 ?
      <div className="posts">
      {posts.map((p) => {
        return (
          <div className="Outerpost" key={p.id}>
          <Post
            title={p.title}
            body={p.body}
            id={p.id}
            date={p.date}
            deletPost={handelDeletPost}
          /> 
          </div>
        );
      }) }
    </div> : <div className="posts">no post to display</div>
  );
}
