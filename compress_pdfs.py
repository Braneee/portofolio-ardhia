import os
import fitz  # PyMuPDF

def compress_pdfs(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.pdf'):
                pdf_path = os.path.join(root, file)
                
                # Check file size (only compress if > 10MB)
                file_size_mb = os.path.getsize(pdf_path) / (1024 * 1024)
                if file_size_mb > 10:
                    print(f"Compressing {file} ({file_size_mb:.2f} MB)...")
                    
                    try:
                        doc = fitz.open(pdf_path)
                        
                        # Save it to a temporary file with garbage collection and deflate
                        temp_path = pdf_path + ".tmp"
                        doc.save(temp_path, garbage=4, deflate=True)
                        doc.close()
                        
                        # Replace original
                        os.replace(temp_path, pdf_path)
                        
                        new_size = os.path.getsize(pdf_path) / (1024 * 1024)
                        print(f"  -> Compressed to {new_size:.2f} MB")
                    except Exception as e:
                        print(f"  -> Failed to compress {file}: {e}")

if __name__ == "__main__":
    compress_pdfs(r"d:\PORTOFOLIO_DHIA\public\projects")
