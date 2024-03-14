import { Flex, IconButton } from "@chakra-ui/react";
import { useAuth } from "../../hooks/auth";
import { FaTrash } from "react-icons/fa";
import { useDeletePost } from "../../hooks/posts";

export default function Actions({ post }) {
  const { id, uid } = post;
  const { user, isLoading: userLoading } = useAuth();

  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);

  return (
    <Flex p="2">
      {!userLoading && user.id === uid && (
        <IconButton
          ml="auto"
          onClick={deletePost}
          isLoading={deleteLoading}
          size="md"
          colorScheme="red"
          variant="ghost"
          icon={<FaTrash />}
          isRound
        />
      )}
    </Flex>
  );
}
