import React, {ChangeEvent} from 'react';
import {PostsPageType} from "../../redux/store";
import {addPostAC, changePostAC} from "../../redux/reducer";

type PostsPropsType = {
    postsPage: PostsPageType
    dispatch:Function
    // changePost:(value:string) => void
    // addPost:() =>void
}

export function Posts(props:PostsPropsType) {


    //  закидываем в функцию ChangePost, которая приходит в props из store значение value, а точнее e.currentTarget.value
    // и value уходит наверх в данные в store
   const onPostChange =(e:ChangeEvent<HTMLTextAreaElement>) => {
       props.dispatch(changePostAC(e.currentTarget.value))
       // props.changePost(e.currentTarget.value)
       // dispatch у Димыча используется диспатч
   }


   const onButtonClick = () => {
       props.dispatch(addPostAC())
          // props.addPost()
   }

    return (
        <div>
           <div><textarea value= {props.postsPage.currentInputValue} onChange={ onPostChange }/></div>
           <div><button  onClick={ onButtonClick }    >add</button></div>
            <div>
                <ul>
                    {props.postsPage.posts.map(el => <li  key={el.id} >{el.post} </li>)}
                </ul>
            </div>
        </div>
    )
}