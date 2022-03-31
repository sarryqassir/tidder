import { Link } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import React from "react";
import { Layout } from "../components/Layout";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <React.StrictMode>
      <Layout>
        <NextLink href="/create-post">
          <Link>create post</Link>
        </NextLink>
        <br />
        {!data ? (
          <div>loading...</div>
        ) : (
          data.posts.map((p) => <div key={p.id}>{p.title}</div>)
        )}
      </Layout>
    </React.StrictMode>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
