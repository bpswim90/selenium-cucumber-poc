const waitTimeout = 10000;
process.env.USE_PROMISE_MANAGER = false;

module.exports = function() {
  this.When(/^I search Google for "([^"]*)"$/, async function(searchQuery) {
    await driver.get("https://www.google.com");
    const element = await driver.wait(
      until.elementLocated(By.css("[name='q']")),
      waitTimeout
    );
    await element.click();
    await element.sendKeys("hello");
    return await element.sendKeys(selenium.Key.ENTER);
  });

  this.Then(/^I should see some results$/, async function() {
    // driver wait returns a promise so return that
    return await driver.wait(until.elementsLocated(by.css("div.g")), 10000);
  });

  this.When(/^I look at the Site$/, async function() {
    await driver.get("http://localhost:3000/");
  });

  this.Then(/^I should see text that says "([^"]*)"$/, async function(
    expectedText
  ) {
    const element = await driver.wait(
      until.elementLocated(By.css("[href='https://reactjs.org']")),
      waitTimeout
    );
    const link = await driver.wait(
      until.elementIsVisible(element),
      waitTimeout
    );
    const linkText = await link.getText();
    expect(linkText).to.equal(expectedText);
  });
};
