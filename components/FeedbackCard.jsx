import { Box, Text, Flex, Avatar, HStack, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const FeedbackCard = ({ feedback = {} }) => {

  const {
    client = "Anonymous Client",
    avatar = "",
    rating = 0,
    comment = "No feedback provided",
  } = feedback;

  return (
    <Box
      bg="white"
      borderRadius="lg"
      shadow="md"
      p={6}
      w="100%"
      maxW="sm"
      mb={4}
    >
      <Flex align="center" mb={4}>
        <Avatar
          name={client} 
          src={avatar} 
          mr={4}
        />
        <Box>
          <Text fontWeight="bold">{client}</Text>
          <HStack>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <Icon
                  as={StarIcon}
                  key={i}
                  color={i < rating ? "yellow.400" : "gray.300"} 
                />
              ))}
          </HStack>
        </Box>
      </Flex>

      <Text color="gray.600" fontStyle="italic">
        "{comment}" 
      </Text>
    </Box>
  );
};

export default FeedbackCard;

