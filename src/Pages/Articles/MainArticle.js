import Articles from "./Articles"
import "./Articles.css"

export default function MainArticles(){
    const arr = [
        {
            id:"1",
            title:"abrar",
            text:"loremv dfdsf",
            image:""
        },
        {
            id:"2",
            title:"abrar",
            text:"loremv dfdsf",
            image:""
        },
        {
            id:"3",
            title:"abrar",
            text:"loremv dfdsf",
            image:""
        }
    ]
    const article = arr.map(temp => 
        <Articles

        />
    )
    return(
        <div>
            <div className='Article'>
            <h1 className='article-title'> Latest Articles</h1>
            <div >
            {article}</div>
            </div>
        </div>
        )
}