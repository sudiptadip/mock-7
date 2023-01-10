import React from 'react'
import { useSelector } from 'react-redux'
import Data from '../Pages/Data'

export default function PrivateRoute({re}) {
    const data = useSelector((e)=> e.Auth_Reducer)

    if(data.token === ''){
        return re
    }else{
        return <Data />
    }
}
