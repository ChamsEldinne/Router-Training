import { useParams } from "react-router-dom";
import NotFound from "./notFound";
export default function PostOverally({p,handelDeletPost}){
    let {id}=useParams() ;
    let props ;

    for(let i=0;i<p.length;i++){
        if(p[i].id===id.toString()){
            props=p[i] ;
            break ;
        }
    }
    console.log(props) ;
    if(props)
        return (
            <div className="PostOverally">
                <h2>{props.title}</h2>
                <h6>{props.date}</h6>
                <p>{props.body}</p>
                <button onClick={()=>{
                    handelDeletPost(props.id) ;
                }}>delet</button> 
            </div>
        )
    else {
        return <NotFound/>
    }
}