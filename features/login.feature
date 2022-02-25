Feature: Oracle Login test

 @login
  Scenario Outline: Invalid login with user
    Given User has opened Oracle login page
    When User inputs <email> as the email
    And User inputs <password> as the password
    And User presses sign in button
    Then User sees invalid credentials message

    Examples:
      | email                | password   |
      | asadpfasdf@gmail.com | sadafdsx   |
      # | sdfdsfaf@gmail.com   | sdfd       |
      # | asdadaxvf@gmail.com  | hjfdtgbvdf |

