var selectAll = document.querySelector('input[id="select-all"]');
var checkboxGroup = document.querySelectorAll('input[name="colors"]');

// assign event listeners to individual checkboxes
for (let i = 0; i < checkboxGroup.length; i++) {
  checkboxGroup[i].addEventListener('click', changeSelectAll);
}

// assign event listener for select all checkbox
selectAll.addEventListener('click', function() {
  if (selectAll.checked) {
    changeCheckboxGroup(true);
  } else {
    changeCheckboxGroup(false);
  }
  // change checkbox group to match select all checkbox
  function changeCheckboxGroup(status) {
    for (let i = 0; i < checkboxGroup.length; i++) {
      checkboxGroup[i].checked = status;
    }
  }
});

function changeSelectAll() {
  if (checkboxGroupStatus(checkboxGroup)) {
    selectAll.checked = true;
  } else {
    selectAll.checked = false;
  }
}

function checkboxGroupStatus(checkBoxGroup) {
  let boxesChecked = 0;
  for (let i = 0; i < checkBoxGroup.length; i++) {
    if (checkBoxGroup[i].checked) {
      boxesChecked++;
    } else {
      return false;
    }
  }
  return boxesChecked == checkBoxGroup.length;
}