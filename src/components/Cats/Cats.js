import React from 'react';
import {useForm} from "react-hook-form";

const Cats = ({stateDispatch}) => {

    const {register, handleSubmit, reset} = useForm()

    const [{cats}, dispatch] = stateDispatch;

    const saveCat = (cat)=>{
        dispatch({type: 'ADD_CAT', payload:cat})
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveCat)}>
                <input type="text" placeholder={'cat'} {...register('name')}/>
                <button>Save cat</button>

            </form>
            {cats.map(cat=><div key={cat.id}>{cat.name} <button onClick={()=>dispatch({type:'DEL_CAT', payload: cat.id})}>delete</button></div> )}
        </div>
    );
};

export default Cats;