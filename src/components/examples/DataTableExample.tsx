import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Button,
  TablePagination,
  Avatar,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FilterListIcon from '@mui/icons-material/FilterList';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from 'react';

interface Row {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
}

const rows: Row[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'active', joinDate: '2024-02-20' },
  { id: 3, name: 'Bob Johnson', email: 'bob.j@example.com', role: 'Manager', status: 'inactive', joinDate: '2023-12-10' },
  { id: 4, name: 'Alice Williams', email: 'alice.w@example.com', role: 'User', status: 'active', joinDate: '2024-03-05' },
  { id: 5, name: 'Charlie Brown', email: 'charlie.b@example.com', role: 'User', status: 'pending', joinDate: '2024-03-22' },
  { id: 6, name: 'Diana Prince', email: 'diana.p@example.com', role: 'Admin', status: 'active', joinDate: '2023-11-08' },
  { id: 7, name: 'Evan Davis', email: 'evan.d@example.com', role: 'Manager', status: 'active', joinDate: '2024-01-30' },
  { id: 8, name: 'Fiona Garcia', email: 'fiona.g@example.com', role: 'User', status: 'inactive', joinDate: '2023-10-12' },
];

const getStatusColor = (status: Row['status']) => {
  switch (status) {
    case 'active':
      return 'success';
    case 'inactive':
      return 'error';
    case 'pending':
      return 'warning';
    default:
      return 'default';
  }
};

const getRoleColor = (role: string) => {
  switch (role) {
    case 'Admin':
      return 'error';
    case 'Manager':
      return 'warning';
    case 'User':
      return 'info';
    default:
      return 'default';
  }
};

const DataTableExample = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Manage and view all registered users
      </Typography>

      <Paper sx={{ p: 3 }}>
        {/* Toolbar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
          <TextField
            placeholder="Search users..."
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ minWidth: 300 }}
          />
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" startIcon={<FilterListIcon />}>
              Filters
            </Button>
            <Button variant="outlined" startIcon={<DownloadIcon />}>
              Export
            </Button>
            <Button variant="contained">Add User</Button>
          </Stack>
        </Box>

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Join Date</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedRows.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        {row.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <Typography variant="body2" fontWeight="medium">
                        {row.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {row.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip label={row.role} size="small" color={getRoleColor(row.role)} variant="outlined" />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                      size="small"
                      color={getStatusColor(row.status)}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(row.joinDate).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" color="primary">
                      <VisibilityIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="primary">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Paper>

      {/* Summary Cards */}
      <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
        <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Total Users
          </Typography>
          <Typography variant="h4">{rows.length}</Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Active
          </Typography>
          <Typography variant="h4" color="success.main">
            {rows.filter(r => r.status === 'active').length}
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Pending
          </Typography>
          <Typography variant="h4" color="warning.main">
            {rows.filter(r => r.status === 'pending').length}
          </Typography>
        </Paper>
        <Paper sx={{ p: 2, flex: 1, minWidth: 200 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Inactive
          </Typography>
          <Typography variant="h4" color="error.main">
            {rows.filter(r => r.status === 'inactive').length}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default DataTableExample;