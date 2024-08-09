

const result = async () => {
    try {

        const response = await fetch('https://fakestoreapi.com/products')

        const product = await response.json()

        console.log(product)
        //  return product;
        let allProducts = ""
        product.map((items) => {
            return allProducts +=
                `
            <div class="max-w-[1000px] mx-auto bg-gray-100 shadow rounded mt-10 grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-2">
              <div>
                  <div class="overflow-hidden">
                       <img src="${items.image}" alt="${items.title}" class=" hover:scale-110 ease-in-out duration-1000 transition-all"/>

                   
                    </div>
                   <div class="flex justify-between">
                     <p>$ ${items.price}</p>
                
                     <p>Rating ${items.rating.rate}</p>
                  </div>

                </div>
              
             
             </div>
        `
        })
        document.querySelector('#fetchapi').innerHTML = allProducts

    } catch (error) {
        console.log(error)
    }

}

result()


