import React from 'react';
import {Posts} from "./Posts/Posts";
import {Info} from "./Info/Info";
import {StoreType} from "../redux/store";
import {PostsContainer} from "./Posts/PostsContainer";

type BlogPropsType = {
    store:StoreType
}

export function Blog(props:BlogPropsType) {
return (
    <div>
        <Info/>
        <PostsContainer store={props.store}/>
    </div>
)
}