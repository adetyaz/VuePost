<template>
    <div>
        <section class="relative block" style="height: 500px;">
            <div
                class="absolute top-0 w-full h-full bg-center bg-cover"
                style='background-image: url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80");'
            >
                <span
                    id="blackOverlay"
                    class="w-full h-full absolute opacity-50 bg-black"
                ></span>
            </div>
            <div
                class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style="height: 70px; transform: translateZ(0px);"
            >
                <svg
                    class="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        class="text-gray-300 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
        </section>
        <section class="relative py-16 bg-gray-300">
            <div class="container mx-auto px-4">
                <div
                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
                >
                    <div class="px-6">
                        <div class="flex flex-wrap justify-center">
                            <div
                                class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                            >
                                <div class="relative">
                                    <img
                                        alt="..."
                                        src="./assets/img/team-2-800x800.jpg"
                                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                                        style="max-width: 150px;"
                                    />
                                </div>
                            </div>
                            <div
                                class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                            >
                                <div class="py-6 px-3 mt-32 sm:mt-0">
                                    <button
                                        class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                        type="button"
                                        style="transition: all 0.15s ease 0s;"
                                    >
                                        Connect
                                    </button>
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12 px-4 lg:order-1">
                                <div
                                    class="flex justify-center py-4 lg:pt-4 pt-8"
                                >
                                    <div class="mr-4 p-3 text-center">
                                        <span
                                            class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                                            >22</span
                                        ><span class="text-sm text-gray-500"
                                            >Friends</span
                                        >
                                    </div>
                                    <div class="mr-4 p-3 text-center">
                                        <span
                                            class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                                            >10</span
                                        ><span class="text-sm text-gray-500"
                                            >Photos</span
                                        >
                                    </div>
                                    <div class="lg:mr-4 p-3 text-center">
                                        <span
                                            class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                                            >89</span
                                        ><span class="text-sm text-gray-500"
                                            >Comments</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-12">
                            <h3
                                class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
                            >
                                Jenna Stones
                            </h3>
                            <div
                                class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                            >
                                <i
                                    class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                                ></i>
                                Los Angeles, California
                            </div>
                            <div class="mb-2 text-gray-700 mt-10">
                                <i
                                    class="fas fa-briefcase mr-2 text-lg text-gray-500"
                                ></i
                                >Solution Manager - Creative Tim Officer
                            </div>
                            <div class="mb-2 text-gray-700">
                                <i
                                    class="fas fa-university mr-2 text-lg text-gray-500"
                                ></i
                                >University of Computer Science
                            </div>
                        </div>
                        <div
                            class="mt-10 py-10 border-t border-gray-300 text-center"
                        >
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-9/12 px-4">
                                    <p
                                        class="mb-4 text-lg leading-relaxed text-gray-800"
                                    >
                                        An artist of considerable range, Jenna
                                        the name taken by Melbourne-raised,
                                        Brooklyn-based Nick Murphy writes,
                                        performs and records all of his own
                                        music, giving it a warm, intimate feel
                                        with a solid groove structure. An artist
                                        of considerable range.
                                    </p>
                                    <a
                                        href="#pablo"
                                        class="font-normal text-pink-500"
                                        >Show more</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="relative block py-24 lg:pt-0 bg-gray-900">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                    <div class="w-full lg:w-6/12 px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                        >
                            <div class="flex-auto p-5 lg:p-10">
                                <h4 class="text-2xl font-semibold">
                                    Want to work with us?
                                </h4>
                                <p
                                    class="leading-relaxed mt-1 mb-4 text-gray-600"
                                >
                                    Complete this form and we will get back to
                                    you in 24 hours.
                                </p>
                                <div class="relative w-full mb-3 mt-8">
                                    <label
                                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        for="full-name"
                                        >Full Name</label
                                    ><input
                                        type="text"
                                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                        placeholder="Full Name"
                                        style="transition: all 0.15s ease 0s;"
                                    />
                                </div>
                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        for="email"
                                        >Email</label
                                    ><input
                                        type="email"
                                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                        placeholder="Email"
                                        style="transition: all 0.15s ease 0s;"
                                    />
                                </div>
                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        for="message"
                                        >Message</label
                                    ><textarea
                                        rows="4"
                                        cols="80"
                                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                        placeholder="Type a message..."
                                    ></textarea>
                                </div>
                                <div class="text-center mt-6">
                                    <button
                                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style="transition: all 0.15s ease 0s;"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
