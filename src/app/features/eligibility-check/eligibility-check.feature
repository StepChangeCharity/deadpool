Feature:
  As a colleague
  I can confirm that the caller is eligible
  So I know that the service is for them

  Scenario: Checking the eligibility page title

    Given anyone opens the application
    Then the eligibility check page title should be 'Eligibility Check'

  Scenario: Colleague can indicate caller is eligible

    Given a colleague is on the eligibility page
    Then they can indicate that a caller is eligible for our services

  Scenario: Colleague can indicate caller is ineligible

    Given a colleague is on the eligibility page
    Then they can indicate that a caller is ineligible for our services

  Scenario: Colleague can see eligibility criteria

    Given a colleague is on the eligibility page
    Then the first eligibility criteria is are 'They are 18 or over'
    And the second eligibility criteria is were 'Their debts were taken out in the UK'

  Scenario: Colleague can tell client that they are ineligible

    Given a colleague is on the eligibility page
    When they indicate that a caller is ineligible
    Then the caller ineligible page should be displayed

@ignore
  Scenario: Colleague can tell client that they are eligible and start the process

    Given a colleague is on the eligibility page
    When they select the eligible button
    Then the start of the process page should be diplayed