import {
    AccountCircle,
    ArrowBack,
    InsertDriveFile,
    Lock,
    Logout,
} from "@mui/icons-material";
import TableList from "./TableList";
import Background from "../Background";
import { useLocation, useNavigate } from "react-router-dom";
import { Children, useContext, useEffect, useState } from "react";
import Duplicate_Fax from "../fax/Duplicate_Fax";
import { DuplicateContext } from "../../context/DuplicateContext";
import CaseDetails from "../../pages/case_details/CaseDetails";
import Rx_Tracker_List from "../../pages/rx_tracker_list/Rx_Tracker_List";
import Admin_User_List from "../../pages/user_details/Admin_User_list";

function TableNavbar() {
    

    const navigate = useNavigate();
   

    

  

    return (
        <div className=" px-2 pb-5 text-white  bg-[#1B4A68] min-h-fit w-screen relative z-50 h-screen">

            <div className="w-full text-xs flex items-center justify-between py-1 font-bold z-50">
                <div className="flex items-center gap-6">
                    <span className="uppercase flex items-center gap-1">
                        <span className="bg-white rounded-full z-50">
                            <ArrowBack className="text-teal-400" onClick={() => navigate("/")} />
                        </span>
                        <span className="hidden md:block z-50">Next science</span>
                    </span>
                    <span className="flex items-center gap-1 z-50">
                        <AccountCircle />
                        <span className="underline hidden md:block z-50">Erica Fernandes</span>
                    </span>
                </div>
                <div>
                   
                </div>
                <div className="flex items-center gap-5">
                    <span className="text-[#FE7D00] flex items-center z-50 cursor-pointer" >
                        <Lock />
                        <span className="hidden md:block z-50"  onClick={() => navigate("/table")}>Fax List</span>
                    </span>
                    <span className="flex items-center z-50 cursor-pointer" >
                        <InsertDriveFile />
                        <span className="hidden md:block z-50" onClick={() => navigate("/table")}> User List</span>
                    </span>
                    <span className="flex items-center z-50 cursor-pointer" >
                        <InsertDriveFile />
                        <span className="hidden md:block z-50" onClick={() => navigate("/table")}> Rx Tracker List</span>
                    </span>
                                        <span className="flex items-center z-50 cursor-pointer">
                        <InsertDriveFile />
                        <span className="hidden md:block z-50"onClick={() => navigate("/table")} > Case Details</span>
                    </span>
                    <span className="flex items-center gap-1 z-50 cursor-pointer">
                        <Logout />
                        <span className="hidden md:block z-50" onClick={() => navigate("/")}> Logout</span>
                    </span>
                    <span className="hidden text-[#FE7D00] text-lg md:hidden lg:flex flex-col items-center leading-[4px] z-50 ">
                        <h3 className="text-3xl z-50">
                            Tika<span className="text-blue-500 z-50">Rx</span>
                        </h3>
                        <p className="text-[8px] text-white z-50">Rx Management System</p>
                    </span>
                </div>
            </div>

            {/* mobile input */}
            <div className="md:hidden text-center p-2 z-50">
                <input
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                    className=" rounded-full bg-white outline-none px-2 py-1.5 text-black z-50"
                />
            </div>
            <Background />


           



        </div>
    )
}

export default TableNavbar