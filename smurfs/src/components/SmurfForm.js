import React, { useState } from "react";
import { connect } from "react-redux";

import { getData, postData } from "../actions/smirfAction";

import { useForm } from "react-hook-form";

const SmurfForm = props => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    props.postData(data);
  };

  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div className="smurf-form">
      {props.isFetchingData ? (
        <h3>Loading</h3>
      ) : (
        <button onClick={handleGetData}>Load Smurfs</button>
      )}
      <h2>Add Your Own Smurf: </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" placeholder="Name" ref={register} />
        <br />
        <input type="text" name="age" placeholder="Age" ref={register} />
        <br />
        <input type="text" name="height" placeholder="Height" ref={register} />
        <br />
        <button type="submit">Add Smurf!</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData,
    isPostingData: state.isPostingData
  };
};

export default connect(mapStateToProps, { getData, postData })(SmurfForm);
