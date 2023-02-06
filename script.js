class SortableTable {
  constructor(tableNode) {
    this.tableNode = tableNode;

    this.columnHeaders = tableNode.querySelectorAll('thead th');

    this.sortColumns = [];

    for (var i = 0; i < this.columnHeaders.length; i++) {
      var ch = this.columnHeaders[i];
      var buttonNode = ch.querySelector('button');
      if (buttonNode) {
        this.sortColumns.push(i);
        buttonNode.setAttribute('data-column-index', i);
        buttonNode.addEventListener('click', this.handleClick.bind(this));
      }
    }

    this.optionCheckbox = document.querySelector('input[type="checkbox"][value="show-unsorted-icon"]');

    if (this.optionCheckbox) {
      this.optionCheckbox.addEventListener(
        'change',
        this.handleOptionChange.bind(this)
      );
      if (this.optionCheckbox.checked) {
        this.tableNode.classList.add('show-unsorted-icon');
      }
    }
  }

  setColumnHeaderSort(columnIndex) {
    if (typeof columnIndex === 'string') {
      columnIndex = parseInt(columnIndex);
    }

    for (var i = 0; i < this.columnHeaders.length; i++) {
      var ch = this.columnHeaders[i];
      var buttonNode = ch.querySelector('button');
      if (i === columnIndex) {
        var value = ch.getAttribute('aria-sort');
        if (value === 'descending') {
          ch.setAttribute('aria-sort', 'ascending');
          this.sortColumn(
            columnIndex,
            'ascending',
            ch.classList.contains('num')
          );
        } else {
          ch.setAttribute('aria-sort', 'descending');
          this.sortColumn(
            columnIndex,
            'descending',
            ch.classList.contains('num')
          );
        }
      } else {
        if (ch.hasAttribute('aria-sort') && buttonNode) {
          ch.removeAttribute('aria-sort');
        }
      }
    }
  }

  sortColumn(columnIndex, sortValue, isNumber) {
    function compareValues(a, b) {
      if (sortValue === 'ascending') {
        if (a.value === b.value) {
          return 0;
        } else {
          if (isNumber) {
            return a.value - b.value;
          } else {
            return a.value < b.value ? -1 : 1;
          }
        }
      } else {
        if (a.value === b.value) {
          return 0;
        } else {
          if (isNumber) {
            return b.value - a.value;
          } else {
            return a.value > b.value ? -1 : 1;
          }
        }
      }
    }

    if (typeof isNumber !== 'boolean') {
      isNumber = false;
    }

    var tbodyNode = this.tableNode.querySelector('tbody');
    var rowNodes = [];
    var dataCells = [];

    var rowNode = tbodyNode.firstElementChild;

    var index = 0;
    while (rowNode) {
      rowNodes.push(rowNode);
      var rowCells = rowNode.querySelectorAll('th, td');
      var dataCell = rowCells[columnIndex];

      var data = {};
      data.index = index;
      data.value = dataCell.textContent.toLowerCase().trim();
      if (isNumber) {
        data.value = parseFloat(data.value);
      }
      dataCells.push(data);
      rowNode = rowNode.nextElementSibling;
      index += 1;
    }

    dataCells.sort(compareValues);

    // remove rows
    while (tbodyNode.firstChild) {
      tbodyNode.removeChild(tbodyNode.lastChild);
    }

    // add sorted rows
    for (var i = 0; i < dataCells.length; i += 1) {
      tbodyNode.appendChild(rowNodes[dataCells[i].index]);
    }
  }

  // Handlers

  handleClick(event) {
    var tgt = event.currentTarget;
    this.setColumnHeaderSort(tgt.getAttribute('data-column-index'));
  }

  handleOptionChange(event) {
    var tgt = event.currentTarget;

    if (tgt.checked) {
      this.tableNode.classList.add('show-unsorted-icon');
    } else {
      this.tableNode.classList.remove('show-unsorted-icon');
    }
  }
}

// Initialize sortable table buttons
window.addEventListener('load', function () {
  var sortableTables = document.querySelectorAll('table.sortable');
  for (var i = 0; i < sortableTables.length; i++) {
    new SortableTable(sortableTables[i]);
  }
});

