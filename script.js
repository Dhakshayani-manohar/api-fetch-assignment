const products = document.getElementById("products");
const load = document.getElementById("loader");

async function getproducts() {
    try {

        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("products loading is failed, retry....");
        }
        const pro = await response.json();

        products.innerHTML = "";

        pro.forEach(data => {
            const card =

                `
                
                
                <div class="col-sm-6 col-md-6 col-lg-6">
                  
                <div class="card h-100 shadow-sm rounded-4">
               <img src="${data.image}"class="card-img-top rounded-4">
                <div class="card-body d-flex flex-column bg-light rounded-4 mt-1">
                    <p class="lead text-center mt-1">${data.category}</p>
                    <h6 class="fw-bold text-center fs-6 mb-2">${data.title}</h6>
                
                    <div class="d-flex gap-2 mt-3">
                    <p class="fw-bold text-secondary m-auto ">PRICE: <span class="text-primary fw-bold"> $${data.price}</span></p>
                    
                     <button class="btn my-auto " style ="background-color:#F17B0D;"><i class="bi bi-cart-plus"></i>  Add to cart</button>
                    </div>
                </div>




            </div>
            </div>

            
            `;
            products.innerHTML += card;
        });

    } catch (err) {
        console.error(err);
    }

}getproducts();
