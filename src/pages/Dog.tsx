import {Dogs} from "../dogs/Dogs";

export default function Dog(dogId: number) {

    let dog = Dogs[dogId]

    return(
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">About {dog.name}</h2>
                    <p className="mt-4 text-gray-500">
                        {dog.description}
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {dog.features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    {dog.images.map((image) => (
                            <div
                                style={{
                                    backgroundImage: `url(${process.env.PUBLIC_URL + image}`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "300px auto"
                                }}
                                className="bg-gray-100 rounded-lg overflow-hidden w-full h-0 aspect-w-1 aspect-h-1"
                            />
                    ))}
                </div>
            </div>
        </div>
    )

}
