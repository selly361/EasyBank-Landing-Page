import {
  OnlineBankingIcon,
  BudgetingIcon,
  OnboardingIcon,
  ApiIcon,
} from 'Icons'
import React from 'react'

function KeyFeatures() {
  return (
    <section className='key-features-container'>
      <div className='key-features-container__intro-container'>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub.
          <br /> Control your finances like never before.
        </p>
      </div>
      <div className='key-features-container__key-features'>
        <div className='key-features-container__key-features__key-feature'>
          <OnlineBankingIcon />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className='key-features-container__key-features__key-feature'>
          <BudgetingIcon />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className='key-features-container__key-features__key-feature'>
          <OnboardingIcon />
          <h3>Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className='key-features-container__key-features__key-feature'>
          <ApiIcon />

          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures
