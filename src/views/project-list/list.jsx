import React from 'react'

export const List = (props) => {
    const { list, users } = props

    return <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Principal</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr key={project.personId}>
                    <td>{project.name}</td>
                    <td>{users.find(user => user.id === project.personId)?.name}</td>
                </tr>)
            }
        </tbody>
    </table>
}