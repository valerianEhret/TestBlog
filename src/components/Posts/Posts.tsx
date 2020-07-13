import React, {ChangeEvent} from 'react';
import {PostsPageType} from "../../redux/store";

type PostsPropsType = {
    postsPage: PostsPageType
    changePost:(value:string) => void
}

export function Posts(props:PostsPropsType) {

   const onPostChange =(e:ChangeEvent<HTMLTextAreaElement>) => {
       props.changePost(e.currentTarget.value)
   }


    return (
        <div>
           <div><textarea value= {props.postsPage.newPost} onChange={ onPostChange }/></div>
           <div><button  onClick={ () => alert("click")}    >add</button></div>
            <div>
                <ul>
                    {props.postsPage.posts.map(el => <li  key={el.id} >{el.post} </li>)}
                </ul>
            </div>
        </div>
    )
}