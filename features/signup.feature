Feature: Oracle sign up test
@signUp
    Scenario: Sign up a with a new user
        Given User has opened Oracle login page
        When User presses the create account button
        And User fills out create account form
        And User presses sign up button
        Then User is redirected to Check your email page