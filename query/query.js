// global query NOTE: use for all tables
export const getAll = (tableName) => {
  return `SELECT * FROM "${tableName}";`;
};

export const getById = (tableName) => {
  return `SELECT * FROM "${tableName}" WHERE book_number = $1;`;
};

export const getData = (tableName, specificProperty) => {
  return `SELECT * FROM "${tableName}" WHERE ${specificProperty} = $1;`;
};

export const deleteData = (tableName, specificProperty) => {
  return `DELETE FROM "${tableName}" WHERE ${specificProperty} = $1`;
};

// for Book Tables
export const updateBook = `UPDATE "Book" 
  SET publisher_name = $1, viewer_id = $2, genre_id = $3, region_id = $4, language_id = $5, store_id = $6, book_name = $7, publication_year = $8, page = $9, liscence_id = $10 
  WHERE book_number = $11`;

export const createBookQuery = `INSERT INTO "Book" 
  (book_number, publisher_name, viewer_id, genre_id, region_id, language_id, store_id, book_name, publication_year, page, liscence_id) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;

// for author tables
export const updateAuthorQuery = `UPDATE "Author"
  SET author_name = $1, year_born = $2, year_died = $3, phone_number = $4, work_address = $5
  WHERE author_number = $6
  `;

export const insertAuthorQuery = `INSERT INTO "Author"
  (author_number, author_name, year_born, year_died, phone_number, work_address)
  VALUES ($1, $2, $3, $4, $5, $6)
  `;

// for book description table
export const selectBooksAndDescriptionsQuery = `
  SELECT 
    b.book_name,
    bd.description
  FROM 
    public."Book" b
  JOIN 
    public."BookDesc" bd
  ON 
    b.book_number = bd.book_number;
`;

// for store, worker and inventory table
export const selectInventoryFromStore = `
  SELECT 
	  s.store_name,
    s.store_address,
	  i.book_numbers,
	  i.street_name inventory_street
  FROM 
    public."inventory" i
  JOIN
  	public."Store" s
  ON 
    i.store_id = s.store_id;
`;

export const selectInventoryFromStoreId = `
  SELECT 
	  s.store_name,
    s.store_address,
	  i.book_numbers,
	  i.street_name AS inventory_street
  FROM 
    public."inventory" i
  JOIN
  	public."Store" s
  ON 
    i.store_id = s.store_id
  WHERE s.store_id = $1;
`;

export const selectWorkerFromStoreId = `
  SELECT 
	  s.store_name,
    s.store_address,
	  w.worker_name
  FROM 
    public."worker" w
  JOIN
  	public."Store" s
  ON 
    w.store_id = s.store_id
  WHERE 
    s.store_id = $1;
`;
