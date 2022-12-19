import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bruno</Text>
          <Text color="gray.300" fontSize="small">
            bruno-amil@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Bruno Lima"
        src="https://avatars.githubusercontent.com/u/8558185?v=4"
      />
    </Flex>
  );
}
