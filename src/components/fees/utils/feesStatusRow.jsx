import FeeStatus from "./feeStatus.jsx";

export default function FeeStatusRow() {
    return (
        <div className="flex h-fit pb-4 mobile:max-tablet:grid mobile:max-tablet:grid-cols-1 mobile:max-tablet:w-full mobile:max-tablet:gap-4">
            <FeeStatus amount='80,000' descp='Total Fees' color='bg-yellow-300'/>
            <FeeStatus amount='60,000' descp='Paid Fees' color='bg-green-300'/>
            <FeeStatus amount='20,000' descp='Pending Fees' color='bg-red-300'/>
        </div>
    );
}
