# **Contact Management**

This project is a contact management application built using React. It fetches real-time COVID-19 data from the disease api and Visualizes it using charts and maps .It also has a contact form with crud operations.It is fully responsive.

**Features**

- **Worldwide Data**: Displays global COVID-19 statistics.
- **Country-Specific Data**: Fetches and displays COVID-19 data for specific countries.
- **Historical Data**: Graphs showing the trend of COVID-19 cases over time.
- **Map Visualization**: Interactive maps showing COVID-19 hotspots around the world.
- **SweetAlert2 Integration**: Popup alerts for important information.
- **Contact Form**: Has Contact Form and CRUD operations are implemented.
- **State Management**: This application used Redux for state management
- **Responsive:** This application is fully responsive.

## **Technologies Used**

- **React**: A JavaScript library for building user interfaces.
- **React Leaflet**: For creating interactive maps.
- **React-Chartjs-2**: For charting and data visualization.
- **SweetAlert2 (swal-popup)**: For creating beautiful popup alerts.

## **Getting Started**

### **Prerequisites**

Make sure you have the following installed on your system:

- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn

### **Installation**

**Clone the repository**:

```bash
`https://github.com/sonikasharan/contact-management.git`
`cd contact-management`
```

**Install dependencies**: If you are using npm:

```bash
`npm install`
```

Or if you are using yarn:

```bash
`yarn install`
```

1.

### **Running the Application**

To start the development server, run:

```bash
`npm start`

```

Or if using yarn:

```bash
`yarn start`
```

The application will be available at `http://localhost:3000`.

### **API Endpoints**

This application uses the following API endpoints to fetch COVID-19 data:

1. **Worldwide Data**:
   - URL: `https://disease.sh/v3/covid-19/all`
   - Provides global COVID-19 statistics.
2. **Country-Specific Data**:
   - URL: `https://disease.sh/v3/covid-19/countries`
   - Fetches COVID-19 data for individual countries.
3. **Graph Data for Cases Over Time**:
   - URL: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
   - Provides historical data of COVID-19 cases worldwide.

### **Folder Structure**

plaintext  
`├── public`  
`│   ├── index.html`  
`│   └── assets`  
`├── src`  
`│   ├── components`  
`│   │   ├── pages`  
`│   │   ├── sharedComponents`  
`│   │   └── ...`  
`│   ├── App.js`  
`│   ├── index.js`  
`│   └── ...`  
`├── package.json`  
`└── README.md`

- **src/components**: Contains the React components for the application.
- **public**: Public assets and the main `index.html` file.

### **Customization**

You can customize the application by modifying the components in the `src/components` directory. The data fetching logic can be found in the relevant components (e.g., `Map.js`, `Chart.js`).

### **Deployment**

To build the application for production, run:

```bash
`npm run build`
```

Or if using yarn:

```bash
`yarn build`
```

The build files will be generated in the `build/` directory. You can then deploy these files to your preferred hosting service.

## **License**

This project is open-source and available under the MIT License.
