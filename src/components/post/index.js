import { Box, Text } from "@chakra-ui/react";
import Rating from "react-rating-stars-component";
import Actions from "./Actions";
import Header from "./Header";

export default function Post({ post }) {
  const { text, rating, heading } = post;

  return (
    <Box p="2" maxW="600px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        <Header post={post} />
        <Box p="2" minH="100px">
          <Text as="b">{heading}</Text>
          {rating && <Rating edit="false" value={rating} />}
          <Text wordBreak="break-word" fontSize="md">
            {text}
          </Text>
        </Box>
        <Actions post={post}></Actions>
      </Box>
    </Box>
  );
}
