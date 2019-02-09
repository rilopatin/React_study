import React, {Component} from 'react'
import error from './error.jpg'
import error404 from './error404.png'

import img from './error.jpg'
// import { spawn } from 'child_process';

export default class ErrorMessage extends Component {
    render () {
        const {code} =this.props
        let imgName, errText;
        switch(code) {
            case '404': {
                imgName = `${error404}`
                errText = `Error ${code} : resource not found`
                break
            }
            case '408': {
                imgName = `${error}`
                errText = `Error ${code} : timeout`
                break
            }
            case '410': {
                imgName = `${error}`
                errText = `Error ${code} : resource removed`
                break
            }
            default: {
                
                    imgName = `${error}`
                    errText = `Error ${code} : resource not found`
                    break
             
                    
            }
        }
        return (
            <>
            <span className='error-text'>{errText}</span>
            <img alt="error"> {imgName} </img>
            </>
        )
    }
    
}
    

//<img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error"></img>