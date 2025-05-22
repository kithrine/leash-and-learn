import { useState } from "react"
import { useNavigate } from "react-router"
import BlogNavigation from "../../components/navigation/BlogNavigation"

const BlogHomepage = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Importance of Positive Reinforcement in Dog Training",
      imageSrc: "/images/blog-1.jpg",
      excerpt:
        "Learn how positive reinforcement can help your dog become a well-behaved and happy companion."
    },
    {
      id: 2,
      title: "How to Teach Your Dog Basic Commands",
      imageSrc: "/images/blog-2.jpg",
      excerpt:
        "Follow these simple steps to teach your dog basic commands like sit, stay, and come."
    }
    // Add more posts as needed
  ])

  return (
    <>
    <BlogNavigation />
    
      <section class="bg-no-repeat bg-[url('./assets/images/blog-hero-crop5.png')] bg-gray-600 bg-blend-multiply bg-cover">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-50">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            <span className="font-leash text-8xl">Leash</span>{" "}
            <span className="font-and">&</span>{" "}
            <span className="font-learn uppercase">Learn</span>:{" "}
            <span className="font-lexend">BLOG</span>
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Discover how to train your dog like a pro with our easy-to-follow
            tips and tricks. We cover everything from basic commands to advanced
            techniques in dog training. 🐾 Click here to start learning →
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </a>
          </div>
        </div>
      </section>
      
      <div className="flex flex-col md:flex-row mt-12">
        <div className="md:w-[85vw] h-[50vh] bg-teal-400 mx-4">
        <button onClick={() => navigate("/create-blog")} type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add new blog post</button>

        <button onClick={() => navigate("/blog-list")} type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Blog List</button>

        </div>

        <div className="md:w-[15vw] h-[50vh] bg-emerald-400 mx-4 mt-4 md:mt-0">
          <p>
          Want to add a blog post to our community blog? You must be logged in first! 
          </p>
        </div>

      </div>









      {/* <div className="container mx-auto px-6 py-24 chevron-pattern">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
        Blog post
      </div>
    </div> */}
      <section
        class="mt-96 min-h-screen bg-gradient-to-r from-blue-600 to-pink-600 text-white
py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <h1 class="text-5xl font-bold mb-6">Your Dog's Path to Perfection</h1>
          <p class="text-xl text-gray-300 mb-8">
            Transform your dog's behavior with our expert training methods
          </p>
          <button
            class="bg-blue-700 hover:bg-blue-900 text-white px-8 py-4 rounded-lg
font-semibold transition-all duration-300">
            Book a Free Consultation
          </button>

          {/* <!-- Social Media Links --> */}
          <div class="flex justify-center mt-6">
            <a href="#" class="text-gray-300 hover:text-blue-700">
              Facebook
            </a>
            <a href="#" class="text-gray-300 hover:text-blue-700">
              Instagram
            </a>
            <a href="#" class="text-gray-300 hover:text-blue-700">
              Twitter
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Services Section --> */}
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Service Card 1 --> */}
            <div
              class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl
transition-shadow">
              <div
                class="bg-blue-500 w-12 h-12 rounded-lg flex items-center
justify-center mb-4"></div>
              <h3 class="text-xl font-semibold mb-2">Basic Training</h3>
              <p class="text-gray-600">
                Fundamentals for puppies and dogs of all ages
              </p>
            </div>

            {/* <!-- Service Card 2 --> */}
            <div
              class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl
transition-shadow">
              <div
                class="bg-blue-500 w-12 h-12 rounded-lg flex items-center
justify-center mb-4"></div>
              <h3 class="text-xl font-semibold mb-2">Advanced Training</h3>
              <p class="text-gray-600">
                Custom strategies for specific behaviors and needs
              </p>
            </div>

            {/* <!-- Service Card 3 --> */}
            <div
              class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl
transition-shadow">
              <div
                class="bg-blue-500 w-12 h-12 rounded-lg flex items-center
justify-center mb-4"></div>
              <h3 class="text-xl font-semibold mb-2">Obedience School</h3>
              <p class="text-gray-600">
                Professional training sessions for all commands
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Us Section --> */}
      <section class="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">About Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Content --> */}
            <div class="space-y-4">
              <p class="text-gray-600">
                At Leash & Learn, we specialize in dog training for dogs of all
                sizes and breeds. Our experienced trainers use naturalistic
                methods that help your dog learn in a stress-free environment.
              </p>

              <div class="bg-blue-500 w-fit h-12 rounded-full mb-4">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials Section --> */}
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div class="flex flex-wrap justify-center gap-4">
            {/* <!-- Testimonial Card --> */}
            <div
              class="bg-white p-8 rounded-xl shadow-lg overflow-hidden transform
