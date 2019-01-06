import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class AddressForm extends Component {
    state = {
        address: {
            address: '',
            city: '',
            district: '',
            state: '',
        },
    };

    static getDerivedStateFromProps(props, state){
        if(props.address !== state.address){
            return {
                address: props.address
            }
        }
        return null;
    };

    handleChange = (target) => {
        const { name, value } = target;
        const { address } = this.state;
        address[name] = value;
        this.setState({address});
    };

    render() {
        const { address, city, district, state } = this.state.address;
        return (
            <Card>
                <CardContent>
                    <form className="form-container" noValidate autoComplete="off">
                        <TextField
                            name="address"
                            label="Address"
                            value={address}
                            onChange={(e) => this.handleChange(e.target)}
                            margin="normal"
                            className="input-space"
                        />
                        <div>
                            <TextField
                                name="district"
                                label="District"
                                value={district}
                                onChange={(e) => this.handleChange(e.target)}
                                margin="normal"
                                className="input-space"
                            />
                            <TextField
                                name="city"
                                label="City"
                                value={city}
                                onChange={(e) => this.handleChange(e.target)}
                                margin="normal"
                                className="input-space"
                            />
                            <TextField
                                name="state"
                                label="State"
                                value={state}
                                onChange={(e) => this.handleChange(e.target)}
                                margin="normal"
                                className="input-space"
                            />
                        </div>
                    </form>
                </CardContent>
            </Card>
        );
    }
}

AddressForm.defaultProps = {
    address: {
        address: '',
        city: '',
        district: '',
        state: '',
    },
};

AddressForm.propTypes = {
    address: PropTypes.shape({
        address: PropTypes.string,
        city: PropTypes.string,
        district: PropTypes.string,
        state: PropTypes.string,
    }),
};

export default AddressForm;
