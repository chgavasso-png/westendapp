import sys
import pypdf

def read_pdf(file_path):
    try:
        reader = pypdf.PdfReader(file_path)
        for i, page in enumerate(reader.pages):
            print(f"--- Page {i+1} ---")
            print(page.extract_text())
    except Exception as e:
        print(f"Error reading PDF: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        read_pdf(sys.argv[1])
    else:
        print("Provide a pdf path")