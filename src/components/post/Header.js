import { Flex, Box, Text } from "@chakra-ui/react";
import { useUser } from "../../hooks/users";
import { formatDistanceToNow } from "date-fns";

export default function Header({ post }) {
  const { uid, date } = post;
  const { username, isLoading } = useUser(uid);

  return (
    <Flex
      alignItems="center"
      borderBottom="2px solid"
      borderColor="teal.100"
      p="3"
      bg="gray.50"
    >
      <Box ml="4">
        {isLoading ? <p>Loading...</p> : <Text as="kbd">{username}</Text>}
        <Text fontSize="sm" color="gray.500">
          {formatDistanceToNow(date)} ago
        </Text>
      </Box>
    </Flex>
  );
}
