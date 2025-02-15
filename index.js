let express=require("express");
let app=express();
let port=8080;
let methodOverride = require('method-override');
app.use(methodOverride('_method'))
let path=require("path")
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.listen(port,()=>{
    console.log("listing");
})

let posts=[{
  id:uuidv4(),
      name: "Max",
      color: "Yellow, Black, Chocolate",
      breed: "Labrador Retriever",
      imglink:"https://th.bing.com/th/id/R.cae62da3d838d410e722df8bc0ae4dea?rik=8C5yqjx8wmwzKA&riu=http%3a%2f%2fwww.reportingday.com%2fwp-content%2fuploads%2f2018%2f07%2fLabrador-Retriever-Dog-HD-Wallpapers.jpg&ehk=ERW%2fI8QUNzJVUKJnznp2hyEzkw6PozCYJGPsy1IiNZM%3d&risl=&pid=ImgRaw&r=0",
      behavior: "Friendly, intelligent, energetic",
      summary:"Labrador Retriever: Friendly, outgoing, and energetic, Labradors are one of the most popular breeds. They excel as family pets and working dogs, with a strong instinct to please their owners."
    },
    {
      id:uuidv4(),
      name: "Rocky",
      color: "Black, Tan",
      breed: "German Shepherd",
      imglink:"https://th.bing.com/th/id/OIP.4LRjkddFV2GPjyW1a3sFRgHaJs?rs=1&pid=ImgDetMain",
      behavior: "Loyal, protective, highly trainable",
      summary:"German Shepherd: Intelligent, loyal, and protective, German Shepherds are highly trainable and often work as police and military dogs. They require regular exercise and mental stimulation"
    },
    {
       id:uuidv4(),
      name: "Buddy",
      color: "Golden",
      breed: "Golden Retriever",
      imglink:"https://th.bing.com/th/id/OIP.Ba_5JG_Dfm9aeEqt_J6D8AAAAA?rs=1&pid=ImgDetMain",
      behavior: "Affectionate, gentle, obedient",
      summary:"Golden Retriever: Friendly, intelligent, and loyal, Golden Retrievers are highly trainable and popular family pets. They excel as therapy dogs, search and rescue dogs, and hunting companions, requiring regular exercise and mental stimulation."
    },
    {
      id:uuidv4(),
      name: "Bella",
      color: "White, Fawn, Brindle",
      breed: "Bulldog",
      imglink:"https://www.thekennelclub.org.uk/media/1676/bulldog-headshot.jpg?mode=pad&width=1000&rnd=132143812730000000",
      behavior: "Calm, loving, low-energy",
      summary:"Bulldog: With their distinctive appearance and laid-back nature, Bulldogs are popular companions. They are relatively low-maintenance, but their flat faces can lead to breathing difficulties."
    },
    {
      id:uuidv4(),
      name: "Charlie",
      color: "Tricolor (Brown, White, Black)",
      breed: "Beagle",
      imglink:"https://th.bing.com/th/id/OIP.XFO2VCVZacjSm9L3TTH8EgHaHa?rs=1&pid=ImgDetMain",
      behavior: "Curious, playful, friendly",
      summary:"Beagle: Happy, curious, and energetic, Beagles are small hunting dogs that thrive on exploration and social interaction. They require regular exercise and training to prevent barking and howling"
    },
    {
      id:uuidv4(),
      name: "Coco",
      color: "Orange, Black, White",
      breed: "Pomeranian",
      imglink:'https://media-be.chewy.com/wp-content/uploads/2021/06/02102132/Pomeranian_Featured-Image.jpg',
      behavior: "Lively, alert, intelligent",
      summary:"Pomeranian: Small, fluffy, and charming, Pomeranians are popular toy dogs known for their big personalities. They are intelligent, active, and loyal companions that thrive on human interaction. Pomeranians are relatively low-maintenance, but they do require regular grooming to prevent matting and tangling of their thick coats. They can be wary of strangers and may require early socialization to prevent fear-based behaviors"
    },
    {
      id:uuidv4(),
      name: "Luna",
      color: "Black, White, Gray",
      breed: "Siberian Husky",
      imglink:"https://wallup.net/wp-content/uploads/2018/10/07/237983-siberian-husky-dog.jpg",
      behavior: "Energetic, independent, friendly",
      summary:"Siberian Husky: Strong, athletic, and majestic, Siberian Huskies are a popular breed known for their striking appearance and energetic personalities. Originally bred to pull sleds in the Arctic, Huskies are highly intelligent, active, and independent dogs that thrive on physical and mental stimulation."
    },
    {
      id:uuidv4(),
      name: "Bruno",
      color: "Black, Tan, Mahogany",
      breed: "Rottweiler",
      imglink:"https://th.bing.com/th/id/OIP.Cn4iuj9bbwqeqJBq4vAEAQHaE8?rs=1&pid=ImgDetMain",
      behavior: "Confident, protective, loyal",
      summary:"Rottweiler: Confident, loyal, and powerful, Rottweilers are often misunderstood due to their intimidating appearance. They are loving family pets, but require early socialization and training to prevent aggression."
    },
    {
      id:uuidv4(),
      name: "Oscar",
      color: "Brown, Black, Red",
      imglink: "https://cdn.fotofits.com/petzlover/gallery/img/l/dachshund-puppy-845763.jpg",
      breed: "Dachshund",
      behavior: "Brave, curious, stubborn",
      summary:"Dachshund: Loyal, brave, and energetic, Dachshunds are small hunting dogs that excel in various roles, from companions to working dogs. They require regular exercise and training to prevent barking and digging."
    },
    {
      id:uuidv4(),
      name: "Duke",
      color: "Black, Brown, Blue",
      breed: "Doberman Pinscher",
    imglink:"https://dogs.pedigreeonline.com/images/breeds/dogs/doberman-pinscher.jpg?1562881889",
      behavior: "Fearless, intelligent, loyal",
      summary:"Doberman Pinscher: Intelligent, athletic, and loyal, Doberman Pinschers are a popular breed known for their sleek appearance and confident personalities. Originally bred as guard dogs, Dobermans are highly trainable and thrive on physical and mental stimulation."
    }]
  //posts main page
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})
app.get("/posts/details/:name",(req,res)=>{
  let {name}=req.params;
  let post =posts.find( (p)=> name==p.name);
  res.render("details.ejs",{post})
})
app.get("/posts/edit/:name",(req,res)=>{
  let {name}=req.params;
  let post =posts.find( (p)=> name==p.name);
  res.render("edit.ejs",{post});
})
app.patch("/posts/edit/:name",(req,res)=>{
  let{color,behavior,summary}=req.body;
  let {name}=req.params;
let post =posts.find( (p)=> name==p.name);
  if(req.body.behavior) {post.behavior=behavior;}
  if(req.body.color) {post.color=color;}
  if(req.body.summary) {post.summary=summary;}
 res.redirect("/posts")
})
app.delete("/posts/delete/:name",(req,res)=>{
let{name}=req.params;
 posts=posts.filter( (p)=> !(name==p.name));
 res.render("index.ejs",{posts})
 
})