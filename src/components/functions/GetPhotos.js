import axios from 'axios'
import { useEffect, useState } from 'react'

function GetPhotos(page, query) {
    const [data, setData] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${page}`
        })
            .then(result => {
                setData(prevData => {
                    return prevData.concat(result.data.map(item => item))
                })
            })
    }, [page])


    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=${page}&query=${query}`
        })
            .then(result => {
                setSearch(prevData => {
                    return prevData.concat(result.data.results.map(item => item))
                })
            })
    }, [query, page])

    useEffect(() => {
        setSearch([])
    }, [query])

    let result
    if (query.trim().length > 0) {
        result = search
    } else {
        result = data
    }

    return (
        {
            result
        }
    )
}

export default GetPhotos
