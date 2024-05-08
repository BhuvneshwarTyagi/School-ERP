export default function MyDoubtTile(props) {
    return (
        <div className=" w-full p-3  rounded-lg shadow-md mt-3">
            <div className="flex justify-between mobile:max-tablet:flex-col ">
                <div className="text-gray-400 px-3 ">{props.question}</div>

                <div className="flex   gap-6">
                    <h1 className=" px-3 py-1 bg-bg_blue rounded-lg w-fit">Class {props.selectedClass}</h1>
                    <h1 className=" px-3 py-1 bg-bg_blue rounded-lg w-fit"> {props.selectedSubject}</h1>
                </div>
            </div>


            <div className="pl-2 mt-3 font-medium">{props.description}</div>

            <h1 className=" px-3 py-1 bg-secondary rounded-lg w-fit float-right"> Answer</h1>

        </div>
    )
}

