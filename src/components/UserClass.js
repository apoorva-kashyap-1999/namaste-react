import React from "react";

//class component of User.js
class UserClass extends React.Component{
    //for props
    constructor(props){
        super(props);
        //state variables
        this.state= {
            userInfo : {
                name:"DummyName",
                location:"Default",
                avatar_url:""
            },
            count:0,
        };
        // console.log('Child constructor');
    }

    async componentDidMount(){
        // console.log(this.props.name +' Child comp did mount');
        const data= await fetch("https://api.github.com/users/apoorva-kashyap-1999");
        const json = await data.json();
        this.setState({
            userInfo:{
                name:json.name,
                location:json.location,
                avatar_url:json.avatar_url
            }
        });
        // this.timer = setInterval(()=>console.log('Namaste React OP'),(50000));
    }

    componentDidUpdate(){
        console.log('Component did update triggered with setState');
    }

    componentWillUnmount(){
        console.log('Component will unmount calling');
        // clearInterval(this.timer)
    }
    
    render(){
        console.log('Child render');
        // const {name}= this.props;
        const {count} =this.state;
        return ( <div className="user-card">
        <img className="rounded-md w-48" src={this.state.userInfo.avatar_url} />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>Loction : {this.state.userInfo.location}</h3>
        <h4>Contact : 9xxxxxxx</h4>
        <h5>Like(s) : {count}</h5>
        <button className="bg-gray-200 hover:bg-gray-400 rounded-md px-2 py-1" onClick={()=>{
            this.setState({
                count:count+1
            })
        }}>Like</button>
    </div>
    )
    }
}

export default UserClass;