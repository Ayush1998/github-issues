import { combineReducers } from "redux";
import issueReducer from "./reducer_issues";
import repoDetailsReducer from "./reducer_repo_details";

const rootReducer = combineReducers({
  issues: issueReducer,
  repoDetails: repoDetailsReducer
});

export default rootReducer;
