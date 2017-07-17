import React, { Component } from 'react';

import ReactDOM from 'react-dom';
class TestClickComponent extends Component {
    constructor(props) {
        super();

    }

    handleClick(event) {

        var tipE = ReactDOM.findDOMNode(this.refs.tip);

        if (tipE.style.display === 'none') {
            tipE.style.display = 'inline'
        } else {
            tipE.style.display = 'none'
        }

    }
    render() {
        return (
            <div>
                <button onClick={
                    this.handleClick.bind(this)

                }>
                    显示or隐藏</button>
                <span ref='tip' >测试点击</span>
            </div>
        )
    }

}
class TestInputComonent extends Component {
    constructor(props) {
        super()
        this.state = {
            content: ''
        }
    }

    changeHandler(event) {

        this.setState({
            content: event.target.value
        })
        event.preventDefault();
        event.stopPropagation();

    }

    render() {
        return (
            <div>
                <input
                    onChange={
                        this.changeHandler.bind(this)
                    }
                    type="text" /><span>{this.state.content}</span>
            </div>
        )
    }
}

ReactDOM.render(<div>
    <TestInputComonent />
    <TestClickComponent />
</div>, document.getElementById('box'))



//一下分别是button和input的箭头函数写法 （写在标签里）
//  (e) => {
//                         var tipE = ReactDOM.findDOMNode(this.refs.tip);
//                          console.log(this.refs.tip)
//                         if (tipE.style.display === 'none') {
//                             tipE.style.display = 'inline'
//                         } else {
//                             tipE.style.display = 'none'
//                         }
//                     }

//  (e) => {
//                             // if (e.target.value) {
//                             this.setState({
//                                 content: e.target.value
//                             })
//                             // }
//                         }