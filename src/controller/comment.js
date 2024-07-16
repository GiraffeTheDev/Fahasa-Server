const { getBookExistInComment } = require("../services/book");
const {
  createNewComment,
  getAllCommentWithProduct,
  deleteCommentService,
} = require("../services/comment");

const createNewCommentController = async (req, res) => {
  try {
    const response = await createNewComment(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from server",
    });
  }
};
const getAllCommentWithProductController = async (req, res) => {
  try {
    const response = await getAllCommentWithProduct(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from server",
    });
  }
};
const getBookExistInCommentController = async (req, res) => {
  try {
    const response = await getBookExistInComment();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from server",
    });
  }
};
const deleteCommentController = async (req, res) => {
  try {
    const response = await deleteCommentService(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: "Error from Server",
    });
  }
};
module.exports = {
  getAllCommentWithProductController,
  createNewCommentController,
  getBookExistInCommentController,
  deleteCommentController,
};
