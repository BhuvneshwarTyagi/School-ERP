import PerformanceBottonTile from "./PerformanceBottomTile";
import PerformanceMiddleTile from "./PerformanceMiddleTile";
import PerformanceTopTile from "./PerformanceTopTile";

export default function Performance(props){
    return (
        <div className="w-full shadow-lg rounded-lg tablet:p-4 mobile:max-tablet:px-2 mt-4 ">
            <div className="border-t-2 border-text_blue my-3 tablet:mx-2 rounded-full "></div>
           <h1 className='tablet:text-3xl mobile:max-tablet:text-xl font-medium text-text_blue text-center'>Academic Performance</h1>
           <div className="border-t-2 border-text_blue my-3 tablet:mx-2 rounded-full "></div>
           <div className='flex flex-col w-full justify-between tablet:mx-2'>

                <div className="w-full tablet:mx-2">
                <h1 className="text-xl font-medium mb-3">
                    Term I
                </h1>
                <div className="rounded-lg shadow-md tablet:mr-5 border-2 border-gray-400">
                    <PerformanceTopTile heading={["Subjects", 'Obtained Marks' , "Total Marks"]} />
                    <PerformanceMiddleTile value={["English", '74-B' , "100"]} />
                    <PerformanceMiddleTile value={["Hindi", '87-B' , "100"]} />
                    <PerformanceMiddleTile value={["Science", '74-B' , "100"]} />
                    <PerformanceMiddleTile value={["Maths", '78-B' , "100"]} />
                    <PerformanceMiddleTile value={["Social Study", '87-B' , "100"]} />
                    <PerformanceMiddleTile value={["Drawing", '74-B' , "100"]} />
                    <PerformanceMiddleTile value={["Computer", '96-A' , "100"]} />
                    <PerformanceBottonTile value={["", 'GPA' , "8.2"]} />
                </div>
                </div>

                <div className="w-full tablet:mx-2 my-4">
                <h1 className="text-xl font-medium mb-3">
                    Term II
                </h1>
                
                <div className="rounded-lg shadow-md tablet:mr-5 border-2 border-gray-400">
                    <PerformanceTopTile heading={["Subjects", 'Obtained Marks' , "Total Marks"]} />
                    <PerformanceMiddleTile value={["English", '74-B' , "100"]} />
                    <PerformanceMiddleTile value={["Hindi", '87-B' , "100"]} />
                    <PerformanceMiddleTile value={["Science", '74-B' , "100"]} />
                    <PerformanceMiddleTile value={["Maths", '78-B' , "100"]} />
                    <PerformanceMiddleTile value={["Social Study", '87-B' , "100"]} />
                    <PerformanceMiddleTile value={["Drawing", '74-B' , "100"]} />
                    <PerformanceMiddleTile value={["Computer", '96-A' , "100"]} />
                    <PerformanceBottonTile value={["", 'GPA' , "8.2"]} />
                </div>
                </div>

                <div className="w-full tablet:mx-2 my-3">
                <h1 className="text-xl font-medium mb-3">
                    Final
                </h1>
                
                <div className="rounded-lg shadow-md tablet:mr-5 border-2 border-gray-400">
                    <PerformanceTopTile heading={["Subjects", 'Obtained Marks' , "Total Marks"]} />
                    <PerformanceMiddleTile value={["English", '74-B' , "100"]} />
                    <PerformanceMiddleTile value={["Hindi", '87-B' , "100"]} />
                    <PerformanceMiddleTile value={["Science", '74-B' , "100"]} />
                    <PerformanceMiddleTile value={["Maths", '78-B' , "100"]} />
                    <PerformanceMiddleTile value={["Social Study", '87-B' , "100"]} />
                    <PerformanceMiddleTile value={["Drawing", '74-B' , "100"]} />
                    <PerformanceMiddleTile value={["Computer", '96-A' , "100"]} />
                    <PerformanceBottonTile value={["", 'GPA' , "8.2"]} />
                    
                </div>
                </div>
           </div>
        </div>
    )
}