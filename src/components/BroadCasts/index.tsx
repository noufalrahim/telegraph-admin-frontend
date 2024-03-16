import axios from "axios";
import { BASEURL, BROADCASTS } from "../../../appConstant";
import { useEffect, useState } from "react";

export default function BroadCasts({  userData, setUserData}: any) {
    
    const [data, setData] = useState([]);

    const fetchBroadCastMessages = async () => {
        try {
            const response = await axios.get(`${BASEURL}${BROADCASTS}`)
            
            const respData = await response.data;
            setData(respData);
            console.log(respData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBroadCastMessages();
    }, []);

    

    return (
        <div>
            {
                data.map((item: any, index: any) => (
                    <div id={index} className="border-dashed w-[52rem] text-black border-2 border-black px-5 py-3 my-5">
                        <div
                            className="flex flex-row"
                        >
                            <div className="w-[7rem]">
                                Message :
                            </div>
                            <div className="w-[56rem] ml-5 text-start ml-15">
                                {item.message}
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div  className="w-[6rem]">
                                Sender : 
                            </div>
                            <div className="w-[56rem] ml-8 text-start ml-15">
                                {item.senderId}
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div  className="w-[6rem]">
                                Time :
                            </div>
                            <div className="w-[56rem] ml-8 text-start ml-15">
                                {item.createdAt}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}