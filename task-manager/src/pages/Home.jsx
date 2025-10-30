import Layout from '../components/Layout';
import TaskManager from '../components/TaskManager';
import PostList from '../components/PostList';

function Home() {
  return (
    <Layout>
      <h1 className="text‑2xl font‑bold mb‑4">Welcome to Task Manager</h1>
      <TaskManager />
      <h2 className="text‑xl font‑bold mt‑8 mb‑4">Posts from API</h2>
      <PostList />
    </Layout>
  );
}

export default Home;
