// import { useEffect, useState } from "react";

// function PostList() {
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => setPosts(data.slice(0, 10))); // Lấy 10 bài viết đầu tiên
//     }, []);
//     return (
//       <div className="border">
//         <h2 className="font-bold text-center">Danh sách bài viết</h2>
//         {posts.map(post => (
//           <div key={post.id} className="border mb-4 bg-blue-200">
//             <h3 className="font-bold">{post.title}</h3>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }

// export default PostList;
  

import { useEffect, useState } from "react";

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data.slice(0, 10))); // Lấy 10 bài viết đầu tiên
    }, []);

    return (
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
                Danh sách bài viết
            </h2>
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="mb-6 p-4 bg-blue-100 rounded-lg shadow-md"
                >
                    <h3 className="text-xl font-bold text-blue-600 mb-2">
                        {post.title}
                    </h3>
                    <p className="text-gray-700">{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList;