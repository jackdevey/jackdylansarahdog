import {PlusIcon} from "@heroicons/react/outline";
import {NavLink} from "react-router-dom";
import {Dogs} from "../dogs/Dogs";


export default function Home() {

    return(
        <>
            <Example/>
            <CammyAd/>
            <AllDogs/>
        </>
    )

}

function Example() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Jack, Dylan & Sarah Dog 🐶 <br/>
                        </h1>

                        <span className="inline-flex p-2 rounded-lg bg-indigo-800 mt-4">
                            <PlusIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            <span className="text-white pl-2 pr-2 font-medium text-white">Cammy dog Jasper 🙂</span>
                        </span>

                        <p className="mt-4 text-xl text-gray-500">
                            Jack dog called <b>Bertie</b>,
                            Dylan dog called <b>Chip</b> &
                            Sarah dog called <b>Reggie</b>
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/img/jack/1.jpg'}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/img/cammy/1.jpg'}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/img/sarah/2.jpg'}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/img/sarah/1.jpg'}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/img/dylan/2.jpg'}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/img/dylan/1.jpg'}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img
                                                    src={process.env.PUBLIC_URL + '/img/jack/2.jpg'}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CammyAd() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">🐕‍🦺🐕🐕‍🦺🐕🐕‍🦺🐕🐕‍🦺</span>
                    <span className="block text-indigo-600">Jack dog is best</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <NavLink
                            to="/jack"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                        >
                            See Jack dog
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    )
}

function AllDogs() {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">All dogs 🐊</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {Dogs.map((dog) => (
                        <div className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={process.env.PUBLIC_URL + dog.mainImage}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <NavLink to={dog.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {dog.name}
                                        </NavLink>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{dog.features[1].description}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{dog.emoji}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



