Feature: Hello Service
  Scenario Outline: GET endpoint
    When I GET the endpoint with parameter <param>
    Then I receive a response containing <response>
    Examples:
      | param | response      |
      |       | Hello, World! |
      | mom   | Hello, mom    |
      | Dave  | Hello, Dave   |
    
