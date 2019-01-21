import React, { Component }  from 'react';
import Moment from 'react-moment';

import './post-date.css'

export default class PostDate extends Component {
    render() {
        const date = new Date();

        return (
            <div>
                <Moment className="post-date">{date}</Moment>
            </div>
        );
    }
}