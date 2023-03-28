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

#### Ticket 1: Create a new table to store custom Agent IDs
Description: Create a new table AgentFacilityMapping to store custom Agent IDs for each Facility they work with. The table should have columns for agent_id, facility_id, and custom_id.

###### Acceptance criteria:

The AgentFacilityMapping table is created with the required columns.
The table should be able to store one custom ID per agent per facility.
The custom IDs can be edited by Facilities at any time.
Each agent should have a unique ID per facility.

###### Time/effort estimate: 
This ticket can be completed in 4-6 hours, depending on the complexity of the database schema and the data migration required.

######  Implementation details:

Create the AgentFacilityMapping table with the required columns.
Add any necessary constraints to ensure that each agent has a unique custom ID per facility.
Create an interface for Facilities to add/edit custom IDs for their agents.

#### Ticket 2: Update Shifts table to reference AgentFacilityMapping table
Description: Modify the Shifts table to reference the AgentFacilityMapping table instead of the Agents table. This will ensure that custom Agent IDs are used while generating reports.

###### Acceptance criteria:

The Shifts table is modified to reference the AgentFacilityMapping table instead of the Agents table.
The Shifts table should include the new custom_id column from the AgentFacilityMapping table.
The Shifts table should still be able to retrieve the necessary metadata about the assigned agent.

###### Time/effort estimate: 
This ticket can be completed in 3-4 hours, depending on the complexity of the database schema and the existing codebase.

Implementation details:

Modify the Shifts table to reference the AgentFacilityMapping table.
Update the queries used to retrieve metadata about the assigned agent to include the custom_id column from the AgentFacilityMapping table.


#### Ticket 3: Modify getShiftsByFacility function to use custom Agent IDs
Description: Modify the getShiftsByFacility function to use custom Agent IDs instead of internal database IDs.

###### Acceptance criteria:

The getShiftsByFacility function is modified to use the custom Agent IDs stored in the AgentFacilityMapping table.
The function should still return all Shifts worked that quarter, including metadata about the assigned agent.
The function should be able to handle the case where an agent does not have a custom ID assigned by a facility.

###### Time/effort estimate: 
This ticket can be completed in 3-4 hours, depending on the complexity of the existing codebase.

###### Implementation details:

Modify the getShiftsByFacility function to use the AgentFacilityMapping table to retrieve custom Agent IDs.
Update any necessary queries to retrieve metadata about the assigned agent using the custom ID instead of the internal database ID.

#### Ticket 4: Modify generateReport function to use custom Agent IDs
Description: Modify the generateReport function to use custom Agent IDs instead of internal database IDs.

###### Acceptance criteria:

The generateReport function is modified to use the custom Agent IDs stored in the AgentFacilityMapping table.
The function should still be able to generate a PDF report containing information on the Shifts worked by each agent in a given quarter.
The function should use the custom IDs to identify each agent in the report.

#### Ticket 5: Ensure Operational Stability of Project

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

#### Ticket 6: Deploy Latest Changes to Production
After implementing the custom Agent ID feature and ensuring the operational stability of the project, we need to deploy the latest changes to production.

###### Acceptance Criteria:
Custom Agent ID functionality should be available to Facilities when generating reports.
Reports should be generated correctly using custom Agent IDs.

###### Estimated Effort: 4 hours

###### Implementation Details:
Ensure that all changes are committed and pushed to the main branch.
Use a continuous integration and deployment (CI/CD) tool to automate the deployment process.
Deploy the changes during off-peak hours to minimize disruption to users.
Monitor the system after deployment to ensure that everything is working as expected.
