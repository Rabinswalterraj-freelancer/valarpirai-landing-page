import React from 'react'

export default function Terms() {
  return (
    <main className='brand-container py-20'>
       <div className=" p-6 bg-white">
            <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
            <p className="mb-4">
                Welcome to Valarpirai Electronics! These terms and conditions outline the rules and regulations for the use of our website, located at{' '}
                <a href="https://valarpiraielectronics.com" className="text-blue-600 hover:underline">
                    valarpiraielectronics.com
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p className="mb-4">
                By accessing this website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms, you must not use our website.
            </p>

            <h2 className="text-2xl font-semibold mb-2">2. Modifications</h2>
            <p className="mb-4">
                We may revise these terms and conditions from time to time. The revised terms will apply to the use of our website from the date of publication of the revised terms on our website.
            </p>

            <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
            <ul className="list-disc list-inside mb-4">
                <li className="mb-2">You must ensure that any information you provide on this website is accurate and complete.</li>
                <li className="mb-2">You must not use our website in any way that may cause damage to the website or impairment of the availability or accessibility of the website.</li>
                <li>You must not use this website for any illegal or unauthorized purpose.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">4. Limitation of Liability</h2>
            <p className="mb-4">
                We will not be liable for any loss or damage arising from your use of our website or any services provided through our website.
            </p>

            <h2 className="text-2xl font-semibold mb-2">5. Governing Law</h2>
            <p className="mb-4">
                These terms and conditions will be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
            </p>

            <h2 className="text-2xl font-semibold mb-2">6. Contact Information</h2>
            <p>
                If you have any questions about these terms and conditions, please contact us at{' '}
                <a href="mailto:support@valarpiraielectronics.com" className="text-blue-600 hover:underline">
                    support@valarpiraielectronics.com
                </a>.
            </p>
        </div>

    </main>
  )
}
