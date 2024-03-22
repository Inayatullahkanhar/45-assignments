// Album
function make_album(artist_name, album_title) {
    var newAlbum = {
        name_Of_Artist: artist_name,
        title_Of_Album: album_title
    };
    return newAlbum;
}
var album1 = make_album("Pritum", "Animal");
var album2 = make_album("Arjit Singh", "Aashiqui 2");
var album3 = make_album("Atif Aslam", "Doorie");
console.log(album1);
console.log(album2);
console.log(album3);
