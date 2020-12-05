import Post from '../interfaces/Post';
import Posts from '../interfaces/Posts';

interface PrePost {
  author: string;
  comments: string;
}

interface PostsData {
  name: string;
  array: PrePost[];
}

const fetchData = async (): Promise<PostsData[]> => {
  let returnData: PostsData[] = [];
  await fetch('/api/v1/data', {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_SECRET}`,
    },
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      returnData = data;
    })
    .catch(() => {
    });
  return returnData;
};

const formatProjectData = (subredditName: string, array: PrePost[]): Posts => {
  const posts: Posts = [subredditName] as unknown as Posts;
  array.forEach((item) => {
    const commentsArray = item.comments.split(' ');
    const obj: Post = {
      author: item.author,
      comments: commentsArray,
    };
    posts.push(obj as unknown as Post[]);
  });
  return posts;
};

export const generateAllData = async (): Promise<Posts[]> => {
  const allData: Posts[] = [] as unknown as Posts[];
  try {
    const data = await fetchData();
    data.forEach((item: PostsData) => {
      const result = formatProjectData(item.name, item.array);
      allData.push(result);
    });
    return allData;
  } catch (e) {
    return [];
  }
};

export default generateAllData;
