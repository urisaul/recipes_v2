import { useEffect, useState } from 'react'

export const useFetch = (url) => {
   const [isLoading, setIsLoading] = useState(true)
   const [isError, setIsError] = useState(false)
   const [data, setData] = useState(null)

   useEffect(() => {
      fetchData(url)
   }, [])

   const fetchData = async (url) => {
      try {
         const response = await fetch(url)
         if (!response.ok) {
            setIsError(true)
            return
         }
         const jsonResponse = await response.json()
         setData(jsonResponse)
      } catch (error) {
         setIsError(true)
      }
      setIsLoading(false)
   }
   return { isLoading, isError, data, }
}
