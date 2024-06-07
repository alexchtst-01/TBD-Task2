import pool from "../config/db.js";
import {
  getAll,
  getData,
  insertAuthorQuery,
  updateAuthorQuery,
} from "../query/query.js";

export const getAllAuthor = async (req, res) => {
  try {
    const response = await pool.query(getAll("Author"));
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAuthorbyId = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const response = await pool.query(getData("Author", "author_number"), [id]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateAuthor = async (req, res) => {
  const id = parseInt(req.params.id);
  const existData = (await pool.query(getAll("Author"))).rows;
  if (!existData) return res.status(404).json({ msg: "data tidak ditemukan" });
  const author_name = req.body.author_name;
  const year_born = parseInt(req.body.year_born);
  const year_died = parseInt(req.body.year_died);
  const phone_number = req.body.phone_number;
  const work_address = req.body.work_address;
  try {
    await pool.query(updateAuthorQuery, [
      author_name,
      year_born,
      year_died,
      phone_number,
      work_address,
      id,
    ]);
    res.status(201).json({ msg: "data berhasil di edit" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addAuthor = async (req, res) => {
  const author_number = parseInt(req.body.author_number);
  const author_name = req.body.author_name;
  const year_born = parseInt(req.body.year_born);
  const year_died = parseInt(req.body.year_died);
  const phone_number = req.body.phone_number;
  const work_address = req.body.work_address;
  try {
    await pool.query(insertAuthorQuery, [
      author_number,
      author_name,
      year_born,
      year_died,
      phone_number,
      work_address,
    ]);
    res.status(201).json({ msg: "data berhasil ditambahkan" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
