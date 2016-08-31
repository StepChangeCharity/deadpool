Feature:
  As a colleague
  I can see the title of the application
  So that I know it's the right one

  Scenario: Opening the application displays the title

    Given anyone opens the application
    Then the title should be 'StepChange Deadpool'

