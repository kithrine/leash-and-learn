# Project Tracker

## Requirements

1. Simple login (will get code and minimal video from instructor)
   - You don't have to code this
   - It's a preview of the future full-fledged login


2. At least 2 user accounts, with at least 2 different roles (can be one role each)
   - One must be some sort of "Project Manager"
   - One should be some sort of worker that is working on tasks


3. Charts
   - Must use Recharts
   - Must have at least one chart
   - https://recharts.org/en-US
   - The charts should represent the project data, in a visual way.
   - Examples:
   - - How much of the project is done?
   - - How much time did each employee spend on the project or task?
   - - Compare the actual project time versus the estimated project time.
   - - Compare the actual project budget versus the estimated project budget.


4. Must have full stack PERN (PostgreSQL, Express, React and Node.js), full CRUD, RESTful APIs


5. Must use a CSS framework, must be either Tailwind or Bootstrap


6. Must pick a type of project to track
   - You can pick it but it must be professional or semi-corporate
   - Bonus points if it's an industry you know
   - You can also choose from the options below
   - Types:
   - - Construction
   - - Manufacturing*
   - - IT/Software Engineering (Agile, Kanban)
   - - Marketing
   - - Event Planning
   - - Clinical Trials*
   - - Research and Development
   - - * The ones with asterisks are project tracker applications that I actually worked on


7. Project parameters
   - **NOTE**: These are just example project parameters below. You don't need to do all of them. These are here just to get you started thinking about what your project will look like.
   - You obviously need tasks to keep track of in the project.
   - - Tasks are typically in a card style or list style.
   - Are these tasks concurrent, or do they wait on each other?
   - How do you show these tasks?
   - - Something custom but simple like a grid or flex box?
   - - Progress, stepper, timeline?
   - How long will the task take?
   - Do we need to track the estimated/projected completion time and compare it to the actual completion time?
   -  - In hours? In days?
   - Who can work these tasks?
   - How much are those employees paid?
   - Are there resource costs?
   - Are there material costs?
   - Do we need to track the estimated/projected cost and compare it to the actual cost?
   - Is a location involved?

   - So how many project parameters are required?
   - - Only 2 are required, although you can do more.
   - 1. You must pick tasks, because we're tracking a project, which is broken into tasks, and that automatically comes with time (how long do we expect the task to take?).
   - 2. The second one is up to you. People, costs, resources, etc.

## This is a lot of words. What is really required?
The MVP is a site that 2 users can login to, where one, a worker who completes tasks, can enter some basic info, and the other, a project manager, can see a simple report/chart representing that info.

So the goal is to see one user enter data, and the other to see the output of that data. With that said, it's fine if you include some faker.js data, from fake users, to have more robust charts and data on the project manager side. I'd recommend this as it will make your charts look way better.



## Optional
 - Use a loading skeleton/placeholder
   - This is good practice for every site you build.
   - https://flowbite.com/docs/components/skeleton/
   - https://getbootstrap.com/docs/5.1/components/placeholders/

- Can and should use Faker.js => go hog wild and make 1000s of records.

- Dark/Light mode toggle

- AI
    - On a clinical trials project I worked on, we used AI (Python) to project future project costs because it would save the company tons of money. This will work better the more data you have.
    - I'll need to setup an AI for you, like the image and chat.
    - This would only work if you had numerical or financial data.
    - Also on HuggingFace I just saw the following message for this type of model: Inference API (serverless) does not yet support timer models for this pipeline type.
    - You know what, nevermind.


## Notes
https://recharts.org/en-US (whitelist request submitted)
https://tailgrids.com/components/progress-bars
Do y'all know about this? https://play.tailwindcss.com/
https://huggingface.co/models?other=forecasting


