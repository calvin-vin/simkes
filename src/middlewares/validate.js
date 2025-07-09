const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
      file: req.file,
    });

    next();
  } catch (err) {
    next(err);
  }
};

export { validateSchema };
