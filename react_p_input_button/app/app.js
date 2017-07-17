import React ,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
class Box extends Component{
    
    constructor(props){
        super()
        
        this.state={
            
            fontSize:'20px'
        }
    }
    render(){
        return(
            <div style={{fontSize:this.state.fontSize}}>
                {this.props.name}
            </div>
        )
    }

    componentWillMount(){
        //alert('will')
    }
    componentDidMount(){
       // alert('did')
        var _self=this;
        window.setInterval(function(){
            var randomdata=parseInt(Math.random()*100)
            this.setState({
                fontSize:randomdata
            })
        }.bind(this),300)
    }
}
ReactDom.render(<Box name="adasd"/>,document.getElementById('box'))