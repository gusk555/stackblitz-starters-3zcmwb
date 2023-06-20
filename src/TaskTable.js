import * as React from 'react';
import Task from './Task';
import { useContext, useEffect } from 'react';
import { TaskContext } from './App.js';

export default function TaskTable() {
  /*To reset the buttons everytime the table is loaded */
  useEffect(() => {
    setCancelClicked(false);
  },[]);
  const {
    taskData,
    setTaskData,
    indexClicked,
    setIndexClicked,
    setEditTable,
    setCancelClicked,
    taskToSave,
    setTaskToSave
  } = useContext(TaskContext);

  function handleSaveButton() {
    setTaskData([...taskData, taskToSave]);
    setTaskToSave({})
    setIndexClicked(-1);
    setEditTable(false);
  }
  function handleCancelButton() {
    setCancelClicked(true);
    setIndexClicked(-1);
    setEditTable(false);
  }

  function handleEditButton() {
    indexClicked !== -1 ? setEditTable(true) : setEditTable(false);
  }

  return (
    <div className="TaskTable">
      <button name="SaveButtonTable" onClick={() => handleSaveButton()}>
        Save
      </button>
      <button
        name="CancelButtonTable"
        onClick={() => {
          handleCancelButton();
        }}
      >
        Cancel
      </button>
      <button
        name="EditButtonTable"
        onClick={() => {
          handleEditButton();
        }}
      >
        Edit
      </button>
      <button name="DeleteButtonTable">Delete</button>
      <table>
        <thead>
          <tr>
            <th style={{ width: '10℅' }}>ID</th>
            <th>Description</th>
            <th style={{ width: '20%' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((task, index) => {
            return <Task key={index} {...task} />;
          })}
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
}
