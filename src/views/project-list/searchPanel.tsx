import React, { useEffect, useState } from "react"

export interface User {
    id: string,
    name: string
}

interface Iprops {
    users: User[],
    param: {
        name: string,
        personId : string
    },
    setParam: (param: Iprops['param']) => void
}

export const SearchPanel = ({ param, setParam, users }: Iprops) => {


    return <form >
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })} />
            <select value={param.personId} onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            })} >
                <option value="">Admin</option>
                {
                    users.map( user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}