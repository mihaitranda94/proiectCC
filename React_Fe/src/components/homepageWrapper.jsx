import React, { useState, useEffect, Fragment, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import TrendingMovieList from './trendingMovieList'
import HomepageHeadingBox from './homepageHeadingBox'

export default function HomepageWrapper() {
  const [data, setData] = useState(null)
  const [dataIsReady, setDataIsReady] = useState(false)
  const { lang } = useParams()

  const getTmdbApi = useCallback(async () => {
    try {
      const response = await fetch('http://192.168.149.128:5000/api/trending')
      const json = await response.json()
      setData(json)
      console.info(json)
      setDataIsReady(true)
    } catch (e) {
      console.error(e)
    }
  }, [lang])

  useEffect(() => {
    getTmdbApi()
  }, [lang, getTmdbApi])

  return (
    <Fragment>
      <HomepageHeadingBox lang={lang} />
      <TrendingMovieList lang={lang} data={data} dataIsReady={dataIsReady} />
    </Fragment>
  )
}
