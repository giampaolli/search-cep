import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import SearchCep from './components/SearchCep'
import {fetchAddress} from "./redux/reducers/address/action-creators";
import AddressForm from "./components/AddressForm";

const App = ({ address, handleSubmit }) => (
  <div className="app">
    <SearchCep handleSubmit={handleSubmit} isFetching={address.isFetching}/>
    {
      address.status === 0 &&
          ( <p className="app__not-found">Address not found</p> )
    }
    <AddressForm address={address} />
  </div>
);


const mapStateToProps = state => ({
  address: state.address
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault();
    dispatch(fetchAddress(e.target.code.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
