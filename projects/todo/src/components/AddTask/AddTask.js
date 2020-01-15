import React, {useEffect}  from 'react';
import $ from "jquery";
import M from 'materialize-css';

var componentLifeCycle = function() {
  $(document).ready(function() {
    M.updateTextFields();
  });

  $(document).ready(function(){
    $('select').formSelect();
  });

  $(document).ready(function() {
    $('#content').characterCounter();
  });
        

  $(document).ready(function(){
    $('.datepicker').datepicker({
      defaultDate: null,
      autoClose: true,
      format: 'mm/dd/yyyy'
    });
  });
};

var handleSubmit = function(e, insertTask) {
  e.preventDefault();
  let first_name = $('#first_name').val();
  let middle_name = $('#middle_name').val();
  let last_name = $('#last_name').val();
  let category = $('#category').val();
  let content = $('#content').val();
  let due = $('#due').val();

  let task = {
    first_name: first_name,
    middle_name: middle_name,
    last_name: last_name,
    category: category,
    content: content,
    due: due
  };

  insertTask(task);
}


const AddTask = ({insertTask, slno}) => {
  // useEffect can be used as componentDidMount, componentDidUpdate, componentWillUnmount.
  // Which takes in 2 parameters a call back function and the other a array list.
  // The second argument is an array of values (usually props).
  //    a) If any of the value in the array changes, the callback will be fired after every render
  //    b) When it's not present, the callback will always be fired after every render.
  //    c) When it's an empty list, the callback will only be fired once, similar to componentDidMount.
  useEffect(componentLifeCycle, []);

  // slno = 1;

  return (
    <div className="section">
      <h4 className="#607d8b blue-grey-text text-darken-2">Add Task</h4>
      <form onSubmit={e => handleSubmit(e, insertTask)}>
        <div className="row">
          <div className="input-field col s1 l1">
            <input disabled value={slno} id="slno" type="text" className="validate center-align" name="slno" />
            <label htmlFor="disabled">Task-ID</label>
          </div>
          <div className="input-field col s4 l4">
            <input id="first_name" type="text" className="validate" name="first_name" />
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s3 l3">
            <input id="middle_name" type="text" className="validate" name="middle_name" />
            <label htmlFor="middle_name">Middle Name</label>
          </div>
          <div className="input-field col s4 l4">
            <input id="last_name" type="text" className="validate" name="last_name" />
            <label htmlFor="last_name">Last Name</label>
          </div>
          <div className="input-field col s2 l2">
            <select id="category" defaultValue={'DEFAULT'} name="category">
              <option value='DEFAULT' disabled></option>
              <option value="Shopping">Shopping</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Homework">Homework</option>
              <option value="Studying">Studying</option>
              <option value="Bank-Stuff">Bank-Stuff</option>
            </select>
            <label htmlFor="category">Category</label>
          </div>
          <div className="input-field col s10 l10">
            <textarea id="content" className="materialize-textarea" data-length="120" name="content" ></textarea>
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-field  col s2 l2">
            <input id="due" type="text" className="datepicker" name="due" />
            <label htmlFor="due">Due</label>
          </div>
          <div className="input-field col s2 l2">
            <button className="btn waves-effect waves-light" type="submit" id="add" name="add">Add
              <i className="material-icons right">add</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
