import Prismic from 'prismic-javascript';
import Card from '../../components/Blog/Card/index';
import { useState } from 'react';
import BlogHeader from '../../components/Blog/Header';
import BlogFooter from '../../components/Blog/Footer';

export async function getServerSideProps({ res }) {
  const client = Prismic.client(process.env.PRISMIC_CLIENT);
  const posts = await client.query(Prismic.Predicates.at('document.type', 'blog_post'));

  return {
    props: {
      posts: posts.results,
    },
  }
}

const Blog = (props) => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const searchItems = (searchValue) => {
    setSearchInput(searchValue.toLowerCase());
    if (searchInput !== '') {
      const filteredData = props.posts.filter((post) => {
        return post.data.title[0].text.toLowerCase().includes(searchInput);
      })
      setFilteredResults(filteredData);
    }
  }

  function renderFilterCards() {
    return filteredResults.map((post) => {
      return <Card
        key={post.id}
        categoria={post.data.categoria}
        title={post.data.title[0].text}
        resumo={post.data.resumo[0].text}
        postId={post.id}
        data={post.data.release_date}
      />
    })
  }

  function renderAllCards() {
    return props.posts.map((post) => {
      return <Card
        key={post.id}
        categoria={post.data.categoria}
        title={post.data.title[0].text}
        resumo={post.data.resumo[0].text}
        postId={post.id}
        data={post.data.release_date}
      />
    })
  }

  return (
    <>
      <BlogHeader />

      <div className='px-3'>
        <div className='py-3 md:py-8 flex flex-col md:flex-nowrap'>

          <div className='md:px-8'>
            <input
              className={`
                shadow border rounded p-3 w-full text-gray-700 
                focus:outline-none focus:shadow-outline
              `}
              id='pesquisa'
              type='text'
              placeholder='Pesquisa'
              onChange={(e) => searchItems(e.target.value)}
            />
          </div>

          <h1 className='flex px-3 font-bold text-3xl md:text-4xl justify-center items-center md:items-start py-8'>Atualizações</h1>
          <p className='flex px-3 justify-center items-center text-center text-gray-500'>
            Todas as útimas versões disponibilizadas dos sistemas Somasys, direto da equipe.{' '}
          </p>
        </div>

        <div className='divide-y-2'>
          {searchInput.length > 1 ? renderFilterCards() : renderAllCards()}
        </div>
      </div>

      <BlogFooter />
    </>
  )
}

export default Blog;
