const Stats = ({text, statsNumber}) => {
  return ( 
    <div className="h-14 bg-[#111629]  flex items-center justify-center px-5 rounded-md gap-6">
      <span className="text-[#4A5567]  text-xl w-18">Folowers</span>
      <div className="border-l h-3/4 border-gray-500"/>
      <span className="text-xl text-[#C3CBD6]">27839</span>
    </div>
   );
}
 
export default Stats;