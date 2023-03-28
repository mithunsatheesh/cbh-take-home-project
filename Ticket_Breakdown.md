# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

#### Ticket 1: Add a new field to the Agent table for custom Facility ids

###### Acceptance criteria:
- Add new column named "facility_id" is available the Agent table in the database.
- The new column attribute is available in the schema for Agents in the backend application.
- The facility_id can be updated and retrieved through the API endpoints.
- API documentation is updated with latest changes.
- The new field is properly validated to ensure constraints like uniqueness.
- Create scripts to backfill the existing data with newly added attributes.

###### Time/effort estimate: 6-8 hours

#### Ticket 2: Replace the internal Agent id with the facility id in the Shifts database.

###### Acceptance criteria:
- The internal database id is replaced with the facility id of the Agent in the Shifts table in the database.
- This modification is reflected in the backend application's Shifts data model, which has been modified.
- The facility id of the Agent will now be returned by the new API endpoints for getting shifts by facility in place of the internal database id.
- The modification is reflected in the API documentation.
- To make sure that the new field is retrieved correctly, automated tests are made.

###### Time/effort estimate: 3-4 hours

###### Implementation details:
1. To refer to the facility id of the Agent, add a new foreign key constraint to the Shifts table.
2. The backend application's data model for Shifts should be updated to reflect the new foreign key constraint.
3. Change the facility id of the Agent to the internal database id in the API endpoints for retrieving Shifts by Facility.
4. The API documentation should be updated to reflect the change.
5. To confirm that the new field is correctly obtained, create automated tests.

#### Ticket 3: Replace the internal Agent id with the facility id in the report generation method.

###### Acceptance criteria:
- The generateReport method has been changed to produce reports using the facility id of the Agent rather than the internal database id.
- Instead of the internal database id, each Agent's facility id is listed in the PDF report.
- The modification is reflected in the API documentation.
- To make sure the new field is used correctly, automated tests are developed.

###### Estimated effort/time: 2 to 3 hours

###### Implementation details:
- Replace the internal database id with the facility id of the Agent in the generateReport function.
- Change the report template to include each Agent's facility id.
- The API documentation should be updated to reflect the change.
- To check that the new field is utilised effectively, create automated tests.

#### Ticket 4: Ensure Operational Stability of Project

Description: To ensure the stability of the project after implementing the custom Agent IDs, we need to perform a thorough testing and verification process to identify and fix any potential issues or bugs.

###### Acceptance Criteria:
All existing features should continue to work as expected.
Custom Agent IDs should be correctly associated with the corresponding Agents.
Reports should be generated correctly using custom Agent IDs.

###### Estimated Effort: 8 hours

###### Implementation Details:
Write unit tests to cover the new custom Agent ID functionality.
Perform integration testing to ensure that the new functionality does not interfere with other parts of the system.
Use a staging environment to perform additional testing and verification before deploying to production.
Use logging and error reporting to monitor the system after deployment and quickly identify and fix any issues.

#### Ticket 5: Deploy Latest Changes to Production
After implementing the custom Agent ID feature and ensuring the operational stability of the project, we need to deploy the latest changes to production.

###### Acceptance Criteria:
Custom Agent ID functionality should be available to Facilities when generating reports.
Reports should be generated correctly using custom Agent IDs.

###### Estimated Effort: 2 hours

###### Implementation Details:
Ensure that all changes are committed and pushed to the main branch.
Use a continuous integration and deployment (CI/CD) tool to automate the deployment process.
Deploy the changes during off-peak hours to minimize disruption to users.
Monitor the system after deployment to ensure that everything is working as expected.
