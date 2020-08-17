import {PostsPageType} from "./store";

export type ActionsTypes = ReturnType<typeof addPostAC> |
                  ReturnType<typeof changePostAC>




export const reducer = (state:PostsPageType, action:ActionsTypes) => {
    switch (action.type) {
        case "CHANGE_POST":

            state.currentInputValue = action.value    // приавниеваем значние newPost значению value (e.currenTarge.value), которое приходит снизу из Posts и обновляем компоненту.
            return state
        // renderTree()

        case "ADD_POST":
            let newPost = {id: 3, post: state.currentInputValue}; //this.getState().postsPage.currentInputValue
            state.posts.push(newPost) // this.getState().postsPage.posts.push(newPost)
            state.currentInputValue = "" //this.getState().postsPage.currentInputValue = ""
            return state
        // renderTree()
        default:
            return state
    }
}

export const addPostAC = () => {
    return  {
        type:"ADD_POST"
    } as const
}

export const changePostAC = (value:string)=> {
    return    {
        type:"CHANGE_POST",
        value: value
    } as const

}