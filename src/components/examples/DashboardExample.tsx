import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const DashboardExample = () => {
  return (
    <Box sx={{ pb: 6 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Monitor your business metrics and performance
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Total Revenue
                  </Typography>
                  <Typography variant="h4">$45,231</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <TrendingUpIcon color="success" fontSize="small" />
                    <Typography
                      variant="body2"
                      color="success.main"
                      sx={{ ml: 0.5 }}
                    >
                      +12.5%
                    </Typography>
                  </Box>
                </Box>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <AttachMoneyIcon />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Orders
                  </Typography>
                  <Typography variant="h4">1,842</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <TrendingDownIcon color="error" fontSize="small" />
                    <Typography
                      variant="body2"
                      color="error.main"
                      sx={{ ml: 0.5 }}
                    >
                      -3.2%
                    </Typography>
                  </Box>
                </Box>
                <Avatar sx={{ bgcolor: "secondary.main" }}>
                  <ShoppingCartIcon />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Customers
                  </Typography>
                  <Typography variant="h4">12,458</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <TrendingUpIcon color="success" fontSize="small" />
                    <Typography
                      variant="body2"
                      color="success.main"
                      sx={{ ml: 0.5 }}
                    >
                      +8.1%
                    </Typography>
                  </Box>
                </Box>
                <Avatar sx={{ bgcolor: "info.main" }}>
                  <PeopleIcon />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Products
                  </Typography>
                  <Typography variant="h4">532</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <TrendingUpIcon color="success" fontSize="small" />
                    <Typography
                      variant="body2"
                      color="success.main"
                      sx={{ ml: 0.5 }}
                    >
                      +2.4%
                    </Typography>
                  </Box>
                </Box>
                <Avatar sx={{ bgcolor: "warning.main" }}>
                  <InventoryIcon />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Content Grid */}
      <Grid container spacing={3}>
        {/* Sales Progress */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h6">Sales Performance</Typography>
              <IconButton size="small">
                <MoreVertIcon />
              </IconButton>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body2">Monthly Goal</Typography>
                <Typography variant="body2" fontWeight="medium">
                  75%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={75}
                sx={{ height: 8, borderRadius: 1 }}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body2">Quarterly Target</Typography>
                <Typography variant="body2" fontWeight="medium">
                  60%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={60}
                color="secondary"
                sx={{ height: 8, borderRadius: 1 }}
              />
            </Box>
            <Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body2">Annual Revenue</Typography>
                <Typography variant="body2" fontWeight="medium">
                  45%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={45}
                color="success"
                sx={{ height: 8, borderRadius: 1 }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Quick Stats */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Stats
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Active Users
                </Typography>
                <Typography variant="h5">8,492</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Conversion Rate
                </Typography>
                <Typography variant="h5">3.24%</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Avg. Order Value
                </Typography>
                <Typography variant="h5">$124.50</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Activity */}
        <Grid size={{ xs: 12 }}>
          <Paper sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h6">Recent Activity</Typography>
              <Chip
                label="Last 7 days"
                size="small"
                color="primary"
                variant="outlined"
              />
            </Box>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "primary.main" }}>JD</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="John Doe placed a new order"
                  secondary="Order #1234 - $299.99 - 2 hours ago"
                />
                <Chip label="New" size="small" color="success" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "secondary.main" }}>AS</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Alice Smith updated product inventory"
                  secondary="Product: Wireless Headphones - 5 hours ago"
                />
                <Chip label="Update" size="small" color="info" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "warning.main" }}>MB</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Michael Brown left a review"
                  secondary="5 stars - Great product! - 1 day ago"
                />
                <Chip label="Review" size="small" color="warning" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardExample;
