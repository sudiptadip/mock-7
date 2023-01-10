import React from 'react'
import { useSelector } from 'react-redux'
import Report from '../Pages/Report'

export default function PrivateRoute2({re}) {
    const data = useSelector((e)=> e.Auth_Reducer)

    if(data.token === ''){
        return re
    }else{
        return <Report />
    }
}
