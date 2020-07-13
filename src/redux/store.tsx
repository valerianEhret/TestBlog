import React from 'react';
import {renderTree} from "../index";


export const store:StoreType = {
    _state:{
        navbarPage:{},
        infoPage: {},
        postsPage:{
            newPost:"",
            posts: [
                {id:1, post: "first post"},
                {id:2, post: "second post"},
            ],
        },
    },
    getState() {
        return this._state
    },
    dispatch(action:ActionType) {

    },
    addPost() {

    },
    changePost(value:string) {
        store.getState().postsPage.newPost = value
        renderTree()
    }

}



export type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch:(action:ActionType) => void
    addPost:Function
    changePost:(value:string) => void
}

export type StateType = {
    navbarPage:NavbarPageType
    infoPage:infoPagType
    postsPage: PostsPageType
}

type NavbarPageType = {
}

type infoPagType = {
}

export type PostsPageType = {
    newPost:string
    posts: Array<PostsType>
}

type PostsType = {
    id:number
    post: string
}

type ActionType = {
    type: string
    newPost:string
}