
import React, {Component} from 'react';
import Users from './components/Users';

const loadjs = require('loadjs');
// export default  => {
//   return <div><Users /></div>;
// };

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {AsyncComponent: null}
      }
    componentWillMount() {
        const that = this;
        // AsyncLoading the card file
       // loadjs(`http://10.45.18.43:8080/dist/bundle.js`, 'cardType', {
           loadjs(['css!http://192.168.2.110:8081/index.css', 'http://192.168.2.110:8081/index.js'],'rws',{
          success: () => {

              // Cloning App function (the component)
              debugger;
              const AsnycModel = window.g_fish_portal.TodoLib.TodoModel;
              const AsyncComponent = window.g_fish_portal.TodoLib.TodoComponent;
              window.g_app.model(AsnycModel);
              that.setState({
                  AsyncComponent
              })
          }
      })
}    
    render() {
        const { AsyncComponent } = this.state;
      return (
        <div><Users />
        { (AsyncComponent) ? <AsyncComponent {...this.props} /> : null}
        </div>
      );
    }
  }
  
  export default UserPage;