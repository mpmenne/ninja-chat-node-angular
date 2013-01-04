'use strict';

describe('end 2 end testing of ninja chat', function() {

    beforeEach('ninja chat', function() {
        browser().navigateTo('../../awesomeness.html');
    });

    it('click fight adds a message to top of list', function() {
        element('.fight').click();
        expect(element('.chatMessages li size')).toBe(4)
    });

    it ('will it execute', function() {
        expect(element('.fight').count()).toBe(3);
    });

});



