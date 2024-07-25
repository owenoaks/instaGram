import { FlatList } from "react-native";
//import posts from "../../../assets/data/posts.json";
import posts from "@/assets/data/posts.json";
import PostListItem from "@/src/components/PostListItem";

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem poste={item} />}
      contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
    />
  );

  //return (
  //  <View>
  //   <PostListItem poste={posts[1]} />
  //   <PostListItem poste={posts[0]} />
  // </View>
  //);
}

//------OLD--------------------
{
  /**
const post1 = posts[0];

export default function FeedScreen() {
  return (
    <View>
      <PostListItem poste={posts[1]} />
      <PostListItem poste={posts[0]} />
    </View>
  );*/
}
