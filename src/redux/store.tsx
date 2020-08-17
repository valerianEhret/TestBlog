import React from 'react';
import {renderTree} from "../index";
import {ActionsTypes, reducer} from "./reducer";




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
    }, // dispatch получает action и вызывает reducer c action , а reducer возвращает новый state
    dispatch(action: ActionsTypes) {
        this.getState().postsPage =   reducer(this.getState().postsPage, action)
        renderTree()
    },
    // changePost(value:string) {
    //     this.getState().postsPage.currentInputValue = value     // приавниеваем значние newPost значению value (e.currenTarge.value), которое приходит снизу из Posts и обновляем компоненту.
    //     renderTree()
    // },
    // addPost() {   // создали новый объект пост вместо post newMessage, значние, которое придет снизу из Posts
    //
    //     let newPost = {id: 3, post: this.getState().postsPage.currentInputValue};
    //     this.getState().postsPage.posts.push(newPost)
    //     this.getState().postsPage.currentInputValue = ""
    //     renderTree()
    // },
}


export type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch:(action:ActionsTypes)=>void
    // addPost:() => void
    // changePost:(value:string) => void
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
