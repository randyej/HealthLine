import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Glyphicon,
  Grid,
  Row
} from 'react-bootstrap';

import './app.css'; // webpack lets us import CSS files like JS files

class App extends Component {

  constructor(props) {
    super(props);

    this.intervalId = undefined;

    this.onOrderChange = this.onOrderChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onPrev = this.onPrev.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.props.store.dispatch({
      type: 'GET_IMAGES',
      data: {
        order: this.props.store.getState().order,
        category: this.props.store.getState().category,
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
    // cycle the next image every 4 seconds
    this.intervalId = setInterval( () => {
      this.onNext();
    }, 4000);
  }

  componentWillUnmount() {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onOrderChange(event) {
    this.props.store.dispatch({
      type: 'GET_IMAGES',
      data: {
        order: event.target.value,
        category: this.props.store.getState().category
      }
    });
  }

  onCategoryChange(event) {
    this.props.store.dispatch({
      type: 'GET_IMAGES',
      data: {
        order: this.props.store.getState().order,
        category: event.target.value
      }
    });
  }

  onPrev() {
    this.props.store.dispatch({
      type: 'PREV_IMAGE'
    });
  }

  onNext() {
    this.props.store.dispatch({
      type: 'NEXT_IMAGE'
    });
  }

  render() {
    // use smaller images for smaller screen
    const activeImgURL = window.innerWidth < 768
      ? this.props.store.getState().activeImg.previewURL
      : this.props.store.getState().activeImg.webformatURL;

    return (
      <div className="App">

        <Grid>
          {/* Filters */}
          <Row>
            {/* Image Order */}
            <Col sm={4}>
              <FormGroup bsSize="large"
                controlId="order"
              >
                <ControlLabel>Order</ControlLabel>
                <FormControl
                  componentClass="select"
                  value={this.props.store.getState().order}
                  onChange={this.onOrderChange}
                >
                  <option value={'latest'}>Latest</option>
                  <option value={'popular'}>Popular</option>
                </FormControl>
                <FormControl.Feedback />
              </FormGroup>
            </Col>
            {/* Image Category */}
            <Col sm={4}>
              <FormGroup bsSize="large"
                controlId="category"
              >
                <ControlLabel>Category</ControlLabel>
                <FormControl
                  componentClass="select"
                  value={this.props.store.getState().category}
                  onChange={this.onCategoryChange}
                >
                  <option value={''}>All</option>
                  <option value={'animals'}>Animals</option>
                  <option value={'backgrounds'}>Backgrounds</option>
                  <option value={'buildings'}>Buildings</option>
                  <option value={'business'}>Business</option>
                  <option value={'computer'}>Computer</option>
                  <option value={'education'}>Education</option>
                  <option value={'fashion'}>Fashion</option>
                  <option value={'feelings'}>Feelings</option>
                  <option value={'food'}>Food</option>
                  <option value={'health'}>Health</option>
                  <option value={'industry'}>Industry</option>
                  <option value={'music'}>Music</option>
                  <option value={'nature'}>Nature</option>
                  <option value={'people'}>People</option>
                  <option value={'places'}>Places</option>
                  <option value={'religion'}>Religion</option>
                  <option value={'science'}>Science</option>
                  <option value={'sports'}>Sports</option>
                  <option value={'transportation'}>Transportation</option>
                  <option value={'travel'}>Travel</option>
                </FormControl>
                <FormControl.Feedback />
              </FormGroup>
            </Col>
            {/* Prev/Next buttons */}
            <Col sm={4} className="theButtons">
              <Button bsSize="large" onClick={this.onPrev}>
                <Glyphicon glyph="chevron-left" />
              </Button>
              <Button bsSize="large" onClick={this.onNext}>
                <Glyphicon glyph="chevron-right" />
              </Button>
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Col xs={12} className="imgBox">
              {/* TODO I'm not sure if this component has a bug or if I'm missing something at the moment...
                    ...but it only shows the images the first time through the cycle - argh!
              <ReactCSSTransitionGroup
                transitionName="slideshow"
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={0}>
                <img
                  src={activeImgURL}
                  key={activeImgURL}
                />
              </ReactCSSTransitionGroup>
              */}
              <img
                src={activeImgURL}
                key={activeImgURL}
              />
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default App;
