export default function TabButton(prop){
function handelClick(){
    console.log("hello")
}
   return( <li>
    <button className={prop.isSelected?'active':undefined} onClick={prop.onSelect} >{prop.children}</button>
   </li>)
}