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

#### If you are not automatically redirected to the dashboard, click on the manuel link or just navigate to ./dashboard

### You should end up here
![dashboard](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.17.57%20PM.png?raw=true)

### Go to the draw tab and make a basic layout
#### You even get snapping and can edit in the edit tab
![draw tab](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.20.00%20PM.png?raw=true)

### Now you can go the edit tab and place tables
#### These tables are resizable and can be deleted
![edit tab](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.21.00%20PM.png?raw=true)

### Resize: click and of the 4 corners and drag
![element image](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.21.14%20PM.png?raw=true)

### Change properties and delete: these commands can be done with the info box at the bottom right
![element image](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.21.28%20PM.png?raw=true)

### Go back to home
#### You can now click on a table to make a reservation for it look
#### The top right corner has contains info about just the table including the current and future status
#### The bottom right corner shows the upcoming reservations from all the tables
![element image](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.21.48%20PM.png?raw=true)

### Make an rersevation
#### If the dot is green with the selected time and date you can click book
#### Which pulls up a info box about the guest
![element image](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.22.18%20PM.png?raw=true)
