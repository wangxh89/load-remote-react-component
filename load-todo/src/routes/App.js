import React from 'react'
import { connect } from 'dva'
import './App.css'
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'
var loadjs = require('loadjs');
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {AsyncComponent: null}
  }

  componentWillMount() {
                      // AsyncLoading the card file
                      loadjs(`http://192.168.2.110:8080/dist/bundle.js`, 'cardType', {
                        success: () => {
    
                            // Cloning App function (the component)
                            debugger;
                            let AsyncComponent = window.AwesomeComponent.MyComponentLib.Button.bind({});
    
                            this.setState({
                                AsyncComponent: AsyncComponent
                            })
                        }
                    })
  }

  render() {
    const {
        AsyncComponent
    } = this.state;
    return (
      <div>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
        { (AsyncComponent) ? <AsyncComponent {...this.props} /> : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo
  }
}

export default connect(mapStateToProps)(App)
