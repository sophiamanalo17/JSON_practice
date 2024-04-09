let contentGridElement = document.getElementById('contentGrid');
let NameContainer = document.getElementById("button").value;



let jsonDatabase = [  {
    "title" : "Sophia Manalo",
    "year" : 2004,
    "color" : "#FF978A"
  },
  {
    "title" : "Tile Lamp",
    "year" : 2024,
    "color" : "#FFAAA0"
  },
  {
    "title" : "Cafe 903B UX Case Study",
    "year" : 2024,
    "color" : "#FFB8B1"
  },
  {
    "title" : "Riso.",
    "year" : 2024,
    "color" : "#EFBEBB"
  },
  {
    "title" : "Jadebox  Case Study",
    "year" : 2024,
    "color" : "#F9D7D8"
  },
  {
    "title" : "We Are Not Friends",
    "year" : 2023,
    "color" : "#F9F1F4"
  },
  {
    "title" : "VisMajor: Fall 2023",
    "year" : 2023,
    "color" : "#DBF9DB"
  },
  {
    "title" : "Amphibious House",
    "year" : 2023,
    "color" : "#BEFABF"
  },
  {
    "title" : "Fruits of Summer",
    "year" : 2020,
    "color" : "#A1FAA5"
  },{
    "title" : "The Star Collective",
    "year" : 2020,
    "color" : "#80F982"
  }
];

for (var i = 0; i < jsonDatabase.length; i++) {
    createElementProper(jsonDatabase[i]);
  }

  // rellax = new Rellax('.rellax');

  function createElementMessy(incomingJSON) {
  
    /// Start our HTML chunk
    var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['color'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3> <h3 class=\"contentYear\">" + incomingJSON['year'] + "</h3>";
  
    /// Complete our HTML chunk
    // incompleteHTML += "</ul></div>";
    contentGridElement.innerHTML = incompleteHTML;
    console.log(incompleteHTML);
  }

function createElementProper(incomingJSON) {

    /// Create whole content item div and set class
    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundColor = incomingJSON['color'];
    newContentElement.classList.add('contentItem');
  
    /// Create HEADLINE h3, set class, set content
    let newContentHeading = document.createElement("H3");
    newContentHeading.classList.add('contentTitle');
    newContentHeading.innerText = incomingJSON['title'];
    /// Add the HEADLINE to the item
    newContentElement.appendChild(newContentHeading);
  
    /// Create & add LIST HEADLINE to the item
    let newContentYear = document.createElement("H3");
    newContentYear.classList.add('contentYear');
    newContentYear.innerText = incomingJSON['year'];
    console.log(incomingJSON);
    /// Add the HEADLINE to the item
    newContentElement.appendChild(newContentYear);
  
    /// Add the item to the page
    contentGridElement.appendChild(newContentElement);
  
  }

var item = document.getElementById("button");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{ 
   button.setAttribute("style", "color:#A1FAA5;")
}

function func1()
{  
   item.setAttribute("style", "color: black;")
}