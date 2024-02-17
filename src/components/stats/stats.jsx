const Stats = ({text, statsNumber}) => {
  return ( 
    <div className="h-14 bg-[#111629]  flex items-center justify-center px-5 rounded-md gap-6">
      <span className="text-[#4A5567]  text-sm w-18">{text}</span>
      <div className="border-l h-3/4 border-gray-500"/>
      <span className="text-xs text-[#C3CBD6]">{statsNumber}</span>
    </div>
   );
}
 
export default Stats;