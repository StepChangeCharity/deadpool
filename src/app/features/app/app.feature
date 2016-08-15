Feature: This feature describe the scenarios of any user opening the application

  Scenario Outline: Opening the application

    Given <user> opens the application
    Then the title should be <title>

    Examples:
      | user    | title               |
      | anyone  | 'StepChange Deadpool' |