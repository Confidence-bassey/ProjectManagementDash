import {
    Box,
    Heading,
    Text,
    Stat,
    StatLabel,
    Flex,
    Spacer,
    Progress,
  } from "@chakra-ui/react";
  
  const EarningsChart = () => {
    return (
      <Box bg="white" borderRadius="lg" shadow="md" p={6} w="100%">
        <Heading size="md" mb={4}>
          Earnings Summary
        </Heading>
  

        <Stat mb={4}>
          <StatLabel>Total Earnings</StatLabel>
          <Text fontSize="2xl" fontWeight="bold">$12,450</Text>
        </Stat>
  
        <Flex align="center" mb={2}>
          <Text>Earnings This Month</Text>
          <Spacer />
          <Text fontWeight="bold">$2,100</Text>
        </Flex>
        <Progress colorScheme="blue" size="sm" value={50} />
  
        <Flex align="center" mt={6}>
          <Text>Earnings Goal</Text>
          <Spacer />
          <Text fontWeight="bold">$15,000</Text>
        </Flex>
        <Progress colorScheme="green" size="sm" value={80} />
      </Box>
    );
  };
  
  export default EarningsChart;
  