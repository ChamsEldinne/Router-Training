import "./header.css" ;
import { useState } from "react";
import {Link} from "react-router-dom" ;

export let lastClick="Homme" ;

export default function Header({ulItems,setUlItems}){
    const [searchValue,setSearchValue]=useState("") ;
    function handleClick(id){
        let newTable=[] ;
        for(let i=0;i<ulItems.length ;i++){
            if(ulItems[i].id===id){
               ulItems[i].selcted=true ;
               lastClick=ulItems[i].name ;
            }else{  ;
               ulItems[i].selcted=false
            } 
            newTable.push(ulItems[i]) ;
        }
        setUlItems(newTable) ;
    }

    return(
        <header>
            <div className="left">
                <input placeholder="search for post by title name" value={searchValue} onChange={(e)=>{
                    setSearchValue(e.target.value) ;
                }}></input>
            </div>
            <ul>
               {ulItems.map((elm,_)=>{return  <li className={elm.selcted ? "actif":""} key={elm.id} onClick={()=>{handleClick(elm.id)}} > <Link to={"/"+elm.name}> {elm.name} </Link> </li>})}
            </ul>
        </header>
    )
}
