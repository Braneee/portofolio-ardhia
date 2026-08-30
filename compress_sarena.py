import os
import fitz

def compress_sarena():
    pdf_path = r"d:\PORTOFOLIO_DHIA\public\projects\sarena-parfum\sarena-strategy.pdf"
    file_size_mb = os.path.getsize(pdf_path) / (1024 * 1024)
    print(f"Original size: {file_size_mb:.2f} MB")
    
    try:
        doc = fitz.open(pdf_path)
        new_doc = fitz.open()
        
        zoom = 0.8 # lower DPI
        mat = fitz.Matrix(zoom, zoom)
        
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            pix = page.get_pixmap(matrix=mat, alpha=False)
            
            new_page = new_doc.new_page(width=page.rect.width, height=page.rect.height)
            new_page.insert_image(page.rect, stream=pix.tobytes("jpeg", 60))
            
        temp_path = pdf_path + ".tmp"
        new_doc.save(temp_path, garbage=4, deflate=True)
        doc.close()
        new_doc.close()
        
        os.replace(temp_path, pdf_path)
        
        new_size = os.path.getsize(pdf_path) / (1024 * 1024)
        print(f"Compressed to: {new_size:.2f} MB")
    except Exception as e:
        print(f"Failed: {e}")

if __name__ == "__main__":
    compress_sarena()
