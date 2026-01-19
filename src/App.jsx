import { Box, Typography } from '@mui/material';
import DashboardLayout from './layouts/DashboardLayout';
import JobQueries from './pages/JobQueries';

function App() {
  return (
    <DashboardLayout>
      <JobQueries />
    </DashboardLayout>
  );
}

export default App;
