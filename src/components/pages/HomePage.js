// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { allViewAction } from '../state/actions/HomepageActions';
import { getRandomSelectedFields } from '../state/actions/HomepageActions';

import {
    Grid,
    FormGroup,
    FormControl,
    FormControlLabel,
    FormHelperText,
    RadioGroup,
    Radio,
    Checkbox,
    TextField,
    Button
} from '@material-ui/core';

import { SearchableSelectComp, SearchableMultiSelectComp } from '../common/SearchableSelect';

// IMPORT IMAGES

import react from '../../images/react-small.png';
import reactrouter from '../../images/react-router-small.png';
import redux from '../../images/redux-small.png';
import bootstrap from '../../images/bootstrap4-small.png';
import sass from '../../images/sass-small.png';
import webpack from '../../images/webpack-small.png';


// COMPONENT

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            textVal: '',
            checkVal: '',
            radioVal: '',
            emailVal: '',
            emailValidation: true,
            numberVal: '',
            numberValidation: true,
            selectVal: '',
            multiSelectVal: [],
            textareaVal: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateNumber = this.validateNumber.bind(this);
        this.displayAllFields = this.displayAllFields.bind(this);
        this.getSelectedFields = this.getSelectedFields.bind(this);
    }

    handleChange = name => event => {
        if (name === 'checkVal') {
            this.setState({
                [name]: event.target.checked,
            });
        } else {
            if(name === 'emailVal') {
                this.validateEmail(event.target.value);
            }
            if(name === 'numberVal') {
                this.validateNumber(event.target.value);
            }
            this.setState({
                [name]: event.target.value,
            });
        }
    };

    validateEmail(email) {
        let re = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
        this.setState({ emailValidation: re.test(String(email).toLowerCase()) });
    }

    validateNumber(number) {
        let re = new RegExp('^[1-9]\\d*$');
        this.setState({ numberValidation: re.test(String(number).toLowerCase()) });
    }

    displayAllFields() {
        this.props.displayAllFields();
    }

    getSelectedFields() {
        this.props.getSelectedFields();
    }

    render() {
        let {
            textField,
            checkbox,
            radioBox,
            emailField,
            numberField,
            selectField,
            multiSelectField,
            textAreaField,
            fileUploadField,
            selectedItems
        } = this.props.homepageState;

        return (
            <main>
                <div className="jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
                    <div className="homepage">
                        <div className="btns-content">
                            <Button variant="outlined" color="primary" className="call-api" onClick={() => this.getSelectedFields()}>
                                Fetching from API
                            </Button>
                            <Button variant="outlined" color="secondary" className="view-all" onClick={() => this.displayAllFields()}>
                                Display all fields
                            </Button>
                        </div>

                        <Grid container alignItems="center">
                            {
                                textField ?
                                    <Grid item xs={6}>
                                        <FormGroup row>
                                            <FormControl className="field-content">
                                                <TextField
                                                    id="text"
                                                    label="Text"
                                                    type="text"
                                                    margin="normal"
                                                    value={this.state.textVal}
                                                    onChange={this.handleChange('textVal')}
                                                />
                                            </FormControl>
                                        </FormGroup>
                                    </Grid>
                                    :
                                    null
                            }

                            {
                                textAreaField ?
                                    <Grid item xs={6}>
                                        <FormGroup row>
                                            <FormControl className="field-content">
                                                <TextField
                                                    multiline
                                                    id="text_area"
                                                    label="Text area"
                                                    type="text"
                                                    margin="normal"
                                                    value={this.state.textareaVal}
                                                    onChange={this.handleChange('textareaVal')}
                                                />
                                            </FormControl>
                                        </FormGroup>
                                    </Grid>
                                    :
                                    null
                            }

                            {
                                checkbox ?
                                    <Grid item xs={6}>
                                        <FormGroup row>
                                            <FormControlLabel
                                                className="field-content checkbox-field"
                                                control={
                                                    <Checkbox
                                                        checked={this.state.checkVal}
                                                        onChange={this.handleChange('checkVal')}
                                                        value="checkVal"
                                                    />
                                                }
                                                label="Checkbox"
                                            />
                                        </FormGroup>
                                    </Grid>
                                    :
                                    null
                            }

                            {
                                radioBox ?
                                    <Grid item xs={6}>
                                        <FormGroup>
                                            <FormControl className="field-content radio-group">
                                                <RadioGroup
                                                    aria-label="Gender"
                                                    name="gender1"
                                                    className="radio-group-content"
                                                    value={this.state.radioVal}
                                                    onChange={this.handleChange('radioVal')}
                                                >
                                                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                                </RadioGroup>
                                            </FormControl>
                                        </FormGroup>
                                    </Grid>
                                    :
                                    null
                            }

                            {
                                emailField ?
                                    <Grid item xs={6}>
                                        <FormGroup row>
                                            <FormControl className="field-content">
                                                <TextField
                                                    id="email"
                                                    label="Email"
                                                    type="email"
                                                    margin="normal"
                                                    value={this.state.emailVal}
                                                    onChange={this.handleChange('emailVal')}
                                                />
                                                {
                                                    !this.state.emailValidation ?
                                                        <FormHelperText className="validation-warn">Please input the valid email format.</FormHelperText>
                                                        :
                                                        null
                                                }
                                            </FormControl>
                                        </FormGroup>
                                    </Grid>
                                    :
                                    null
                            }

                            {
                                numberField ?
                                    <Grid item xs={6}>
                                        <FormGroup row>
                                            <FormControl className="field-content">
                                                <TextField
                                                    id="number"
                                                    label="Number"
                                                    type="text"
                                                    margin="normal"
                                                    value={this.state.numberVal}
                                                    onChange={this.handleChange('numberVal')}
                                                />
                                                {
                                                    !this.state.numberValidation ?
                                                        <FormHelperText className="validation-warn">Please input the only
                                                            number.</FormHelperText>
                                                        :
                                                        null
                                                }
                                            </FormControl>
                                        </FormGroup>
                                    </Grid>
                                    :
                                    null
                            }

                            {
                                selectField ?
                                    <Grid item xs={6}>
                                        <FormGroup row>
                                            <FormControl className="field-content searchable-select">
                                                <SearchableSelectComp suggestions={selectedItems} />
                                            </FormControl>
                                        </FormGroup>
                                    </Grid>
                                    :
                                    null
                            }

                            {
                                multiSelectField ?
                                    <Grid item xs={6}>
                                        <FormGroup row>
                                            <FormControl className="field-content searchable-select">
                                                <SearchableMultiSelectComp suggestions={selectedItems} />
                                            </FormControl>
                                        </FormGroup>
                                    </Grid>
                                    :
                                    null
                            }

                            {
                                fileUploadField ?
                                    <Grid item xs={6}>
                                        <FormGroup row>
                                            <FormControl className="field-content file-upload">
                                                <Button
                                                    containerElement='label' // <-- Just add me!
                                                    label='My Label'>
                                                    <input type="file" />
                                                </Button>
                                            </FormControl>
                                        </FormGroup>
                                    </Grid>
                                    :
                                    null
                            }
                        </Grid>
                    </div>

                    <hr className="my-4"/>
                    <div className="text-center">
                        <img className="m-3" height="50" src={react} alt="React"/>
                        <img className="m-3" height="50" src={reactrouter} alt="React Router"/>
                        <img className="m-3" height="50" src={redux} alt="Redux"/>
                        <img className="m-3" height="50" src={bootstrap} alt="Bootstrap 4"/>
                        <img className="m-3" height="50" src={sass} alt="Sass"/>
                        <img className="m-3" height="50" src={webpack} alt="Webpack"/>
                    </div>
                </div>
            </main>
        );
    }

}

HomePage.propTypes = {
    homepageState: PropTypes.object,
    displayAllFields: PropTypes.func,
    getSelectedFields: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        homepageState: state.homepage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        displayAllFields: () => {
            dispatch(allViewAction());
        },
        getSelectedFields: () => {
            dispatch(getRandomSelectedFields());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);