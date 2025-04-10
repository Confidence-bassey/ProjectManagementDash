import { Box, Heading, Text, Flex, Badge, IconButton } from "@chakra-ui/react";
import { FiCheckCircle, FiClock } from "react-icons/fi";

const ProjectCard = ({ project = {} }) => {

  const { title = "Untitled Project", client = "Unknown Client", status = "Pending", date = "TBD" } = project;
  const isCompleted = status === "Completed";

  return (
    <Box bg="white" borderRadius="lg" shadow="md" p={6} w="100%" maxW="sm" mb={4}>
      
      <Heading size="md" mb={2}>
        {title}
      </Heading>

      <Text color="gray.600" mb={4}>
        Client: {client}
      </Text>

      <Flex align="center" justify="space-between">
        <Badge colorScheme={isCompleted ? "green" : "yellow"}>{status}</Badge>
        <IconButton
          icon={isCompleted ? <FiCheckCircle /> : <FiClock />}
          aria-label={status}
          colorScheme={isCompleted ? "green" : "yellow"}
        />
      </Flex>

      <Text mt={4} color="gray.500">
        Completed on: {date}
      </Text>
    </Box>
  );
};

export default ProjectCard;
