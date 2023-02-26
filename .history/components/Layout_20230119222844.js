import Nav from './Nav'

export default function Layout({children}){
    return(
        <div>
           <Nav/> 
           <main>{chil}</main>
        </div>
    )
}