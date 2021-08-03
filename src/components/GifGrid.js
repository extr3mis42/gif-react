import React from 'react'
import { useFetchGif } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem'

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGif(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    )
}

{/* images.map(img =>(
                         <li key = { img.id }> { img.title }</li>
                     ))

                     es lo mismo
                     images.map(({id,title}) => (
                         <li key={id}> { title }</li>
                     ))  */}
