import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { incrementCountAction } from './actions'

function App({incrementMyCount, count}) {
  return (
    <div>
     <button onClick={incrementMyCount}>{count}</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{count : state.count}
}

const mapDispatchToProps = {
  incrementMyCount : incrementCountAction,
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
