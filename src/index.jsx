import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './public/style/index.less';

// import OperationPanel from './component/operationPanel';
import PreviewContainer from './component/previewContainer';
// import SiderBar from './component/siderBar';

const mockProps = {
  areaList: [{
    id: 1,
    style: {
      width: 300, height: 1300, top: 0, left: 0,
    },
    src: '',
  }, {
    id: 2,
    style: {
      width: 300, height: 300, top: 0, left: 300,
    },
    src: '',
  }, {
    id: 3,
    style: {
      width: 300, height: 300, top: 0, left: 600,
    },
    src: '',
  }],
  selectedAreaId: 3,
  projectSize: { width: 900, height: 300 },
};

const App = () => (
  <div id="app">
    <PreviewContainer {...mockProps} />
  </div>
);


const root = document.getElementById('root');
ReactDOM.render(<App />, root);
