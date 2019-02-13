import React, { Component } from 'react';
import './App.css';
import * as Scroll from 'react-scroll';


var scroll = Scroll.animateScroll;

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.toAbout = this.toAbout.bind(this);
    this.toSkills = this.toSkills.bind(this);
    this.toProjects = this.toProjects.bind(this);
    this.toCV = this.toCV.bind(this);
    this.toContact = this.toContact.bind(this);
  }

  toAbout() {
    
  }

  toSkills() {

  }

  toProjects() {

  }

  toCV() {

  }

  toContact() {

  }

  render() {
    return (
      <div className="App-navbar">
        <button onClick={this.toAbout}>
          <p>About me</p>
        </button>

        <button onClick={this.toSkills}>
          <p>My skills</p>
        </button>

        <button onClick={this.toProjects}>
          <p>My Projects</p>
        </button>

        <button onClick={this.toCV}>
          <p>My CV</p>
        </button>

        <button onClick={this.toContact}>
          <p>My Contact Details</p>
        </button>

      </div>
    );
  }

}

class Selection extends Component {
  constructor(props) {
    super(props);
    this.toTop = this.toTop.bind(this);
  }

  toTop() {
    scroll.scrollToTop({
      spy:true,
      smooth:true,
      hashSpy:true,
      duration:200
    });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.toTop}>
          Go To top
        </button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Online cv</h1>
          <h2>Bob Van der Smissen</h2>
          <Navbar />
        </header>
        <body className="App-body">
          <Selection />
        </body>
      </div>
    );
  }
}

export default App;
