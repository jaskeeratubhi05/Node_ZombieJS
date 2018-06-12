const Browser = require('C:/Users/kam/node_modules/zombie');
 

describe('User navigates to the google', function() {
 
  const browser = new Browser();
 
  before(function(done) {
    browser.visit('http://www.google.lk', done);
  });
  
   describe('User search npm as search criteria', function() {
 
    before(function(done) {
    
       browser.fill('input[name="q"]',    'npm')
	   browser.pressButton('[name="btnK"]', done);
	   	   
     });
	 
	  it('should be successful', function() {
      browser.assert.success();
    });
	 
    });
  });
 