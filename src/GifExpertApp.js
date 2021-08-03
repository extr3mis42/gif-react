import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'DB', 'Bk'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {

    //  setCategories( cats => [ ...cats, 'Pokemon']); //crep que guarda lo de setCategorias en la variable cats y despues hace el insert 

    //  setCategories([...categories,'Pokemon']);     agrega al final
    //  //setCategories(['Pokemon',...categories]);   agrega al principio
    //  // setCategories(categories.push('Pokemon')); no jala :,v

    // }

    return (
        <div>
            <h2>GifExportApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick = { handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
