import React from 'react';
import { useState, useEffect } from 'react';

import {getSuper} from '../services/super-api';
import SuperList from '../components/SuperList/SuperList';

function SearchPage(props) {

    const [formState, setFormState] = useState({
        search: ''
    })
    const [superData, setSuperData] = useState([]);

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function search(event) {
        event.preventDefault();
        const data = await getSuper(formState.search);

        setSuperData(data.data.results)
        setFormState({
            search: ''
        })
    }

    useEffect(() => {
        getSuper();
      }, []);

      console.log(superData)

    return (
        <div className="SearchPage">
            <h1>search</h1>
            <form onSubmit={search}>
            <div className="transbox">
                    <input 
                    name="search" 
                    type="text" 
                    className="form-control" 
                    value={formState.search} 
                    placeholder="" 
                    onChange={handleChange} 
                    />
                    <input  
                    type="submit" 
                    value="" 
                    className="btn-search" />
                </div>

            </form>
            
            {superData && superData.map((data, idx) => (
                    <SuperList data={data} />
                ))}
        </div>
    );
}

export default SearchPage;