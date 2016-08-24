Feature:
  As a user
  I want load the home view when the application is opened
  So that I can start using it

  Scenario: Redirecting to home

    Given anyone opens the application
    Then the home page should be displayed
