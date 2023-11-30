import useAuth from "../../../hooks/useAuth";
import img from '../../../assets/sub.jpg'


const UserProfile = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="py-10 text-center">
                <img src={user?.photoURL} alt="" className="w-28 mx-auto rounded-full" />
                <h1 className="text-5xl py-5">{user?.displayName}</h1>
                <p className="text-xl">{user?.email}</p>
            </div>
            
            <div className="flex w-2/3 bg-base-100 shadow-xl mx-auto">
                <figure><img src={img} className="1/2" alt="Shoes" /></figure>
                <div className="card-body w-full">
                    <h2 className="card-title">
                        Membership Subscribe
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <ul className="list-disc">
                        <li>Members may get exclusive access to services and products</li>
                        <li>Members often receive special discounts or exclusive deals on products</li>
                        <li>Members might get early access to new features, products</li>
                    </ul>
                    <div className="card-actions mt-5">
                        <span className="text-xl">Get Subscription</span>
                    <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8">15$</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;