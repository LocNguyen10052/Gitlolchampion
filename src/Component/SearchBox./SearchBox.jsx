import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';
import './SearchBox.css'

function SearchBox(props) {
    return (
        <div className='Search-box'>
            <InputGroup size="lg" >
                <Form.Control
                    type="text"
                    placeholder="Search products..."
                    // value={searchTerm}
                    onChange={props.inputChange}
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </InputGroup>
        </div>
    );
}

export default SearchBox;