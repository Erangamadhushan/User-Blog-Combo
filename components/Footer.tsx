export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Blogify. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
          <a href="#" className="hover:text-black">Support</a>
        </div>

      </div>
    </footer>
  );
}
