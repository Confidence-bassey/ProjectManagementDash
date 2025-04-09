import { Box, Flex, Avatar, Heading, Text, Button, Tag, Stack } from "@chakra-ui/react";
import ApHOTO from '../public/avatar-2.jpg'

const ProfileCard = () => {
  return (
    <Box bg="white" borderRadius="lg" shadow="md" p={6} w="100%">
    
      <Flex align="center" mb={4}>
        <Avatar
          size="xl"
          name="John Doe"
          src={ApHOTO}
          mr={4}
        />
        <Box>
          <Heading size="lg">John Doe</Heading>
          <Text color="gray.500">Frontend Developer</Text>
        </Box>
      </Flex>

      <Text mb={4}>
        Passionate about creating user-friendly and visually appealing web interfaces.
      </Text>

      <Stack direction="row" spacing={2} mb={4}>
        <Tag colorScheme="blue">HTML</Tag>
        <Tag colorScheme="green">CSS</Tag>
        <Tag colorScheme="purple">JavaScript</Tag>
        <Tag colorScheme="yellow">React</Tag>
      </Stack>

      <Button colorScheme="blue" w="full">
        Edit Profile
      </Button>
    </Box>
  );
};

export default ProfileCard;
