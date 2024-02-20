// controllers/crudController.js
const mongoose = require('mongoose');

const createItem = async (Model, data) => {
  try {
    const newItem = new Model(data);
    await newItem.save();
    return newItem;
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

const getItemById = async (Model, itemId) => {
  try {
    const item = await Model.findById(itemId);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

const updateItemById = async (Model, itemId, data) => {
  try {
    const item = await Model.findByIdAndUpdate(itemId, data, { new: true });
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

const deleteItemById = async (Model, itemId) => {
  try {
    const deletedItem = await Model.findByIdAndDelete(itemId);
    if (!deletedItem) {
      throw new Error('Item not found');
    }
    return { message: 'Item deleted successfully' };
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  createItem,
  getItemById,
  updateItemById,
  deleteItemById,
};
