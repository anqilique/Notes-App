import { LoaderIcon } from "lucide-react";

const Loader = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <LoaderIcon className="animate-spin size-10 text-primary" />
            <h3 className="ml-2">Loading... Please wait!</h3>
        </div>
    )
}

export default Loader;