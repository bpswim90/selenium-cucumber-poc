Feature: Searching hello on google
    As an internet user
    In order to test the selenium cucumber poc
    I want to be able to search the word hello on google

    Scenario: Google search the word hello
        When I search Google for "hello"
        Then I should see some results