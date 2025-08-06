# React Authentication Dashboard

A modern React application with authentication, built using Vite, TailwindCSS, and PocketBase backend. Features a clean, dark-themed UI with responsive design and comprehensive authentication flow.

## Features

- 🔐 Complete authentication system (Login/Register)
- 📱 Fully responsive design
- 🎨 Modern dark UI with TailwindCSS
- 🔄 Form validation with TanStack Form
- 📊 Dashboard with sidebar navigation
- 🍞 Toast notifications
- 🛡️ Protected routes
- 📋 Terms & Conditions modal
- 🎯 Clean component architecture

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS v4
- **Forms**: TanStack Form
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Backend**: PocketBase
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- PocketBase server running

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd react-auth-dashboard
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory and add your PocketBase URL:

```env
VITE_POCKETBASE_URL=your-pocketbase-url-here
```

**Example:**
```env
VITE_POCKETBASE_URL=https://pb.devpgs.app
```

> **Note**: Replace `your-pocketbase-url-here` with your actual PocketBase server URL. This could be a local development server (`http://localhost:8090`) or a hosted instance.

### 4. PocketBase Setup

**Option A: Use Existing Hosted Instance**
If you have access to a hosted PocketBase instance (like `https://pb.devpgs.app`), simply configure your `.env` file with the URL and ensure the `users` collection exists with the required fields.

**Option B: Set Up Local PocketBase**
1. Download PocketBase from [https://pocketbase.io/](https://pocketbase.io/)
2. Extract and run PocketBase:
   ```bash
   ./pocketbase serve
   ```
3. Access PocketBase Admin UI at `http://localhost:8090/_/`
4. Create a `users` collection with the following fields:
   - `email` (Email field, required)
   - `password` (Password field, required)
   - `name` (Text field, required)
   - `username` (Text field, required, unique)

**Required Collection Schema:**
Regardless of which option you choose, ensure your PocketBase instance has a `users` collection with these fields:
- `email` (Email field, required)
- `password` (Password field, required)  
- `name` (Text field, required)
- `username` (Text field, required, unique)

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── api/                    # API configurations
│   ├── auth.js            # Authentication API
│   ├── pocketbase.js      # PocketBase client
│   └── queryClient.js     # React Query client
├── assets/                # Static assets
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── TermsModal.jsx    # Terms & Conditions modal
├── contexts/             # React contexts
│   └── AuthContext.jsx   # Authentication context
├── hooks/                # Custom hooks
│   ├── queries/          # React Query hooks
│   └── useAuth.js        # Authentication hook
├── layout/               # Layout components
│   ├── features/         # Layout features (Navbar, Sidebar)
│   ├── AuthLayout.jsx    # Authentication layout
│   └── DashboardLayout.jsx # Dashboard layout
├── libs/                 # Utilities and constants
├── pages/                # Page components
├── routes/               # Routing configuration
└── main.jsx              # Application entry point
```

## Key Components

### Authentication Flow
- **Login Page**: Email/password authentication with validation
- **Register Page**: Complete registration form with profile image placeholder
- **Protected Routes**: Automatic redirection for unauthenticated users

### Dashboard
- **Responsive Sidebar**: Collapsible navigation with tooltips
- **Top Navigation**: Search, notifications, and user dropdown
- **Layout System**: Flexible layout components for easy extension

### Form Validation
- **TanStack Form**: Robust form handling with real-time validation
- **Custom Validators**: Email, password strength, and confirmation validation
- **Error Handling**: User-friendly error messages

## Issues Encountered & Solutions

### 1. TailwindCSS Version Migration (v3 → v4)
**Issue**: Upgraded from TailwindCSS v3 to v4, which required configuration changes.

**Solution**: 
- Updated TailwindCSS import in `src/index.css`:
  ```css
  @import "tailwindcss";
  ```
- Ensured all utility classes are compatible with v4
- Tested responsive design and component styling

### 2. Terms & Conditions State Management
**Issue**: Initially used local state for Terms & Conditions acceptance, but encountered rendering issues and validation conflicts.

**Solution**: 
- Integrated Terms & Conditions acceptance directly into TanStack Form validation
- Added field validation in `RegisterPage.jsx`:
  ```javascript
  <form.Field
    name="acceptTerms"
    validators={{
      onChange: ({ value }) =>
        !value ? "You must accept the Terms & Conditions" : undefined,
    }}
  >
  ```
- This approach provides better form state management and validation consistency

### 3. Form Submission Validation
**Issue**: Complex form validation with multiple interdependent fields.

**Solution**: 
- Implemented comprehensive validation rules in TanStack Form
- Added real-time validation for better UX
- Used `form.state.canSubmit` for submit button state management

## Assumptions Made

1. **PocketBase Schema**: Assumed standard user fields (email, password, name, username)
2. **Authentication Flow**: Single-role user system (no admin/user roles)
3. **File Uploads**: Profile images are placeholder-only (no actual upload functionality)
4. **Browser Support**: Modern browsers with ES6+ support
5. **Mobile-First**: Responsive design prioritizing mobile experience

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Environment Variables

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `VITE_POCKETBASE_URL` | Your PocketBase server URL | None (Required) | `https://pb.devpgs.app` or `http://localhost:8090` |

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Create a Pull Request

## Future Enhancements

- [ ] Profile image upload functionality
- [ ] Password reset flow
- [ ] Email verification
- [ ] Role-based access control
- [ ] Dark/light theme toggle
- [ ] Dashboard widgets and analytics
- [ ] User settings page

## Troubleshooting

### Common Issues

1. **PocketBase Connection Error**
   - Ensure PocketBase is running on the correct port
   - Check CORS settings in PocketBase
   - Verify environment variables

2. **Form Validation Issues**
   - Check TanStack Form field names match form structure
   - Ensure validation functions return proper error messages

3. **Styling Issues**
   - Verify TailwindCSS v4 compatibility
   - Check for conflicting CSS classes

## License

This project is licensed under the MIT License.

---

## Support

For issues and questions:
1. Check the troubleshooting section above
2. Review the code comments and documentation
3. Create an issue in the repository

