const getDate = env => {
  const dummytime = env.date || new Date().toJSON();
  return new Date(dummytime);
};

const getPath = env => {
  return env.path || "./beverageRecord.JSON";
};

module.exports = { getDate, getPath };