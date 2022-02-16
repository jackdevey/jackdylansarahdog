import {Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon, FireIcon} from '@heroicons/react/outline'
import {NavLink } from 'react-router-dom';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Home', path: '/'},
    { name: 'Bertie', path: '/jack' },
    { name: 'Chip', path: '/dylan' },
    { name: 'Reggie', path: '/sarah' },
    { name: 'Jasper', path: '/cammy' },
]

export default function Navigation() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-8 w-8"
                                        src={process.env.PUBLIC_URL + "/img/logo.png"}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.path}
                                                className={({ isActive }) => {
                                                    return classNames(
                                                        isActive
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                                    <button
                                        type="button"
                                        className="-mr-1 flex p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                                    >
                                        <span className="sr-only">Dismiss</span>
                                        <FireIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) => {
                                        return classNames(
                                            isActive
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
