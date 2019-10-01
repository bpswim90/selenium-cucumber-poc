Feature: Testing react hello world

    Scenario: Site displays correct text
        When I look at the Site
        Then I should see text that says "Learn React"