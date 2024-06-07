import pool from "../config/db.js";
import {
  createBookQuery,
  deleteData,
  getAll,
  getById,
  getData,
  updateBook,
} from "../query/query.js";

export const getBook = async (req, res) => {
  try {
    const response = await pool.query(getAll("Book"));
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ msg: "error" });
  }
};

export const getBookByID = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const response = await pool.query(getById("Book"), [id]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getBookbyName = async (req, res) => {
  const { name } = req.body;
  try {
    const response = await pool.query(getData("Book", "publisher_name"), [
      name,
    ]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createBook = async (req, res) => {
  const {
    book_number,
    publisher_name,
    viewer_id,
    genre_id,
    region_id,
    language_id,
    store_id,
    book_name,
    publication_year,
    page,
    liscence_id,
  } = req.body;

  const existData = await pool.query(getData("Book", "book_number"), [book_number]).rows;
  if (existData) return res.status(500).json({ msg: "book_number sudah ada" });
  try {
    await pool.query(createBookQuery, [
      book_number,
      publisher_name,
      viewer_id,
      genre_id,
      region_id,
      language_id,
      store_id,
      book_name,
      publication_year,
      page,
      liscence_id,
    ]);
    res.status(202).json({ msg: "data berhasi; dibuat" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

export const editBookbyId = async (req, res) => {
  const id = parseInt(req.params.id);
  const existData = await pool.query(getData("Book", "book_number"), [id]);
  if (!existData) return res.status(404).json({ msg: "data tidak ditemukan" });
  const {
    publisher_name,
    viewer_id,
    genre_id,
    region_id,
    language_id,
    store_id,
    book_name,
    publication_year,
    page,
    liscence_id,
  } = req.body;
  try {
    await pool.query(updateBook, [
      publisher_name,
      viewer_id,
      genre_id,
      region_id,
      language_id,
      store_id,
      book_name,
      publication_year,
      page,
      liscence_id,
      id,
    ]);
    res.status(201).json({msg: "data berhasil diubah"});
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

export const deleteBookbyId = async (req, res) => {
  const id = parseInt(req.params.id);
  const existData = pool.query(getData("Book", "book_number"), [id]).rows;
  if (!existData) return res.status(404).json({ msg: "data tidak ditemukan" });
  try {
    await pool.query(deleteData("Book", "book_number"), [id]);
    res.status(200).json({ msg: "data berhasil di hapus" });
  } catch (error) {
    res.status({ msg: "data gagal dihapus" });
  }
};
