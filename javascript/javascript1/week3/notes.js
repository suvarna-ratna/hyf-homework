const notes = [];

function saveNote(content, id) {
  notes.push({
      content: content,
      id: id
  })
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); 

// getNote
function getNote(id) {
    for(let i = 0;i < notes.length; i++)
    {
        if(notes[i].id === id)
        {
            return notes[i];
        }
        else {
            return 'please provide proper id number'
        }
    }
  }
  
  const firstNote = getNote(1);
  
  console.log(firstNote); 
  // Log out notes
  function logOutNotesFormatted() {
    for(let i = 0;i < notes.length; i++)
    {
        console.log(`The note with id:${notes[i].id}, has the following note text: ${notes[i].content}.`)
    }
  }
  
  logOutNotesFormatted(); // should log out the text below
  
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry
  