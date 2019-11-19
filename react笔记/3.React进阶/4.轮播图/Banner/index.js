import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'
import ImgContainer from './imgContainer'
import SwitchArrow from './SwitchArrow'
import SwitchDot from './SwitchDot'

export default class Banner extends Component {
    static defaultProps = {
        width: 520,
        height: 280,
        imgSrcs: [],
        autoDuration: 3000,
        duration: 600
    }
    state = {
        curIndex: 0
    }
    static propTypes = {
        width: PropTypes.number.isRequired, //容器宽度
        height: PropTypes.number.isRequired, //容器高度
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, //图片路径
        autoDuration: PropTypes.number.isRequired, // 自动切换的间隔时间
        duration: PropTypes.number.isRequired  //完成一次切换所需要的时间
    } 
    timer = null; //自动切换的计时器
    autoSwitch(){
        clearInterval(this.timer);
        this.timer = setInterval(()=>{
            this.handleArrowChange('right');
        }, this.props.autoDuration);
    }
    componentDidMount(){
        this.autoSwitch();
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    imgContainerRef = el => {
        console.log(el)
        this.ImgContainerDiv = el;
    }
    handleSwith = (index) => {
        this.setState({
            curIndex: index
        })
        this.ImgContainerDiv.switchTo(index);
    }
    handleArrowChange = types => {
        let cur = this.state.curIndex;
        if(types === 'right'){
            cur++;
            if(cur>=this.props.imgSrcs.length){
                cur = 0
            }
        }else{
            cur--;
            if(cur<0){
                cur = this.props.imgSrcs.length - 1 
            }
        }
        this.handleSwith(cur);
    }
    handleDotChange = index => {
        this.handleSwith(index);
    }
    render() {
        return (
            <div 
                className="banner-container" 
                style={{
                    height: this.props.height,
                    width: this.props.width
                }}
                onMouseEnter={()=>{
                    clearInterval(this.timer);
                }}
                onMouseLeave={()=>{
                    this.autoSwitch();
                }}
                >
                <ImgContainer 
                    ref={this.imgContainerRef}
                    imgSrcs={this.props.imgSrcs} 
                    imgHeight={this.props.height} 
                    imgWidth={this.props.width}
                    duration={this.props.duration}
                />
                <SwitchArrow
                    onChange = {this.handleArrowChange}    
                />
                <SwitchDot
                    total = {this.props.imgSrcs.length}
                    curIndex = {this.state.curIndex}
                    onChange = {this.handleDotChange}
                />
            </div>
        )
    }
}
