export default function fakeData() {
  return new Promise((res, rej) => {
    const data = [];
    const products = [
      "Weekday oversized t-shirt in",
      "Stradivarius cotton mom fit vintage jean in",
      "New Look shower resistant trench coat in",
      "Lace & Beads exclusive corset embellished maxi dress in",
      "Adicat Orignals Forum Low trainers in",
      "ASOS DESIGN Essentialwear lounge bottoms with seam detail in",
      "ASOS DESIGN bubble crepe v neck puff sleeve jumpsuit in",
      "Topgirl turtle neck knitted jumper in",
      "Topman stretch super skinny textured suit in",
      "Adicat Training Train Essentials 7 inch woven shorts in",
    ];
    const colors = [
      "red",
      "black",
      "green",
      "oranged",
      "purple",
      "yellow",
      "gray",
      "white",
      "pink",
      "gradient",
    ];

    const randomImages = {
      "Weekday oversized t-shirt in":
        "https://astalbania.com/wp-content/uploads/2022/04/tshirt-2.jpg",
      "Stradivarius cotton mom fit vintage jean in":
        "https://assets.vogue.com/photos/6303e99aeccd2d497c480185/1:1/w_2667,h_2667,c_limit/slide_22.jpg",
      "New Look shower resistant trench coat in":
        "https://media.gq.com/photos/61f197a542209a2de49b86cc/master/w_2000,h_1333,c_limit/Burberry-Kensington-trench-coat.jpg",
      "Lace & Beads exclusive corset embellished maxi dress in":
        "https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014",
      "Adicat Orignals Forum Low trainers in":
        "http://cdn.shopify.com/s/files/1/0075/3929/4305/collections/G22_WA_AP_NAV-Shoes.jpg?v=1645999375",
      "ASOS DESIGN Essentialwear lounge bottoms with seam detail in":
        "https://i.ebayimg.com/images/g/0cUAAOSwDJ9cqwZP/s-l500.jpg",
      "ASOS DESIGN bubble crepe v neck puff sleeve jumpsuit in":
        "https://cdn.shopify.com/s/files/1/0219/6394/products/Nancy_Mac_Sable_jumpsuit_in_emerald_crepe_-_mannequin_front_b5cf164a-ff86-4d82-aeda-4115cd240e3b_1000x.jpg?v=1570089298",
      "Topgirl turtle neck knitted jumper in":
        "https://assets.vogue.com/photos/614e504d3afc7a42777a777a/1:1/w_1013,h_1013,c_limit/slide_18.jpg",
      "Topman stretch super skinny textured suit in":
        "https://www.prada.com/content/dam/pradanux_products/U/UAF/UAF420/BG4F0AI7/UAF420_BG4_F0AI7_S_152_SLF.png/jcr:content/renditions/cq5dam.web.hebebed.800.1000.jpg",
      "Adicat Training Train Essentials 7 inch woven shorts in":
        "https://static01.nyt.com/images/2021/05/28/fashion/mens-style/28sp-gear-inyt1/oakImage-1621867392181-superJumbo.jpg",
    };

    for (let i = 0; i < 100; i++) {
      const product = products[Math.floor(Math.random() * 10)];
      const image = randomImages[product];
      const obj = {
        id: Math.floor(Math.random() * 90000) + 10000,
        productName: product + " " + colors[Math.floor(Math.random() * 10)],
        image: image,
        price: Math.floor(Math.random() * 10) + 5,
      };
      data.push(obj);
    }
    
    setTimeout(() => {
      res(data);
    }, 2000);
  });
}
