import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import orange from '@material-ui/core/colors/orange';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
    root: {
        color: orange[600],
        '&$checked': {
            color: orange[500],
        },
    },
    checked: {},
};

class RadioButtons extends React.Component {
    state = {
        selectedValue: '',
    };

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render(){
        const { classes } = this.props;

        return (
            <Radio
                checked = {this.state.selectedValue === 'a'}
                onChange={this.handleChange}
                value = "a"
                name = "radio-button"
                aria-label = "A"
                classes = {{
                    root: classes.root,
                    checked: classes.checked,
                }}
                icon = { <RadioButtonUncheckedIcon/> }
                checkedIcon = { <RadioButtonCheckedIcon/> }
            />
        );
    }
}

RadioButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtons);