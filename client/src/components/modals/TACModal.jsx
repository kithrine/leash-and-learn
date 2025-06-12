import React from "react"

const TACModal = ({ setShowTACModal }) => {
  return (
    <>
      <div
        id="info-popup"
        tabindex="-1"
        class=" overflow-y-auto overflow-x-hidden fixed top-0 mt-22 z-20 w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-6xl h-full md:h-auto justify-self-center mb-12">
          <div class="relative p-4 bg-white rounded-lg shadow dark:bg-neutral-800 md:p-8 drop-shadow-2xl transition ease-in-out duration-200">
            <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-200">
              <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Terms and Conditions
              </h3>
              <p>
                <span className="font-semibold">1. Service Description:</span> Leash & Learn provides online and
                in-person dog training services to customers who own dogs and
                seek professional assistance in improving their pets' behavior,
                obedience, and overall wellbeing. The use of our platform,
                website, and related services (collectively "Leash & Learn
                Services") is subject to this Terms and Conditions Agreement
                (the "Agreement"). By using the Leash & Learn Services, you
                agree to be bound by this Agreement. 
              </p>

              <p>  
              <span className="font-semibold">2. Account
                Registration:</span> To access and use the Leash & Learn Services,
                you must register for an account and provide accurate, current,
                and complete information about yourself and your dog(s) as
                prompted during the registration process. If we discover or have
                reason to believe that any of the information provided by you is
                false, inaccurate, or outdated, we may terminate your account
                immediately. 
              </p>

              <p>  
              <span className="font-semibold">3. Account Security:</span> You are responsible for
                maintaining the confidentiality of your Leash & Learn account
                and password, and for all activities that occur under your
                account. You agree to notify us immediately if you suspect any
                unauthorized use of your account or any other breach of security
                related to the Leash & Learn Services. We will not be liable for
                any loss or damage arising from your failure to comply with this
                provision. 
              </p>

              <p>  
              <span className="font-semibold">4. Payment:</span> When you register for a subscription,
                you agree to pay the applicable fees and charges (collectively
                "Fees") as stated during the registration process. You are
                responsible for providing us with valid and up-to-date billing
                information. If we are unable to process your payment, we may
                terminate or suspend your account without notice. 
              </p>

              <p>  
              <span className="font-semibold">5. Training
                Services:</span> Leash & Learn training services are provided on an
                "as is" basis, and we make no guarantees or warranties regarding
                the outcomes or results of our training programs. The
                effectiveness of our training methods may vary depending on
                various factors, including the dog's temperament, behavior, and
                response to training. 
              </p>

              <p>  
              <span className="font-semibold">6. Limitation of Liability:</span> We will
                not be liable for any indirect, incidental, special,
                consequential, or exemplary damages arising from your use of the
                Leash & Learn Services or in connection with our training
                programs. Our total liability under this Agreement is limited to
                the amount you have paid us for the services provided during the
                previous 12 months. 
              </p>

              <p>  
              <span className="font-semibold">7. Indemnification:</span> You agree to
                indemnify, defend, and hold harmless Leash & Learn, its
                officers, directors, employees, agents, and affiliates from any
                claims, liabilities, damages, expenses, or costs arising out of
                your use of the Leash & Learn Services, violation of this
                Agreement, or infringement of any intellectual property rights
                by you or your dog(s). 
              </p>

              <p>  
              <span className="font-semibold">8. Termination:</span> We may terminate or
                suspend your account and access to the Leash & Learn Services at
                any time without notice for any reason, including a violation of
                this Agreement or for convenience. Upon termination, all of your
                content will be removed from our platform, except for any backup
                copies we retain in accordance with our data retention policy.
              </p>

              <p>  
              <span className="font-semibold">9. Modification:</span> We reserve the right to modify this
                Agreement at any time, effective upon posting on our website.
                Your continued use of the Leash & Learn Services after the
                effective date of any changes constitutes your acceptance of the
                updated Agreement. 
              </p>

              <p>  
                <span className="font-semibold">10. Governing Law:</span> This Agreement shall
                be governed by and construed in accordance with the laws of the
                state where our company is incorporated, without regard to its
                conflict of laws principles. Any disputes arising out of or
                related to this Agreement will be resolved through binding
                arbitration in [arbitration location], in accordance with the
                rules of the American Arbitration Association. 
              </p>

              <p>  
              <span className="font-semibold">11. Entire Agreement:</span> This Agreement constitutes the entire agreement
                between you and Leash & Learn regarding your use of the Leash &
                Learn Services, superseding any prior or contemporaneous
                agreements, communications, and proposals, whether oral or
                written. Any amendments to this Agreement must be in writing and
                signed by both parties to be valid. 
              </p>

              <p>  
              <span className="font-semibold">12. Contact Information: </span>
                 If you have any questions about this Agreement or the Leash &
                Learn Services, please contact us at [contact information]. By
                clicking the "I agree" button or proceeding with your
                registration, you confirm that you have read, understood, and
                agree to be bound by the terms of this Agreement.
              </p>
            </div>
            <div class="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
              <a
                href="#"
                class="font-medium text-teal-500 dark:text-amber-400 hover:underline">
                Learn more about privacy
              </a>
              <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                <button
                onClick={() => setShowTACModal(false)}
                  id="close-modal"
                  type="button"
                  class="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-neutral-100 rounded-lg border border-gray-200 sm:w-auto hover:bg-neutral-200 focus:ring-4 focus:outline-none focus:ring-gray-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 transition ease-in-out duration-200 hover:scale-110">
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

export default TACModal
