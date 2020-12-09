/*
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
*/

const itemsShowed = 10;
const studentList = document.querySelectorAll('.student-item');

//Displays only 10 list items per page
const showPage = (list, page) => {
  const startIndex = (page * itemsShowed) - itemsShowed;
  const endIndex = page * itemsShowed;
  for (let i = 0; i < studentList.length; i++) {
    if (list[i] >= startIndex && list[i] < endIndex) {
      studentList[i].style.display = '';
    } else {
      studentList[i].style.display = 'none';
    }
  }
}

//generate, append, and add functionality to the pagination buttons

const appendPageLinks = (list) => {
  const paginationDiv = document.createElement('div');
  const pageDiv = document.querySelector('.page');
  pageDiv.appendChild(paginationDiv);
  paginationDiv.className = 'pagination';
  const ul = document.createElement('ul');
  paginationDiv.appendChild(ul);
  const pagesNeeded = list.length / itemsShowed;
  for (let i = 1; i <= pagesNeeded; i++) {
    const lis = document.createElement('li');
    ul.appendChild(lis);
    const links = document.createElement('a');
    lis.appendChild(links);
    links.textContent = i;
    links[0].className = 'active';
    for (let i = 0; i <= links.length; i++) {
      
    }
  }
}
