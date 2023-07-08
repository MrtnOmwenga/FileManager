import { React } from 'react';
import FileDisplay from './Components/FileDisplay';
import FileUploader from './Components/FileUploader';

const App = () => (
  <div className="App">
    <FileUploader />
    <FileDisplay />
  </div>
);

export default App;
