Feature:
  As a colleague
  I can confirm that the caller is eligible
  So I know that the service is for them

  Scenario: Displaying eligibility page

    Given anyone opens the application
    Then the eligibility check page should be displayed

    Given the eligibility check page is viewed
    Then the