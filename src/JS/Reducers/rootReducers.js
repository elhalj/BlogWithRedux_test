import { ADD_ARTICLE } from "../Constants/actions-types";


const initialState = {
    
    posts : [
        {
            id : 1,
            title : 'mon premier message',
            content : 'mon premier contenu'
        }
    ]
}

const rootReduccer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                posts : [...state.posts,action.payload]
            }
        default : 
            return state
    }
}

export default rootReduccer;