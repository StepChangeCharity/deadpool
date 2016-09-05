Feature:
   As a colleague
   I can inform the caller that they are ineligible
   So that no-one wastes anyone's time

  Scenario: Checking ineligibility page title

    Given a colleague is on the caller ineligible page
    Then the caller ineligible page title should be 'Caller Ineligible'