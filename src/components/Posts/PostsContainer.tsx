import React from 'react';
import {Posts} from "./Posts";
import {store, StoreType} from "../../redux/store";


type PostsContainerPropsType = {
    store:StoreType
}


export function PostsContainer(props:PostsContainerPropsType) {


    return (
        <div>
          <Posts
              postsPage={props.store.getState().postsPage}
              dispatch={props.store.dispatch.bind(props.store)}
             // changePost={props.store.changePost.bind(store)}   // !!!! bind(store) иначе не работает в store функция changePost
             // addPost={props.store.addPost.bind(store)}   // !!!! bind(store) иначе не работает в store функция addPost
          />
        </div>
    )
}