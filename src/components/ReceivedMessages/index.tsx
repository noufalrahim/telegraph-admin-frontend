export default function ReceivedMessages({  userData, setUserData}: any) {
    console.log("From received messages")
    console.log(userData);
    const data = [
        {
            message: "Hello world",
            sender: "ads",
            time: "dasds"
        },
        {
            message: "Hello world",
            sender: "ads",
            time: "dasds"
        },
        {
            message: "Hello world",
            sender: "ads",
            time: "dasds"
        },
        {
            message: "Hello world",
            sender: "ads",
            time: "dasds"
        },
        {
            message: "Hello world",
            sender: "ads",
            time: "dasds"
        },
        {
            message: "Hello worl Hello worl Hello worl Hello worl Hello worl Hello worl Hello worl Hello worl Hello worl Hello worl v v Hello worl Hello worl Hello worl Hello worl Hello worl Hello worl Hello worl ",
            sender: "ads",
            time: "dasds"
        },
        {
            message: "Hello world",
            sender: "ads",
            time: "dasds"
        }
    ]

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
                                {item.sender}
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div  className="w-[6rem]">
                                Time :
                            </div>
                            <div className="w-[56rem] ml-8 text-start ml-15">
                                {item.time}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}