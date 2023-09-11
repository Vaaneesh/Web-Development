function download(URL,cb){
    if(!URL.startsWith("http")){
        throw new Error("invalid URL");
    }
    setTimeout(() => {
        let downloadedFile=URL.split("/").pop();
        console.log(downloadedFile);
        cb(downloadedFile);
    }, 3000);
}
function Compress(file,cb){//movie.mp4-->movie.zip
    setTimeout(()=>{
        let zippedfile=file.split(".")[0]+".zip";
        console.log(zippedfile);
        cb(zippedfile);
    },2000)
}
function upload(zip,cb){
    let newURL="http://chitkara.com/"+zip;
    setTimeout(() => {
        console.log("Uploaded at new URL=> "+newURL);
        cb("done");
    }, 1000);
}
// download("http://chitkara.com/movie.mp4");
download("http://chitkara.com/movie.mp4",function(downloadedFile){
    Compress(downloadedFile,function(zippedfile){
        upload(zippedfile,function(msg){
            console.log(msg);
        })
    })
});