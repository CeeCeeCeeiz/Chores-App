import React from 'react';

const chores = [
    {
        name: 'Clean the kitchen',
        description: 'Wash the dishes, wipe the counters, and sweep the floor',
        icon: 'https://images.unsplash.com/photo-1551029504-021a5c0f8e9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        frequency: 'Daily',
        assignedTo: 'Calvin Hawkins',
        assignedToImage: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        price: '$15.00'
    },
    {
        name: 'Clean the bathroom',
        description: 'Clean the toilet, sink, and shower',
        icon: 'https://images.unsplash.com/photo-1551029504-021a5c0f8e9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        frequency: 'Daily',
        assignedTo: 'Calvin Hawkins',
        assignedToImage: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        price: '$25.00'
    },
    {
        name: 'Clean the living room',
        description: 'Vacuum the floor, dust the shelves, and wipe the tables',
        icon: 'https://images.unsplash.com/photo-1551029504-021a5c0f8e9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        frequency: 'Daily',
        assignedTo: 'Calvin Hawkins',
        assignedToImage: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        price: '$5.00'
    }
]

function ChoresPage() {
    return (
        <div className='pd-6'>
            <h1>Chores Page</h1>

            <ul role="list" className="divide-y divide-gray-100">
                {chores.map((chore) => (
                    <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                    </svg>

                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{chore.name}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{chore.description}</p>
                    </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{chore.frequency}</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">Reward: {chore.price}</p>
                    </div>
                </li>
                ))}

            
            </ul>
        </div>
    )
}

export default ChoresPage