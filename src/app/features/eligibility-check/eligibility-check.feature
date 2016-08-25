Feature:
  As a colleague
  I can confirm that the caller is eligible
  So I know that the service is for them

  Scenario: Displaying eligibility page

    Given anyone opens the application
    Then the eligibility check page should be displayed

    Given a colleague is on the eligibility page
    Then they can indicate that a caller is eligible for our services

    Given a colleague is on the eligibility page
    Then they can indicate that a caller is ineligible for our services

    Given a colleague is on the eligibility page
    Then they can see the criteria needed to determine if a caller is eligible for our services