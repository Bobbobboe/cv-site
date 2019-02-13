import React, { Component } from 'react';
import './App.css';
import * as Scroll from 'react-scroll';
import Button from 'react-bootstrap/Button'

var scroll = Scroll.animateScroll;

export default class Bottom extends Component {
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
          <Button variant="dark" onClick={this.toTop}>
            Go To top
          </Button>
        </div>
      )
    }
  }