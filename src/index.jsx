import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

// import OperationPanel from './component/operationPanel';
import PreviewContainer from './component/previewContainer';
// import SiderBar from './component/siderBar';

const mockProps = {
  areaList: [{
    id: 1, width: 300, height: 300, src: '',
  }, {
    id: 2, width: 300, height: 300, src: '',
  }, {
    id: 3, width: 300, height: 300, src: '',
  }],
  selectedAreaId: 3,
  projectSize: { width: 900, height: 300 },
};

// const App = () => (
//   <App id="app">
//     {/* <OperationPanel /> */}
//     <PreviewContainer props={mockProps} />
//     {/* <SiderBar /> */}
//   </App>
// );


const root = document.getElementById('root');
ReactDOM.render(<PreviewContainer {...mockProps} />, root);
