
interface Props {
    handleDownload: any
    download: any
}

export default function Button({ handleDownload, download }: Props) {

    return (

        <button
            onClick={handleDownload}
            className="group w-full bg-amber-500 h-12 text-white font-semibold mt-5 rounded-md cursor-pointer hover:text-lg">{download}
        </button>

    )
}
