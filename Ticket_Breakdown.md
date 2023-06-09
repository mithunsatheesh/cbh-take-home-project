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

##### Acceptance criteria:

- The AgentFacilityMapping table is created with the required columns.
- The table should be able to store one custom ID per agent per facility.
- The custom IDs can be edited by Facilities at any time.
- Each agent should have a unique ID per facility.

##### Time/effort estimate: 
1-2 days

#####  Implementation details:

- Create the AgentFacilityMapping table with the required columns.
- Add any necessary constraints to ensure that each agent has a unique custom ID per facility.
- Create an interface for Facilities to add/edit custom IDs for their agents.

#### Ticket 2: Update Shifts table to reference AgentFacilityMapping table
Description: Modify the Shifts table to reference the AgentFacilityMapping table instead of the Agents table. This will ensure that custom Agent IDs are used while generating reports.

##### Acceptance criteria:

- The Shifts table is modified to reference the AgentFacilityMapping table instead of the Agents table.
- The Shifts table should include the new custom_id column from the AgentFacilityMapping table.
- The Shifts table should still be able to retrieve the necessary metadata about the assigned agent.

##### Time/effort estimate: 
1 day

##### Implementation details:

- Modify the Shifts table to reference the AgentFacilityMapping table.
- Update the queries used to retrieve metadata about the assigned agent to include the custom_id column from the AgentFacilityMapping table.


#### Ticket 3: Modify getShiftsByFacility function to use custom Agent IDs
Description: Modify the getShiftsByFacility function to use custom Agent IDs instead of internal database IDs.

##### Acceptance criteria:

- The getShiftsByFacility function is modified to use the custom Agent IDs stored in the AgentFacilityMapping table.
- The function should still return all Shifts worked that quarter, including metadata about the assigned agent.
- The function should be able to handle the case where an agent does not have a custom ID assigned by a facility.

##### Time/effort estimate: 
1-2 days

##### Implementation details:

- Modify the getShiftsByFacility function to use the AgentFacilityMapping table to retrieve custom Agent IDs.
- Update any necessary queries to retrieve metadata about the assigned agent using the custom ID instead of the internal database ID.

#### Ticket 4: Modify generateReport function to use custom Agent IDs
Description: Modify the generateReport function to use custom Agent IDs instead of internal database IDs. Currently, the generateReport function uses the internal database IDs for Agents when generating reports. However, with the new feature, Facilities will be able to save their own custom IDs for Agents, and these custom IDs should be used in the reports instead.

###### Acceptance criteria:

- The generateReport function is modified to use the custom Agent IDs stored in the AgentFacilityMapping table.
- The generateReport function now correctly uses the custom IDs instead of the internal database IDs when generating reports.
- The custom IDs are correctly associated with the correct Agents in the report.
- The updated generateReport function has been tested and confirmed to generate reports with custom IDs for all Agents.
- The documentation or instructions for generating reports has been updated to reflect the change.

##### Time/effort estimate: 
1-2 days

##### Implementation details:
- Modify the generateReport function to fetch the custom IDs for Agents from the new mapping table created in the previous task.
- Update the generateReport function to use the custom IDs instead of the internal database IDs when generating reports.
- Ensure that the custom IDs are correctly associated with the correct Agents in the report.
- Update any relevant documentation or instructions to reflect the change.

#### Ticket 5: Backfill Custom IDs for Existing Data
Description: Currently, the ID of each Agent on reports generated by the system is their internal database ID. However, we are introducing a new feature that allows Facilities to save their own custom IDs for each Agent they work with. This requires backfilling existing data with the new custom IDs.

###### Acceptance Criteria:
- A new table is created to map Agent to Facility with custom IDs editable by the Facility.
- A script is developed to backfill the custom IDs for all Agents in the database.
- The script should check for the existence of a custom ID in the mapping table before assigning one.
- The script should be able to handle errors, such as missing or duplicate custom IDs.
- The script should log any issues or errors encountered during the backfilling process.

###### Effort Estimate:
2 days

###### Implementation Details:
- Create a new table to map Agent to Facility with custom IDs editable by the Facility.
- Develop a script to backfill custom IDs for all Agents in the database.
- The script should loop through all Agents in the database and check if a custom ID exists for them in the mapping table.
- If a custom ID exists, it should be assigned to the Agent, otherwise a new custom ID should be generated and assigned.
- The script should handle errors such as missing or duplicate custom IDs by logging them and moving on to the next Agent.
- Once the script has completed, a report should be generated listing any errors or issues encountered during the backfilling process.

#### Ticket 6: Deploy Latest Changes to Production
After implementing the custom Agent ID feature and ensuring the operational stability of the project, we need to deploy the latest changes to production.

###### Acceptance Criteria:
- Custom Agent ID functionality should be available to Facilities when generating reports.
- Reports should be generated correctly using custom Agent IDs.

###### Estimated Effort:
1 day

###### Implementation Details:
- Ensure that all changes are committed and pushed to the main branch.
- Use a continuous integration and deployment (CI/CD) tool to automate the deployment process.
- Deploy the changes during off-peak hours to minimize disruption to users.
- Monitor the system after deployment to ensure that everything is working as expected.

#### Assumptions
Below are assumptions made while providing the estimates above:

1. The new table to map Agent to Facility with custom IDs editable by the Facility has already been created.
2. The script to backfill custom IDs for all Agents in the database has already been developed and tested.
3. The custom IDs will be unique for each Agent within a Facility.
4. The generateReport function will only need to be updated to use the custom IDs, and no other changes will be required.
5. The format of the custom IDs will be consistent across all Facilities.
6. The new feature for custom IDs will not have any impact on existing functionalities of the system.
7. The time estimates are based on a single developer working on the tasks.
8. Any external dependencies, such as API integrations or third-party libraries, are assumed to be functioning properly and without any issues. If any issues arise with external dependencies, additional time may be required to resolve them.
