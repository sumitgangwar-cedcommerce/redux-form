import { createStore } from "redux";
import allReducer  from "./reducers/index";

const sto = createStore(allReducer)

export default sto