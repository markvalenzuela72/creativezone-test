module.exports = (sequelize, Sequelize) => {
  const Booking = sequelize.define("booking", {
    name: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    }
  });

  return Booking;
};
