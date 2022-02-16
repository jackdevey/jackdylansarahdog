/* This example requires Tailwind CSS v2.0+ */
import { CameraIcon, XIcon } from '@heroicons/react/outline'
import {useState} from "react";
import {NavLink} from "react-router-dom";

export default function CammyNote() {
    const [isOpened, setIsOpened] = useState(true)

    function Hide() {
        setIsOpened(isOpened => false)
    }

    if(isOpened) {
        return (
            <div className="bg-indigo-600">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg bg-indigo-800">
                            <CameraIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                            <p className="ml-3 font-medium text-white truncate">
                                <span className="md:hidden">Cammy dog now on website</span>
                                <span className="hidden md:inline">Cammy dog jasper now on website</span>
                            </p>
                        </div>
                        <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">

                            <NavLink
                                to="/cammy"
                                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                            >
                                Show me cammy dog 🐕
                            </NavLink>

                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                                type="button"
                                onClick={Hide}
                                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else return (<></>)
}
