import React from 'react'
import { User } from './searchPanel'

interface List {
    id: string,
    name: string,
    personId: string,
    organization: string,
    create: string
}

interface Iprops {
    list: List[],
    users: User[]
}

export const List = ({ list, users }: Iprops) => {

    return <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Principal</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{users.find(user => user.id === project.personId)?.name}</td>
                </tr>)
            }
        </tbody>
    </table>
}