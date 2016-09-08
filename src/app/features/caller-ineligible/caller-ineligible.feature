Feature:
   As a colleague
   I can inform the caller that they are ineligible
   So that no-one wastes anyone's time

  Scenario: Checking ineligibility page title

    Given a colleague is on the caller ineligible page
    Then the caller ineligible page title should be 'Caller Ineligible'

 Scenario: Colleague can inform the caller they are ineligible

    Given a colleague is on the caller ineligible page
    Then the first ineligibility criteria is 'They are less than 18'
    And the second ineligibility criteria is 'Their debts were not taken out in the UK'

 Scenario: Colleague can return to the home page

    Given a colleague is on the caller ineligible page
    When they select the home button
    Then the eligibility check page should be displayed   