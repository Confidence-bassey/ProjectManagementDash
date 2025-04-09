import { Box, Text, Flex, Avatar, HStack, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const FeedbackCard = ({ feedback }) => {
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
          name={feedback.client}
          src={feedback.avatar || ""}
          mr={4}
        />
        <Box>
          <Text fontWeight="bold">{feedback.client}</Text>
          <HStack>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <Icon
                  as={StarIcon}
                  key={i}
                  color={i < feedback.rating ? "yellow.400" : "gray.300"}
                />
              ))}
          </HStack>
        </Box>
      </Flex>


      <Text color="gray.600" fontStyle="italic">
        "{feedback.comment}"
      </Text>
    </Box>
  );
};

export default FeedbackCard;
