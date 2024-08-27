//Writiing User with class(same ye wsla code but in a diff way by using class (neeche))

// const User = () => {
//     return (
//       <div className='user-card'>
//           <h2>Name : Shivam Sharma</h2>
//           <h3>Location : NewYork</h3>
//           <h3>id : shivam@gmail</h3>
//       </div>
//     )
//   }

import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    // The super keyword is used to call the constructor of the parent class (React.Component in this case).
    super(props);

    this.state = {
      count: 0,
      // count2: 2,
      userInfo: {      //to get the live data using link from the github
        name: "Dummy",
        location: "default",
        avatar_url: "dummy"
      },
    };

    console.log(this.props.name + "Child Constructor called");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child component did mount");

    //Api call in class (FETCHING LIVE DATA)
    const data = await fetch("https://api.github.com/users/ShivamSharmalearns");
    const json = await data.json();
    console.log(json); // to check in console if i got my api

    this.setState({
      userInfo: json,    //setting the user info acc to the Github
    });
    console.log(json);
  }

componentDidUpdate(){
  console.log("Updated");
}

componentWillUnmount(){
console.log("Unmount");
}

  render() {
    // const { name, location } = this.props; //short form
    const { count } = this.state; //{count, count2}

    console.log(this.props.name + "Child Render called");

    const {name, location, avatar_url} = this.state.userInfo;    //fetchung live data from Github

    return (
      <div className="user-card">
        {/*use {this} bcz of super props */}
        <h1>Count : {count}</h1> {/*State variable */}
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLE(count) LIKE THIS - this.state.count = this.state.count + 1
            //using function, we update count using setCount - const [count, setCount] = useState[];
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        {/* <h2>Name : {name}</h2> */}
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <img src={avatar_url} alt="" />
        <h3>id : shivam@gmail</h3>
        {/* <h1>Count : {count2}</h1> state variable */}
        {/* <h2>Name : {this.props.name}</h2> */}
        {/* <h3>Location : {this.props.location}</h3> */}
      </div>
    );
  }
}

export default UserClass;
