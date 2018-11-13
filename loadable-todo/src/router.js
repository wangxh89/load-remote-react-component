import React from 'react'
import { Router, Route } from 'dva/router'
import App from './routes/App'
import createHistory from 'history/createMemoryHistory';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" exact component={App} />
    </Router>
  )
}




// class RouterConfig extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {}
//     }
  
//     render() {
//       return (
//         <Router history={createHistory()}>
//         <Route path="/" exact component={App} />
//       </Router>
//       )
//     }
//   }

  export default RouterConfig