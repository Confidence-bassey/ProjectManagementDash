// pages/feedback.jsx

import {
    Box,
    Heading,
    Grid,
    Text,
  } from "@chakra-ui/react";
  import FeedbackCard from "../components/FeedbackCard";
  
  // Mock Feedback Data
  const mockFeedback = [
    {
      id: 1,
      client: "Jane Doe",
      comment: "Amazing work! The project was delivered on time.",
      rating: 5,
      avatar: "/avatar-jane.png", // Replace with an actual image if available
    },
    {
      id: 2,
      client: "John Smith",
      comment: "Excellent communication and quality. Highly recommended!",
      rating: 4,
      avatar: "/avatar-john.png", // Replace with an actual image if available
    },
    {
      id: 3,
      client: "Alice Brown",
      comment: "The final product exceeded my expectations. Great job!",
      rating: 5,
      avatar: "",
    },
  ];
  
  const FeedbackPage = () => {
    return (
      <Box bg="gray.50" p={6} minH="100vh">
        {/* Page Heading */}
        <Heading size="lg" mb={6}>
          Client Feedback
        </Heading>
  
        <Text mb={4}>
          Here’s what your clients have to say about your work!
        </Text>
  
        {/* Feedback Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {mockFeedback.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default FeedbackPage;
  