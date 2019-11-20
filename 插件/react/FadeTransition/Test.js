import React, { Component } from 'react'
import FadeTranstion from './index'

export default class Test extends Component {
    state = {
        show: true
    }
    render() {
        return (
            <div>
                <FadeTranstion in={this.state.show} timeout={3000} appear>
                    <h1>标题</h1>
                </FadeTranstion>
                <button onClick={()=>{
                    this.setState({
                        show: !this.state.show
                    })
                }}>切换显示状态</button>
            </div>
        )
    }
}
