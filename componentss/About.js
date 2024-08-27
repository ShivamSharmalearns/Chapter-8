// import User from "./User(using Function)";    //normal
import UserClass from "./User(usingClass)"; //using class
import { Component } from "react";

class About extends Component {  //or only Component
  
  constructor(props){
    super(props);

    console.log("Parent Constructor called")
  }

 componentDidMount(){
    console.log("Parent Constructor did mount")
    }

    render() {
        console.log("Parent Render called")
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste react </h2>
        {/* <User name = {"Shivam Sharma (using function)"}  />   NORMAL in file named User(using Function) */}
        <UserClass
          name={"Shivam Sharma (using class)"}
          location={"NewYork (using class)"}
        />
        {/* <UserClass    ** for example of how it will workk if there are two userClass**
          name={"Sara (using class)"}
          location={"NewYork (using class)"}
        /> */}
        {/* using CLASS */} {/* in file named User(using Class) */}
      </div>
    );
  }
}

export default About;
