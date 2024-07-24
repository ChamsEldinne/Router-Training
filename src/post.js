import { Link } from "react-router-dom"
export default function Post(props){
    return(
        <div className="post">
            <span onClick={()=>{props.deletPost(props.id)}}>X</span> 
            <Link to={`/Homme/${props.id}`}>
                <h2>{props.title}</h2>
                <h6>{props.date}</h6> 
            </Link>
            <p>{(props.body.length>=10)? props.body.substring(0,10)+"...":props.body}</p> 
        </div>
    )
}