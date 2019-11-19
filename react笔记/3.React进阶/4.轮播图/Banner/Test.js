import React, { Component } from 'react'
import Banner from './index'

export default class Test extends Component {
    srcs = [
        'https://img.alicdn.com/tfs/TB10Xfmlhn1gK0jSZKPXXXvUXXa-520-280.jpg_q90_.webp',
        'https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg',
        'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg',
        'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg',
        'https://img.alicdn.com/tfs/TB1KRyNkW61gK0jSZFlXXXDKFXa-520-280.png_q90_.webp'
    ]
    render() {
        return (
            <div>
                <Banner imgSrcs={this.srcs}/>
            </div>
        )
    }
}
