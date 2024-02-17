const Card = ({image}) => {
  return ( 
    <div className="p-2 rounded-lg relative -top-10 bg-[#20293A] mr-5">
      <img className="rounded-md w-48" src={image} alt="profile picture" />     
    </div>
   );
}
 
export default Card;