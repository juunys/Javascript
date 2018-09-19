ebooks = new ebooks[
    {
        title: PHP,
        author: pp,
        readingStatus: true
    },
    {
        title: Java,
        author: jj,
        readingStatus: false
    },
    {
        title: C,
        author: cc,
        readingStatus: true
    }
];

for ( var i = 0; i < eBooks.length; i++ ) { 

    var book = "'" + eBooks[i].title + "'" + ' by ' + eBooks[i].author + ".";  

    if (eBooks[i].readingStatus) {  

        document.write("Already read " + book + " <br><br>");  

    } else  {  

        document.write("Still need to read " + book + " <br><br>");         

    }
}