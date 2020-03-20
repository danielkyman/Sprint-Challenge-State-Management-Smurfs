import React from "react";

import { connect } from "react-redux";

const SmurfList = props => {
  return (
    <div className="smurf-list">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.smurfs.map(smurf => (
          <>
            <h2>{smurf.name}</h2>
            <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3>
          </>
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(SmurfList);