window.onload = function () {

//Get a reference to the element for hobby changes for 1st person.
var button_id_6 = document.getElementById('6');
//Add event listener
button_id_6.addEventListener('click', function(event) {
    var button = event.target;
    var cell = button.parentNode;
    var row = cell.parentNode.rowIndex;

    // Create the XMLHttpRequest object.
    const xhr = new XMLHttpRequest();

    // Initialize the request and send appropriate row id through
    xhr.open("GET", "api.php?person_id=" + 6);
    xhr.send();
    xhr.onload = function(e) {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Get and convert the responseText into JSON
            var obj = xhr.responseText;

            var jsonResponse = JSON.parse(obj);

            determineHobbies(jsonResponse);

            var myTable = document.getElementById('targetTable');
                myTable.rows[row].cells[3].innerHTML = assignedHobby;
            
        }
}

});

//get a reference to the element for hobby changes for 2nd person
var button_id_7 = document.getElementById('7');
//add event listener
button_id_7.addEventListener('click', function(event) {
    var button = event.target;
    var cell = button.parentNode;
    var row = cell.parentNode.rowIndex;

    // Create the XMLHttpRequest object.
    const xhr = new XMLHttpRequest();
    // Initialize the request and send appropriate row id through
    xhr.open("GET", "api.php?person_id=" + 7);
    xhr.send();
    xhr.onload = function(e) {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Get and convert the responseText into JSON
            var obj = xhr.responseText;

            var jsonResponse = JSON.parse(obj);

            determineHobbies(jsonResponse);

            var myTable = document.getElementById('targetTable');
                myTable.rows[row].cells[3].innerHTML = assignedHobby;
            
        }
}

});

//Get a reference to the element for hobby changes for 3rd person
var button_id_8 = document.getElementById('8');
//Add event listener
button_id_8.addEventListener('click', function(event) {
    var button = event.target;
    var cell = button.parentNode;
    var row = cell.parentNode.rowIndex;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "api.php?person_id=" + 8);
    xhr.send();
    xhr.onload = function(e) {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var obj = xhr.responseText;
            var jsonResponse = JSON.parse(obj);

            determineHobbies(jsonResponse);

            var myTable = document.getElementById('targetTable');
                myTable.rows[row].cells[3].innerHTML = assignedHobby;
            
        }
}

});

//Get a reference to the element for hobby changes for 4th person
var button_id_9 = document.getElementById('9');
button_id_9.addEventListener('click', function(event) {
    var button = event.target;
    var cell = button.parentNode;
    var row = cell.parentNode.rowIndex;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "api.php?person_id=" + 9);
    xhr.send();
    xhr.onload = function(e) {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var obj = xhr.responseText;
            var jsonResponse = JSON.parse(obj);

            determineHobbies(jsonResponse);

            var myTable = document.getElementById('targetTable');
                myTable.rows[row].cells[3].innerHTML = assignedHobby;
            
        }
}

});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function determineHobbies(jsonResponse) {
    
    //Gets random interest based on an integer of 0,1,2 to represent array of interests
    var randomNumber = getRandomInt(3);
    var randomInterest = jsonResponse[randomNumber];

    if (randomInterest == "animals") {
        assignedHobby = "Animal Fostering";
    } else if (randomInterest == "baseball") {
        assignedHobby = "Sports"
    } else if (randomInterest == "boats") {
        assignedHobby = "Racing"
    } else if (randomInterest == "books") {
        assignedHobby = "Reading"
    } else if (randomInterest == "cakes") {
        assignedHobby = "Baking"
    } else if (randomInterest == "cars") {
        assignedHobby = "Racing"
    } else if (randomInterest == "cats") {
        assignedHobby = "Animal Fostering"
    } else if (randomInterest == "computers") {
        assignedHobby = "Gaming"
    } else if (randomInterest == "consoles") {
        assignedHobby = "Gaming"
    } else if (randomInterest == "cooking") {
        assignedHobby = "Baking"
    } else if (randomInterest == "dogs") {
        assignedHobby = "Animal Fostering"
    } else if (randomInterest == "football") {
        assignedHobby = "Sports"
    } else if (randomInterest == "games") {
        assignedHobby = "Gaming"
    } else if (randomInterest == "novels") {
        assignedHobby = "Reading"
    } else if (randomInterest == "pastries") {
        assignedHobby = "Baking"
    } else if (randomInterest == "reading") {
        assignedHobby = "Reading"
    } else if (randomInterest == "tennis") {
        assignedHobby = "Sports"
    } else if (randomInterest == "trucks") {
        assignedHobby = "Racing"
    }

    return assignedHobby
}

};
