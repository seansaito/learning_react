import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import './index.css';

import { FileName } from "./FileName";
import { FileIcon } from "./FileIcon";
import CommitMessage from "./CommitMessage";
import Time from "./Time";

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  files: PropTypes.array,
};

const FileListItem = ({ file }) => (
    <tr className='file-list-item' key={file.id}>
        <td>
            <FileIcon file={file} />
        </td>
        <td>
            <FileName file={file} />
        </td>
        <td>
            <CommitMessage commit={file.latestCommit} />
        </td>
        <td>
            <Time time={file.updated_at} />
        </td>
    </tr>

//   <tr className="file-list-item" key={file.id}>
//     <FileName file={file} />
//     <CommitMessage commit={file.latestCommit} />
//     <td className='age'>
//         <Time time={file.updated_at} />
//     </td>
//   </tr>
);

FileListItem.propTypes = {
    file: PropTypes.object.isRequired,
};

const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 3,
    name: "README",
    type: "file",
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: "Added a readme",
    },
  },
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector("#root")
);
