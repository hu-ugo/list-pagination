/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/

const listItems = document.querySelectorAll(".student-item");
const itemsPerPage = 10;
// console.log(listItems)

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

const showPage = (list, page) => {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;
  // list.forEach((item, index) => {
  //   if (index >= startIndex && index <= endIndex) {
  //     item.style.display = 'block';
  //   }
  // });
  for (let item of list) {
    const array = Array.from(list);
    if (array.indexOf(item) >= startIndex && array.indexOf(item) < endIndex) {
      item.style.display = 'block';
      // console.log(item);
    } else {
      item.style.display = 'none';
    }
  }
};

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = list => {
  const page = document.querySelector('.page');
  const paginationDiv = document.createElement('div');
  const ul = document.createElement("ul");
  page.appendChild(paginationDiv);
  paginationDiv.className = 'pagination';
  paginationDiv.appendChild(ul);
  const pagesNeeded = list.length / itemsPerPage;

  for (let i = 1; i < pagesNeeded; i++) {
    const li = document.createElement('li');
    const link = document.createElement('a')
    ul.appendChild(li);
    li.appendChild(link);
    link.innerHTML = i;
    link.href = '#';
  }

  ul.firstElementChild.firstElementChild.className = 'active';

  ul.addEventListener('click', e => {
    const links = ul.querySelectorAll('a');
    for (let link of links) {
      if (e.target.tagName == 'A') {
        link.classList.remove('active');
        e.target.className = 'active';
        const linkClicked = e.target.textContent;
        showPage(list, linkClicked);
      }
    }
  });
};

showPage(listItems, 1);
appendPageLinks(listItems);
