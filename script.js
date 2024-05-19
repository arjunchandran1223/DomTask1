// // creating the Html Element
// var parent = document.createElement("div");  // create a tag
// console.log(parent)
// parent.innerHTML = "this is div tag";// adding Content to that tag
// document.body.append(parent) // see the content in the browser 

// var child = document.createElement("p");  // create a tag
// console.log(child)
// child.innerHTML = "This is a paragraph tag created in the script.js";// adding Content to that tag
// parent.append(child);
// document.body.append(child)

// var child1 = document.createElement("h1");  // create a tag
// console.log(child1)
// child1.innerHTML = "this is heading";// adding Content to that tag
// child.append(child1);
// document.body.append(child1)// see the content in the browser 

// var parent = document.createElement("div");  // create a tag
// console.log(parent)
// parent.setAttribute("class", "container");
// document.body.append(parent) // see the content in the browser 

// var child = document.createElement("div");
// console.log(child)
// child.setAttribute("class", "row");
// document.body.append(child)

// var child1 = document.createElement("div");
// console.log(child1)
// child1.setAttribute("class", "col");
// child1.innerHTML = "this is col";
// document.body.append(child1)


// var parent = document.createElement("div");
// console.log(parent);
// parent.setAttribute("class", "container");
// document.body.append(parent);
// var child = document.createElement("div");
// console.log(child);
// child.setAttribute("class", "row");
// parent.append(child);
// var child1 = document.createElement("div");
// console.log(child1);
// child1.setAttribute("class", "col");
// child1.innerHTML = "this is col 1";
// child.append(child1);

// var container =  document.createElement("div")
// container.className = "container";

// var row =  document.createElement("div")
// row.className = "row";

// var col =  document.createElement("div")
// col.className = "col";
// col.innerHTML = "this is col";


// row.append(col);
// container.append(row);
// document.body.append(container);

function foo() {
    
    var firstName = document.getElementById('FName').value;
    var MiddleName = document.getElementById('MName').value;
    var lastName = document.getElementById('LName').value;
    var phoneNumber = document.getElementById('phNumber').value;
    var email = document.getElementById('email').value;

    console.log('First Name:', firstName);
    console.log('Middle Name:', MiddleName);
    console.log('Last Name:', lastName);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
}

