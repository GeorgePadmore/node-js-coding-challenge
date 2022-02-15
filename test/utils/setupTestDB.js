const mongoose = require('mongoose');
const config = require('../../app_backend/config/config');

const setupTestDB = () => {
  before(async () => {
    await mongoose.connect(config.mongoose.url, config.mongoose.options);
  });

  after(async () => {
    // await Promise.all(Object.values(mongoose.connection.collections).map(async (collection) => collection.deleteMany()));
    await mongoose.disconnect();
  });
};

module.exports = setupTestDB;
