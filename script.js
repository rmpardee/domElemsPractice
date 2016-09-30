var instructions = [
  {
    elementType: 'input',
    type: 'text',
    id: 'user_name',
    name: 'user_name',
    placeholder: 'Put name here',
    label: 'User Name'
  },
  {
    elementType: 'input',
    type: 'radio',
    name: 'gender',
    id: 'female',
    value: 'female',
    label: 'Female',
    checked: false
  },
  {
    elementType: 'input',
    type: 'radio',
    name: 'gender',
    id: 'male',
    value: 'male',
    label: 'Male',
    checked: false
  },
  {
    elementType: 'input',
    type: 'radio',
    name: 'gender',
    id: 'non_binary',
    value: 'non_binary',
    label: 'Non-Binary/Other',
    checked: false
  },
  {
    elementType: 'textarea',
    id: 'comments',
    name: 'comments',
    placeholder: 'Enter comments here',
    label: 'Comments'
  },
  {
    elementType: 'button',
    type: 'submit',
    id: 'submit-button',
    text: 'Submit Form'
  },
];

var appendToForm = function(callback) {
  var form = document.getElementsByTagName('form')[0];
  var div = document.createElement('div');

  callback(div);
  form.appendChild(div);
};

var creators = {
  input: function(instructions) {
    // create the input element itself
    var input = document.createElement('input');
    input.setAttribute('type', instructions.type);

    if (instructions.type === 'text') {
      input.setAttribute('id', instructions.id);
      input.setAttribute('name', instructions.name);
      input.setAttribute('value', instructions.placeholder);
      // label is a separate DOM element
      var label = document.createElement('label');
      label.innerHTML = instructions.label;
      // add both input and label to the form
      appendToForm(function(div) {
        div.appendChild(label);
        div.appendChild(document.createElement('br'));
        div.appendChild(input);
      });
    }

    if (instructions.type === 'radio') {
      input.setAttribute('id', instructions.id);
      input.setAttribute('name', instructions.name);
      input.setAttribute('value', instructions.label);
      // input.setAttribute('checked', instructions.checked);
      // label is the innerHTML of the input element itself
      // input.innerHTML = instructions.label;
      var label = document.createElement('label');
      label.innerHTML = instructions.label;
      // add the input to form
      appendToForm(function(div) {
        div.appendChild(input);
        div.appendChild(label);
      });
    }
  },
  textarea:  function(instructions) {
    var textarea = document.createElement('textarea');
    textarea.setAttribute('id', instructions.id);
    textarea.setAttribute('name', instructions.name);
    textarea.innerHTML = instructions.placeholder;

    var label = document.createElement('label');
    label.innerHTML = instructions.label;

    appendToForm(function(div) {
      div.appendChild(label);
      div.appendChild(document.createElement('br'));
      div.appendChild(textarea);
    });
  },
  button:  function(instructions) {
    var button = document.createElement('button');
    button.setAttribute('type', instructions.type);
    button.setAttribute('id', instructions.id);
    button.innerHTML = instructions.text;

    appendToForm(function(div) {
      div.appendChild(button);
    });
  },
};

instructions.forEach(function(instructionObj) {
  creators[instructionObj.elementType](instructionObj);
});
