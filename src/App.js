import Topbar from "./scenes/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Sidenav from './scenes/global/Sidenav'
import Dashboard from './scenes/dashboard'
import { Routes, Route } from 'react-router-dom'
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from './scenes/form'
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidenav />
          <main className="content">
            <Topbar />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path='team' element={<Team />} />
              <Route exact path='contacts' element={<Contacts />} />
              <Route exact path='invoices' element={<Invoices />} />
              <Route exact path='form' element={<Form />} />
              <Route exact path='calendar' element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;