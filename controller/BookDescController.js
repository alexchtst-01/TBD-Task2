import pool from "../config/db.js";
import { getAll, selectBooksAndDescriptionsQuery } from "../query/query.js";

export const getBookDesc = async (req, res) => {
  try {
    const response = await pool.query(getAll("BookDesc"));
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getBookAndDesc = async (req, res) => {
  try {
    const response = await pool.query(selectBooksAndDescriptionsQuery);
    res.status(201).json(response.rows);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