transition-all duration-300 hover:scale-105">
              <div
                class="bg-blue-500 w-24 h-32 rounded-lg flex items-center
justify-center mb-6"></div>
              <p class="text-gray-600 text-sm mb-4">John D.</p>
              <h4 class="font-semibold text-xl mb-2">Professional Trainers</h4>
              <p class="text-blue-700 text-sm">
                "Leash & Learn transformed our dog's training completely. Highly
                recommended!"
              </p>
            </div>

            {/* <!-- Add More Testimonial Cards --> */}
          </div>
        </div>
      </section>
      {/* <!-- Contact Section --> */}
      <section class="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* <!-- Contact Info --> */}
            <div class="bg-white p-6 rounded-xl shadow-lg">
              <h3 class="font-semibold mb-2">Name:</h3>
              <p>John Doe</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-lg">
              <h3 class="font-semibold mb-2">Email:</h3>
              <p>john@example.com</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-lg">
              <h3 class="font-semibold mb-2">Phone:</h3>
              <p>+1 234 567 890</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-lg">
              <h3 class="font-semibold mb-2">Address:</h3>
              <p>123 Pet Street, City, State 12345</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer --> */}
      <footer class="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center">
            <p>&copy; 2023 Leash & Learn. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* <!-- Hero Section --> */}
      <section class="container mx-auto px-4 py-20">
        <h1 class="text-4xl font-bold text-center mb-8">
          Are You Ready to Unlock Your Dog's Full Potential?
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover effective dog training techniques that make learning fun and
          easy for both you and your furry friend.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3
rounded-full text-lg transition-all">
          Schedule a Free Consultation
        </button>
      </section>
      {/* <!-- Featured Posts --> */}
      <section class="bg-white container mx-auto px-4 py-12">
        <h2 class="text-3xl font-bold mb-8">Featured Posts</h2>

        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* <!-- In-Person Class --> */}
          <div class="bg-gray-50 rounded-lg overflow-hidden">
            <div class="bg-cover bg-blue-100 aspect-square rounded-lg mb-6">
              <img
                src="https://via.placeholder.com/300x450"
                alt="Dog Training
Class"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-bold mb-4">In-Person Dog Training Class</h3>
            <p class="text-gray-600 mb-4">
              Learn basic commands and leash training in person. Perfect for
              those who prefer hands-on experience.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2
rounded-full transition-all">
              Learn More
            </button>
          </div>

          {/* <!-- Virtual Workshop --> */}
          <div class="bg-gray-50 rounded-lg overflow-hidden">
            <div class="bg-cover bg-blue-100 aspect-square rounded-lg mb-6">
              <img
                src="https://via.placeholder.com/300x450"
                alt="Online Training"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-bold mb-4">
              Virtual Dog Training Workshop
            </h3>
            <p class="text-gray-600 mb-4">
              Learn advanced techniques from the comfort of your home with
              recorded sessions and Q&A.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2
rounded-full transition-all">
              Register Now
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Recent Posts --> */}
      <section class="container mx-auto px-4 py-12">
        <h2 class="text-3xl font-bold mb-8">Recent Posts</h2>

        <div class="grid md:grid-cols-2 gap-6">
          {/* <!-- Post 1 --> */}
          <article class="bg-gray-50 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-blue-500">March 15, 2024</span>
              <h3 class="text-xl font-bold">Introducing New Training Method</h3>
              <p class="text-gray-600">
                Discover our revolutionary approach to dog training that ensures
                your furry friend thrives.
              </p>
            </div>
          </article>

          {/* <!-- Post 2 --> */}
          <article class="bg-gray-50 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-blue-500">March 10, 2024</span>
              <h3 class="text-xl font-bold">Potty Training Made Easy</h3>
              <p class="text-gray-600">
                A step-by-step guide to training your dog to go potty without
                frustration for you or your family.
              </p>
            </div>
          </article>

          {/* <!-- Post 3 --> */}
          <article class="bg-gray-50 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm text-blue-500">March 5, 2024</span>
              <h3 class="text-xl font-bold">Healthy Dog Diet</h3>
              <p class="text-gray-600">
                What your dog needs to maintain a healthy weight and strong
                muscles.
              </p>
            </div>
          </article>
        </div>
      </section>
      {/* <!-- Footer --> */}
      <footer class="bg-gray-50 container mx-auto px-4 py-8">
        <div class="text-center text-gray-600">
          © 2024 Leash & Learn - Dog Training Made Easy. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default BlogHomepage
