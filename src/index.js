var select_all_checkbox = document.querySelector('input[id="select-all"]');
var colors_checkbox_group = document.querySelectorAll('input[name="colors"]');


if (select_all_checkbox && colors_checkbox_group) {
  // event listener for select all checkbox
  select_all_checkbox.addEventListener("click", function() {
    if (select_all_checkbox.checked) {
      changeGroup(colors_checkbox_group, true);
    } else {
      changeGroup(colors_checkbox_group, false);
    }
  });
  // event listeners on each checkbox
  for (let i = 0; i < colors_checkbox_group.length; i++) {
    colors_checkbox_group[i].addEventListener("click", function() {
      if (allBoxesAreChecked(colors_checkbox_group)) {
        select_all_checkbox.checked = true;
      } else {
        select_all_checkbox.checked = false;
      }
    })
  }
}

// function to check status of checkbox in group
function allBoxesAreChecked(group) {
  let boxesChecked = 0;
  for (let i = 0; i < group.length; i++) {
    if (group[i].checked === true) {
      boxesChecked++;
    } else if (boxesChecked < i + 1) {
      return false;
    }
  }
  return boxesChecked === group.length;
}

function changeGroup(group, newStatus) {
  for (let i = 0; i < group.length; i++) {
    group[i].checked = newStatus;
  }
}