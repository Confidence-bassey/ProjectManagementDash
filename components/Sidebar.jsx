import { Box, Flex, Heading, Link, VStack, Icon } from "@chakra-ui/react";
import { FaHome, FaUser, FaProjectDiagram, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box
      w="250px"
      bg="blue.600"
      color="white"
      minH="100vh"
      p={4}
      boxShadow="lg"
    >
      <Flex align="center" justify="center" mb={6}>
        <Heading size="lg" color="white">
          FreelanceDash
        </Heading>
      </Flex>

      <VStack align="start" spacing={4}>
        <Link
          href="/"
          display="flex"
          alignItems="center"
          _hover={{ color: "blue.300", textDecoration: "none" }}
        >
          <Icon as={FaHome} mr={2} />
          Home
        </Link>
        <Link
          href="/profile"
          display="flex"
          alignItems="center"
          _hover={{ color: "blue.300", textDecoration: "none" }}
        >
          <Icon as={FaUser} mr={2} />
          Profile
        </Link>
        <Link
          href="/projects"
          display="flex"
          alignItems="center"
          _hover={{ color: "blue.300", textDecoration: "none" }}
        >
          <Icon as={FaProjectDiagram} mr={2} />
          Projects
        </Link>
        <Link
          href="/feedback"
          display="flex"
          alignItems="center"
          _hover={{ color: "blue.300", textDecoration: "none" }}
        >
          <Icon as={FaUsers} mr={2} />
          Clients
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
