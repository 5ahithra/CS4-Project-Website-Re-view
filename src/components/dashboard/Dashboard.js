import {
  Box,
  Button,
  Heading,
  FormControl,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";
import { useAuth } from "../../hooks/auth";
import { useAddPost, usePosts } from "../../hooks/posts";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import Rating from "react-rating-stars-component";
import { useState } from "react";
import PostsList from "../post/PostsList";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();
  const [rating, setRating] = useState(0);
  const [key, setKey] = useState(0);

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
      heading: data.heading,
      rating: rating,
    });
    setRating(0);
    reset();
    setKey((prevKey) => prevKey + 1);
  }

  return (
    <Box maxW="600px" mx="auto" py="10" px="4">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <Box borderBottom="1px" borderColor="gray.200" pb="4">
          <Heading size="lg" mb="4">
            New Post
          </Heading>
        </Box>

        <FormControl id="heading" mt="4" isRequired>
          <FormLabel>Title:</FormLabel>
          <Textarea
            as={TextareaAutosize}
            resize="none"
            placeholder="What are you reviewing?"
            minRows={1}
            maxH="30px"
            {...register("heading", { required: true })}
            borderColor="gray.200"
            borderRadius="md"
            p="2"
            _focus={{ borderColor: "teal.300", boxShadow: "outline" }}
          />
        </FormControl>

        <FormControl id="rating" mt="4" isRequired>
          <FormLabel>Rating:</FormLabel>
          <Rating
            key={key}
            value={rating}
            onChange={(newRating) => setRating(newRating)}
            icon="star"
            size="lg"
          />
        </FormControl>

        <FormControl id="text" mt="4" isRequired>
          <FormLabel>Post:</FormLabel>
          <Textarea
            as={TextareaAutosize}
            resize="none"
            placeholder="Create a new post..."
            minRows={3}
            {...register("text", { required: true })}
            borderColor="gray.200"
            borderRadius="md"
            p="2"
            _focus={{ borderColor: "teal.300", boxShadow: "outline" }}
          />
        </FormControl>

        <Button
          colorScheme="teal"
          type="submit"
          isLoading={authLoading || addingPost}
          loadingText="Loading"
          mt="6"
        >
          Post
        </Button>
      </form>
    </Box>
  );
}

export default function Dashboard() {
  const { posts, isLoading } = usePosts();
  if (isLoading) return "Loading posts...";
  return (
    <>
      <NewPost />
      <PostsList posts={posts} />
    </>
  );
}
