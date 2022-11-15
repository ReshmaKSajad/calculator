class Posts{
    setPost(title,description,author){
        this.title=title
        this.description=description
        this.author=author
    }
    printPost(){
        console.log(this.title,this.description,this.author);
    }
}

var obj =new Posts()
obj.setPost("hello","this is my first post","reshma")
obj.printPost()

class Story{
    constructor(title,description,author){
        this.title=title
        this.description=description
        this.author=author
    }
    printStory(){
        console.log(this.title,this.description,this.author);
    }
}

var obj1 =new Story("hello","this is my first post","reshma")
console.log(obj1.printStory());
