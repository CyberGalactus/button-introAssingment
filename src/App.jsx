import React, { useState } from 'react'
import lofoten from './assets/lofoten.webp'
import lofoten2 from './assets/lofoten2.jpeg'
import webdesign from './assets/webdesign.webp'
import './App.css'

function getActiveClassName (activeArticle, currentArticle) {
  if (activeArticle ===  currentArticle) {
    return 'show-article'
  } else {
    return 'hide-article'
  }
}


function App() {
  const [activeArticle, setActiveArticle] = useState('First Article')

  return (
    <>
    <div className="navigation-menu">
        <button className={activeArticle === 'First Article' ? 'active' : ''} onClick={() => setActiveArticle('First Article')}>First Article</button>
        <button className={activeArticle === '2nd Article' ? 'active' : ''} onClick={() => setActiveArticle('2nd Article')}>2nd Article</button>
        <button className={activeArticle === '3rd Article' ? 'active' : ''} onClick={() => setActiveArticle('3rd Article')}>3rd Article</button>
      </div>
      <article className={`active ${getActiveClassName(activeArticle, 'First Article')}`} >
        <h1>ABOUT ME</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in 
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including 
          versions of Lorem Ipsum.</p>
        <img className='lofoten' src={lofoten} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque neque nunc, lacinia non sollicitudin ut, congue lobortis nibh. 
          Vivamus interdum elit ac consequat luctus. Etiam a turpis in turpis sagittis 
          dignissim ornare ut tellus. Mauris et accumsan elit. Fusce scelerisque leo a erat 
          tristique, in ornare mauris mollis. Donec hendrerit turpis eleifend vulputate eleifend. 
          Maecenas pretium quis purus vitae luctus.</p>
      </article>
      <article className={`active ${getActiveClassName(activeArticle, '2nd Article')}`} >
        <h1>WEBSITE</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque 
          neque nunc, lacinia non sollicitudin ut, congue lobortis nibh. 
          Vivamus interdum elit ac consequat luctus. Etiam a turpis in 
          turpis sagittis dignissim ornare ut tellus. Mauris et accumsan elit. 
          Fusce scelerisque leo a erat tristique, in ornare mauris mollis. Donec 
          hendrerit turpis eleifend vulputate eleifend. 
          Maecenas pretium quis purus vitae luctus.</p>
        <img className='lofoten' src={lofoten2} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque neque nunc, lacinia non sollicitudin ut, congue lobortis nibh. 
          Vivamus interdum elit ac consequat luctus. Etiam a turpis in turpis 
          sagittis dignissim ornare ut tellus. Mauris et accumsan elit. Fusce 
          scelerisque leo a erat tristique, in ornare mauris mollis. Donec 
          hendrerit turpis eleifend vulputate eleifend. 
          Maecenas pretium quis purus vitae luctus.</p>
      </article>
      <article className={`active ${getActiveClassName(activeArticle, '3rd Article')}`} >
        <h1>STYLING</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in 
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including 
          versions of Lorem Ipsum.</p>
        <img className='webdesign' src={webdesign} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque neque nunc, lacinia non sollicitudin ut, congue lobortis nibh. 
          Vivamus interdum elit ac consequat luctus. Etiam a turpis in turpis sagittis 
          dignissim ornare ut tellus. Mauris et accumsan elit. Fusce scelerisque leo a erat 
          tristique, in ornare mauris mollis. Donec hendrerit turpis eleifend vulputate eleifend. 
          Maecenas pretium quis purus vitae luctus.</p>
      </article>


    </>
  )
}

export default App
