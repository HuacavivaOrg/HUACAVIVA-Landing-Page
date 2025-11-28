Feature: Landing Page and App Configuration
  As a visitor or user
  I want to configure the app and learn about it
  So that it suits my needs

  @US57 @US58 @US63 @LandingPage
  Scenario: Landing Page Information
    Given a visitor accesses the web landing page
    Then they see the "Hero Section" with value proposition
    And they can view "Testimonials" from real users
    And the layout is responsive (Desktop/Mobile)

  @US59 @US60 @Conversion
  Scenario: Landing Page Conversion
    Given the visitor is on the landing page
    When they click "Download for iOS"
    Then they are redirected to the App Store
    When they fill the "Subscribe" form
    Then they receive a success message

  @US46 @US48 @US70 @Settings
  Scenario: App Configuration
    Given the user is in "Settings"
    When the user changes Language to "English"
    Then the interface updates immediately
    When the user enables "High Contrast Mode"
    Then the app colors adjust for accessibility
    When the user disables "Push Notifications"
    Then the system stops sending alerts