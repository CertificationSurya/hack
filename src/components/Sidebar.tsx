import { GiCow, GiWheat } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsChatText, BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthHook";
import { useSocket } from "../context/SocketHook";

const Sidebar = () => {
    const { user } = useAuth();
    const { unseenFromUsers } = useSocket();

    return (
        <div className="w-[240px]">
            <div className={`bg-[#40513B] fixed xs:w-screen w-[260px] z-50 top-0 left-0 shadow-2xl h-screen text-gray-100 px-5`}>
                <div className={`flex flex-col h-full py-10`}>
                    <div className={`flex flex-col gap-10`}>
                        <Link to={`/`}>
                            <p className={`text-2xl font-bold`}>Farm.inc</p>
                        </Link>
                        <div className={`flex flex-col gap-1.5 text-sm`}>
                            <Link to={``}>
                                <div
                                    className={`flex gap-2 items-center p-2.5 hover:bg-gray-500/40 transition cursor-pointer rounded`}>
                                    <GiWheat size={`1.4em`} />
                                    <p className={`font-medium`}>Crops</p>
                                </div>
                            </Link>

                            <hr className={`border-t border-gray-500/50`} />
                            <Link to={`animals`}>

                                <div
                                    className={`flex gap-2 items-center p-2.5 hover:bg-gray-500/40 transition cursor-pointer rounded`}>
                                    <GiCow size={`1.4em`} />
                                    <p className={`font-medium`}>Animals</p>
                                </div>
                            </Link>
                            <hr className={`border-t border-gray-500/50`} />
                            <Link to={`news`}>
                                <div
                                    className={`flex gap-2 items-center p-2.5 hover:bg-gray-500/40 transition cursor-pointer rounded`}>
                                    <IoNewspaperOutline size={`1.35em`} />
                                    <p className={`font-medium`}>News</p>
                                </div>
                            </Link>
                            <hr className={`border-t border-gray-500/50`} />
                            <Link to={`chat`}>
                                <div
                                    className={`flex gap-2 items-center p-2.5 hover:bg-gray-500/40 transition cursor-pointer rounded`}>
                                    <div className="relative">
                                        <BsChatText size={`1.35em`} />
                                        {unseenFromUsers.length > 0 && <span className="absolute h-3 w-3 left-2 -bottom-1 rounded-full bg-rose-400"></span>}

                                    </div>
                                    <p className={`font-medium`}>Chat</p>
                                </div>
                            </Link>
                            <hr className={`border-t border-gray-500/50`} />
                            <Link to={`marketplace`}>
                                <div
                                    className={`flex gap-2 items-center p-2.5 hover:bg-gray-500/40 transition cursor-pointer rounded`}>
                                    <BsShop size={`1.35em`} />
                                    <p className={`font-medium`}>Marketplace</p>
                                </div>
                            </Link>
                            <hr className={`border-t border-gray-500/50`} />

                        </div>

                    </div>
                    <div className={`mt-auto`}>
                        <Link to={`/dash/profile/me`}>
                            <div
                                className={`flex gap-3 items-center border-t border-gray-500/40 pt-2 hover:border-gray-500/40 hover:border transition cursor-pointer rounded p-2.5`}>
                                <BiUser size={`1.8em`} />
                                <div className={`font-medium text-gray-300 text-sm`}>
                                    <p>{user.username}</p>
                                    <p className={`text-xs text-gray-400 font-semibold`}>{user.phoneNumber}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
