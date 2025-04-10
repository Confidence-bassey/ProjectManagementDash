import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Avatar,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import ProjectCard from "../components/ProjectCard";
import FeedbackCard from "../components/FeedbackCard";
import EarningsChart from "../components/EarningsChart";

const DashboardHome = () => {
  return (
    <Flex direction="row" h="100vh" bg="gray.50">
      <Sidebar />

      {/* Main Content */}
      <Flex direction="column" flex="1" p={6}>
        <Navbar />
        {/* Profile Section */}
        <Flex direction="row" gap={6} wrap="wrap" mb={6}>
          <Box flex="1" p={6} bg="white" borderRadius="md" shadow="md">
            <Flex direction="row" align="center" gap={4}>
              <Avatar size="lg" name="John Doe" src="/profile-pic.png" />
              <Flex direction="column">
                <Heading size="md">John Doe</Heading>
                <Text>Frontend Developer</Text>
              </Flex>
            </Flex>
            <Button mt={4} colorScheme="blue">
              Edit Profile
            </Button>
          </Box>
          <Box flex="1" p={6} bg="white" borderRadius="md" shadow="md">
            <Heading size="md" mb={4}>
              Earnings Summary
            </Heading>
            <Text fontSize="xl" fontWeight="bold">
              $12,450
            </Text>
            <Text>Total Projects: 8</Text>
            <Text>Earnings This Month: $2,100</Text>
          </Box>
        </Flex>

        {/* Projects Section */}
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          <ProjectCard />
          <FeedbackCard />
        </Grid>
      </Flex>
    </Flex>
  );
};

export default DashboardHome;
