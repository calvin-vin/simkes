import catchAsync from "../utils/catchAsync.js";
import apiSuccess from "../utils/apiSuccess.js";
import { postSchema, postFilterSchema } from "../schemas/post.schema.js";
import { postService } from "../services/post.service.js";
import { postResource, postsResource } from "../resources/post.resource.js";

export const getAllPublicPostsController = catchAsync(async (req, res) => {
  const parsedQuery = postFilterSchema.parse(req.query);
  const posts = await postService.getAllPublicPosts(parsedQuery);

  return apiSuccess(
    res,
    200,
    "Daftar postingan berhasil didapatkan",
    postsResource(posts)
  );
});

export const getPublicPostByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPublicPostById(id);

  return apiSuccess(
    res,
    200,
    "Postingan berhasil didapatkan",
    postResource(post)
  );
});

export const getPostStatsController = catchAsync(async (req, res) => {
  const stats = await postService.getPostStats();
  
  return apiSuccess(
    res,
    200,
    "Statistik postingan berhasil didapatkan",
    stats
  );
});

export const getAllPostsController = catchAsync(async (req, res) => {
  const parsedQuery = postFilterSchema.parse(req.query);
  const posts = await postService.getAllPosts(parsedQuery);

  return apiSuccess(
    res,
    200,
    "Daftar postingan berhasil didapatkan",
    postsResource(posts)
  );
});

export const getPostByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);

  return apiSuccess(
    res,
    200,
    "Postingan berhasil didapatkan",
    postResource(post)
  );
});

export const createPostController = catchAsync(async (req, res) => {
  const parsedBody = postSchema.parse(req.body);
  const photoFile = req.file;
  const authorData = req.user;

  const post = await postService.createPost(parsedBody, photoFile, authorData);

  return apiSuccess(
    res,
    201,
    "Postingan berhasil disimpan",
    postResource(post)
  );
});

export const updatePostController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const parsedBody = postSchema.parse(req.body);
  const photoFile = req.file;

  const post = await postService.updatePost(id, parsedBody, photoFile);

  return apiSuccess(
    res,
    200,
    "Postingan berhasil diperbarui",
    postResource(post)
  );
});

export const deletePostController = catchAsync(async (req, res) => {
  const { id } = req.params;

  await postService.deletePost(id);

  return apiSuccess(res, 200, "Postingan berhasil dihapus", null);
});
