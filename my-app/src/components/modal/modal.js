import React, {Component} from 'react'

import './modal.css'

export default class Modal extends Component {

    constructor(props) {
        super(props)
        const{label} = props
        this.state = {
            newPostText: label
        }

    }
    changeLabel = (evn) => {
        this.setState({newPostText: evn.target.value});
    }

    onSubmit = (evn) => {
        this.props.modalSubmit(this.state.newPostText);
    }

    render () {
        let modalElem = null
        if (this.props.edit) {
            modalElem = (
                <div className="Modal">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Пост</h4>
                        <button type="button"
                                className="close"
                                onClick={this.props.modalClosed}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body mx-3">
                        <div className="md-form mb-5">
                            <input type="text"
                                   className="form-control"
                                   defaultValue={this.state.newPostText}
                                   onChange={this.changeLabel}/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-info"
                                onClick={this.onSubmit}>Подтвердить</button>
                    </div>
                </div>
            )
        }
        return (
            <>
                {modalElem}
            </>

        )
    }
}




