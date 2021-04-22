import React, { useState, useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import { SearchPanel } from './searchPanel'
import { List } from './list'
import { cleanObject, useMount, useDebounce } from 'utils'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectList = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    const debounceParam = useDebounce(param, 500)

    useEffect(() => {
        axios.get(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then((response) => {
            if (response.statusText === "OK") {setList(response.data)
            }
        })




        
    }, [debounceParam])

    useMount(() => {
        axios.get(`${apiUrl}/users`).then((response) => {
            if (response.statusText === "OK") {
                setUsers(response.data)
            }
        })
    })

    return <div>
        <SearchPanel param={param} setParam={setParam} users={users} ></SearchPanel>
        <List users={users} list={list}></List>
    </div>
}