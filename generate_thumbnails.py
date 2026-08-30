import os
import fitz  # PyMuPDF

def pdf_to_image(base_dir):
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.lower().endswith('.pdf'):
                pdf_path = os.path.join(root, file)
                image_name = os.path.splitext(file)[0] + '.png'
                image_path = os.path.join(root, image_name)
                
                print(f"Processing: {pdf_path}")
                try:
                    # Open the PDF
                    doc = fitz.open(pdf_path)
                    
                    if len(doc) > 0:
                        # Get the first page
                        page = doc.load_page(0)
                        
                        # Render page to an image (at 2x resolution for better quality)
                        zoom = 2.0
                        mat = fitz.Matrix(zoom, zoom)
                        pix = page.get_pixmap(matrix=mat)
                        
                        # Save the image
                        pix.save(image_path)
                        print(f"Saved thumbnail: {image_path}")
                    else:
                        print(f"Skipped {file} (empty PDF)")
                        
                    doc.close()
                except Exception as e:
                    print(f"Error processing {file}: {e}")

if __name__ == "__main__":
    public_projects_dir = r"d:\PORTOFOLIO_DHIA\public\projects"
    pdf_to_image(public_projects_dir)
