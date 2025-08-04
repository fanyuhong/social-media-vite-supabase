import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { CreatePostPage } from './pages/CreatePostPage';
import { Navbar } from './components/Navbar';
import { PostPage } from './pages/PostPage';
import { CreateCommunityPage } from './pages/CreateCommunityPage';
import { Communities } from './pages/Communities';
import { CommunityPage } from './pages/CommunityPage';

function App() {
 
  return (
    <div className="min-h-screen bg-black text-gray-100 transition-opacity duration-700 pt-20">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/community/create" element={<CreateCommunityPage />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/community/:id" element={<CommunityPage />} />
        </Routes>   
      </div>       
    </div>
  )
}

export default App
