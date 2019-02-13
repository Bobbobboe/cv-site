import React, { Component } from 'react';
import './App.css';
import * as Scroll from 'react-scroll';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

var scroll = Scroll.animateScroll;

export default class Navbar extends Component {
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
      <ButtonToolbar>
        <Button variant="dark" onClick={this.toAbout}>
          <p>About me</p>
        </Button>

        <Button variant="dark" onClick={this.toSkills}>
          <p>My skills</p>
        </Button>

        <Button variant="dark" onClick={this.toProjects}>
          <p>My Projects</p>
        </Button>

        <Button variant="dark" onClick={this.toCV}>
          <p>My CV</p>
        </Button>

        <Button variant="dark" onClick={this.toContact}>
          <p>My Contact Details</p>
        </Button>
      </ButtonToolbar>
      </div>
    );
  }

}