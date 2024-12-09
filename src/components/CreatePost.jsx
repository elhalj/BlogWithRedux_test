import React from "react";
import { useState } from "react"
import { connect } from 'react-redux' ;
import { addPost } from '../JS/Actions/actions' ;

const mapDispatchToProps = dispatch =>  {

    return {
 
         addArticle : post =>  dispatch(addPost(post))
 
     }
 
 }

const CreatePost = (props) => {
    /* eslint-disable */
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addArticle({
            id : Date.now(),
            title,
            content
        })
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Title">Title: </label>
                    <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)}/>

                </div>
                <div>
                    <label htmlFor="Content">Content: </label>
                    <textarea name="content" id="content" cols="30" rows="10" onChange={e => setContent(e.target.value)}></textarea>
                </div>
                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}

export default CreatePost;  //export the component