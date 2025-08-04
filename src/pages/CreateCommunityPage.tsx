import { CreateCommunity } from "../components/CreateCommunity"

export const CreateCommunityPage = () => {
    return (
        <div className="pt-20"> 
            <h2 className="text-6xl font-bold mb-6 pb-6 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> Create Post Page</h2> 
            <CreateCommunity />
        </div>
    )
}