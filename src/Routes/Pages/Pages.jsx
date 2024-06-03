import { useQuery } from 'react-query';
import axios from 'axios';

import Button from '../../components/Button/Button';
import './pages.css';
import { useState } from 'react';

const getFoodCategories = async () => {
  const resp = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    return resp.data.categories;
};


   function SearchBar({ userText, onUserTextChange }) {
    return (
      <form>
        <input type="text" 
        placeholder='Search Meals' 
        value={userText}
        onChange={(e) => onUserTextChange(e.target.value)}
        />
      </form>
    );
  }


const DisplayFoodCaregories = () => {
  const [userText, setUserText] = useState('');
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery("getFoodCategories", getFoodCategories);
  if (isLoading) return <p>Fetching your meals...</p>
  if (error) return <p>An console.error occurred: {error.message}</p>

  const filteredCategories = categories.filter(category => 
    category.strCategory.toLowerCase().includes(userText.toLowerCase())
    );



    return (
    <section> 
       <SearchBar 
       userText={userText}
       onUserTextChange={setUserText}
       />
    <div className='page'>
      {filteredCategories.map((category) => (
        
        <Button 
        key={category.idCategory} 
        buttonText={category.strCategory}
        className="button"
        />

      ))}
    </div>
      </section>
  )
};


export default DisplayFoodCaregories;