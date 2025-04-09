// pages/projects.jsx

import {
    Box,
    Heading,
    Grid,
    Text,
  } from "@chakra-ui/react";
  import ProjectCard from "../components/ProjectCard";
  
  const mockProjects = [
    {
      id: 1,
      title: "Website Redesign",
      client: "Jane Doe",
      date: "April 5, 2025",
      status: "Completed",
    },
    {
      id: 2,
      title: "E-commerce App Development",
      client: "John Smith",
      date: "March 20, 2025",
      status: "Completed",
    },
    {
      id: 3,
      title: "Mobile Game Design",
      client: "Gaming Co.",
      date: "March 15, 2025",
      status: "In Progress",
    },
  ];
  
  const ProjectsPage = () => {
    return (
      <Box bg="gray.50" p={6} minH="100vh">
        {/* Page Heading */}
        <Heading size="lg" mb={6}>
          Projects
        </Heading>
  
        <Text mb={4}>
          Here are some of your recent projects. Keep track of your progress and completed work!
        </Text>
  
        {/* Projects Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default ProjectsPage;
  