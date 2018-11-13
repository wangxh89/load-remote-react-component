import React from "react";
import dva from 'dva'
import './index.css'
// import integrate from "@fish/integration/dva";

const data = localStorage.getItem('todos')
const todos = data ? JSON.parse(data) : []

// 1. Initialize
const app = dva({
    onError(err){
      console.log(err);// 全局异常捕获
    }
  })

// define routes
// const routes = {
//     index: {
//       models: () => [import("./models/todo")],
//       component: () => import("./router") //"./routes/App"
//     }
//   };
  
//   const hoc = App => () => <App />;
// 2. Plugins
app.use({});

// 3. Model
app.model(require('./models/todo').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')

console.log(process.env.NODE_ENV);
// integrate(app, routes, hoc);
