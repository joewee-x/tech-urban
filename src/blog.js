

async function fetchPosts() {
    try {
        const res = await fetch("https://dummyjson.com/posts");

        if (!res.ok) {
            throw new Error("Failed to fetch posts");
        }

        const data = await res.json();

        displayBlogs(data.posts);

    } catch (error) {
        console.error(error.message);
    }
}

fetchPosts();
function displayBlogs(posts) {
    const container = document.getElementById("blogs");

    container.innerHTML = posts.map(post => `
        <article class="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
            <div class="p-6">

                <!-- Post Title -->
                <h2 class="text-2xl font-bold text-slate-800 mb-4">
                    ${post.title}
                </h2>

                <!-- Full Post Body -->
                <p class="text-slate-600 leading-7">
                    ${post.body}
                </p>

                <!-- Footer -->
                <div class="mt-6 pt-4 flex justify-end">
                    <span class="text-sm text-gray-500">
                        Post #${post.id}
                    </span>
                </div>

            </div>
        </article>
    `).join("");
}


 