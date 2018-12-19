import React, { Component } from 'react'
import {connect} from 'react-redux'
import './style.css'
import {addComment} from '../../ac'





class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    }
    
    render() {   
       
        return (
            <form className='comment-form'>
                <input 
                    type='text'
                    value={this.state.user}
                    placeholder='user'
                    onChange={this.writeUser}
                />
                <textarea 
                    value={this.state.text}
                    placeholder='comment'
                    onChange={this.writeComment}
                />
                <button 
                    className='comment-form__addComment btn'
                    onClick={this.sentComment}
                >Добавить комментарий</button>      
            </form>
        )
    }

    writeUser = (evt) => {
        this.setState({
            user: evt.target.value
        })
    }

    writeComment = (evt) => {
        this.setState({
            text: evt.target.value
        })
    }

    sentComment = (evt) => {
        evt.preventDefault()
        const {addComment, selectedMovieId} = this.props
        addComment(this.state, selectedMovieId)
        this.setState({
            user: '',
            text: ''
        })
    }

}

export default connect(null, {addComment})(CommentForm)