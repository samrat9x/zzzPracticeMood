const School = require('./script');
const school = new School();

school.on('bellRing', ({ period, text }) => {
    console.log(`We need to run because ${period} period has been ${text}`);
});

school.startPeriod();
