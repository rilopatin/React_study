import React, { Component } from 'react'

import './post-list-item.css'
import PostDate from "../post-date"
import Modal from '../../components/modal/modal'

export default class PostListItem extends Component {
    constructor(props) {
        super(props)
        const {id, label} = props
        this.state = {
            edit: false,
            labelEdit: label
        }
        this.modalOpen = this.modalOpen.bind(this)
        //this.changeLabel = this.changeLabel.bind(this)
    }

    modalOpen () {
        this.setState (({edit}) => ({
            edit: !edit
        }))
    }

    changeLabel = (text) => {
        this.setState({labelEdit: text});
        this.modalOpen()
    }

    render () {
        const {onDelete, onToggleLiked, onToggleImportant, important, like} = this.props
        const {edit} = this.state
        let classNames = 'app-list-item d-flex justify-content-between'
        if (important) {
            classNames += ' important'
        }
        if (like) {
            classNames += ' like'
        }

       return (
           <>
           <Modal edit={edit} label={this.state.labelEdit} modalClosed={this.modalOpen} modalSubmit={this.changeLabel}>
           </Modal>
           <div className={classNames}>
            <span className="app-list-item-label"
                onClick={onToggleLiked}>
                {this.state.labelEdit}
            </span>
               <div className="d-flex justify-content-center align-items-center">
                   <button
                       type="button"
                       className="btn-star btn-sm"
                       onClick={onToggleImportant}>
                       <i className="fa fa-star"></i>
                   </button>
                   <button
                       type="button"
                       className="btn-trash btn-sm"
                       onClick={onDelete}>
                       <i className="fa fa-trash-o"></i>
                   </button>
                   <i className="fa fa-heart"></i>
                   <PostDate />
                   <button
                       type="button"
                       className="btn-sm"
                       onClick={this.modalOpen}>
                       <i className="fa fa-edit"></i>
                   </button>
               </div>
           </div>
           </>
       )
    }
}
