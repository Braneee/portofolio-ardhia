import os
import fitz  # PyMuPDF

def drastically_compress_pdfs(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.pdf'):
                pdf_path = os.path.join(root, file)
                
                # Check file size (only compress if > 5MB)
                file_size_mb = os.path.getsize(pdf_path) / (1024 * 1024)
                if file_size_mb > 5:
                    print(f"Aggressively compressing {file} ({file_size_mb:.2f} MB)...")
                    
                    try:
                        doc = fitz.open(pdf_path)
                        new_doc = fitz.open()
                        
                        # Rasterize each page at a lower DPI to reduce size
                        zoom = 1.5 # ~108 DPI
                        mat = fitz.Matrix(zoom, zoom)
                        
                        for page_num in range(len(doc)):
                            page = doc.load_page(page_num)
                            pix = page.get_pixmap(matrix=mat, alpha=False)
                            
                            # Create new page with same dimensions
                            new_page = new_doc.new_page(width=page.rect.width, height=page.rect.height)
                            new_page.insert_image(page.rect, stream=pix.tobytes("jpeg", 80))
                            
                        # Save it to a temporary file
                        temp_path = pdf_path + ".tmp"
                        new_doc.save(temp_path, garbage=4, deflate=True)
                        doc.close()
                        new_doc.close()
                        
                        # Replace original
                        os.replace(temp_path, pdf_path)
                        
                        new_size = os.path.getsize(pdf_path) / (1024 * 1024)
                        print(f"  -> Compressed to {new_size:.2f} MB")
                    except Exception as e:
                        print(f"  -> Failed to compress {file}: {e}")

if __name__ == "__main__":
    drastically_compress_pdfs(r"d:\PORTOFOLIO_DHIA\public\projects")
