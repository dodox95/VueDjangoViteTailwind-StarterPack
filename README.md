# VueDjangoViteTailwind StarterPack

A seamless integration of Vue.js, Django, Vite, PostgreSQL, and TailwindCSS to kick-start your full-stack application development.

## Tech Stack

- **Frontend**: Vue.js with Vite and TailwindCSS.
- **Backend**: Django with PostgreSQL.

## Directory Structure

```
StarterPack
│
├── backend
│   ├── backend
│   │   └── settings.py
│   ├── requirements.txt
│   └── ...
│
└── frontend
    ├── vite.config.js
    ├── tailwind.config.js
    ├── index.html
    └── ...
```

## Setting Up

1. **Backend (Django + PostgreSQL)**

   Navigate to the backend directory:
   
   ```bash
   cd backend
   ```

   Install the required Python packages:
   
   ```bash
   pip install -r requirements.txt
   ```

   Setup the database (ensure PostgreSQL is running):
   
   ```bash
   python manage.py migrate
   ```

2. **Frontend (Vue + Vite + Tailwind)**

   Navigate to the frontend directory:
   
   ```bash
   cd frontend
   ```

   Install the necessary npm packages:
   
   ```bash
   npm install
   ```

   Run the Vue app:
   
   ```bash
   npm run dev
   ```

## Components

This starter pack comes with various Vue components such as:

- Navbar
- Hero
- Banner
- Features
- JobCards
- ... [You can list out other components as per your project]

## Contributing

Feel free to fork this project, and raise PRs for any enhancements.

## License

MIT

---

Happy coding!
