import React from 'react';
import {Posts} from "./Posts";
import {StoreType} from "../../redux/store";


type PostsContainerPropsType = {
    store:StoreType
}


export function PostsContainer(props:PostsContainerPropsType) {



    return (
        <div>
          <Posts
              postsPage={props.store.getState().postsPage}
              changePost={props.store.changePost}
          />
        </div>
    )
}