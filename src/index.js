var selectAllCheckbox = document.getElementById('select-all');
var checkboxGroup = document.querySelectorAll('input[name="colors"]');

if (selectAllCheckbox !== null) {
  if (checkboxGroup !== null) {
    selectAllCheckbox.addEventListener('click', function() {
      changeGroupStatus(checkboxGroup, selectAllCheckbox.checked);
    });
    for (let i = 0; i < checkboxGroup.length; i++) {
      checkboxGroup[i].addEventListener('click', function() {
        selectAllCheckbox.checked = checkboxGroupStatus(checkboxGroup);
      });
    }
  }
}

function changeGroupStatus(group, status) {
  if (group !== null) {
    for (let i = 0; i < group.length; i++) {
      group[i].checked = status;
    }
  }
}

function checkboxGroupStatus(group) {
  if (group === null) return group;

  let startingStatus = group[0].checked;
  for (let i = 1; i < group.length; i++) {
    if (group[i].checked !== startingStatus) {
      return null;
    }
  }
  return startingStatus;
}