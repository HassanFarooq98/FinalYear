import React, {useEffect} from 'react'
import {logout} from "../../actions/auth";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Navigate} from "react-router-dom";

function Logout({logout}) {
  useEffect(() => {
    logout()
  })
  return <Navigate to={"/"}/>
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {logout})(Logout);
