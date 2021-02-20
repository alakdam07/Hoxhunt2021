import { combineReducers } from 'redux';
import ui from '../reducer/appSettings/Ui'
import criminals from '../reducer/criminals';

const rootReducer = combineReducers({
  ui,
  criminals,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
