import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log('Parent constructor');
  }

  componentDidMount() {
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

  render() {
    // console.log('Parent render');
    return (
      <div className="flex flex-col items-center justify-center ">
        <h2 className="p-4 m-4 font-bold bg-gray-100 rounded-md">
          This is a Namaste React Web Series
        </h2>
        {/* <User name="Kashyap"/> */}
        {/* <UserClass name="Debjeet"/> */}
        <div className="p-4 m-4  bg-gray-100 rounded-md">
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <div className="p-4 m-4  bg-gray-100 rounded-md">
          <UserClass name="Apoorva" />
        </div>
      </div>
    );
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
