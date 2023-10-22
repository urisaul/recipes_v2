import { useFetch } from '../hooks/useFetch';
const URL = 'https://api.publicapis.org/entries'
export const About = () => {
   const { isLoading, isError, data } = useFetch(URL);
   console.log(data, isLoading, isError);
   if (isLoading) {
      return <p>Loading...</p>;
   }
   return (
      <div>About</div>
   )
}
