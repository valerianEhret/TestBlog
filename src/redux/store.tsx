import React from 'react';
import {renderTree} from "../index";




export const store:StoreType = {
    _state:{
        navbarPage:{},
        infoPage: {},
        postsPage:{
            currentInputValue:"",
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
    changePost(value:string) {
        this.getState().postsPage.currentInputValue = value     // приавниеваем значние newPost значению value (e.currenTarge.value), которое приходит снизу из Posts и обновляем компоненту.
        renderTree()
    },
    addPost() {   // создали новый объект пост вместо post newMessage, значние, которое придет снизу из Posts

        let newPost = {id: 3, post: this.getState().postsPage.currentInputValue};
        this.getState().postsPage.posts.push(newPost)
        this.getState().postsPage.currentInputValue = ""
        renderTree()
    },
}



export type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch:(action:ActionType) => void
    addPost:() => void
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
    currentInputValue:string
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