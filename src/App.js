import { connect} from "react-redux";
import Counter from "./Counter"

//Map redux state to component props.  Every time the store updates it returns an object that gets set to all the components as props.  Here the object
//contains a property called countValue that is the count value in the store
function mapStateToProps(state){
  return {
      countValue: state.count
  };

}

//Actions. These can be viewed as "items as news", they describe intent.
var increaseAction = {type: "increase"};
var decreaseAction = {type: "decrease"};

// Map Redux actions to component props.  We are returning two functions that our component can call to dispatch a change to the store
function mapDispatchToProps(dispatch){
    //fires off the dispatch increase to the store
    return {
        increaseCount: function(){
            return dispatch(increaseAction)
    },
        //fires off the dispatch decrease to the store
        decreaseCount: function(){
            return dispatch(decreaseAction)
        }
    };
}

// The Higher Order Component

var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
) (Counter);

export default connectedComponent