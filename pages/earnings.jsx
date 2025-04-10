import { Box, Heading, Grid, Text, Flex, Stat, StatLabel, StatNumber, Progress } from "@chakra-ui/react";

const mockEarningsData = {
  totalEarnings: "$12,450",
  earningsThisMonth: "$2,100",
  totalProjects: 8,
  earningsGoal: "$15,000",
};

const EarningsPage = () => {
  return (
    <Box bg="gray.50" p={6} minH="100vh">
    
      <Heading size="lg" mb={6}>
        Earnings Summary
      </Heading>

      <Text mb={4}>
        Keep track of your financial progress and goals achieved over time!
      </Text>

      <Flex wrap="wrap" gap={6} mb={6}>
        {/* Total Earnings */}
        <Box bg="white" borderRadius="lg" shadow="md" p={6} flex="1" minW="300px">
          <Stat>
            <StatLabel>Total Earnings</StatLabel>
            <StatNumber>{mockEarningsData.totalEarnings}</StatNumber>
          </Stat>
        </Box>

        {/* Earnings This Month */}
        <Box bg="white" borderRadius="lg" shadow="md" p={6} flex="1" minW="300px">
          <Stat>
            <StatLabel>Earnings This Month</StatLabel>
            <StatNumber>{mockEarningsData.earningsThisMonth}</StatNumber>
          </Stat>
        </Box>

        {/* Total Projects */}
        <Box bg="white" borderRadius="lg" shadow="md" p={6} flex="1" minW="300px">
          <Stat>
            <StatLabel>Total Projects</StatLabel>
            <StatNumber>{mockEarningsData.totalProjects}</StatNumber>
          </Stat>
        </Box>
      </Flex>

      {/* Earnings Progress */}
      <Box bg="white" borderRadius="lg" shadow="md" p={6}>
        <Heading size="md" mb={4}>
          Progress Towards Earnings Goal
        </Heading>
        <Flex align="center" mb={4}>
          <Text>Earnings Goal:</Text>
          <Text fontWeight="bold" ml="auto">
            {mockEarningsData.earningsGoal}
          </Text>
        </Flex>
        <Progress colorScheme="green" value={80} />
      </Box>
    </Box>
  );
};

export default EarningsPage;
