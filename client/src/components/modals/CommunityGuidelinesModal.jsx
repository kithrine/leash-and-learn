import React from 'react'

const CommunityGuidelinesModal = ({setShowCommGuideModal}) => {
  return (
    <>
      <div
        id="info-popup"
        tabindex="-1"
        class=" overflow-y-auto overflow-x-hidden fixed top-0 mt-26 z-20 w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-7xl h-full md:h-auto justify-self-center mb-12 font-instrument">
          <div class="relative p-4 bg-white rounded-lg shadow dark:bg-neutral-800 md:p-8 drop-shadow-xl drop-shadow-neutral-400 dark:drop-shadow-black animate__animated animate__fadeInLeft">
            <div class="mb-4 text-sm font-light text-neutral-700 dark:text-neutral-200">
              <h3 class="mb-3 text-2xl font-bold text-neutral-900 dark:text-white tracking-wider">
                Community Guidelines for Leash & Learn Blog
              </h3>
              <div className='text-base'>
              <p>
                <span className="font-semibold"> 1. Welcome to Leash & Learn: </span>We are thrilled to have you as part of our growing community at Leash & Learn! Our blog is dedicated to providing valuable insights, tips, and resources for dog training enthusiasts. Here are some guidelines to help us maintain a positive and engaging environment. 
              </p>

              <p>  
              <span className="font-semibold">2. Respect and Courtesy:</span> Please treat others with respect and kindness. Avoid personal attacks or negative language that could harm feelings or be misleading. Your comments should align with our values of positivity and supportiveness. 
              </p>

              <p>  
              <span className="font-semibold">3. Quality Content Interaction:</span> Engage thoughtfully by participating in meaningful discussions related to dog behavior, training techniques, products, or services. If you're sharing your opinion, consider it as part of a larger conversation rather than an unsolicited testimonial meant for promotion. 
              </p>

              <p>  
              <span className="font-semibold">4. Promote Positivity:</span> We encourage comments that are constructive and positive. Share tips, success stories, and helpful insights to foster a supportive community atmosphere. 
              </p>

              <p className="font-semibold">5. Content Policies:</p> 
              <p className='indent-5'>- Behavior & Training: Keep discussions relevant to dog behavior, training methods, or the products/services we offer.</p>
              <p className='indent-5'>- Product/Service Reviews: If you're sharing reviews, ensure they are honest and based on your genuine experience with our offerings. 
              </p>

              <p>  
              <span className="font-semibold">6. No Spamming:</span> Please avoid posting links to external websites unrelated to our blog content. Spammy posts or commercial offers will be removed at our discretion. 
              </p>

              <p>  
              <span className="font-semibold">7. Factual and Clear Communication:</span> Provide thoughtful and constructive feedback. Avoid using jargon or being overly vague, as it can hinder meaningful discussions.
              </p>

              <p>  
              <span className="font-semibold">8. Appropriate Language:</span> Maintain a professional yet friendly tone in all comments. Avoid slang, abbreviations, or informal language that might be confusing or inappropriate.
              </p>

              <p>  
              <span className="font-semibold">9. Contributor Testimonials:</span> If you'd like to share your experience with our training methods, we encourage it as long as it’s done respectfully and aligns with our content focus. However, please avoid negative or overly critical remarks.
              </p>

              <p>  
                <span className="font-semibold">10. Frequency of Interaction:</span> We aim for a balanced discussion pace—responses will be posted once daily during business hours to keep interactions professional and timely.
              </p>

              <p>  
              <span className="font-semibold">11. Avoid Self-Promotion:</span> Do not share links to your personal websites, blogs, or social media profiles except when directly related to a product or service discussion.
              </p>

              <p>  
              <span className="font-semibold">12. No Creation of Fake Accounts:</span>
              Using multiple identities or spamming for promotional purposes will result in account suspension. We encourage genuine and respectful interactions from all community members.
              </p>

              <p className='pt-4'>
              By adhering to these guidelines, we can create a welcoming environment where everyone feels valued and heard. Thank you for joining us at Leash & Learn! If you have any questions, feel free to reach out in our comment section or on our Contact Us page.
              </p>
              </div>
            </div>
            <div class="flex items-center pt-0 space-y-4 sm:flex sm:space-y-0 justify-end">
              {/* <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Learn more about privacy
              </a> */}
              <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                <button
                onClick={() => setShowCommGuideModal(false)}
                  id="close-modal"
                  type="button"
                  class="py-2 px-4 w-full text-sm font-medium text-neutral-500 bg-white rounded-lg border border-neutral-200 sm:w-auto hover:bg-neutral-100 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:text-neutral-900 focus:z-10 dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-500 dark:hover:text-white dark:hover:bg-neutral-600 dark:focus:ring-neutral-600 cursor-pointer transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunityGuidelinesModal

// **Community Guidelines for Leash & Learn Blog**

// 1. **Welcome to Leash & Learn**
//    We are thrilled to have you as part of our growing community at Leash & Learn! Our blog
// is dedicated to providing valuable insights, tips, and resources for dog training
// enthusiasts. Here are some guidelines to help us maintain a positive and engaging
// environment.

// 2. **Respect and Courtesy**
//    Please treat others with respect and kindness. Avoid personal attacks or negative language that could harm feelings or be misleading. Your comments should align with our values of positivity and supportiveness.

// 3. **Quality Content Interaction**
//    Engage thoughtfully by participating in meaningful discussions related to dog behavior, training techniques, products, or services. If you're sharing your opinion, consider it as part of a larger conversation rather than an unsolicited testimonial meant for promotion.

// 4. **Promote Positivity**
//    We encourage comments that are constructive and positive. Share tips, success stories, and helpful insights to foster a supportive community atmosphere.

// 5. **Content Policies**
//    - *Behavior & Training*: Keep discussions relevant to dog behavior, training methods, or the products/services we offer.
//    - *Product/Service Reviews*: If you're sharing reviews, ensure they are honest and based on your genuine experience with our offerings.

// 6. **No Spamming**
//    Please avoid posting links to external websites unrelated to our blog content. Spammy posts or commercial offers will be removed at our discretion.

// 7. **Factual and Clear Communication**
//    Provide thoughtful and constructive feedback. Avoid using jargon or being overly vague, as it can hinder meaningful discussions.

// 8. **Appropriate Language**
//    Maintain a professional yet friendly tone in all comments. Avoid slang, abbreviations, or informal language that might be confusing or inappropriate.

// 9. **Contributor Testimonials**
//    If you'd like to share your experience with our training methods, we encourage it as long as it’s done respectfully and aligns with our content focus. However, please avoid negative or overly critical remarks.

// 10. **Frequency of Interaction**
//     We aim for a balanced discussion pace—responses will be posted once daily during business hours to keep interactions professional and timely.

// 11. **Avoid Self-Promotion**
//     Do not share links to your personal websites, blogs, or social media profiles except when directly related to a product or service discussion.

// 12. **No Creation of Fake Accounts**
//     Using multiple identities or spamming for promotional purposes will result in account suspension. We encourage genuine and respectful interactions from all community members.

// By adhering to these guidelines, we can create a welcoming environment where everyone feels valued and heard. Thank you for joining us at Leash & Learn! If you have any questions, feel free to reach out in our comment section."