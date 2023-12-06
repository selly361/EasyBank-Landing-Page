import React from 'react'

function Articles() {
  return (
    <section className='articles-section'>
      <h2>Latest Articles</h2>

      <div className='articles-section__articles-container'>
        <div className='articles-section__articles-container__card'>
          <img
            src='images/image-currency.jpg'
            alt=''
            className='articles-section__articles-container__card__img'
          />
          <article className='articles-section__articles-container__card__card-content'>
            <h4 className='articles-section__articles-container__card__card-content_author'>
              By Claire Robinson
            </h4>
            <a className='articles-section__articles-container__card__card-content_link' href='#'>Receive money in any currency with no fees</a>
            <p className='paragraphS'>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </article>
        </div>

        <div className='articles-section__articles-container__card'>
          <img
            src='images/image-restaurant.jpg'
            alt=''
            className='articles-section__articles-container__card__img'
          />
          <article className='articles-section__articles-container__card__card-content'>
            <h4 className='articles-section__articles-container__card__card-content_author'>
              By Wilson Hutton
            </h4>
            <a className='articles-section__articles-container__card__card-content_link' href='#'>Treat yourself without worrying about money</a>
            <p className='paragraphS'>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </article>
        </div>

        <div className='articles-section__articles-container__card'>
          <img
            src='images/image-plane.jpg'
            alt=''
            className='articles-section__articles-container__card__img'
          />
          <article className='articles-section__articles-container__card__card-content'>
            <h4 className='articles-section__articles-container__card__card-content_author'>
              By Wilson Hutton
            </h4>
            <a className='articles-section__articles-container__card__card-content_link' href='#'>Take your Easybank card wherever you go</a>
            <p className='paragraphS'>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </article>
        </div>

        <div className='articles-section__articles-container__card'>
          <img
            src='images/image-confetti.jpg'
            alt=''
            className='articles-section__articles-container__card__img'
          />
          <article className='articles-section__articles-container__card__card-content'>
            <h4 className='articles-section__articles-container__card__card-content_author'>
              By Claire Robinson
            </h4>
            <a className='articles-section__articles-container__card__card-content_link' href='#'>Our invite-only Beta accounts are now live!</a>
            <p className='paragraphS'>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Articles
