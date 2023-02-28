import image from "../../assets/error404.png"

export default function Error() {
    return <div style={{color:'white'}}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <img src={image} />
    </div>
}