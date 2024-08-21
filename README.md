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

#### Click Go to dashboard
Consider using the paid plan if you want ;)
![navbar](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.14.50%20PM.png?raw=true)

#### Make an account if you don't have one
fill in some details
![signyp](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.16.30%20PM.png?raw=true)

#### Go to login
fill in your details
![signyp](https://github.com/Sidak08/RsvpSysNext/blob/main/readMe/Screen%20Shot%202024-08-21%20at%205.16.48%20PM.png?raw=true)
if you are not automatically redirected to the dashboard, click on the manuel link or just navigate to ./dashboard
