import { useQuery } from 'react-query';
import axios from 'axios';

import Button from '../../components/Button/Button';
import './pages.css';

const getFoodCategories = async () => {
  const resp = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    return resp.data.categories;
};

const DisplayFoodCaregories = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery("postData", getFoodCategories);
  if (isLoading) return <p>Fetching your meals...</p>
  if (error) return <p>An console.error occurred: {error.message}</p>


    return (
    <section className='page'>
      {categories.map((category) => (
        <Button 
        key={category.idCategory} 
        buttonText={category.strCategory}
        className="button"
        >

        </Button>
      ))}
    </section>
  )
};


export default DisplayFoodCaregories;