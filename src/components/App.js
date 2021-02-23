import React, { useState } from 'react'
import Gallery from './Gallery'
import GetPhotos from './functions/GetPhotos'
import { DebounceInput } from 'react-debounce-input'
import InfiniteScroll from 'react-infinite-scroll-component'

function App() {

  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const { result } = GetPhotos(page, query)


  return (
    <div>
      <DebounceInput
        minLength={2}
        debounceTimeout={2000}
        className='form-control searchbox mt-1'
        type='text'
        placeholder='search'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <InfiniteScroll
        dataLength={result.length}
        next={() => setPage(page => page + 1)}
        hasMore={true}
        className='scroll'
      >
        <div className='d-flex justify-content-around flex-wrap'>
          {
            result.length > 0 && result.map(item => {
              return <Gallery key={item.id} item={item} />
            })
          }
        </div>

      </InfiniteScroll>
    </div>
  );
}

export default App;
