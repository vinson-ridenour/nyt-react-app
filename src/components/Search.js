import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Panel, Button } from 'react-bootstrap';
import API from '../utils/api.js'
import Results from './Results.js'

class Search extends Component {
    state = {
    	searchTerm: '',
    	yearStart:"",
    	yearEnd:"",
    	results: []
  	};

	handleFormSubmit = event => {
		console.log(this.state.results)
		event.preventDefault();
		
		API.search(this.state)
      		.then(res => this.setState({results:res.data.response.docs}))
      		.catch(err => console.log(`Error getting articles:  ${err}`))
	};

	handleChange = event => {
	    const value = event.target.value;
	    const name = event.target.name;
	    this.setState({
	      	[name]: value
	    });
    };
    
    render = () => {
	    return (
	    	<div className="askedAndAnswered">
		    	<Panel className="searchPnl">
		    		<h2 className="searchBnr">Search</h2>
				    <Form>
				        <FormGroup
				          controlId="formBasicText"
				        >
				        	<ControlLabel>Search Term</ControlLabel>
				        	<FormControl
				          		name="topic"
				            	value={this.state.topic}
				            	placeholder="Enter text"
				            	onChange={this.handleChange}
				          	/>
					        <ControlLabel>Start Year</ControlLabel>
					        <FormControl
					          	name="yearStart"
					            value={this.state.yearStart}
					            placeholder="Enter Start Year"
					            onChange={this.handleChange}
					        />
					        <ControlLabel>End Year</ControlLabel>
					        <FormControl
					          	name="yearStart"
					            value={this.state.yearEnd}
					            placeholder="Enter End Year"
					            onChange={this.handleChange}
					        />
					        <FormControl.Feedback />
							<Button onClick={this.handleFormSubmit} className="btn btn-primary searchBtn">Search</Button>
					        {/*
							<Button id="searchBtn" bsStyle="primary" bsSize="large">Search</Button>
					        */}
				        </FormGroup>
				    </Form>
		    	</Panel>

		    	<div>
		    		<Results results={this.state.results} />
		    	</div>
		    </div>
	    );
  	}
};