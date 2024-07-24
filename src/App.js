import "./App.css"
import Header from './header';
import Title from './Title';
import Posts from './Posts';
import {Routes,Route,useNavigate } from "react-router-dom" ;
import Footer from "./footer.js"
import About from './about.js';
import NewPost from './newPost.js';
import PostOverally from "./PostOverally.js";
import {useState} from "react" ;
import NotFound from "./notFound.js";

function Aposts() {
 let history=useNavigate() ;
  const [posts, setP] = useState([ 
    {
      id: "1",
      title: "My First Post",
      date: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: "2",
      title: "My 2nd Post",
      date: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: "3",
      title: "My 3rd Post",
      date: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: "4",
      title: "My Fourth Post",
      date: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
  const [ulItems,setUlItems]=useState([
    {name:"Homme",id:"1",selcted:false},
    {name:"Post",id:"2",selcted:false},
    {name:"About",id:"3",selcted:false}
]) ;
  const [lastid, setLastId] = useState(() => {
    return posts.length !== 0 ? Number(posts[posts.length - 1].id) : 0;
  });
  const [newPost,setNewPost]=useState({title:"",body:""}) ;

  function handlAddPost() {
    if (newPost.title !== "" && newPost.body !== "") {
      setP([
        {
          ...newPost,
          id: (lastid + 1).toString(),
          date: JSON.stringify(new Date()),
        },
        ...posts   
      ]);
      setLastId(lastid + 1);
      setNewPost({ title: "", body: "" });
      setUlItems([{name:"Homme",id:"1",selcted:true},
                  {name:"Post",id:"2",selcted:false},
                  {name:"About",id:"3",selcted:false}])
      history('/Homme') ;
    }
  }


  function handelDeletPost(id) {
    let newTble = posts.filter((ele,_)=>{return  ele.id!==id})
    setP(newTble);
    setUlItems([{name:"Homme",id:"1",selcted:true},
    {name:"Post",id:"2",selcted:false},
    {name:"About",id:"3",selcted:false}])
    history('/Homme') ;
  }
  return (
    <div className="App">

      <Title/>
      <Header ulItems={ulItems} setUlItems={setUlItems}/>
      <Routes>
        <Route path="/Homme" element={<Posts posts={posts} handelDeletPost={handelDeletPost}/>} />
        <Route path="/Homme/:id" element={<PostOverally p={posts} handelDeletPost={handelDeletPost} />} /> 
        <Route path="/About" element={<About/>} />
        <Route path="/Post"  element={<NewPost handlAddPost={handlAddPost} newPost={newPost} setNewPost={setNewPost} />}></Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default Aposts;
