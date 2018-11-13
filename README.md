# load-remote-react-component

### 示例
在loadable-base中导出umd对象
```
  output: {
    filename: "[name].js",
    libraryTarget: "umd",
    library: "AwesomeComponent",
  },
```

在load-todo中  采用loadjs进行加载

### 示例（dva)
loadable-todo 导出modle与 component
`main.js`
```
import SearchComponent from './pages/Search/search';
import SearchModel from './models/search';
export const RWSLib = {
  SearchComponent,
  SearchModel
};
```
use-dashboard 采用loadjs进行加载