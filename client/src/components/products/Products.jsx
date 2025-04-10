import ProductItem from "./procut-catalog-item/ProductItem";
import { useState } from "react";
import { useProductPagination } from "../../hooks/useProductPagination";

export default function Products() {
    const [currentPage, setCurrentPage] = useState(1);
    const { pages, totalPages } = useProductPagination(currentPage);  // Fetch products and total pages
    
    console.log('Pages:', pages);
    console.log('Total Pages:', totalPages);
  
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Products</h2>
            <h3 className="section-subheading text-muted">Our latest products.</h3>
  
            {/* Display the products */}
            {pages.length > 0 ? (
              pages.map(product => (
                <ProductItem key={product._id} {...product} />
              ))
            ) : (
              <h3 className="section-subheading text-muted">Sorry! There are no products yet.</h3>
            )}
  
            {/* Pagination Buttons */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center gap-2 mt-4">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    className={`btn ${currentPage === pageNum ? 'btn-dark' : 'btn-primary'}`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }