export default async function getProducts(){
    let res = await fetch("https://api.imgflip.com/get_memes");
    return res.json();
}