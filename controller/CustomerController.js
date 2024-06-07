import pool from "../config/db.js";
import {
  addBroughtBookQuery,
  getAll,
  selectBookBroughtbyCustomerId,
} from "../query/query.js";

export const getCustomer = async (req, res) => {
  try {
    const response = await pool.query(getAll("Customer"));
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getCustomerAndBook = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const response = await pool.query(selectBookBroughtbyCustomerId, [id]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addBroughtBook = async (req, res) => {
  const { book_number, customer_num, date, price, quantity } = req.body;
  try {
    await pool.query(addBroughtBookQuery, [
      book_number,
      customer_num,
      date,
      price,
      quantity,
    ]);
    res.status(200).json({ msg: "data berhasil ditambahkan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
