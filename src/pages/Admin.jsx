import AdminHeader from "../components/admin/AdminHeader";
import ProductForm from "../components/admin/ProductForm";
import AdminProductTable from "../components/admin/AdminProductTable";


function Admin() {

  return (


    <section className="min-h-screen bg-[#FAF8F5] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <AdminHeader />


        <div className="grid lg:grid-cols-3 gap-12 mt-12">


          <div>

            <ProductForm />

          </div>



          <div className="lg:col-span-2">

            <AdminProductTable />

          </div>


        </div>
        </div>
    </section>

  )

}


export default Admin;