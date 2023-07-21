import React, { Component } from "react";


//Class-based component...
class App extends Component {
  state = {
    person: {
      fullName: "Adegbite Muiz",
      
      //Little expression of who Adegbite Muiz is.
      bio: "Muiz is a young, vibrant, intellectual and passionate web developer who's striving to make wave in the digital world, Muiz likes taking on new challenges and meeting people, Muiz journey as a web developer is marked by his passion to take on new challenges, dedication and relentless curiosity.",
      imgSrc: "./images/bangee.jpg",
      profession: "Engineer and an aspiring Web Developer",
    },
    show: false,
    intervalId: null,
    timeElapsed: 0,
  };

  //Interval...
  componentDidMount() {
    const intervalId = setInterval(this.updateTimeElapsed, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  //Time Elapsed...
  updateTimeElapsed = () => {
    this.setState((prevState) => ({
      timeElapsed: prevState.timeElapsed + 1,
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeElapsed } = this.state;

    return (
      <div style={{ background: "linear-gradient(to right, gray, skyblue)" }}>
        <button style={{ color: "red" }} onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img
              style={{ height: 250, width: 250, padding: 20 }}
              src={imgSrc}
              alt="Avatar"
            />
            <p style={{ color: "white" }}> Bio: {bio}</p>
            <p style={{ color: "purple" }}>Profession: {profession}</p>
          </div>
        )}
        <p>Time Elapsed: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
