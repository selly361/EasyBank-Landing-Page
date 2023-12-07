import React from 'react'

function HeroSection() {
  return (
    <section className='hero-section'>
      <article className='hero-section__article'>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="button--primary hero-section__article__button">Request Invite</button>
      </article>
      <img className='hero-section__image' src='images/image-mockups.png' alt='' />
    </section>
  )
}

export default HeroSection
