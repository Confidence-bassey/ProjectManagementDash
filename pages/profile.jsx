import {
    Box,
    Heading,
    Flex,
    Avatar,
    Text,
    Stack,
    Button,
    Tag,
  } from "@chakra-ui/react";
  
  const ProfilePage = () => {
    return (
      <Flex direction="column" align="center" p={6} bg="gray.50" minH="100vh">
        {/* Profile Section */}
        <Box
          bg="white"
          borderRadius="lg"
          shadow="md"
          p={8}
          w="100%"
          maxW="md"
          textAlign="center"
        >
          <Avatar
            size="2xl"
            name="John Doe"
            src="/profile-pic.png" 
            mb={4}
          />
          <Heading size="lg">John Doe</Heading>
          <Text color="gray.500" mb={4}>
            Frontend Developer
          </Text>
          <Text color="gray.600">
            Passionate about creating user-friendly and visually appealing web
            interfaces that prioritize functionality and design.
          </Text>
          <Button mt={6} colorScheme="blue" w="full">
            Edit Profile
          </Button>
        </Box>
  
        {/* Skills Section */}
        <Box
          bg="white"
          borderRadius="lg"
          shadow="md"
          p={6}
          mt={6}
          w="100%"
          maxW="md"
        >
          <Heading size="md" mb={4}>
            Skills
          </Heading>
          <Stack direction="row" spacing={2}>
            <Tag colorScheme="blue">HTML</Tag>
            <Tag colorScheme="green">CSS</Tag>
            <Tag colorScheme="purple">JavaScript</Tag>
            <Tag colorScheme="yellow">React</Tag>
            <Tag colorScheme="red">Next.js</Tag>
          </Stack>
        </Box>
  
        {/* Contact Section */}
        <Box
          bg="white"
          borderRadius="lg"
          shadow="md"
          p={6}
          mt={6}
          w="100%"
          maxW="md"
        >
          <Heading size="md" mb={4}>
            Contact Information
          </Heading>
          <Text>Email: john.doe@example.com</Text>
          <Text>Phone: +123 456 7890</Text>
          <Text>Website: www.johndoeportfolio.com</Text>
        </Box>
      </Flex>
    );
  };
  
  export default ProfilePage;
  