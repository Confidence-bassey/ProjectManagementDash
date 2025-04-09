import { Flex, Heading, Spacer, Text, Avatar, HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      bg="white"
      h="60px"
      align="center"
      px={6}
      shadow="md"
    >
      
      <Heading size="md" color="blue.600">
        FreelanceDash
      </Heading>

      <Spacer />

   
      <HStack spacing={4}>
        <Text color="gray.600">John Doe</Text>
        <Avatar size="sm" name="John Doe" src="/profile-pic.png" />
        <Link
          href="/profile"
          color="blue.500"
          fontWeight="bold"
          _hover={{ textDecoration: "none", color: "blue.700" }}
        >
          Edit Profile
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;

