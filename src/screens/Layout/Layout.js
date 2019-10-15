import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { mapStateToProps } from "./redux";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_ME = gql`
  {
    getMe {
      id
      affiliateCode
      email
      username
    }
  }
`;

const propTypes = {};

function Layout(props) {
  const { id } = props;
  const [userId, setUserId] = useState("");
  const idUser = localStorage.getItem("cryptoId");
  const username = localStorage.getItem("cryptoUsername");
  const affiliateCode = localStorage.getItem("cryptoAffiliateCode");
  console.log(id, username, affiliateCode);

  let { loading, error, data } = useQuery(GET_ME);
  if (data) {
    setUserId(data.id);
  }

  if (loading) return null;

  if (!userId || error) {
    props.history.push("/auth");
  }
  if (id) {
    return <div>`You are register in crypto. Yor're id is ${id}`</div>;
  }

  return <div>You are in Crypto</div>;
}

Layout.propTypes = propTypes;

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Layout);
