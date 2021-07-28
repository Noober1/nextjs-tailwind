import Head from "next/head"

const Index = () => {
    return (
        <>
            <Head>
                <title>Next.js with Tailwind CSS</title>
            </Head>
            <div class="w-full pt-20 px-4">
                <div className="text-center">
                    <h1 className="font-extrabold font-sans text-center text-6xl mb-5">
                        Next.js with Tailwind CSS
                    </h1>
                    <p className="text-3xl">
                        You are ready to code :D
                    </p>
                </div>
            </div>
        </>
    )
}

export default Index
