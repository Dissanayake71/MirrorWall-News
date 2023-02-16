
import Link from "next/link";


type Props ={
    category:string;
    isActve:boolean;
};
function NavLink({category, isActve}: Props) {
  return <Link href={`/news/${category}`}
  className={`navLink ${isActve && 'underline decoration-orange-400 underline-offset-4 font-bold text-lg'}`}
  >{category}</Link>;
  
}

export default NavLink;