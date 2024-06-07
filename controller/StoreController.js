import pool from "../config/db.js";
import {
  getAll,
  selectInventoryFromStore,
  selectInventoryFromStoreId,
  selectWorkerFromStoreId,
} from "../query/query.js";

export const getStore = async (req, res) => {
  try {
    const response = await pool.query(getAll("Store"));
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

export const getInventoryStore = async (req, res) => {
  try {
    const response = await pool.query(selectInventoryFromStore);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

export const getInventorybyId = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const response = await pool.query(selectInventoryFromStoreId, [id]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

export const getAllWorker = async (req, res) => {
  try {
    const response = await pool.query(getAll("worker"));
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getSpesificWorkerFromStore = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const response = await pool.query(selectWorkerFromStoreId, [id]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
