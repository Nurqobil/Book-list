window.addEventListener("DOMContentLoaded",() => {    
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const year = document.querySelector('#year');
    const btn = document.querySelector('.btn');
    const bookList = document.querySelector('#book-list');

   btn.addEventListener("click", (event) => {
       event.preventDefault();
       //Basic validation
       if(title.value == '' && author.value == '' && year.value == ''){
        alert('Please input your information.' );
       }else {
        const  newRow = document.createElement('tr');

        // Create new cells
        const newTitle = document.createElement('th');
        const newAuthor = document.createElement('th');
        const newYear = document.createElement('th');

        // Assign input values to the new cells
        newTitle.innerHTML = title.value;
        newAuthor.innerHTML = author.value;
        newYear.innerHTML = year.value;

        // Append the new cells to the new row
        newRow.appendChild(newTitle);
        newRow.appendChild(newAuthor);
        newRow.appendChild(newYear);

        // Append the new row to the book list
        bookList.appendChild(newRow);
       }
      
   });
});
