import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";
export const POST_DATA = "POST_DATA";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_DATA, payload: res.data });
    })
    .catch(err => {
      console.log("error fetching data from api", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
};

export const postData = data => dispatch => {
  dispatch({ type: POST_DATA });
  console.log(data);
  axios
    .post("http://localhost:3333/smurfs", {
      name: data.name,
      age: data.age,
      height: data.height,
      id: Date.now()
    })
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_DATA, payload: res.data });
    })
    .catch(err => {
      console.log("error posting data to api", err);
      dispatch({ type: SET_ERROR, payload: "Error posting data to api" });
    });
};
