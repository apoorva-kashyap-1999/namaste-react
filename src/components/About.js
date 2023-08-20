import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
   constructor(props){
      super(props);
      // console.log('Parent constructor');
  }

  componentDidMount(){
   // console.log('Parent comp did mount');
}

/*Flow sequence of lifecycle-->
Parent constructor
Parent render
Debjeet Child constructor
Kashyap Child render
Debjeet Child constructor
Kashyap Child render
Debjeet Child comp did mount
Kashyap Child comp did mount
Parent comp did mount
*/

   render(){
      // console.log('Parent render');
      return(
         <div className="about-container">
            <h2> This is a Namaste React Web Series</h2>
            <User name="Apoorva"/>
            {/* <UserClass name="Debjeet"/> */}
            <UserClass name="Kashyap"/>
         </div>)
   }
}

// const About = ()=>{
//     return (
//  <div className="about-container">
//     <h2> This is a Namaste React Web Series</h2>
//     <User name="Apoorva"/>
//     <UserClass name="DC"/>
//  </div>)
// }

export default About;