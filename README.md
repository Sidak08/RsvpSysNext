# A Bit About This Project
This project, which I've dedicated significant time to, is a comprehensive reservation system designed for any business. It allows you to begin by defining the layout of your establishment through an intuitive drawing tool, complete with snapping features for precision. You can easily create and modify the perimeter of your space and later refine it if needed.

In the editing phase, you can place and customize objects like tables and seats, adjusting dimensions or removing them as desired. Once your layout is finalized, you can move to the reservation tab, where you can manage bookings by inputting details such as the name, phone number, time, email, and notes for customer preferences.

For those who prefer a more hands-off approach, the system generates a dynamic URL that allows customers to select a reservation time that best suits them. After securing a reservation, they can save the page for future reference. The reservation will then appear on your dashboard, where you can easily manage it, including the option to cancel or edit as necessary.

# How To Get Started

Open terminl

```bash
git clone https://github.com/Sidak08/RsvpSysNext.git
cd ./RsvpSysNext
npm install

touch .env.local
```

Set Keys for MONGODB_URI BASE_URL NODE_ENV and if you wish STRIPE STRIPE_WEBHOOK_SECRET

  ```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

# How To Use

### Click Go to dashboard
Consider using the paid plan if you want ;)
![navbar](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.14.50%20PM.png?raw=true)

### Make an account if you don't have one
![signup](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.16.30%20PM.png?raw=true)

### Go to login
![login](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.16.48%20PM.png?raw=true)

#### If you are not automatically redirected to the dashboard, click on the manuel link or just navigate to /dashboard

### You should end up here
![dashboard](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.17.57%20PM.png?raw=true)

### Go to the draw tab and make a basic layout
#### You even get snapping and can edit in the edit tab
![draw tab](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.20.00%20PM.png?raw=true)

### Now you can go the edit tab and place tables
#### These tables are resizable and can be deleted
![edit tab](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.21.00%20PM.png?raw=true)

### Resize: click the 4 corners and drag
![resize](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.21.14%20PM.png?raw=true)

### Change properties and delete: these commands can be done with the info box at the bottom right
![properties box](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.21.28%20PM.png?raw=true)

### Go back to home
#### You can now click on a table to make a reservation for it
#### The top right corner contains info about just the table including the current and future status
#### The bottom right corner shows the upcoming reservations from all the tables
![home page](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.21.48%20PM.png?raw=true)

### Make an rersevation
#### If the dot is green with the selected time and date you can click book
#### Which pulls up a info box about the guest
#### fill out if you can or leave it blank
![making a reservation](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.22.18%20PM.png?raw=true)

### Status box
#### This shows you all of the reservatiuons for the table and lets you make make a reserveration for that specfic table
#### Selecting a serveration pull up the info box
![status box](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.22.54%20PM.png?raw=true)

### Upcoming reservations
#### This contains all the upcoming reservations for all the tables
#### You can click on them to see the info box
![upcoming reservation box](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.23.25%20PM.png?raw=true)

### Info box
#### When you click on a reservation you get this box the reservation is also highlighted for easy of use
#### You can edit or delete or view the reservation here
![info box](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.23.38%20PM.png?raw=true)

### Change Info
#### this is what pops up when you click change on a rerservation
#### can click plus to add more info in any column
#### leaving a row blank will delete it
#### can click change time to change the time
![change info](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.24.12%20PM.png?raw=true)

### Change Time
#### This pulls up a calender and time picker
#### the green dot indicates if the reservation is valid
#### the changes are automaticly saved if reservation is valid
![change time](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.24.33%20PM.png?raw=true)

### Guest booking Tab
#### Navigate to the guest booking page
#### Copy the url and paste it in a new tab

### Guest booking page
#### This is what the guest sees
#### The defualt booking time is the current time and date but they can choose there own
#### Once they click find time it return the 3 closest time slots
#### They can click on the time slot to book it
![guest booking page](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%206.47.14%20PM.png?raw=true)

### Guest booking Info
#### once they click book they get this info box
#### they have to enter there name, phone number and email
![guest booking page](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%206.47.14%20PM.png?raw=true)

### Guest booking confirmation
#### once they enter the info and the server confirms the reservation they get this page
#### this page can be saved by just copying the url as it is dynamicly generated
![guest booking page](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%206.48.03%20PM.png?raw=true)

### see the reservation
#### you can go back to your home page and referesh to see the reservation
#### in the future you would not have to refresh
![home page](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%206.48.26%20PM.png?raw=true)
