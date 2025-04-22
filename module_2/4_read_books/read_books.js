const isBookRead = (books, titleToSearch) => {
  const book = books.find(book => book.title === titleToSearch);
  return book ? book.isRead : false;
};