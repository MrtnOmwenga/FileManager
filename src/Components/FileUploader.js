import { React, useState } from 'react';
import axios from 'axios';
import style from './Style/FileUploader.module.css';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const onInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('file', file);

    axios.post('//localhost:8000/upload', data).then(() => {
      console.log('Success');
    }).catch((e) => {
      console.error('Error', e);
    });
  };

  return (
    <form method="post" action="#" id="#" onSubmit={onSubmit}>
      <div className={`${style.form_group} ${style.files}`}>
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label> Upload your File </label>
        <input
          type="file"
          className={`${style.form_control}`}
          multiple=""
          onChange={onInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileUploader;
