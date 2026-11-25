const ncertCatalog = 'https://ncert.nic.in/textbook.php';
const ncertReadingList = [
  [6, 'Science', 'Curiosity', 'fecu1=0-12'],
  [6, 'Social Science', 'Exploring Society: India and Beyond', 'fees1=0-14'],
  [7, 'Science', 'Curiosity', 'gecu1=0-12'],
  [7, 'Social Science', 'Exploring Society: India and Beyond, Part I', 'gees1=0-12'],
  [8, 'Science', 'Curiosity', 'hecu1=0-12'],
  [8, 'Social Science', 'Exploring Society: India and Beyond, Part I', 'hees1=0-7'],
  [9, 'Social Science', 'Understanding Society: India and Beyond, Part I', 'iest1=0-9'],
  [10, 'History', 'India and the Contemporary World II', 'jess3=0-5'],
  [10, 'Geography', 'Contemporary India II', 'jess1=0-7'],
  [10, 'Polity', 'Democratic Politics II', 'jess4=0-5'],
  [10, 'Economics', 'Understanding Economic Development', 'jess2=0-5'],
  [11, 'Geography', 'Fundamentals of Physical Geography', 'kegy2=0-14'],
  [11, 'Polity', 'Indian Constitution at Work', 'keps2=0-10'],
  [11, 'Economics', 'Indian Economic Development', 'keec1=0-8'],
  [12, 'Polity', 'Contemporary World Politics', 'leps1=ps-7'],
  [12, 'Polity', 'Politics in India Since Independence', 'leps2=ps-8']
];

function ncertBookItems(books) {
  return books.map(([grade, subject, title, query]) => `
    <li class="books-class">
      <p class="meta">Class ${grade} &middot; ${subject}</p>
      <h3>${title}</h3>
      <a href="${ncertCatalog}?${query}" aria-label="Open ${title}, Class ${grade}, on NCERT">Open on NCERT</a>
    </li>`).join('');
}

function textbookPdfGroups(books) {
  const groups = new Map();
  for (const [grade, subject, title, file] of books) {
    if (!groups.has(grade)) groups.set(grade, []);
    groups.get(grade).push(`
      <li class="book-pdf">
        <div><p class="meta">${subject}</p><strong>${title}</strong></div>
        <a class="button secondary" href="textbooks/class-${grade}/${encodeURIComponent(file)}" target="_blank" rel="noopener" aria-label="Open PDF for Class ${grade} ${title} (new tab)">Open PDF</a>
      </li>`);
  }

  return Array.from(groups, ([grade, entries]) => `
    <section class="book-pdf-group" aria-labelledby="pdf-class-${grade}">
      <h3 id="pdf-class-${grade}">Class ${grade}</h3>
      <ul role="list">${entries.join('')}</ul>
    </section>`).join('');
}

function bookFilters(books, prefix) {
  const classes = [...new Set(books.map(([grade]) => grade))];
  const subjects = [...new Set(books.map(([, subject]) => subject))].sort();

  return `
    <div class="books-filters">
      <label>Class
        <select id="${prefix}-class">
          <option value="">All classes</option>
          ${classes.map(grade => `<option value="${grade}">Class ${grade}</option>`).join('')}
        </select>
      </label>
      <label>Subject
        <select id="${prefix}-subject">
          <option value="">All subjects</option>
          ${subjects.map(subject => `<option>${subject}</option>`).join('')}
        </select>
      </label>
    </div>`;
}

function booksPage() {
  return `
    <div class="books-layout">
      <div class="books-main">
        <section class="books-hero" aria-labelledby="books-title">
          <h1 id="books-title">NCERT Books</h1>
          <p>Browse official textbooks for Classes 1–12 in English, Hindi, and Urdu.</p>
          <div class="button-row">
            <a class="button lime" href="${ncertCatalog}">Browse all NCERT textbooks</a>
          </div>
        </section>
        <section class="surface books-directory" aria-labelledby="book-pdf-title">
          <header>
            <h2 id="book-pdf-title">Textbook PDFs</h2>
            <p>AP SCERT textbooks for Classes 5–10.</p>
          </header>
          ${bookFilters(textbookPdfs, 'pdf-book')}
          <p id="pdf-books-status" class="meta books-status" role="status">${textbookPdfs.length} books</p>
          <div id="pdf-books-list" class="book-pdf-groups">${textbookPdfGroups(textbookPdfs)}</div>
        </section>
      </div>
      <aside class="surface books-directory" aria-labelledby="books-directory-title">
        <header>
          <h2 id="books-directory-title">Reference books</h2>
          <p>English-medium textbooks for Group exams.</p>
        </header>
        ${bookFilters(ncertReadingList, 'book')}
        <p id="books-status" class="meta books-status" role="status">${ncertReadingList.length} books</p>
        <ul class="books-list" id="books-list" role="list" tabindex="0" aria-labelledby="books-directory-title">${ncertBookItems(ncertReadingList)}</ul>
      </aside>
    </div>`;
}

function initializeBooks() {
  initializeBookFilters('pdf-book', textbookPdfs, textbookPdfGroups);
  initializeBookFilters('book', ncertReadingList, ncertBookItems);
}

function initializeBookFilters(prefix, catalog, renderBooks) {
  const classFilter = document.getElementById(`${prefix}-class`);
  const subjectFilter = document.getElementById(`${prefix}-subject`);
  const list = document.getElementById(`${prefix}s-list`);
  const status = document.getElementById(`${prefix}s-status`);

  function filterBooks() {
    const books = catalog.filter(([grade, subject]) =>
      (!classFilter.value || grade === Number(classFilter.value)) &&
      (!subjectFilter.value || subject === subjectFilter.value)
    );

    list.innerHTML = renderBooks(books);
    list.hidden = books.length === 0;
    list.scrollTop = 0;
    status.textContent = books.length ? `${books.length} ${books.length === 1 ? 'book' : 'books'}` : 'No books match these filters.';
  }

  classFilter.addEventListener('change', filterBooks);
  subjectFilter.addEventListener('change', filterBooks);
}
