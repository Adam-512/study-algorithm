module.exports = function (wallaby) {
    return {
        runMode: 'onsave',
        tests: [
            'src/**/*.test.js'
        ]
    };
};