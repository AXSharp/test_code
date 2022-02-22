Feature: Oracle Login test

    Scenario: Invalid login with user
      Given User has opened Oracle login page
      When User inputs wrong email
      And User inputs wrong password
      And User presses sign in button
      Then User sees invalid credentials message
