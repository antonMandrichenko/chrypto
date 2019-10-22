import React from "react";
// import PropTypes from "prop-types";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { mapStateToProps } from "./redux";
import Header from "./Header";
import RollDice from "./RollDice";
// import gql from "graphql-tag";
// import { useQuery } from "@apollo/react-hooks";

// const GET_ME = gql`
//   {
//     getMe {
//       id
//       affiliateCode
//       email
//       username
//     }
//   }
// `;

const propTypes = {};

function Layout(props) {
  const { id } = props;
  // const [userId, setUserId] = useState("");
  // const idUser = localStorage.getItem("cryptoId");
  // const username = localStorage.getItem("cryptoUsername");
  // const affiliateCode = localStorage.getItem("cryptoAffiliateCode");

  // let { loading, error, data } = useQuery(GET_ME);
  // if (data) {
  //   setUserId(data.id);
  // }

  // if (loading) return null;

  // if (!userId || error) {
  //   return <Redirect to="/auth" />
  // }
  // if (id) {
  //   return <div>`You are register in crypto. Yor're id is ${id}`</div>;
  // }
  // return id ? <div>You are in Crypto</div> : <Redirect to="/auth" />
  return (
    <React.Fragment>
      <Header />
      <RollDice />
    </React.Fragment>
  );
}

Layout.propTypes = propTypes;

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Layout);
