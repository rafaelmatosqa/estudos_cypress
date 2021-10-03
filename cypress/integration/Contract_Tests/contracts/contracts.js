const Joi = require("joi");

const contractUsers = Joi.object({
  page: Joi.number().required(),
  per_page: Joi.number().required(),
  total: Joi.number().required(),
  total_pages: Joi.number().required(),

  data: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      email: Joi.string().required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      avatar: Joi.string().required(),
    })
  ),

  support: Joi.object({
    url: Joi.string().required(),
    text: Joi.string().required(),
  }),
});

export default contractUsers;
