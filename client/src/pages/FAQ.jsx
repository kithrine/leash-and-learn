import { Link } from "react-router";
import Footer from "../components/footers/Footer";

const FAQ = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="learn flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-8 h-8 text-purple-300 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What types of dog training services do you offer?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Leash & Learn offers a comprehensive range of dog training services including Basic Obedience, Behavior Modification, Puppy Socialization, Agility, Advanced Obedience, and Service & Therapy Dog Training.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="learn flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-8 h-8 text-purple-300 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  How long do Basic Obedience training sessions last?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Basic Obedience group training sessions typically last 2 hours. This is to ensure that each participant gets individualized attention from our experienced trainers, and allows for time to practice each new command learned.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="learn flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-8 h-8 text-purple-300 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Can you help dogs with aggression issues?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Yes, Leash & Learn specializes in Behavior Modification for dogs with aggression issues. Our certified trainers work closely with you and your dog to address and manage aggressive behaviors safely and effectively.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="learn flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-8 h-8 text-purple-300 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What is included in Puppy Socialization?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Puppy Socialization includes exposure to various environments, people, and other dogs to help your puppy develop into a well-adjusted adult dog. Our sessions are designed to be fun and engaging for your puppy.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="learn flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-8 h-8 text-purple-300 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Do you offer Agility training for dogs?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Absolutely! We offer Agility training to help your dog develop physical and mental skills through obstacle courses. Our trainers will guide your dog through the process of learning and mastering agility tasks.
                </p>
              </div>
              
            </div>
            <div>
              
              <div className="mb-10">
                <h3 className="learn flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-8 h-8 text-purple-300 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  How long does Advanced Obedience training take?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Advanced Obedience training can vary in duration, but typically it takes several weeks to months to complete, depending on the dog's learning pace and the complexity of the commands.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="learn flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-8 h-8 text-purple-300 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What is Service & Therapy Dog Training?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Service & Therapy Dog Training is tailored for dogs that will assist individuals with disabilities or provide comfort and support in therapeutic settings. Our trainers work with dogs to ensure they are well-prepared for their important roles.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="learn flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-8 h-8 text-purple-300 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What are the qualifications of your trainers?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Our trainers are certified professionals with extensive experience in dog training and behavior. They are committed to providing the highest quality training services.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="learn flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-8 h-8 text-purple-300 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  How do I enroll my dog in your training program?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Enrollment is simple! Create an account, fill out the <Link to="/" className="underline text-stone-600 font-semibold hover:no-underline">enrollment form</Link>, and choose the training program that best suits your dog's needs. We will then contact you to schedule an initial assessment.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="learn flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-8 h-8 text-purple-300 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What are the benefits of dog training?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                Dog training offers numerous benefits, including improved behavior, better communication between you and your dog, increased safety, and a stronger bond. It also enhances your dog's quality of life and can prevent behavioral issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
