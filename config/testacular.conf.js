basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'lib/angular.js',
    'lib/angular-*.js',
    'test/lib/angular/angular-mocks.js',
    'js/**/*.js',
    'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
