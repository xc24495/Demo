import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { SearchPanel } from './searchPanel'
import { List } from './list'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectList = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`${apiUrl}/projects`).then((response) => {
            if (response.statusText === "OK") {
                setList(response.data)
            }
        })
    }, [param])

    useEffect(() => {
        axios.get(`${apiUrl}/users`).then((response) => {
            if (response.statusText === "OK") {
                setUsers(response.data)
            }
        })
    }, [])

    return <div>
        <SearchPanel param={param} setParam={setParam} users={users} ></SearchPanel>
        <List users={users} list={list}></List>
    </div>
}